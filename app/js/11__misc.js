
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












