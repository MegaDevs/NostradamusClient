// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var PLAY;

function play(cameraID){
  	PLAY = true;
  	$("#playButton").css("background-color", "lightGray");
  	$("#stopButton").css("background-color", "white");
   	if(PLAY) loadSnapshot(cameraID);
}

function stop(){
	PLAY = false;
	 $("#playButton").css("background-color", "white");
  	$("#stopButton").css("background-color", "lightGray");
}

function loadSnapshot(cameraID){

  	$.getJSON('http://nostradamus-whymca.appspot.com/get_camera_snapshot?id=' + cameraID + '&callback=?', function(json) { 
  		$('#camera img').attr('src', json.snapshot); 	
		if(PLAY){ 
			setTimeout('loadSnapshot("' + cameraID + '")', 800);
		}
	});
}