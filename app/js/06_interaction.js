
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
      if(currentCountry == 'Worldwide') {
        if(isSafari) d3.select("#lines_current_selected_img").classed("fadeOut",true);
        else d3.select("#lines_current_selected_canvas").classed("fadeOut",true);
      }
      else {
        if(isSafari) d3.select("#lines_current_selected_img").classed("fadeOut",false);
        else d3.select("#lines_current_selected_canvas").classed("fadeOut",false);
      }
    }


    if(status == 'click') {
      if(screenshot == false) { clearScreen(2); clearScreen(3); }
      showTa(d.id);
    } else {
      if(screenshot == false) { clearScreen(2); clearScreen(3); }
      showTa(d.id, null, 'hover');
    }


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

  // Hide all Nodes and Linkes
  hideAllNodesLinksCurrent();

  // update sidebar
  var found = -1;
  // get continent value in array and save fta number
  continent.forEach(function(k,i) { if(k.key == name) found = i; });

  var con_ta_new_arr = continent[found].ftas_new_arr;
  // show all TAs of that continent
  clearScreen(3);
  con_ta_new_arr.forEach(function(d) { showTa(d,null,'hover'); });
  // display detail informations about TAs
  // displayTADetails(con_ta_new_arr,status, 'currentTAs');
}

function mouseClickContinent(d) {
  // set data as hovering over
  mouseoveredContinent(d, 'click');
  // active item is this
  selectItem = this;
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
        if(tas_!='') $("#"+container+" .items").append(tas_);
        else $("#"+container+" .items").append('<span style="margin:10px;display:block;">'+currentCountry.substring(3, currentCountry.length) + ' has not signed<br>any trade agreement this year.</span>');
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
              svg.selectAll(".node."+formatBlank(e.source.name)).classed("hide",false).classed("show",true).classed("fadeOut",false);
              svg.selectAll(".node."+formatBlank(e.target.name)).classed("hide",false).classed("show",true).classed("fadeOut",false); //.classed("node--active",true)
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
    if(currentCountry != 'Woldwide') {
      var s = getArrayPos(formatBlank(currentCountry.substring(3, currentCountry.length)), select_list_arr);
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
        worker.postMessage({'cmd': 'totalCountry','currentPos': current.pos, 'currentCountry': currentCountry, 'data': data, 'data_tas': data_tas}); // Start the worker.
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

