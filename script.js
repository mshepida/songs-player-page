var audios = document.getElementsByTagName('audio');

document.addEventListener('play', function(e){
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            audios[i].currentTime = 0;


        }
    }
}, true);

/*for(var i = 0, len = audios.length; i < len;i++){

	if (audios[i].duration > 0 && !audios[i].paused) {

	    audios[i].style.opacity = 0.9;

	} else {

	    audios[i].style.opacity = 0.6;

	}
}          */ 

