
// Load data, prepare data and draw it
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------



// ---------------------- init scroll bar by mCustomScrollbar
// ------------------------------------------------------------------------------
$(window).load(function(){
  $("#allTAs").mCustomScrollbar({
      theme:"dark-3",
      autoHideScrollbar: true
  });
  $("#currentTAs").mCustomScrollbar({
      theme:"dark-3",
      autoHideScrollbar: true
  });
});


  // ---------------------- init fastclick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// ---------------------- init loading circle
// ------------------------------------------------------------------------------
var meter_width = 180,
    meter_height = 180,
    twoPi = 2 * Math.PI,
    progress = 0,
    total = 1308573, // must be hard-coded if server doesn't report Content-Length
    formatPercent = d3.format(".0%");

var meter_arc = d3.svg.arc()
    .startAngle(0)
    .innerRadius(69)
    .outerRadius(70);

var meter_svg = d3.select("#loading div").append("svg")
    .attr("width", meter_width)
    .attr("height", meter_height)
  .append("g")
    .attr("transform", "translate(" + meter_width / 2 + "," + meter_height / 2 + ")");

var meter = meter_svg.append("g")
    .attr("class", "progress-meter");

meter.append("path")
    .attr("class", "background")
    .attr("d", meter_arc.endAngle(twoPi));

var foreground = meter.append("path")
    .attr("class", "foreground");

var meter_text = meter.append("text")
    .attr("text-anchor", "middle")
    .attr("dy", ".40em");


// ---------------------- queue all data first and then init vis
// ------------------------------------------------------------------------------
// #example from https://gist.github.com/mbostock/3750941
if(width_mobile>600) { // don't load interactive vis on smartphones
  queue()
    .defer(function(file1) {
      d3.json("data/data_.json")
      .on("progress", function() {
         $('#loading span').html('Loading Data (2MB)');
         var i = d3.interpolate(progress, d3.event.loaded / d3.event.total);
         d3.transition().tween("progress", function() {
           return function(t) {
             progress = i(t);
             foreground.attr("d", meter_arc.endAngle(twoPi * progress));
             meter_text.text(formatPercent(progress));
           };
       });
    })
    .get(function(error, d) {
      file1(error, d);
    })
  })
  .defer(function(file2) {
    d3.json("data/data_tas_.json")
    .get(function(error, d) {
      file2(error, d);
    })
  })
  .defer(function(file3) {
    d3.json("data/data_worldwide_.json")
    .get(function(error, d) {
      file3(error, d);
    })
  })
  .await(function(error, file1, file2, file3) {
    data = file1;
    data_tas = file2;
    data_worldwide = file3;
    init();
  });
}




// ---------------------- prepare data and draw it
// ------------------------------------------------------------------------------
function init() {

  $('#loading').css({ opacity: 0,'margin-top': '20px'}).delay(800).hide(0);
  if(width_mobile<1025) $('#container .legend').css({ opacity: 1, 'margin-left': '13px'});
  else $('#container .legend').css({ opacity: 1, 'margin-left': '18px'});
  if(width_mobile<1025) $('#container .author').css({ opacity: 1});
  else $('#container .author').css({ opacity: 1});
  $('#container #circle').css({ opacity: 1, 'margin-top': '0px'});
  $('#container #nodes').css({ opacity: 1, 'margin-top': '0px'});
  $('#container #lines_current').css({ opacity: 1, 'margin-top': '0px'});
  $('#container #lines_current_selected').css({ opacity: 1, 'margin-top': '0px'});
  $('#container #lines_history').css({ opacity: 1, 'margin-top': '0px'});
  $('#container #sidebar').css({ opacity: 1, 'top': '25px'}).delay(6000).queue(function(){ $(this).addClass("nodelay"); });

  $('.head h1').removeClass("loadType");
  $('.head h2').removeClass("loadType");
  $('.head h2 .more').removeClass("loadType");


  // get all years
  data.forEach(function(e, f) {
    years.push({pos: f, val: e.year});
    c = e.year;
    data_prepared.push(prepare_data(data[f].data));
  });

  //get current hash on load, if specified, select year
  var hash = location.hash.replace('#', '');
  var hash_ = hash.split("_");
  // check first for year
  if(hash_[0].length==4 && !isNaN(hash_[0])) {
    $.each(years, function(a,b) {
      if(b.val == hash_[0]) current  = years[b.pos];
    })
  }
  else current = years[years.length-1];

  // take chosen data set
  nodes = data_prepared[current.pos][0];
  links = data_prepared[current.pos][1];
  //create select box
  createSelectBox(nodes_.children);

  // draw visualisation
  draw();

  //select max of years depending on last data entry
  // Fake a change to position bubble at page load
  $("#slider").attr("max", years.length-1).val(current.pos);

  //after all init stuff, reset interaction val for new users
  user_interaction_init = false;

  // check second time hash for country if everything is loaded
  if(typeof hash_[1] !== 'undefined') {
    var s = getArrayPos(hash_[1], select_list_arr);
    if(!isNaN(s)) {
      $('#e1').select2("val", s, true);
      //bug, so change hash again manually
      location.hash = current.val + "_" + hash_[1];
    }
  }


  //get user interaction time, only if not hast set or user interacted
  user_interaction_init_time = (new Date()).getTime();
  if(user_interaction_init == false) initAnime();

  //track user interaction with google events
  ga('send', 'event', 'page_load', 'page_load');

}




