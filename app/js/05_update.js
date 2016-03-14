
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

      // for each ta of this contintent
      e.children.forEach(function(m) {

        m.ta_total_arr.forEach(function(n) {
          if(n!=0 && !isInArray(n,ftas_total_arr)) ftas_total_arr.push(n);
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
      if(found != -1) continent[found].ftas_new_arr = continent_ftas_new;
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
    radius_x = radius - d/55;
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


