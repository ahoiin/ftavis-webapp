
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




