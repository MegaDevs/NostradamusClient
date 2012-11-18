var PLAY;

function setPlay(flag){
  	PLAY = flag;
   	if(PLAY) loadSnapshot();
}

function loadSnapshot(){

  	// user getJSON when API ready
  	$.get('/home/index.html', function(json) { 
	//$('#camera').attr("src", json.snapshot_url); 
			
		if(PLAY) setTimeout(1000,loadSnapshot());
	});
}

$(document).ready(function(){
	setPlay(true);
});