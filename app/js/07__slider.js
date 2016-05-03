
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


