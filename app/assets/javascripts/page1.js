var PLAY;

function setPlay(flag){
  	PLAY = flag;
   	if(PLAY) loadSnapshot();
}

function loadSnapshot(){

  	$.getJSON('http://nostradamus-whymca.appspot.com/get_camera_snapshot?id=whymca-padiglione2&callback=?', function(json) { 
  		$('#camera img').attr('src', json.snapshot); 	
		if(PLAY) setTimeout('loadSnapshot()', 800);
	});
}