


// Define Variables and Basic Functions
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


// ----------------------  Define General Variables
// ------------------------------------------------------------------------------
var years = [],
    current = [],
    currentCountry = "Worldwide",
    prevHistoryDrawing = -1,
    historyDrawinglimit = 29,
    sliderValMax = 63,
    sliderVal = sliderValMax,
    data,
    data_prepared = [],
    data_tas,
    data_worldwide,
    nodes,
    links,
    c = 0,
    user_interaction_init = false,
    user_interaction_init_time = 0,
    link_data = [],
    link_data_grouped = [],
    link_data_grouped_all = [],
    nodeHover = false               // node hover status for anti-flickering
    viewStatus = "current",
    data_update = "",
    countries = [],
    ta_click = false,
    selectItem = false,             // standard: no country selected
    typeMemb = ["Bilateral", "Pluriteral", "Plurilateral & Third Country", "Region-Region", "Accession", "Accession to an Agreement", "Withdrawal"],
    reasons = ["Tariff Reduction","Intellectual Property Rights Protection","Government Purchases","Technical Barriers to Trade","Services","Investments","Competition"],
    context = [],                 // holds all 2D context of canvas
    countriesMax = 100;           // init country circle max

var ftas_new_arr = [],            // array of worldwide new ftas
    ftas_total_arr = [],          // array of worldwide total ftas
    depth_average = 0,            // amount of worldwide total depth
    depth_average_count = 0,      // amount of items of total depth to calculate average depth
    depth_average_new_count = 0,  // amount of items of new depth to calculate new average depth
    depth_new = null,             // amount of worldwide new depth
    tas_current_worldwide = "",   // html tag of all worldwide tas
    select_list_arr_cont = [];    // a list of all contintent in there order appering in the select list, needed for select entry
    select_list_arr = [];         // a list of all countries in there order appering in the select list, needed for select entry

// save some date of each contintent
var continent = [
  {key:"AF",name:"Africa",ftas:0,ftas_new:0,ftas_new_arr:[],ftas_total_arr:[]},
  {key:"AS",name:"Asia",ftas:0,ftas_new:0,ftas_new_arr:[],ftas_total_arr:[]},
  {key:"EU",name:"Europe",ftas:0,ftas_new:0,ftas_new_arr:[],ftas_total_arr:[]},
  {key:"NA",name:"North America",ftas:0,ftas_new:0,ftas_new_arr:[],ftas_total_arr:[]},
  {key:"SA",name:"South America",ftas:0,ftas_new:0,ftas_new_arr:[],ftas_total_arr:[]},
  {key:"OC",name:"Oceania",ftas:0,ftas_new:0,ftas_new_arr:[],ftas_total_arr:[]},
  {key:"AN",name:"Antarctica",ftas:0,ftas_new:0,ftas_new_arr:[],ftas_total_arr:[]}
];

var screenshot = false;

// ----------------------  Define Color Variables
// ------------------------------------------------------------------------------
// Little helper: https://vis4.net/labs/multihue/#colors=#fc3e1d,#fd7422,#fee132,#bfdc39,#1f8a70,#0a6075,#064358,#021e38,#c1c3c7|steps=9|bez=0|coL=0
var colors = ['#426174', '#547a8d', '#5894b2', '#65aed6', '#fed02f', '#fdac2a', '#fd8324', '#e16861'];
var color_noDepth = "#848a8d";

var colorsDepth_Circle = d3.scale.quantize()
    .domain([0,5.5])
    .range(colors);

var colorsDepth_Line = d3.scale.quantize()
    .domain ([0,7])
    .range(colors);

var linearScale = d3.scale.linear()
  .domain([0,countriesMax])
  .range([0.5,4]);




// ----------------------  Define Responsive Variables
// ------------------------------------------------------------------------------
// check if IE
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');
if ((old_ie > -1) || (new_ie > -1)) { var  ms_ie = true; } else var ms_ie = false;
// check if iphone or ipad or safari
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;



// ----------------------  Define Responsive Layout
// ------------------------------------------------------------------------------
var width_mobile = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height_mobile = (window.innerHeight > 0) ? window.innerHeight : screen.height;
if(height_mobile < 710) height_mobile = 710;
if(width_mobile<600) var margin = 0;
else if(width_mobile<800) var margin = 80;
else if(width_mobile<1025) var margin = 44; // make circle smaller if on small screen 50
else var margin = 20; //18



if(width_mobile<800) var d = width_mobile - 100;
else var d = width_mobile - 225 - 240;

var diameter = (width_mobile>height_mobile) ? ( (height_mobile>1000) ? 980 : height_mobile ) : d,
    width = diameter - margin*2,
    height = diameter - margin*2,
    radius = (diameter - margin*2) / 2,
    innerRadius = radius - radius*0.36; //spacing is 36% of outer circle

// adjust continents container
$("#continents").width((diameter - margin*2)).height(diameter - margin*2);
d3.select(self.frameElement).style("height", diameter + "px");




// ----------------------  Defining SVG or CANVAS Elements
// ------------------------------------------------------------------------------
// define svg container for background circle
var svg_circle = d3.select("#circle").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", "0 0 "+width+" "+height)
    .attr("preserveAspectRatio", "xMinYMid  meet")
    .append("g")
      .attr("transform", "translate(" + radius + "," + radius + ")");

// lets get the resolution of our device.
var ratio = window.devicePixelRatio || 1;
var img_blank = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

// define canvas container for drawing lines from the past with canvas
var lines_history = d3.select("#lines_history").append("canvas")
    .attr("id", "lines_history_canvas")
    .attr("width", width*ratio)
    .attr("height", height*ratio)
    .style("width", width + 'px')
    .style("height", height + 'px')
    .attr("viewBox", "0 0 "+width+" "+height)
    .attr("preserveAspectRatio", "xMinYMid  meet");
context[0] = lines_history.node().getContext("2d");
context[0].setTransform(ratio,0,0,ratio,0,0);


// define canvas container for drawing lines
var lines_current = d3.select("#lines_current").append("canvas")
    .attr("id", "lines_current_canvas")
    .attr("width", width*ratio)
    .attr("height", height*ratio)
    .style("width", width + 'px')
    .style("height", height + 'px')
    .attr("viewBox", "0 0 "+width+" "+height)
    .attr("preserveAspectRatio", "xMinYMid  meet");

context[1] = lines_current.node().getContext("2d");
context[1].setTransform(ratio,0,0,ratio,0,0);
if(isSafari == true) d3.select("#lines_current").append("img")
    .attr("id", "lines_current_img")
    .attr("class", "img_1")
    .attr("src", img_blank)
    .style("width", width + 'px')
    .style("height", height + 'px');


// define canvas container for drawing selected lines
var lines_current_selected = d3.select("#lines_current_selected").append("canvas")
    .attr("id", "lines_current_selected_canvas")
    .attr("width", width*ratio)
    .attr("height", height*ratio)
    .style("width", width + 'px')
    .style("height", height + 'px')
    .attr("viewBox", "0 0 "+width+" "+height)
    .attr("preserveAspectRatio", "xMinYMid  meet");
context[2] = lines_current_selected.node().getContext("2d");
context[2].setTransform(ratio,0,0,ratio,0,0);
if(isSafari == true) d3.select("#lines_current_selected").append("img")
    .attr("id", "lines_current_selected_img")
    .attr("class", "img_2")
    .attr("src", img_blank)
    .style("width", width + 'px')
    .style("height", height + 'px');


// define canvas container for drawing selected lines
var lines_current_selected_hover = d3.select("#lines_current_selected_hover").append("canvas")
    .attr("id", "lines_current_selected_hover_canvas")
    .attr("width", width*ratio)
    .attr("height", height*ratio)
    .style("width", width + 'px')
    .style("height", height + 'px')
    .attr("viewBox", "0 0 "+width+" "+height)
    .attr("preserveAspectRatio", "xMinYMid  meet");
context[3] = lines_current_selected_hover.node().getContext("2d");
context[3].setTransform(ratio,0,0,ratio,0,0);
if(isSafari == true) d3.select("#lines_current_selected_hover").append("img")
    .attr("id", "lines_current_selected_hover_img")
    .attr("class", "img_3")
    .attr("src", img_blank)
    .style("width", width + 'px')
    .style("height", height + 'px');



// define canvas container for drawing lines
var lines_total = d3.select("#lines_total").append("canvas")
    .attr("id", "lines_total_canvas")
    .attr("width", width*ratio)
    .attr("height", height*ratio)
    .style("width", width + 'px')
    .style("height", height + 'px')
    .attr("viewBox", "0 0 "+width+" "+height)
    .attr("preserveAspectRatio", "xMinYMid  meet");
context[4] = lines_total.node().getContext("2d");
context[4].setTransform(ratio,0,0,ratio,0,0);
if(isSafari == true) d3.select("#lines_total").append("img")
    .attr("id", "lines_total_img")
    .attr("class", "img_4")
    .attr("src", img_blank)
    .style("width", width + 'px')
    .style("height", height + 'px');


// define canvas container for drawing selected lines
var lines_total_selected = d3.select("#lines_total_selected").append("canvas")
    .attr("id", "lines_total_selected_canvas")
    .attr("width", width*ratio)
    .attr("height", height*ratio)
    .style("width", width + 'px')
    .style("height", height + 'px')
    .attr("viewBox", "0 0 "+width+" "+height)
    .attr("preserveAspectRatio", "xMinYMid  meet");
context[5] = lines_total_selected.node().getContext("2d");
context[5].setTransform(ratio,0,0,ratio,0,0);
if(isSafari == true) d3.select("#lines_total_selected").append("img")
    .attr("id", "lines_total_selected_img")
    .attr("class", "img_5")
    .attr("src", img_blank)
    .style("width", width + 'px')
    .style("height", height + 'px');

if(isSafari == true) $('canvas').hide();







// define svg container for nodes
var svg = d3.select("#nodes svg")
// .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", "0 0 "+width+" "+height)
    .attr("preserveAspectRatio", "xMinYMid  meet")
    .attr("id",'main')
    .append("g")
      .attr('class','vis')
      .attr("transform", "translate(" + radius + "," + radius + ")");

// move text for screenhot apperantly
d3.select("#nodes svg #hiddenCanvasOverlay").attr("transform", "translate(" + (radius+radius/2) + "," + (radius+radius/2) + ")");

var svg_legend_depth =  d3.select('#legend_depth').append("svg")
    .attr("width", '120px')
    .attr("height", '35px');

var svg_legend_connections =  d3.select('#legend_connections').append("svg")
    .attr("width", '120px')
    .attr("height", '35px');








// ----------------------  Define General Functions
// ------------------------------------------------------------------------------
function randomIntFromInterval(min,max) { return Math.floor(Math.random()*(max-min+1)+min); }
function isInArray(value, array) { return array.indexOf(value) > -1; }
function getArrayPos(value, array) { return array.indexOf(value); }
function numberWithCommas(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
function formatBlank(a) { return a.replace(/[^\w ]+/g,'').replace(/ +/g,'-'); }


// ----------------------  Define Functions for Vis
// ------------------------------------------------------------------------------
var bundle = d3.layout.bundle();

var cluster = d3.layout.cluster()
    .size([360, innerRadius])
    // .sort(function(a, b) { return d3.ascending(a.parent.key, b.parent.key); }) //sorting methods
    // .sort(function(a, b) { return d3.ascending(a.name, b.name);                //sorting methods
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 4) / a.depth; })
    .value(function(d) { return d.size; });

// fct for intracontinental lines
var line_intern = d3.svg.line.radial()
    .interpolate("bundle")
    .tension(0.60) //.49
    .radius(function(d) { var val = d._y ? d._y : d.y; return val;  })
    .angle(function(d,i){ var val = d._x ? d._x : d.x; return val / 180 * Math.PI; });


// fct for lines between continents
var line_extern = d3.svg.line.radial()
    .interpolate("bundle")
    .tension(0.40) //.89 66
    .radius(function(d) {  return d.y ; })
    .angle(function(d,i) { return d.x / 180 * Math.PI; });




// ----------------------  Define Arcs Functions for Radial Continents Texts
// ------------------------------------------------------------------------------
var bgPath =  0.12;
var r = innerRadius*1.44;
var arc_EU = d3.svg.arc()
    .innerRadius(r)
    .outerRadius(r)
    .startAngle(0.08)
    .endAngle(1.33);

var arc_AS = d3.svg.arc()
    .innerRadius(r)
    .outerRadius(r)
    .startAngle(1.46)
    .endAngle(2.83);

var arc_OC = d3.svg.arc()
    .innerRadius(r)
    .outerRadius(r)
    .startAngle(2.94)
    .endAngle(3.37);

var arc_AF = d3.svg.arc()
    .innerRadius(r)
    .outerRadius(r)
    .startAngle(3.46)
    .endAngle(4.96);

var arc_SA = d3.svg.arc()
    .innerRadius(r)
    .outerRadius(r)
    .startAngle(5.02)
    .endAngle(5.43);

var arc_NA = d3.svg.arc()
    .innerRadius(r)
    .outerRadius(r)
    .startAngle(5.54)
    .endAngle(6.18);








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
    if(hash_[1].length == 2) var s = 500 + getArrayPos(hash_[1], select_list_arr_cont);
    else var s = getArrayPos(hash_[1], select_list_arr);

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






// Prepare Data, executed by init.js
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


// ---------------------- prepare data for nodes and links of dendrogram
// ------------------------------------------------------------------------------
function prepare_data(classes, init) {

  nodes_ = packageHierarchy(classes);
  nodes_sorted = [];

  // sort every entry, cluster alpabeticaly and reorder parent
  nodes_.children.forEach(function(e,i) {
    e.children.sort(function(a, b) {return d3.ascending(a.name, b.name); });
    if(e.name=="EU")      nodes_sorted[0] = e;
    else if(e.name=="AS") nodes_sorted[1] = e;
    else if(e.name=="OC") nodes_sorted[2] = e;
    else if(e.name=="AF") nodes_sorted[3] = e;
    else if(e.name=="SA") nodes_sorted[4] = e;
    else if(e.name=="NA") nodes_sorted[5] = e;
  });

  nodes_.children = nodes_sorted;
  nodes__ = cluster.nodes(nodes_);
  links__ = packageImports(nodes__);

  return [nodes__, links__];

}





// ---------------------- create hierarchy, credits to http://bl.ocks.org/mbostock/7607999
// ------------------------------------------------------------------------------
// Lazily construct the package hierarchy from class names.
function packageHierarchy(classes) {
  var map = {};

  function find(name, data) {
    var node = map[name], i;

    if (!node) {
      node = map[name] = data || {name: name, children: []};
      if (name.length) { //name.length
        node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
        node.parent.children.push(node);
        node.key = name.substring(i + 1);
      }
    }
    return node;
  }

  classes.forEach(function(d,i) {
    find(d.name, d);
  });
  return map[""];
}

// Return a list of imports for the given array of nodes.
function packageImports(nodes) {
  var map = {},
      imports = [];

  // Compute a map from name to node.
  nodes.forEach(function(d) {
    map[d.name] = d;
  });

  // For each import, construct a link from the source to target node.
  nodes.forEach(function(d) {
    if (d.imports) d.imports.forEach(function(b,a) {
      if (b.imports) b.imports.forEach(function(i, m) {
        var t = jQuery.extend({}, map[i]); // Shallow copy object to not modify original object
        t.id = b.id;
        t.depth_ = b.depth;
        imports.push({source: map[d.name], target: t});
      });

      // add fta ids to node for better selection
      var t = map[d.name];
      if(t.id) {
        // only add if not already exist
        var found = -1;
        t.id.forEach(function(e,i) { if(e == b.id) found = i; });
        if(found == -1) t.id.push(b.id);
      }
      else t.id = [b.id];
    });
  });
  return imports;
}






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
      .attr('class', 'continent_'+continent[i].key+" continent" )
      .on("mouseover",   function(d) {
        nodeHover=true;
        var t = $(this).attr('class');
        t = t.split(/[ ]+/);
        var c = t[0].substring(t[0].length-2, t[0].length);
        if(selectItem == false) {
          if($(this).attr('class').indexOf("node--active") < 0) resetSelection();
          mouseoveredContinent(c, 'hover');
        }
      })
      .on("mouseout",    function(d) {
        nodeHover=false;
        setTimeout(function() {
          if(selectItem == false && nodeHover == false) resetSelection();
        }, 25);
      })
      .on("click",  function(d) {
        var t = $(this).attr('class'); t = t.split(/[ ]+/);
        var c = t[0].substring(t[0].length-2, t[0].length);
        mouseClickContinent(c);
      });



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








// Update Vis
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

function update() {

// ---------------------- Get and Save new Data for Nodes
// ------------------------------------------------------------------------------
  var data_update = nodes.filter(function(n) {
    // select only countries of continents
    if(n.depth==2) {
      // update countries data
      var found = -1;
      countries.forEach(function(e,i) { if(e.name == n.key) found = i; });
      if(found != -1) {
          countries[found].ftas = n.ta_total_arr.length;
      }
      else countries.push({name: n.key, ftas: n.ta_total_arr.length});
    }
    return !n.children;
  });

// ---------------------- Calculate Data
// ------------------------------------------------------------------------------
  // reset all variables
  ftas_new_arr  = [];
  ftas_total_arr  = [];
  tas_current_worldwide = "";

  // calculate continent date for current year selection
  nodes.forEach(function(e) {

    // select only continents
    if(e.depth==1) {

      // check all children after fta ids and add it to array
      var continent_ftas_new   = [];
      var continent_ftas_total   = [];

      // for each ta of this contintent
      e.children.forEach(function(m) {

        m.ta_total_arr.forEach(function(n) {
          if(n!=0 && !isInArray(n,ftas_total_arr)) ftas_total_arr.push(n);
          if(n!=0 && !isInArray(n,continent_ftas_total)) continent_ftas_total.push(n);

        });

        m.imports.forEach(function(n) {
          if(n.id!=0 && !isInArray(n.id,ftas_new_arr))       {
            ftas_new_arr.push(n.id);
          }
          if(n.id!=0 && !isInArray(n.id,continent_ftas_new)) continent_ftas_new.push(n.id);
        });

      });

      // get continent value in array and save fta number
      var found = -1;
      continent.forEach(function(k,i) { if(k.key == e.name) found = i; });
      if(found != -1) {
        continent[found].ftas_new_arr = continent_ftas_new;
        continent[found].ftas_total_arr = continent_ftas_total;
      }
    }
  });





// ---------------------- Draw Links
// ------------------------------------------------------------------------------
  // draw current lins
  drawLinks(links,'current');

  // draw historical data, hide if on mobile touch devices for better performance
  if(isSafari == false) {
    // draw only not drawn already OR if selected year is under limit and before has been limit drawn
    if( (prevHistoryDrawing == -1) || prevHistoryDrawing < historyDrawinglimit || ( prevHistoryDrawing == historyDrawinglimit && current.pos-1 < historyDrawinglimit)) {
      prevHistoryDrawing = (current.pos-1 < historyDrawinglimit) ? current.pos-1 : historyDrawinglimit;
        // draw all lines till selected time point
        var _links = [];
        for(var i = 0; i<=prevHistoryDrawing;i++) { var temp = _links.concat(data_prepared[i][1]); _links = temp; }
        drawLinks(_links ,'history');
    }
  }


// ---------------------- Update Nodes (Country Label)
// ------------------------------------------------------------------------------
  svg.selectAll(".node")
    .data(data_update)
    .attr("class",function(d,i) {
      var ids = "node "+formatBlank(d.name);
      if(d.id) {
        ids += " show ";
        d.id.forEach(function(e) { ids += "ftaID_" + e.toString() + ' '; });
      }
      return ids;
    })

// ---------------------- Update Country Circle
// ------------------------------------------------------------------------------
  svg.selectAll(".circleCountry")
    .data(data_update)
    .transition()
    .duration(600)
      .attr("r", function(d){
        var ftas_count = 0;
        countries.forEach(function(e,i) { if(e.name == d.key)  { ftas_count = e.ftas; } });
        return linearScale(ftas_count);
      })

// ---------------------- Display new Data in Sidebar
// ------------------------------------------------------------------------------
  $('#showTotal .num').text(ftas_total_arr.length);
  $('#showCurrent .num').text('+' + ftas_new_arr.length);

// ---------------------- Display new Data in List of All TAs
// ------------------------------------------------------------------------------

 displayTADetails(ftas_new_arr, 'worldwide', 'currentTAs');

// ---------------------- update meta charts
// ------------------------------------------------------------------------------
  metaChart(currentCountry);

// ---------------------- Uddate legend
// ------------------------------------------------------------------------------
  // updateLegend();
  drawLegend();

}


// function draws links
function drawLinks(links,canvas,status) {
  //define vars and reset
  link_data = [];

  bundle(links).map(function(d) {
    // go though all active links and get data
    //create link depending if between contintinents or in continent
    d.source = d[0],
    d.target = d[d.length - 1];

    var json = {};
    json.taID = d.target.id;
    json.depth = d.target.depth_;

    // check if link is intracontinental
    if(d.source.parent.key == d.target.parent.key) {
      // select continent node
      e = d[1];

      var x_source = d.source.x;
      var x_target = d.target.x;
      var x_diff = (x_source>x_target) ? x_source - x_target : x_target - x_source;
      var x_diff_ = (x_source<x_target) ? x_source + x_diff/2 : x_target + x_diff/2;
      var distance_x = (x_diff_>e.x) ? x_diff_ - e.x : null;

      var y_source = d.source.y;
      var y_target = d.target.y;
      var y_diff = (y_source>y_target) ? y_source - y_target : y_target - y_source;
      var y_diff_ = (y_source<y_target) ? y_source + y_diff/2 : y_target + y_diff/2;
      var distance_y = (y_diff_>e.y) ? y_diff_ - e.y : null;

      var dir_y = (e.y>innerRadius) ? -1 : 1;
      e._x = e.x + distance_x;
      e._y = e.y + distance_y * dir_y * 2.5;

      json.data = line_intern(d);
    }
    else json.data = line_extern(d); // link is between two continents

    // push line to array
    link_data.push(json);

  });



  // group the paths of same agreement for better performance
  // if current lines just group by ftas
  if(canvas == 'current') {
    // group same ta ids in group
    link_data_grouped = [];

    link_data.forEach(function(f) {
      var found = -1;
      link_data_grouped.forEach(function(e,i) { if(e.id == f.taID) found = i; });
      if(found != -1) {
        link_data_grouped[found].path += (" " + f.data);
        ++link_data_grouped[found].members;
      }
      else {
        // get color of whole ta
        if(f.depth !== null || f.depth == 0) var c = colorsDepth_Line(f.depth);
        else var c = color_noDepth;
        link_data_grouped.push({id:f.taID,color:c,path:f.data,members:1}); //depth:f.depth,
      }
    });

    // sort after amaount of paths, so big tas in the back
    link_data_grouped.sort(function(a, b) {
      return d3.descending(a.path.length, b.path.length);
    });

    // clear selected lines canvas if not already done
    if(screenshot == false) clearScreen(1);

    link_data_grouped.forEach(function(f) {
      canvas_draw_lines(f.path,1,f.color,f.members);
    });
    // on safari draw lines as png so its sharper on retina
    if(isSafari == true) {
        var ca = document.getElementById('lines_current_canvas');
        var ur = ca.toDataURL();
        var result = document.getElementById('lines_current_img');
        result.src=ur;
        result.style.width = ca.style.width;
        result.style.height = ca.style.height;
    }

  }
  else if(canvas == 'total') {

    // group same ta ids in group
    link_data_grouped_all = [];

    link_data.forEach(function(f) {
      var found = -1;
      link_data_grouped_all.forEach(function(e,i) { if(e.id == f.taID) found = i; });
      if(found != -1) link_data_grouped_all[found].path += (" " + f.data);
      else {
        // get color of whole ta
        if(f.depth !== null || f.depth == 0) var c = colorsDepth_Line(f.depth);
        else var c = color_noDepth;
        link_data_grouped_all.push({id:f.taID,color:c,path:f.data}); //depth:f.depth,
      }
    });

    // draw all lines by fta seperately
    if(status == 'hover') {
      link_data_grouped_all.forEach(function(f) { canvas_draw_lines(f.path,5,f.color,4); });
      // on safari draw lines as png so its sharper on retina
      if(isSafari == true) {
          var ca = document.getElementById('lines_total_selected_canvas');
          var ur = ca.toDataURL();
          var result = document.getElementById('lines_total_selected_img');
          result.src=ur;
          result.style.width = ca.style.width;
          result.style.height = ca.style.height;
      }
    }
    else {
      // sort after amaount of paths, so big tas in the back
      link_data_grouped_all.sort(function(a, b) {
        return d3.descending(a.path.length, b.path.length);
      });
      link_data_grouped_all.forEach(function(f) { canvas_draw_lines(f.path,4,f.color,link_data.length); });
      // on safari draw lines as png so its sharper on retina
      if(isSafari == true) {
          var ca = document.getElementById('lines_total_canvas');
          var ur = ca.toDataURL();
          var result = document.getElementById('lines_total_img');
          result.src=ur;
          result.style.width = ca.style.width;
          result.style.height = ca.style.height;
      }
    }

  }
  else if(isSafari == false) {
    // if history group all
    var path = "";
    // merge ta for highlighting feature
    // summ all paths up
    link_data.forEach(function(f) { path += (" " + f.data);});
    canvas_draw_lines(path,0,'rgba(226,234,238,1)',link_data.length);
  }





}


// clear screen
function clearScreen(id) {
    if(id) {
      context[id].save();
        context[id].setTransform(1, 0, 0, 1, 0, 0);
        context[id].clearRect(0, 0, width*2, height*2);
      context[id].restore();
    }
    else {
      for(i=0;i<6;i++) { //3
        // don't reset history canvas if last drawing was over limit and current selection is again over limit
        if(i==0 && (prevHistoryDrawing >= historyDrawinglimit && current.pos-1 >= historyDrawinglimit)) { }
        else {
          context[i].save();
            context[i].setTransform(1, 0, 0, 1, 0, 0);
            context[i].clearRect(0, 0, width*2, height*2);
          context[i].restore();
        }
      }
    }
    if(isSafari == true) {
      d3.select("#lines_current_selected_img").attr("src", img_blank);
      d3.select("#lines_current_selected_hover_img").attr("src", img_blank);
    }
}


function canvas_draw_lines(data, id, color, members) {

  var alpha = 0.7;
  if(color == '#fed02f') alpha = 0.9;

  var radius_x = radius;
  var radius_y = radius;

  var lineWidth = .2;
  if(id!=0 || screenshot == true) {
    if(members == 1)      { lineWidth = .5; alpha = 1;   }
    else if(members < 5)  { lineWidth = .4; alpha = 0.9; }
    else if(members < 30) { lineWidth = .3; alpha = 0.8; }
    else if(members < 70) { lineWidth = .3; alpha = 0.8; }
    else if(members > 1000) { lineWidth = .3;alpha = 0.4}
    else if(members > 2500) { lineWidth = .1;alpha = 0.2}
    else if(members > 500) lineWidth = .1;
  }

  if(screenshot == true) {
    // if style is fadeout due to selection, fade out in screenshots
    if(color == '#fed02f') alpha = 0.8;
    if (members > 1500) {  alpha = 0.2; }
    if(isSafari == true) {
      if($(".img_"+id).hasClass('fadeOut') && members > 1500) alpha = 0.02;
      else if($(".img_"+id).hasClass('fadeOut')) alpha = 0.05;
    } else {
      if($(context[id].canvas).hasClass('fadeOut') && members > 1500) alpha = 0.02;
      else if($(context[id].canvas).hasClass('fadeOut')) alpha = 0.05;
    }
    // draw everythin at one new canvas
    id = 10;
    radius_x = radius - radius/50 ; //- d/55
    radius_y = radius + 10;
  };
  //pathspec strings can be taken from the 'd' attribute of an svg path
  var path = new CanvablePath(data);

  context[id].strokeStyle = color;
  context[id].lineJoin = context.lineCap = 'round';
  context[id].lineWidth = lineWidth;
  context[id].save();
    context[id].globalAlpha = alpha;
    context[id].translate(radius_x,radius_y);
    path.draw(context[id]);
    context[id].stroke();
  context[id].restore();


}




// All interactions: Mouseover, Click, etc.
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


var current_ta_total_arr = [];


// ---------------------- Mouse over Node
// ------------------------------------------------------------------------------
function mouseoveredNode(d, status, extern) {
  // if over country reset ta click variable
  ta_click = false;
  if(!$('#showCurrent').hasClass('active')) $('#showCurrent').click(); //if(extern === undefined || extern === null) {
  //save current selected item for change of time slider
  currentCountry = d.name;
  // ---------------------- Update Vis
    // Hide all Nodes and Linkes
    if(viewStatus == 'current') {
      hideAllNodesLinksCurrent();
      showAllContinents();
      if(currentCountry == 'Worldwide') {
        if(isSafari) d3.select("#lines_current_selected_img").classed("fadeOut",true);
        else d3.select("#lines_current_selected_canvas").classed("fadeOut",true);
      }
      else {
        if(isSafari) d3.select("#lines_current_selected_img").classed("fadeOut",false);
        else d3.select("#lines_current_selected_canvas").classed("fadeOut",false);
      }
    }


    if(screenshot == false) { clearScreen(2); clearScreen(3); }
    if(status == 'click') showTa(d.id);
    else showTa(d.id, null, 'hover');


  // ---------------------- Update Sidebar
    //update name of selection box if not already done
    $('#e1').select2("data", {id: 1, text: d.key});
    // set ta total and current number
    $('#showTotal .num').text(d.ta_total_arr.length);
    $('#showCurrent .num').text('+' + d.imports.length);

  	// ------ Update Sidebar Bottom Content: List of new TAs
  	// ------------------------------------------------------
    var ta_new_arr = [];
    d.imports.forEach(function(k,i) { ta_new_arr.push(k.id); });
    displayTADetails(ta_new_arr, status, 'currentTAs');
    current_ta_total_arr = d.ta_total_arr;
    // displayTADetails(d.ta_total_arr, status, 'allTAs');

    // update meta charts
    metaChart(currentCountry, "update");
}

function mouseClickNode(d, extern) {
  // set data as hovering over
  mouseoveredNode(d, 'click', extern);
  // active item is this
  selectItem = this;
  //update hash
  if(currentCountry != "Worldwide") { var c = currentCountry.split("."); c = c[1];}
  else var c = "Worldwide";
  location.hash = current.val + "_" + formatBlank(c);
}




// ---------------------- Mouse over Continent
// -----------------------------------------------------------------------
function mouseoveredContinent(name, status) {

  currentCountry = name;

  // Hide all Nodes and Linkes
  if(viewStatus == 'current') {
    hideAllNodesLinksCurrent();
    hideAllContinents()
    if(currentCountry == 'Worldwide') {
      if(isSafari) d3.select("#lines_current_selected_img").classed("fadeOut",true);
      else d3.select("#lines_current_selected_canvas").classed("fadeOut",true);
    }
    else {
      if(isSafari) d3.select("#lines_current_selected_img").classed("fadeOut",false);
      else d3.select("#lines_current_selected_canvas").classed("fadeOut",false);
    }
  }



  var found = -1;
  // get continent value in array and save fta number
  continent.forEach(function(k,i) { if(k.key == name) found = i; });
  var con_ta_new_arr = continent[found].ftas_new_arr;
  var con_ta_total_arr = continent[found].ftas_total_arr;

  // ---------------------- Update Sidebar
  //update name of selection box if not already done
  var n = name=="EU" ? "Europe" : name=="AS" ? "Asia" : name=="AF" ? "Africa" : name=="SA" ? "South America" : name=="OC" ? "Oceania" : name=="NA" ? "North America" : '';
  $('#e1').select2("data", {id: 1, text: n});
    // set ta total and current number
    //ta_total_arr
  $('#showTotal .num').text(con_ta_total_arr.length);
  $('#showCurrent .num').text('+' + con_ta_new_arr.length);

  if(screenshot == false) { clearScreen(2); clearScreen(3); }
  if(status == 'click') showTa(con_ta_new_arr);
  else showTa(con_ta_new_arr, null, 'hover');

  // display detail informations about TAs
  displayTADetails(con_ta_new_arr,status, 'currentTAs');
  current_ta_total_arr = con_ta_total_arr;

  // update meta charts
  metaChart(currentCountry, "update");
}

function mouseClickContinent(d) {
  // set data as hovering over
  mouseoveredContinent(d, 'click');
  // active item is this
  selectItem = this;



  //update hash
  if(currentCountry != "Worldwide") { var c = d;}
  else var c = "Worldwide";
  location.hash = current.val + "_" + formatBlank(c);


}




// ---------------------- Mouse over Legend
// -----------------------------------------------------------------------
function mouseoveredLegendDepth(d,t) {
    // Hide all Nodes and Linkes
    hideAllNodesLinksCurrent();
    if(isSafari) d3.select("#lines_current_selected_img").classed("fadeOut",true);
    else d3.select("#lines_current_selected_canvas").classed("fadeOut",true);
    // show Nodes and Linkes of one TA with specific ID
    clearScreen(3);
    showTa(d.ids,null,'hover');
    // hide all rects of depth
    svg_legend_depth.selectAll(".legend_de").classed("fadeOut",true);
     // always show rect which is selected
    d3.select(t).classed("fadeOut",false);
}

function mouseoutedLegendDepth(d) {
    // fade in all other
    showAllNodesLinks();
    // show again all rects
    svg_legend_depth.selectAll(".legend_de").classed("fadeOut",false);
}


// ---------------------- Mouse over Legend
// -----------------------------------------------------------------------
function mouseoveredLegendAmount(d,t) {
    // Hide all Nodes and Linkes
    hideAllNodesLinksCurrent();
    if(isSafari) {
      d3.select("#lines_current_selected_img").classed("fadeOut",true);
      d3.select("#lines_current_selected_hover_img").classed("fadeOut",true);
    }
    else {
      d3.select("#lines_current_selected_canvas").classed("fadeOut",true);
      d3.select("#lines_current_selected_hover_canvas").classed("fadeOut",true);
    }

    // show all nodes with values
    d.ids.forEach(function(d) {
      svg.selectAll(".node." + formatBlank(d)).classed("fadeOut",false).classed("node--active",true);
    });
    // hide all circle of amonts
    svg_legend_connections.selectAll(".legend_co").classed("fadeOut",true);
    // always show circle which is selected
    d3.select(t).classed("fadeOut",false);
}

function mouseoutedLegendAmount(d) {
    // fade in all other
    showAllNodesLinks();
    // show again all circle
    svg_legend_connections.selectAll(".legend_co").classed("fadeOut",false);
}



// ---------------------- Reset
// -----------------------------------------------------------------------
function resetSelection() {
    selectItem = false;
    ta_click = false;

    if(!$('#showCurrent').hasClass('active')) $('#showCurrent').click();
    // if(viewStatus == "total") $('#showTotal').click();
    // else $('#showCurrent').click();
    // fade in all other
    showAllNodesLinks();
    showAllContinents()

    //reset select box
    $("#e1").select2("val", "");
    // reset fta numbers
    $('#showTotal .num').text(ftas_total_arr.length);
    $('#showCurrent .num').text('+' + ftas_new_arr.length);

    $( "#currentTAs .items" ).fadeOut( 100, function() {
      $('#currentTAs .items').html('');
      $('#currentTAs .items').append(tas_current_worldwide);
      $('#currentTAs .items li').hide();
      $('#currentTAs .items').show();
      $("#currentTAs .items li").each(function(index) {
          ++index;
          $(this).delay(10*index).fadeIn(30);
      });
      tas_hover();
    });



    // reset selected country node
    svg.selectAll(".node").classed("node--source",false);

    // reset value
    currentCountry = "Worldwide";
    // update meta charts
    metaChart(currentCountry, "update");
    //update hash
    location.hash = current.val + "_" + currentCountry;
}



// ----------------------
// ------------------------------------------------------------------------------
// display ta details
function displayTADetails(data, status, container) {

    // show all tas_worldwide details
    var tas_ = [];
    var tas_detail_arr = [];
    var json, titel;
    // var tas_selected = [];

    // get all tas - start a web worker if supported, not supoorted by ie9 and ie8
    if(window.Worker !== undefined){
      var worker = new Worker('js/worker/12_task.js');
      worker.addEventListener('message', function(e) {
        if(e.data.cmd == "taDetailsBack") {
          tas_detail_arr = e.data.tas_detail_arr;
          json = e.data.json;
          // reset again value
          showDetails();
        }
      }, false);
      worker.postMessage({'cmd': 'taDetails', 'data': data, 'data_tas':data_tas, 'status':status}); // Start the worker.
    } else {
      // fallback get all tas
      data.forEach(function(g) {
        var found = -1;
        data_tas.forEach(function(e,i) { if(e.id == g) found = i; });
        if(found != -1) {
          // tas_selected.push(e);
          if(status == 'hover') { json = {id: g, depth:data_tas[found].depth, name: data_tas[found].name }; }
          else { json = {id: g, depth:data_tas[found].depth, name: data_tas[found].name, reason: data_tas[found].reason, connections: data_tas[found].pa_count,  type: data_tas[found].type, year: data_tas[found].year }; }
          tas_detail_arr.push(json);
        } else console.log('bug');
      });
      showDetails();
    }

    function showDetails() {

      // sort first after depth then after connections
      tas_detail_arr.sort(function(a, b) { return ((a.depth > b.depth) ? -1 : (a.depth < b.depth) ? 1 : (a.connections > b.connections) ? -1 : (a.connections < b.connections) ? 1 : 0);  });

      // create detail informations
      tas_detail_arr.forEach(function(h) {
        var color = (h.depth!=null) ? colorsDepth_Line(h.depth) : color_noDepth;
        // make color a bit transparent
        function hex2rgb(hex, opacity) {
          var rgb = hex.replace('#', '').match(/(.{2})/g);
          var i = 3;
          while (i--) { rgb[i] = parseInt(rgb[i], 16); }
          if (typeof opacity == 'undefined') { return 'rgb(' + rgb.join(', ') + ')';}
          return 'rgba(' + rgb.join(', ') + ', ' + opacity + ')';
        };
        color = hex2rgb(color, .5);

        var a = "<span class='titel'>"+ h.name +"</span>";
        if(status != 'hover') {
          var b = "<li><span>" + h.connections +" Member States" + ", Signed " + h.year + "</span></li>";
          var c = "<li><span>" + typeMemb[h.type-1] +" Agreement</span></li>";
          if(h.depth) var e = "<li><span>Depth Index "+ h.depth;
          else var e = "<li><span>Depth Index not available</span></li>";
          if(typeof h.reason[0] !== 'undefined') {
            var g = " due to Statements about ";
            h.reason.forEach(function(e,i) {
              if(i == h.reason.length-1) g += ' and ';
              g += reasons[e];
              if(i != h.reason.length-1 && i != h.reason.length-2) g += ', ';
            });
          }
          else var g = "";
          g += "</span></li>";

          if(container == 'allTAs') var y = h.year;
          else var y = "";
          titel = "<li class='ftaID_"+h.id+" "+y+"' style='border-bottom: 1px solid "+color+"'>" + a + "<ul class='details'>" + b + c + e + g + "</ul></li>";
        }
        else titel = "<li class='ftaID_"+h.id+"' style='border-bottom: 1px solid "+color+"'>" + a + "</li>";
        tas_ += titel;
      });
      if((currentCountry != "Worldwide" && status != "worldwide") || (tas_current_worldwide == '' && currentCountry == "Worldwide") || viewStatus == "total") {
        $("#"+container+" .items").html('');
        var n = '';
        if(currentCountry.length == 2) n = currentCountry=="EU" ? "Europe" : currentCountry=="AS" ? "Asia" : currentCountry=="AF" ? "Africa" : currentCountry=="SA" ? "South America" : currentCountry=="OC" ? "Oceania" : currentCountry=="NA" ? "North America" : '';
        else n = currentCountry.substring(3, currentCountry.length);
        if(tas_!='') $("#"+container+" .items").append(tas_);
        else $("#"+container+" .items").append('<span style="margin:10px;display:block;">'+ n + ' has not signed<br>any trade agreement this year.</span>');
        tas_hover();
      }

      // save list items for faster presenting when reseting selection
      if(status == 'worldwide') tas_current_worldwide = tas_;

    }

}




// ----------------------
// ------------------------------------------------------------------------------
// general selections concerning the visualisation in the center
function showAllNodesLinks() {
  // fade in nodes
  svg.selectAll(".node").classed("fadeOut",false).classed("node--active",false);
  if(viewStatus == 'current') {
    // fade in lines and lines history
    if(isSafari == true) {
      d3.select("#lines_current_img").classed("fadeOut",false);
      d3.select("#lines_current_selected_hover_img").classed("fadeOut",false).classed("hide",true);
    } else {
      d3.select("#lines_history_canvas").classed("fadeOut",false);
      d3.select("#lines_current_canvas").classed("fadeOut",false);
      d3.select("#lines_current_selected_hover_canvas").classed("fadeOut",false).classed("hide",true);
    }
    // clear screen of selected lines
    clearScreen(2);
    // clear screan of hover lines
    // clearScreen(3);
  }
}


// general selections concerning the visualisation in the center
function showAllNodesLinksCurrent() {
  // fade out all nodes
  svg.selectAll(".node").classed("fadeOut",false).classed("node--active",false);

  // fade in lines and lines history
  if(isSafari == true) {
    d3.select("#lines_current_img").classed("fadeOut",false);
    d3.select("#lines_current_selected_img").classed("fadeOut",false);
  } else {
    d3.select("#lines_history_canvas").classed("fadeOut",false);
    d3.select("#lines_current_canvas").classed("fadeOut",false);
    d3.select("#lines_current_selected_canvas").classed("fadeOut",false);
  }
  // clear screen of selected lines
  clearScreen(3);
}



function hideAllNodesLinksCurrent() {

  // Hide all Nodes and Linkes
  svg.selectAll(".node").classed("fadeOut",true).classed("node--source",false);
  //.classed("node--active",false)
    //fade in active node
  if(currentCountry != "Worldwide") {
      // add class to all nodes which are in fta array
    var t = ".node." + formatBlank(currentCountry); //d.name
    // always show node which is selected
    d3.select(t).classed("node--active",true).classed("node--source",true);
    // show Nodes and Linkes of one TA with specific ID
  }

  if(isSafari == true) {
    d3.select("#lines_current_img").classed("fadeOut",true);
    d3.select("#lines_current_selected_hover_img").classed("hide",false);
  } else {
    d3.select("#lines_history_canvas").classed("fadeOut",true);
    d3.select("#lines_current_canvas").classed("fadeOut",true);
    d3.select("#lines_current_selected_hover_canvas").classed("hide",false);

  }
}

// general selections concerning the visualisation in the center
function showAllContinents() {
  // fade out all nodes
  svg.selectAll(".continent").classed("fadeOut",false).classed("node--active",false);
}

function hideAllContinents() {
  // Hide all Nodes and Linkes
  svg.selectAll(".continent").classed("fadeOut",true).classed("node--active",false);
    //fade in active node
  if(currentCountry != "Worldwide") {
      // add class to all nodes which are in fta array
    var t = ".continent.continent_" + formatBlank(currentCountry); //d.name
    // always show node which is selected
    d3.select(t).classed("node--active",true);
    // show Nodes and Linkes of one TA with specific ID
  }
}


function hideAllNodesLinksTotal() {

  // Hide all Nodes and Linkes .classed("node--active",false)
  svg.selectAll(".node").classed("fadeOut",true);
  if(isSafari == true) {
    d3.select("#lines_total_img").classed("fadeOut",true);
  } else {
    d3.select("#lines_total_canvas").classed("fadeOut",true);

  }

}

var _links_sel_all = [];
var _links_sel_all_selected = [];
var _links_sel_current = [];
var _links_sel_current_hover = [];

// show one TA with specific ID
function showTa(id,year,status) {
  // reset values
  if(viewStatus == "current") {
    if(status === 'hover' || ta_click == false) _links_sel_current_hover = []
    if(status != 'hover') _links_sel_current = []
  } else {
    if(status === 'hover' || ta_click == false) _links_sel_all_selected = []
    if(status != 'hover') _links_sel_all = [];
  }


  // if is array draw all nodes/links, or only one, or no TA at all
  if(Object.prototype.toString.call(id) === '[object Array]') {
    id.forEach(function(e,i) { drawNodesLinks(e,'array'); });
  }
  else if(typeof id === 'number') {
    drawNodesLinks(id);
  }

  function drawNodesLinks(d,type) {
     if(viewStatus == "current") {
        // show all nodes which belong to TA
        svg.selectAll(".node.ftaID_" + d).classed("fadeOut",false).classed("node--active",true);

        // show all Links which belong to TA
        var found = -1;
        link_data_grouped.forEach(function(e,i) { if(e.id == d) found = i; });
        if(found != -1) {
          // if year is defined = mouseover in list so draw on canvas 3

          if(status === 'hover') {

            // save for screenshot
            _links_sel_current_hover.push(link_data_grouped[found]);
            canvas_draw_lines(link_data_grouped[found].path, 3, link_data_grouped[found].color, 4); //link_data_grouped[found].members
            if(isSafari == true) {
              var ca = document.getElementById('lines_current_selected_hover_canvas');
              var ur = ca.toDataURL();
              var result = document.getElementById('lines_current_selected_hover_img');
              result.src=ur;
              result.style.width = ca.style.width;
              result.style.height = ca.style.height;
            }
          }
          else  {
            // save for screenshot
            _links_sel_current.push(link_data_grouped[found]);
            // user selected a country draw on canvas 2
            canvas_draw_lines(link_data_grouped[found].path, 2, link_data_grouped[found].color, 4); //link_data_grouped[found].members
            if(isSafari == true) {
              var ca = document.getElementById('lines_current_selected_canvas');
              var ur = ca.toDataURL();
              var result = document.getElementById('lines_current_selected_img');
              result.src=ur;
            }
          }
        }
     }
     else {
        if(type == 'array') {
          var year_ = d.year;
          var id = d.id;
        }
        else {
          var year_ = year;
          var id = d;
        }
        var _links;
        var _links_sel = [];

        function showlinks() {
          if(_links_sel.length > 0) {

            if(status == 'hover') _links_sel_all_selected.push(_links_sel);
            else _links_sel_all.push(_links_sel);

            drawLinks(_links_sel,'total',status);
          }
        }

        if(id>=0) {
          $.each(years, function(a,b) { if(b.val == year_) _links = data_prepared[ years[b.pos].pos ][1]; });
          _links.forEach(function(e,i) {
            if(e.target.id == id) {
              _links_sel.push( e );
              svg.selectAll(".node."+formatBlank(e.source.name)).classed("hide",false).classed("fadeOut",false).classed("node--active",true); //.classed("show",true)
              svg.selectAll(".node."+formatBlank(e.target.name)).classed("hide",false).classed("fadeOut",false).classed("node--active",true); //.classed("node--active",true)
            }
          });
          showlinks();
        }
        else {
            // woldwide
            var countries = [];
            // start a web worker if supported, not supoorted by ie9 and ie8
            if(window.Worker !== undefined){
              var worker = new Worker('js/worker/12_task.js');
              worker.addEventListener('message', function(e) {
                if(e.data.cmd == "totalWorldwideBack") {
                  $('.loader').hide();
                  _links_sel = e.data.links;
                  countries = e.data.countries;
                  countries.forEach(function(e,i) {
                    svg.selectAll(".node."+formatBlank(e)).classed("hide",false).classed("fadeOut",false).classed("node--active",true);
                  });

                  showlinks();
                }

              }, false);
              // worker.addEventListener('error', console.log('ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message), false);
              worker.postMessage({'cmd': 'totalWorldwide', 'data': data_prepared, 'year':year_}); // Start the worker.
              //worker.terminate()
            } else { // fallback for ie8 and ie9
              for(var i = 0; i<=(year_-1);i++) {
                $('.loader').hide();
                var temp = _links_sel.concat(data_prepared[i][1]); _links_sel = temp;
                data_prepared[i][1].forEach(function(e,i) {
                    if(!isInArray(e.source.name,countries)) countries.push(e.source.name);
                    if(!isInArray(e.target.name,countries)) countries.push(e.target.name);
                });
              }
              countries.forEach(function(e,i) {
                svg.selectAll(".node."+formatBlank(e)).classed("hide",false).classed("fadeOut",false).classed("node--active",true);
              });
              showlinks();
            }


        }
     }
  }

}





// ---------------------- Mouse over Trade Agreement List Item
// ------------------------------------------------------------------------------
function tas_hover() {
  $(".items>li")
  .mouseenter(function(){
    if($(this) != ta_click) ta_click = false;
    var selector = $(this).attr('class');
    if(selector.length>10) {
      var s = selector.split(" ");
      var taID = s[0].substring(6, s[0].length);
      var taYear = (s[1] != 'active') ? s[1] : null;
    }
    else {
      var taYear =  null;
      var taID = selector.substring(6, selector.length);
    }
    taID = parseInt(taID);


    //make this list item active
    $(this).addClass('active');

    // clear screen so only ta is visible
    if(viewStatus == 'current') {
      hideAllNodesLinksCurrent();
      if(currentCountry != 'Worldwide') {
        if(isSafari) d3.select("#lines_current_selected_img").classed("fadeOut",true);
        else d3.select("#lines_current_selected_canvas").classed("fadeOut",true);
      }
      clearScreen(3);
    }
    else {
      hideAllNodesLinksTotal();
      clearScreen(5);
    }
    // show ta lines
    showTa(taID,taYear,'hover');

    // select bar
    if(currentCountry != "Worldwide") {
      d3.select('#taVis').selectAll(".bar rect").style("opacity", function(e) {
        var res = ".4"; if(e.id == taID) res = "1"; return res;
      });
    }

  })
  .click(function(e){
    $(".items>li").removeClass('active');
    $(this).mouseenter();
    ta_click = $(this);
  })
  .mouseleave(function(){
    if(ta_click == false) {
      //remove active state
      $(this).removeClass('active');
      // reset selection from before

      resetTaListSelection();

      // deselect bar
      if(currentCountry != "Worldwide") d3.select('#taVis').selectAll(".bar rect").style("opacity", "1");

    }
  });
}




function resetTaListSelection() {
    // reset selection from before
    d3.selectAll(".node--active").classed("fadeOut",false);
    if(currentCountry == "Worldwide" || viewStatus == "total") d3.selectAll(".show").classed("fadeOut",false);
    if(viewStatus == 'current') {
      // clearScreen(3);
      if(isSafari == true) {
        d3.select("#lines_current_selected_hover_img").classed("hide",true);
        if(currentCountry != 'Worldwide') {
          d3.select("#lines_current_selected_img").classed("fadeOut",false);
          d3.select("#lines_current_img").classed("fadeOut",true);
        }
        else {
          d3.select("#lines_current_selected_img").classed("fadeOut",true);
          d3.select("#lines_current_img").classed("fadeOut",false);
        }
      } else {
        d3.select("#lines_current_selected_hover_canvas").classed("hide",true);
        if(currentCountry != 'Worldwide') {
          d3.select("#lines_current_selected_canvas").classed("fadeOut",false);
          d3.select("#lines_current_canvas").classed("fadeOut",true);
        } else {
          d3.select("#lines_history_canvas").classed("fadeOut",false);
          d3.select("#lines_current_selected_canvas").classed("fadeOut",true);
          d3.select("#lines_current_canvas").classed("fadeOut",false);
        }
      }
      clearScreen(3);
    }
    else  {
      if(isSafari == true) d3.select("#lines_total_img").classed("fadeOut",false);
      else d3.select("#lines_total_canvas").classed("fadeOut",false);
      clearScreen(5);
    }

}


if(!$('#showCurrent').hasClass('active')) $('#showCurrent').on('click');

// ---------------------- current/total tabs
// ------------------------------------------------------------------------------
$('#showCurrent').on('click', function(e) {
  e.preventDefault();
  if(!$(this).hasClass('active')) {
    $('#legend_container').removeClass('fadeOut').css({'pointer-events': 'auto'});;

    $('#showTotal').removeClass('active');
    $(this).addClass('active');
    $('#allTAs').hide();
    $('#currentTAs').show();
    viewStatus = "current";

    if(isSafari) {
      // show all current img items again
      d3.select("#lines_current_img").classed("hide",false);
      d3.select("#lines_current_selected_img").classed("hide",false);
      d3.select("#lines_current_selected_hover_img").classed("hide",false);
      d3.select("#lines_total_img").classed("hide",true);
      d3.select("#lines_total_selected_img").classed("hide",true);
    }
    else {
      // show all current canvas items again
      d3.select("#lines_history_canvas").classed("hide",false);
      d3.select("#lines_current_canvas").classed("hide",false);
      d3.select("#lines_current_selected_canvas").classed("hide",false);
      d3.select("#lines_current_selected_hover_canvas").classed("hide",false);

      d3.select("#lines_total_canvas").classed("hide",true);
      d3.select("#lines_total_selected_canvas").classed("hide",true);
    }

    // hide everything and select what has been selected before
    hideAllNodesLinksCurrent();
    // resetSelection();
     // svg.selectAll(".node").classed("show",false)

    if(currentCountry != 'Woldwide') {
      if(currentCountry.length == 2) var s = 500 + getArrayPos(currentCountry, select_list_arr_cont);
      else var s = getArrayPos(formatBlank(currentCountry.substring(3, currentCountry.length)), select_list_arr);
      $('#e1').select2("val", s, true);
    }
    // else resetSelection();




  }
});

$('#showTotal').on('click', function(e) {
  e.preventDefault();
  if(!$(this).hasClass('active')) {
    $('.loader').show();
    $('#legend_container').addClass('fadeOut').css({'pointer-events': 'none'});
    $('#showCurrent').removeClass('active');
    $(this).addClass('active');

    // load all TAs for worldwide only on click, better for performance
    if(currentCountry == "Worldwide") displayTADetails(ftas_total_arr, '', 'allTAs');
    else displayTADetails(current_ta_total_arr, status, 'allTAs');
    $('#allTAs').show();
    $('#currentTAs').hide();
    viewStatus = "total";

    clearScreen(4);
    clearScreen(5);

    // fadeout current canvas and show total canvas
    if(isSafari == true) {
      d3.select("#lines_current_img").classed("hide",true);
      d3.select("#lines_current_selected_img").classed("hide",true).attr("src", img_blank);
      d3.select("#lines_current_selected_hover_img").classed("hide",true).attr("src", img_blank);
      d3.select("#lines_total_img").classed("fadeOut",false).classed("hide",false).attr("src", img_blank);
      d3.select("#lines_total_selected_img").classed("fadeOut",false).classed("hide",false).attr("src", img_blank);
    } else {
      d3.select("#lines_history_canvas").classed("hide",true);
      d3.select("#lines_current_canvas").classed("hide",true);
      d3.select("#lines_current_selected_canvas").classed("hide",true);
      d3.select("#lines_current_selected_hover_canvas").classed("hide",true);
      d3.select("#lines_total_canvas").classed("fadeOut",false).classed("hide",false);
      d3.select("#lines_total_selected_canvas").classed("fadeOut",false).classed("hide",false);
    }
    svg.selectAll(".node").classed("hide",true).classed("node--active",false);

    // if year is most recent year show all tas of this country
    if(currentCountry != 'Worldwide') { //current.val == '2014' &&

      // start a web worker if supported, not supoorted by ie9 and ie8
      if(window.Worker !== undefined){
        var worker = new Worker('js/worker/12_task.js');
        worker.addEventListener('message', function(e) {
          if(e.data.cmd == "totalCountryBack") {
            $('.loader').hide();
            showTa(e.data.data);
          }
        }, false);
        // find the years for all ftas
        worker.postMessage({'cmd': 'totalCountry','currentPos': current.pos, 'total_arr': current_ta_total_arr, 'data': data, 'data_tas': data_tas}); // Start the worker.
        //worker.terminate()
      }
      else {
        //ie8 and ie9 fallback
        // select data set of current year and find current selected country
        var found = -1;
        data[current.pos].data.forEach(function(k,i) { if(k.name == currentCountry) found = i; });
        if(found!=-1) {
          var all_tas = data[current.pos].data[found].ta_total_arr;
          // console.log(all_tas);
          var all_tas_arr = [];
          all_tas.forEach(function(k,i) {
            var found = -1;
            data_tas.forEach(function(l,m) { if(l.id == k) found = l; });
            if(found != -1) all_tas_arr.push({id:k,year:found.year});
          });

          // show all tas
          showTa(all_tas_arr);
        }
      }
    } else {
      showTa(-1, current.pos); //all worldwide until time
    }
  }
});



// All Slider configurations
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------



// ---------------------- Init Slider
// ------------------------------------------------------------------------------

$("#slider").noUiSlider({
	start: sliderValMax,
	step: 1,
	connect: "lower",
	range: { 'min': 0, 'max': sliderValMax },
	format: wNumb({ decimals: 0 })
});

var y = [1948, 1949, 1951, 1953, 1954, 1955, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];
$("#slider").noUiSlider_pips({
	mode: 'values',
	values: [0,9,19,29,39,49, sliderValMax],
	format: wNumb({
		encoder: function( a ){
		return y[parseInt(a)];
		}
	}),
	density: 4
});





// ---------------------- Slider Interactions
// ------------------------------------------------------------------------------
$("#slider").on({
	slide: function(e,f){ updateSlider(f); },
	set: function(e,f){

	  // change year
	  updateSlider(f);

	  // first fo all fade out canvas and clear screen (canvas) for better performance
	  clearScreen();

	  // reset list selection if somebody has clicked that
	  ta_click = false;
	  $(".items>li").removeClass('active');
	  // go to showcurrent list
	  if(!$('#showCurrent').hasClass('active')) $('#showCurrent').click();


  	  // take chosen data set
	  nodes = data_prepared[current.pos][0];
	  links = data_prepared[current.pos][1];

	  // draw update
	  update();

	  // save slider value for mouseleave
	  sliderVal = parseInt(f);

	  //update hash
	  if(playStatus == false) {
	  	  if(currentCountry.length == 2) var c = currentCountry;
		  else if(currentCountry != "Worldwide") { var c = currentCountry.split("."); c = c[1];}
		  else var c = "Worldwide";
		  location.hash = current.val + "_" + formatBlank(c);
	  }

	  if(currentCountry != "Worldwide") {
	  	if(currentCountry.length == 2) {
	  		d3.select(".continent.continent_" + currentCountry).each(function(d, i) {
		        d3.select(this).on('click').apply(this, arguments);
			});
	  	}
	  	else {
		  	d3.select(".node." + formatBlank(currentCountry)).each(function(d, i) {
		        mouseClickNode(d, d.name);
			});
		}
	  } else {
		// show all tas
		if(isSafari) d3.select("#lines_current_img").classed("fadeOut",false);
		else {
			d3.select("#lines_current_canvas").classed("fadeOut",false);
			d3.select("#lines_history_canvas").classed("fadeOut",false);
		}
	  }

	  //track user interaction with google events
	  if(playStatus == false) ga('send', 'event', 'new_slider_val', current.val);
	  // register user interation for disable auto slider
	  user_interaction_init = true;

	},
	// change: function(e,f){},
	mousemove: function(e,f){
		var width = $(this).width();
	    var offset = $(this).offset();
	    var value = Math.round(((e.clientX - offset.left) / width) * sliderValMax);

		if(value>=0 && value <= sliderValMax) {
			var prev = years[parseInt(value)];
		 	$('.currentYear').text(prev.val);
	 	}

		if(typeof prev !== "undefined") svg_taVis.selectAll(".bar").attr("opacity", function(e) { res = (e.year.getFullYear() <= prev.val) ? "1" : ".25"; return res; });
	},
	mouseleave: function(e,f){
		var prev = years[parseInt(sliderVal)];
	 	$('.currentYear').text(prev.val);
	 	if(typeof prev !== "undefined") svg_taVis.selectAll(".bar").attr("opacity", function(e) { res = (e.year.getFullYear() <= prev.val) ? "1" : ".25";  return res; });
	}
});
// Change the year on slide
function updateSlider(t) {
	current = years[parseInt(t)];
	$('.currentYear').text(current.val);
	$('#showTotal .year').text(current.val);
  	$('#showCurrent .year').text(current.val);
}



// ---------------------- Slider Animation
// ------------------------------------------------------------------------------
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


var timer, playStatus = false, val;
var interval = 1000 / 0.4,
	lastTime     =    (new Date()).getTime(),
    currentTime  =    0,
    delta = 0;
// if(isSafari == true) interval = 1000 / 0.4

$('#play').on('click', function(e) {
    e.stopPropagation(); //stops propagation

    if($(this).hasClass('play')) { //was before in play state so stop timer
    	cancelAnimationFrame(timer);
    	playStatus = false;
    	$('#play span').removeClass('icon-pause');
    	$('#play span').addClass('icon-play');
    }
    else {
    	playStatus = true;
    	$('#play span').removeClass('icon-play');
    	$('#play span').addClass('icon-pause');

		val = $("#slider").val();
	    // if slider is on end and user push start, jump to start
	    if(val >= sliderValMax) val = -1;

		animate();
    }
    $(this).toggleClass('play');
});


function animate() {

	// limiting the rendering to a maximum fps
	timer = window.requestAnimationFrame( animate );
	currentTime = (new Date()).getTime();
    delta = (currentTime-lastTime);

    if(delta > interval) {

		if(val == (sliderValMax + 1)) {
	      window.cancelAnimationFrame(timer);
	      $('#play span').removeClass('icon-pause');
		  $('#play span').addClass('icon-play');
		  $('.playBt').toggleClass('play');
	    }
	    else  $("#slider").val(val++);

		lastTime = currentTime - (delta % interval);
    }
}



// ---------------------- Slider Prev/Next Buttons
// ------------------------------------------------------------------------------
$('#prev').on('click', function(e) {

	if(sliderVal == 0) sliderVal = sliderValMax + 1;
	sliderVal--;
	$("#slider").val(sliderVal);
});

$('#next').on('click', function(e) {
	if(sliderVal == sliderValMax) sliderVal = -1;
	sliderVal++;
	$("#slider").val(sliderVal);
});


var timer_, interval_ = 1000 / 0.14,
    currentTime_  =    0,
    delta_ = 0;
// start animation if user doesnt do anything
function initAnime() {

	// limiting the rendering to a maximum fps
	timer_ = window.requestAnimationFrame( initAnime );
	currentTime_ = (new Date()).getTime();
    delta_ = (currentTime_ - user_interaction_init_time);
    if(delta_ > interval_) {
		if(user_interaction_init == false) $('#play').click();
		window.cancelAnimationFrame(timer_);
    }
}




// Select fct
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------




// ---------------------- show all countries in select box
// ------------------------------------------------------------------------------
function createSelectBox(nodes__) {

  var count = 0;
  var results = [];

  for(var i=0;i<nodes__.length;i++) {
    var json = {};
    if(nodes__[i].key=="EU")      json.text = "Europe";
    else if(nodes__[i].key=="AS") json.text = "Asia";
    else if(nodes__[i].key=="OC") json.text = "Oceania";
    else if(nodes__[i].key=="AF") json.text = "Africa";
    else if(nodes__[i].key=="SA") json.text = "South America";
    else if(nodes__[i].key=="NA") json.text = "North America";
    json.id = 500+i;
    json.name = nodes__[i].key;
    json.children = [];
    select_list_arr_cont.push(nodes__[i].key);
    for(var j=0;j<nodes__[i].children.length;j++) {
      json.children.push({id: count, text: nodes__[i].children[j].key, name: nodes__[i].children[j].name});
      select_list_arr.push(formatBlank(nodes__[i].children[j].key));
      count++;
    }
    results.push(json);
  }
  // init select2 box
  $("#e1").select2({
      minimumResultsForSearch: 0,
      minimumInputLength: 0,
      allowClear: true,
      placeholder: "Worldwide",
      width: "260px",
      dropdownCssClass: "bigdrop",
      data: results
  })
  .on("change", function(e) {
    // -------------------- remove old selection
    // fade out all others
    selectItem = false;
    svg.selectAll(".node").classed("hide",false).classed("node--active",false).classed("node--source",false);
    // svg_lines.selectAll(".link").classed("hide",false).classed("link--active", false);
    // -------------------- add new selection if not worldwide
    if(e.added && !e.added.children) {
      var name = formatBlank(e.added.name);
      d3.select(".node." + name).each(function(d, i) {
          // mouseClickNode(d, e.added.name, true);
          d3.select(this).on('click').apply(this, arguments);
      });
      //track user interaction with google events
      ga('send', 'event', 'new_country_val', name);
    }
    else if(e.added && e.added.children) {
      var name = formatBlank(e.added.name);
      d3.select(".continent_" + name).each(function(d, i) {
        d3.select(this).on('click').apply(this, arguments);
          // mouseClickNode(d, e.added.name, true);
      });
      //track user interaction with google events
      ga('send', 'event', 'new_country_val', name);
    }
    else {
      resetSelection();
      //track user interaction with google events
      ga('send', 'event', 'new_country_val', 'Worldwide');
    }

    //update hash
    // if(e.added) { if(e.added.name.length == 2)  var c = e.added.name; }
    if(currentCountry.length == 2) var c = currentCountry;
    else if(currentCountry != "Worldwide") { var c = currentCountry.split("."); c = c[1];}
    else var c = "Worldwide";

    location.hash = current.val + "_" + formatBlank(c);

    // register user interation for disable auto slider
    user_interaction_init = true;

  });

}

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
// console.log(data, selectCountry);
    if(selectCountry != "Worldwide" && selectCountry.length == 2) {
      // console.log(data, selectCountry);
      data.forEach(function(d) {
        var found = -1;
        var c = [];
        d.data.forEach(function(e,i) { if(e.name.substring(0, 2) == selectCountry) c.push(i); });
        if(c.length > 0) {
          var data_ = [];
          c.forEach(function(e,i) {
            d.data[e].imports.forEach(function(d) { data_.push({id:d.id,depth:d.depth}); })
          });

          var result = data_.reduce(function(memo, e1){
            var matches = memo.filter(function(e2){
              return e1.id == e2.id
            })
            if (matches.length == 0)
              memo.push(e1)
              return memo;
          }, [])

          result.sort(function(a, b) { return a.depth - b.depth; });
          chart_ta.push({year:new Date(d.year, 0),data:result});
        }
      });

    }
    else if(selectCountry != "Worldwide") {
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




// Legend on left sidebar fct
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


function drawLegend() {


// ------ Draw Legend Depth
// --------------------------

  var legend_depth = svg_legend_depth.selectAll(".legend_de")
    .data(function(d) {
      var arr = [{depth:'Not Available',ids:[]},{depth:0,ids:[]},{depth:1,ids:[]},{depth:2,ids:[]},{depth:3,ids:[]},{depth:4,ids:[]},{depth:5,ids:[]},{depth:6,ids:[]},{depth:7,ids:[]}];

      bundle(links).forEach(function(e) {
        var depth = e[e.length - 1].depth_;
        var id = e[e.length - 1].id;
        for(var a=0; a<8;a++) {
          if( depth == null && !isInArray(id,arr[0].ids)) arr[0].ids.push(id); // if no depth available, save it in -1
          else if( depth==a && !isInArray(id,arr[a+1].ids)) {
            arr[a+1].ids.push(id);
          }
        }
      });

      return arr;
    })

  // update
  legend_depth.select(".rectDepth")
    .transition()
    .duration(600)
      .attr("y", function(d, i) { if(d.ids.length>0) return 2; else return 14; })
      .attr("height", function(d, i) { if(d.ids.length>0) return 16; else return 4; });

  // enter
  var legend = legend_depth.enter().append("g")
    .attr("class", "legend_de")
    .attr("transform", function(d, i) { var res = (i==0) ? 4 : 8; return "translate(" + (res + i * 12) + ",2)"; })
    .on("mouseover",   function(d) { if(selectItem == false) { mouseoveredLegendDepth(d,this); } })
    .on("mouseout",    function(d) { if(selectItem == false) { mouseoutedLegendDepth(d);  } });


  legend.append("rect")
    .attr("x", 0)
    .attr("y", function(d, i) { if(d.ids.length>0) return 2; else return 14; })
    .attr("width", 12)
    .attr("height", function(d, i) { if(d.ids.length>0) return 16; else return 4; })
    .attr("class", "rectDepth")
    .style("fill", function(d, i) { if(d.depth == 'Not Available') return color_noDepth; else return colorsDepth_Line(d.depth); });



  legend.append("rect")
    .attr("x", 6)
    .attr("y", 20)
    .attr("width", 1)
    .attr("height", 3)
    .style("fill", function(d, i) { if(d.depth=='Not Available' || d.depth==0 || d.depth==7) return "#ccc"; else return "transparent"; });

  legend.append("text")
    .attr("x", function(d, i) { if(d.depth==0) return 5; else if(d.depth==7) return -10; else return 0; })
    .attr("y", 28)
    .attr("dy", ".35em")
    .text(function(d) {
      if(d.depth =='Not Available') return "N.A."
      else if(d.depth == 0) return "0 Low"
      else if(d.depth == 7) return "7 High"
      else return ""
    });




// ------ Draw Legend TAs
// --------------------------

  var legend_amount = svg_legend_connections.selectAll(".legend_co")
    .data(function(d) {
      var arr = [{amount:0,ids:[]},{amount:20,ids:[]},{amount:40,ids:[]},{amount:60,ids:[]},{amount:80,ids:[]},{amount:100,ids:[]}];
      nodes.forEach(function(e) {
        if(e.depth==2) {
          var amount = e.ta_total_arr.length;
          var id = e.name;
          for(var a=0; a<5;a++) {
            if( amount == 0 && !isInArray(id,arr[0].ids)) arr[0].ids.push(id); // if no depth available, save it in -1
            else if( (amount > arr[a].amount && amount <= arr[a+1].amount) && !isInArray(id,arr[a+1].ids)) {
              arr[a+1].ids.push(id);
            }
          }
        }
      });
      return arr;
    });


  // update
  legend_amount.select("circle")
    .transition()
    .duration(600)
      .style("stroke-opacity", function(d, i) { if(d.ids.length>0) return 1; else return 0.4; })
      .style("stroke", function(d, i) { if(d.ids.length>0) return '#000'; else return '#333'; });

  // enter
  var legend = legend_amount.enter().append("g")
    .attr("class", "legend_co")
    .attr("width", 20)
    .attr("transform", function(d, i) { return "translate(" + ((i * 20)) + "," + 12 + ")"; })
    .on("mousemove",   function(d) { if(selectItem == false) { mouseoveredLegendAmount(d,this); } })
    .on("mouseout",    function(d) { if(selectItem == false) { mouseoutedLegendAmount(d);  } });

  legend.append("circle")
    .attr("r", function(d, i) { return linearScale(d.amount); })
    .attr("cx",8)
    .attr("cy", function(d, i) { return -linearScale(d.amount); });


  legend.append("rect")
    .attr("x", 7)
    .attr("y", 4)
    .attr("width", 1)
    .attr("height", 3)
    .style("fill", "#ccc");

  legend.append("text")
    .attr("x", function(d, i) {  var res = (i==0) ? 6 : (i==5) ? 1 : 3; return res; })
    .attr("y", 13)
    .attr("dy", ".35em")
    .text(function(d,i) { return d.amount;
    });

  legend.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 24)
    .attr("height", 30)
    .style("fill", "transparent");

}




// ---------------------- Generall interaction functions
// ------------------------------------------------------------------------------

// ---------------------- scroll to hash
// ------------------------------------------------------------------------------
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

// ---------------------- fullscreen button
// ------------------------------------------------------------------------------
$('#fullscreen').on('click', function(e) {
  if($('#fullscreen span').hasClass('icon-enlarge2')) {
    $('#allTAs').addClass('active');
    $('#currentTAs').addClass('active');
    $('#fullscreen span').removeClass('icon-enlarge2').addClass('icon-shrink2');
    $('#sidebar').addClass('enlarge');

  } else {
    $('#allTAs').removeClass('active');
    $('#currentTAs').removeClass('active');
    $('#fullscreen span').removeClass('icon-shrink2').addClass('icon-enlarge2');
    $('#sidebar').removeClass('enlarge');
  }

});


// reset on esc
$(document).keyup(function(e) {
  if (e.keyCode == 27) { $('#e1').select2('val', '').trigger('change'); }   // escape key maps to keycode `27`
  // if (e.keyCode == 38) { $("#slider").val(sliderValMax); }   // up
  // if (e.keyCode == 40) { $("#slider").val(0); }   // down
  if (e.keyCode == 39) { $('#next').click(); }   // right
  if (e.keyCode == 37) { $('#prev').click(); }   // left
  if (e.keyCode == 9) { $('#play').click(); }
});


// ---------------------- feedback button
// ------------------------------------------------------------------------------
function sendMail() {
    var link = "mailto:hello@ftavis.com"
             // + "?cc=myCCaddress@example.com"
             + "?subject=" + escape("FTA Vis Feedback")
    ;
    window.location.href = link;
}




// https://gist.github.com/davoclavo/4424731
function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        var byteString = atob(dataURI.split(',')[1]);
    else
        var byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var _ia = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteString.length; i++) {
        _ia[i] = byteString.charCodeAt(i);
    }

    var dataView = new DataView(arrayBuffer);
    var blob = new Blob([dataView], { type: mimeString });
    try {
        return blob;
    } catch (e) {
        // The BlobBuilder API has been deprecated in favour of Blob, but older
        // browsers don't know about the Blob constructor
        // IE10 also supports BlobBuilder, but since the `Blob` constructor
        //  also works, there's no need to add `MSBlobBuilder`.
        var BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder;
        var bb = new BlobBuilder();
        bb.append(arrayBuffer);
        return bb.getBlob(mimeString);
    }

}


/* global canvg window document */
/*
 * svgenie
 * https://github.com/Causata/svgenie
 *
 * Copyright (c) 2013 Causata Ltd
 * Licensed under the MIT license.
 */

// set resolution
var multi = 4;

var d = height * multi; //d3.select("#nodes svg").node().offsetHeight //
var country__, time__, fta__;

var svgenie = (function(){
    "use strict";

    var _serializeXmlNode = function (xmlNode) {
        if (typeof window.XMLSerializer != "undefined") {
            return (new window.XMLSerializer()).serializeToString(xmlNode);
        } else if (typeof xmlNode.xml != "undefined") {
            return xmlNode.xml;
        }
        return "";
    };

    var _toCanvas = function( svg, options, callback ){
        if ( typeof svg == "string" ){ console.log(svg);
            // if ( svg.substr(0,1) == "#" ) { svg = svg.substr(1); }
            svg = document.getElementById(svg);
        }

      // start a web worker if supported, not supoorted by ie9 and ie8 dont show them hirstorical data
      if(window.Worker !== undefined && (currentCountry == 'Worldwide' && ta_click == false) && viewStatus == "current" && isSafari == false){
        var workerScreen = new Worker('js/worker/13_tasksScreenhot.js');
        workerScreen.addEventListener('message', function(e) {
          if(e.data.cmd == "calcHistoryBack") {

            // draw history
            drawLinks(e.data.data,'history');

            // draw nodes
            screenshotNodes();
          }
        }, false);
        // worker.addEventListener('error', console.log('ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message), false);
        workerScreen.postMessage({'cmd': 'calcHistory', 'current': current.pos-1, 'data':data_prepared}); // Start the worker.
        //worker.terminate()
      } else screenshotNodes();


      function screenshotNodes() {

        // shown links
        if(viewStatus == 'current') {
          // draw selection layer if a country is selected
          if(currentCountry != 'Worldwide') $.each(_links_sel_current, function(a,b) { canvas_draw_lines(b.path, 2, b.color, 4); });
          // draw all tas for this year
          drawLinks(links,'current');
          // make screenshot of current selection hover
          $.each(_links_sel_current_hover, function(a,b) { canvas_draw_lines(b.path, 3, b.color, 4); });
        }
        else {
          _links_sel_all.forEach(function(f) { drawLinks(f,'total',''); });
          _links_sel_all_selected.forEach(function(f) { drawLinks(f,'total','hover'); });
        }

        // $('#hiddenCanvasOverlay').show();
        var offsetXGraph = -radius/50
        // convert svg nodes to canvas, draw nodes first --- nodes
        canvg( 'hiddenCanvas' , _serializeXmlNode(svg), {
            ignoreMouse : true,
            ignoreAnimation : true,
            ignoreDimensions:true,
            ignoreClear: true,
            offsetX:0 + offsetXGraph, //-d/55
            offsetY:10,
            renderCallback : function(){}
        });

        // position continent names
        $('#hiddenCanvas_continents .europe').attr('x', offsetXGraph +radius + radius/1.8).attr('y', radius/3.5);
        $('#hiddenCanvas_continents .asia').attr('x',   offsetXGraph +radius + radius/1.5).attr('y', radius + radius/1.5);
        $('#hiddenCanvas_continents .oceania').attr('x',offsetXGraph -(-offsetXGraph) +radius).attr('y', radius + radius - radius/10);
        $('#hiddenCanvas_continents .africa').attr('x', offsetXGraph +radius/5).attr('y', radius + radius/2);
        $('#hiddenCanvas_continents .sa').attr('x',     offsetXGraph +radius/10).attr('y', radius - radius/2.5);
        $('#hiddenCanvas_continents .na').attr('x',     offsetXGraph +radius - radius/1.5).attr('y', radius/3.5);

        // convert svg nodes to canvas, draw nodes first  ----- legend, source text
        canvg( 'hiddenCanvas' , _serializeXmlNode( d3.select("#hiddenCanvas_continents svg").node() ), {
            ignoreMouse : true,
            ignoreAnimation : true,
            ignoreDimensions:true,
            ignoreClear: true,
            offsetX:0,
            offsetY:0,
            renderCallback : function(){}
        });



        // convert svg nodes to canvas, draw nodes first  ----- legend, source text
        canvg( 'hiddenCanvas' , _serializeXmlNode( d3.select("#hiddenCanvas_text svg").node() ), {
            ignoreMouse : true,
            ignoreAnimation : true,
            ignoreDimensions:true,
            ignoreClear: true,
            offsetX:radius*2 - radius/15,
            offsetY:radius/2 + radius/15,
            // scaleWidth: d,
            // scaleHeight: d,
            renderCallback : function(){
              // $('#hiddenCanvasOverlay').hide();
              $('.loader').hide();
              var canvas = d3.select('#hiddenCanvas').node();
              callback( canvas );
            }
        });


      }

    };

    var _toDataURL = function( id, options, callback ){
        _toCanvas( id, options, function( canvas ){
            callback( canvas.toDataURL("image/png"), canvas );
        });
    };

    var _save = function( id, options ){

        _toDataURL( id, options, function(data, canvas){
            _saveToFile({
                data : data,
                canvas : canvas,
                name : options.name || "picture.png"
            });
        });
    };

    var _saveToFile = function( conf ){
        screenshot = false;
        var a = document.createElement( "a" );

        // Can we use the "download" attribute? (Chrome && FF20)
        if( a.download != null ){
          var blob = dataURItoBlob(conf.data);
          var burl = window.URL.createObjectURL(blob);
          // window.open(burl);
          a.href = burl;
          a.download = conf.name;
          _pretendClick(a);

          //update hash
          if(currentCountry.length == 2) var c = currentCountry;
          else if(currentCountry != "Worldwide") { var c = currentCountry.split("."); c = c[1];}
          else var c = "Worldwide";
          location.hash = current.val + "_" + formatBlank(c);

          return;
        };

        if(isSafari) {
          var blob = dataURItoBlob(conf.data);
          var burl = window.URL.createObjectURL(blob);
          window.open(burl);
          // a.href = burl;
          // _pretendClick(a);

          //update hash
          if(currentCountry.length == 2) var c = currentCountry;
          else if(currentCountry != "Worldwide") { var c = currentCountry.split("."); c = c[1];}
          else var c = "Worldwide";
          location.hash = current.val + "_" + formatBlank(c);

          return;


        }

        // IE10
        if( window.navigator.msSaveBlob ){
            conf.canvas.toBlob( function ( blobby ){
                if( window.navigator.msSaveBlob ){
                    window.navigator.msSaveBlob( blobby, conf.name );
                }
            }, "image/png" );
            return;
        }



    };

    function _pretendClick(eElement) {
        var oEvent = document.createEvent("MouseEvents");
        oEvent.initMouseEvent( "click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null );
        return eElement.dispatchEvent(oEvent);
    };

    return {
        save : _save,
        toCanvas : _toCanvas,
        toDataURL : _toDataURL
    };
})();



String.prototype.trunc =
     function(n,useWordBoundary){
         var toLong = this.length>n,
             s_ = toLong ? this.substr(0,n-1) : this;
         s_ = useWordBoundary && toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
         return  toLong ? s_ + '...' : s_;
      };


// init screenshot
function makeScreenshot() {

  $('.loader').show();
  screenshot = true;



  // set variables
  country__ = currentCountry == "Worldwide" ? "Worldwide" : currentCountry.length == 2 ? (currentCountry=="EU" ? "Europe" : currentCountry=="AS" ? "Asia" : currentCountry=="AF" ? "Africa" : currentCountry=="SA" ? "South America" : currentCountry=="OC" ? "Oceania" : currentCountry=="NA" ? "North America" : '') : formatBlank(currentCountry.substring(3, currentCountry.length));
  var article = (viewStatus == "current") ? "in " : "from 1948 until ";
  time__ = (viewStatus == "current") ? current.val : current.val;
  if(ta_click != false ) fta__ = ta_click.context.firstChild.innerHTML;
  else fta__ = null;

  // replace placeholder with variables
  if(fta__ != null) {
      fta__ = fta__.trunc(27,true);
      d3.select("#hiddenCanvas_text svg .h2.first").text(fta__);
      d3.select("#hiddenCanvas_text svg .h2.second").text("Trade Agreement");
      d3.select("#hiddenCanvas_text svg .h2.third").text("Signed "+time__);
    } else {
      if((currentCountry == "Worldwide")) d3.select("#hiddenCanvas_text svg .h2.first").text("All Trade Agreements");
      else d3.select("#hiddenCanvas_text svg .h2.first").text("All Trade Agreements of");
      if(country__.replace( /-/ig).length > 6) {
        d3.select("#hiddenCanvas_text svg .h2.second").text(country__.replace( /-/ig, " " ));
        d3.select("#hiddenCanvas_text svg .h2.third").text(article + time__);
      } else {
        d3.select("#hiddenCanvas_text svg .h2.second").text( (country__.replace( /-/ig, " " )) + " " +article + time__ );
        d3.select("#hiddenCanvas_text svg .h2.third").text("");
      }
    }

    // copy legend color and circle
    $("#legend_depth svg .legend_de").clone().appendTo($("#hiddenCanvasOverlay_legend"));
    $("#legend_connections svg .legend_co").clone().appendTo($("#hiddenCanvasOverlay_circle"));
    $("#hiddenCanvasOverlay_legend .legend_de rect.rectDepth").attr('height',16).attr('y',2);


  // generate filename
  var fileName = (fta__ != null) ? fta__.replace(/\s+/g, '')+"_"+time__ : country__.replace(/\s+/g, '')+"_"+time__;

  var hiddenCanvas = d3.select('#hiddenCanvas')
    .attr('width', d + d/3 )
    .attr('height',d - 30)
    .style("width", d/multi + 'px')
    .style("height", d/multi + 'px');
  context[10] = hiddenCanvas.node().getContext("2d");
  context[10].setTransform(multi,0,0,multi,0,0);

  context[10].fillStyle = "#FFFFFF";
  context[10].fillRect(0, 0, d, d);


  svgenie.save( d3.select("#nodes svg").node(), { name: "ftavis_"+fileName+".png" } ); // , { name:"export_"+Date.now()+".png" }

}






// share links

$('#share').on('click', function(e) {
  if($('#shareOverlay').hasClass('active')) $('#shareOverlay').removeClass('active');
  else {
    $('#shareOverlay').addClass('active');

    if(currentCountry != "Worldwide") { var c = currentCountry.split("."); c = c[1];}
    else var c = "Worldwide";
    var link = current.val + "_" + formatBlank(c);
    link = encodeURIComponent(link);
    $('#twitterLink').attr('href','http://twitter.com/home?status=Look%20what%20I%20found%20on%20%40GED_Tweet%21%20http%3A%2F%2Fftavis.com/%23'+link);

    $('facebookLink').attr('href','https://www.facebook.com/sharer/sharer.php?s=100&amp;p[url]=http%3A%2F%2Fftavis.com/%23'+link+'&amp;p[title]=Look%20what%20I%20found%20on%20%40GED_Tweet%21&amp;p[images][0]=./assets/img/ipad_01_closeup.jpg&amp;p[summary]=The%20data%20visualisation%20tool%20ftavis%20lets%20you%20explore%20more%20than%20700%20free%20trade%20agreements%20over%20the%20last%2060%20years.');

    $('#googleLink').attr('href','https://plus.google.com/share?url=http%3A%2F%2Fftavis.com/%23'+link);

    $('#mailLink').attr('href','mailto:?subject=Trade%20Agreement%20Visualisation&body=Look%20what%20I%20have%20found%20on%20http%3A%2F%2Fftavis.com%2F%23'+link);
  }
});












