
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


