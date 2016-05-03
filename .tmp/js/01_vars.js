


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






