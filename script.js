var audios = document.getElementsByTagName('audio');

document.addEventListener('play', function(e){
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            audios[i].currentTime = 0;


        }
    }
}, true);


