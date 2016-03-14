
// Meta Chart on right sidebar fct
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------



// ------ Init Vars for Meta Charts
// ----------------------------------------------
var chart_ta_worldwide=[];

var meta_margin = {top: 35, right: 0, bottom: 20, left: 0},
    meta_width = 260 - meta_margin.left - meta_margin.right,
    meta_height = 150 - meta_margin.top - meta_margin.bottom;

var formatDate = d3.time.format("%Y");
var bisectDate = d3.bisector(function(d) { return d.year; }).left; // for mouse over

var x = d3.scale.ordinal()
  .rangeRoundBands([0, meta_width], 0.15);

var y = d3.scale.linear()
    .rangeRound([meta_height, 0]);


var svg_taVis = d3.select('#taVis').append("svg")
    .attr("width", meta_width + meta_margin.left + meta_margin.right)
    .attr("height", meta_height + meta_margin.top + meta_margin.bottom)
  .append("g")
    .attr("transform", "translate(" + meta_margin.left + "," + meta_margin.top + ")");

var graph_taVis = svg_taVis.append("g");
var focus_taVis = svg_taVis.append("g");


var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickSize(2, 0)
    .tickFormat(formatDate);

// Horizontal grid
graph_taVis.append("g")
  .attr("class", "grid horizontal")



var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right")
    .ticks(3)
    .tickFormat(function(d) { return "+" + d; });

graph_taVis.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(-8," + 0 + ")");


var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "";
  });
svg_taVis.call(tip);

// ------ Create Selection
// ----------------------------------------------
function metaChart(selectCountry) {

    var chart_ta=[];

    if(selectCountry != "Worldwide") {
      data.forEach(function(d) {
        var found = -1;
        d.data.forEach(function(e,i) { if(e.name == selectCountry) found = i; });
        if(found != -1) {
          var data_ = [];
          d.data[found].imports.forEach(function(d) { data_.push({id:d.id,depth:d.depth}); })
          data_.sort(function(a, b) { return a.depth - b.depth; });
          chart_ta.push({year:new Date(d.year, 0),data:data_});
        }
      });
    }
    else chart_ta    = chart_ta_worldwide;    // data for total line chart

    drawMetaChart('#taVis',chart_ta);
}


function drawMetaChart(id,chart) {

  chart.forEach(function(d) {
    var y0 = 0;
    if(d.data.length > 0) {
      d.data_ = d.data.map(function(obj) {
        var d, i;
        if(currentCountry == "Worldwide") { d = --obj; i = -1; }
        else { d = obj.depth; i = obj.id; }
        return {depth: d, id: i, y0: y0, y1: ++y0};
      });
      d.total = d.data_[d.data_.length - 1].y1;
    }
    else { d.data_ = []; d.total = 0;}
  });

// create vars out of id so it can be used for many same charts
  var svg   = svg_taVis;
  var graph = graph_taVis;
  var focus = focus_taVis;



// ------ Draw Line Chart
// ----------------------------------------------
  x.domain(chart.map(function(d) { return d.year; }));
  y.domain([0, d3.max(chart, function(d) { var t = (d.total < 10) ? 10 : d.total;  return t; })]);

  // update axis
  graph.select(".grid").call(d3.svg.axis().scale(y)
      .orient("left")
      .tickSize(-(meta_width), 0, 0)
      .tickFormat("")
  );
  graph.select(".y.axis").call(yAxis);

  // select all bars and append an item per date
  var bars = graph.selectAll(".bar")
    .data(chart);




  // initial enter bar
  bars.enter().append("g")
      .attr("class", "bar")
      .attr("transform", function(d) { return "translate(" + x(d.year) + ",0)"; })
      .on('mouseover', function(d,i) {
        // show value on tooltip
        var html1 = "<span class='value'>+" + d.total + "</span><span class='name'>"+formatDate(d.year)+"</span>";
        var html2 = "<span class='value shadow_back'>+" + d.total + "</span><span class='name shadow_back'>"+formatDate(d.year)+"</span>";
        // tip.html("<span class='value'>+" + d.total + "</span><span class='name'>"+formatDate(d.year)+"</span>");
        tip.html(html1 + html2);
        tip.show()
      })
      .on("mousemove", function (d) {
        return tip
          .style("top", (d3.event.pageY - 2) + "px")
          .style("left", (d3.event.pageX + 0) + "px");
      })
      .on('mouseout', function (d) {
        return tip.hide();
      })
      .on('click', function (d,i) {
        // select year which where mouse is over and go there
        $.each(years, function(a,b) { if(b.val == formatDate(d.year)) current  = years[b.pos];})
        $("#slider").val(current.pos);
        return true;
      });

  // update
  bars.transition().duration(100)
    .attr("opacity", function(d) { res = (d.year.getFullYear() <= current.val) ? "1" : ".25"; return res; });



  // select every single small bar of stacked bar chart
  var bar = bars.selectAll("rect").data(function(d) { return d.data_; });

  // enter if new
  bar.enter().append("rect")
      .attr("width", x.rangeBand())
      .attr("y", function(d) {  return y(d.y1); })
      .attr("height", function(d) { return y(d.y0) - y(d.y1); })
      .style("fill", function(d) {
        if(d.depth !== -1) var c = colorsDepth_Line(d.depth);
        else var c = color_noDepth;
        return c; //
      })
       .style("opacity", 0)
       .transition().duration(100)
        .style("opacity", 1);

  // update
  bar.transition().duration(700)
      .attr("y", function(d) { return y(d.y1); })
       .attr("height", function(d) { return y(d.y0) - y(d.y1); })
      .style("fill", function(d) {
        if(d.depth !== -1) var c = colorsDepth_Line(d.depth);
        else var c = color_noDepth;
        return c; //
      }).style("opacity", 1);

  // remove
  bar.exit().transition().duration(100).style("opacity", 0).remove();


  var found = -1;
  var text = "";
  chart.forEach(function(e,i) { if(e.year.getFullYear() == current.val) found = i; });
  if(found != -1) { text = chart[found].total; }


}


