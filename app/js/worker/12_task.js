


addEventListener('message', function(e) {
	switch (e.data.cmd) {
		case 'totalCountry':
		  totalCountry(e);
		  break;
		case 'totalWorldwide':
		  totalWorldwide(e);
		  break;
		case 'taDetails':
		  taDetails(e);
		  break;
		case 'stop':
		  self.postMessage('WORKER STOPPED');
		  self.close(); // Terminates the worker.
		  break;
		default:
		  self.postMessage('Unknown command: ');
	};


	// get all ids and suitable years for all ftas for the selected country to the selected year
	function totalCountry(e) {
	  var data__ = e.data;

      //select data set of current year and find current selected country
      var found = -1;
      data__.data[data__.currentPos].data.forEach(function(k,i) { if(k.name == data__.currentCountry) found = i; });
      if(found!=-1) {
        var all_tas = data__.data[data__.currentPos].data[found].ta_total_arr;
        // console.log(all_tas);
        var all_tas_arr = [];
        all_tas.forEach(function(k,i) {
          var found = -1;
          data__.data_tas.forEach(function(l,m) { if(l.id == k) found = l; });
          if(found != -1) all_tas_arr.push({id:k,year:found.year});
        });

        postMessage({'cmd':'totalCountryBack','data':all_tas_arr});
      }
	}

	// get all ftas to the selected year
	function totalWorldwide(e) {
	  var data__ = e.data;

	  var _links_sel = [];
	  var countries = [];
	  function isInArray(value, array) { return array.indexOf(value) > -1; }

	  for(var i = 0; i<=(data__.year-1);i++) {
	    var temp = _links_sel.concat(data__.data[i][1]); _links_sel = temp;
	    data__.data[i][1].forEach(function(f,i) {
	        if(!isInArray(f.source.name,countries)) countries.push(f.source.name);
	        if(!isInArray(f.target.name,countries)) countries.push(f.target.name);
	    });
	  }

	  postMessage({'cmd':'totalWorldwideBack','links':_links_sel,'countries':countries});
	}


	// get ta ta details
	function taDetails(e) {
	  var data = e.data.data;
	  var data_tas = e.data.data_tas;
	  var status = e.data.status;

	  var tas_detail_arr = [];
      var json;

      data.forEach(function(g) {
        var found = -1;
        data_tas.forEach(function(e,i) { if(e.id == g) found = i; });
        if(found != -1) {
          if(status == 'hover') { json = {id: g, depth:data_tas[found].depth, name: data_tas[found].name }; }
          else { json = {id: g, depth:data_tas[found].depth, name: data_tas[found].name, reason: data_tas[found].reason, connections: data_tas[found].pa_count,  type: data_tas[found].type, year: data_tas[found].year }; }
          tas_detail_arr.push(json);
        } else console.log('bug');
      });

	  postMessage({'cmd':'taDetailsBack','tas_detail_arr':tas_detail_arr,'json':json});
	}



}, false);