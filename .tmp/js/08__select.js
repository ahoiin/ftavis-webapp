
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