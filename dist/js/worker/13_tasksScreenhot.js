


addEventListener('message', function(e) {
	switch (e.data.cmd) {
		case 'calcHistory':
		  calcHistory(e);
		  break;
		case 'stop':
		  self.postMessage('WORKER STOPPED');
		  self.close(); // Terminates the worker.
		  break;
		default:
		  self.postMessage('Unknown command: ');
	};


	// get all ids and suitable years for all ftas for the selected country to the selected year
	function calcHistory(e) {
	  var data__ = e.data.data;
	  var current = e.data.current;

	  // draw all history items
	  var _links = [];
	  for(var i = 0; i<=current;i++) {
	  	var temp = _links.concat(data__[i][1]);
	  	_links = temp;
	  }

        postMessage({'cmd':'calcHistoryBack','data':_links});
	}


}, false);