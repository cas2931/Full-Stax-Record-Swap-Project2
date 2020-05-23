var tracks, players = [];

document.addEventListener("DOMContentLoaded", function (event) {

document.getElementById("playBtn").addEventListener('click', function (){ 
    playTrack(currentSong);
});

document.getElementById("pauseBtn").addEventListener('click', function (){ 
    players[currentSong].pause()
}); 

document.getElementById("stopBtn").addEventListener('click', function (){ 
    players[currentSong].pause();
    players[currentSong].seek();
}); 










})
