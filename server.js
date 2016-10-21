var PORT = 7788;

function start(app, http) {

	http.listen(PORT, function(){
	  console.log('Listen on ',PORT);
	});
}

exports.start = start;