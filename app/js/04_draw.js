
// Draw vis, executed by init.js
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


// fct which only have to be started once
function draw() {

// ---------------------- Draw bachground circle
// ------------------------------------------------------------------------------
  svg_circle.append("circle")
    .classed('circleBG',true)
    .attr("r", radius - radius/26);


// ---------------------- Draw Nodes
// ------------------------------------------------------------------------------

  node = svg.append('g').classed('nodes',true).selectAll(".node")
    .data(nodes.filter(function(n) { return (!n.children); }))

  var node_enter = node.enter()
    .append("g")
    .attr("class", function(d) { return "node "+formatBlank(d.name); })
    .each(function(d) {
      var found = -1;
      countries.forEach(function(e,i) { if(e.name == d.key) found = i; });
      if(found != -1) {
        countries[found].ftas = d.ta_total;
      }
      else countries.push({name: d.key, ftas: d.ta_total});

    })
    .attr("transform", function(d){  return "rotate(" + (d.x - 90) + ") translate(" + (d.y + 8) + ",0)"; })
    .on("mouseover",   function(d) {
      // optimization if only hovering over nodes with other tas
      nodeHover=true;
      if(selectItem == false) {
        if($(this).attr('class').indexOf("show") < 0) resetSelection();
        mouseoveredNode(d, 'hover');
      }
    })
    .on("mouseout",    function(d) {
      nodeHover = false;
      // only timer if prev and next node have tas
      setTimeout(function() {
        if(selectItem == false && nodeHover == false) resetSelection();
      }, 25);
    })
    .on("click",       function(d) { mouseClickNode(d); });

  node_enter.append("circle")
    .classed('circleCountry',true)
    .attr("fill", '#fff')
    .attr("r", 0)
    .attr("cx", "-.70em");

  node_enter.append("text")
    .classed('labelBg',true)
    .attr("transform", function(d) { return   (d.x < 180 ? "" : "rotate(180)"); })
    .style("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
    .attr("dy", ".31em")
    .text(function(d) { return d.key.toUpperCase(); });

  node_enter.append("text")
    .classed('label',true)
    .attr("transform", function(d) { return   (d.x < 180 ? "" : "rotate(180)"); })
    .style("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
    .attr("dy", ".31em")
    .text(function(d) {
      return d.key.toUpperCase();
    })




// ---------------------- Draw Continents
// ------------------------------------------------------------------------------

  var cont = svg.append('g').classed('continents',true);

  // for each continent
  for(var i = 0; i<continent.length-1;i++) {

    // calculate x/y center for text labels, workaround
    var center_text = '0%';
    if(continent[i].key=="AF")  center_text =  "75%";
    if(continent[i].key=="AS")  center_text =  "78%";
    if(continent[i].key=="EU")  center_text =  "28%";
    if(continent[i].key=="NA")  center_text =  "33%";
    if(continent[i].key=="SA")  center_text =  "42%";
    if(continent[i].key=="OC")  center_text =  "69%";


    var cont_ = cont.append('g')
      .classed('continent_'+continent[i].key,true)
      .on("mouseover",   function(d) { var t = $(this).attr('class'); var c = t.substring(t.length-2, t.length); if(selectItem == false) { mouseoveredContinent(c, 'hover'); } })
      .on("mouseout",    function(d) { if(selectItem == false) { resetSelection();   } })
      .on("click",       function(d) { var t = $(this).attr('class'); var c = t.substring(t.length-2, t.length); mouseClickContinent(c); });

    var path = cont_.append("path")
      .attr("id", "path"+continent[i].key)
      .attr("class", "pathContinent")
      .attr("d", eval("arc_"+continent[i].key+"()"));

    path = path.node();


    cont_.append("text")
      .attr("x",0)
      .attr("y",0)
      .attr("dy", function(d) { var re = (ms_ie) ? 10 : 3; return re; }) //10:7
      .append("textPath")
        .attr("class", "textpath")
        .attr("startOffset",  center_text)
        .style("text-anchor", function(d) {
           var p = path.getPointAtLength(0);
          return p.y > 0 ? "start" : "end";
        })
        .attr("xlink:href", "#path"+continent[i].key)
        .text("– "+continent[i].name.toUpperCase()+" –");
  }


  //draw legend
  drawLegend();

  // save metadata for worldwide
  data_worldwide.forEach(function(e,i) {
    // save data for worldwide
    var bars_d = [];
    for (var k in e){
        if (e.hasOwnProperty(k)) {
            if(k!="year") { for(i=0;i<e[k];i++) { bars_d.push( parseInt(k)); } }
        }
    }

    chart_ta_worldwide.push({year:new Date(e.year, 0),data:bars_d});
  });


};






