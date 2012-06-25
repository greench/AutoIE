var background;

opera.extension.onmessage = function(event){
	background = event.source;
	if(event.data.indexOf(document.location.hostname)>=0) {
		document.write('<html><head><title>' + (document.title?document.title:location.href).replace(/</,'<') + ' - view in ie<\/title><\/head><body><div style=\'position:absolute;top:0;left:0;right:0;bottom:0;\'><embed type=\'application\/viewinie\' width=\'100'+String.fromCharCode(37)+'\' height=\'100'+String.fromCharCode(37)+'\' param-location=\'' + window.location.href + '\'><\/embed><\/div><\/body><\/html>');
		background.postMessage("Web site is viewed in IE mode");
	}
}



		

