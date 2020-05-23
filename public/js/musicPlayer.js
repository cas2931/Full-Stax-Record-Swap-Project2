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



document.getElementById("nextBtn").addEventListener('click', function (){
    currentSong++; 
    if (currentSong >= tracks.length) {
        currentSong = 0;
    }
    playTrack(currentSong);
});   

document.getElementById("prevBtn").addEventListener('click', function (){
    currentSong--;
    if (currentSong <0) {
        currentSong = tracks.length -1;
    } 
    playTrack(currentSong);
});   

}) 

SC.initialize({
    //client_id: 'fd4e76fc67798bfa742089ed619084a6'
}); 

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#playerSubmit").addEventListener("submit", function(event) {
        event.preventDefault()
        SC.get('/tracks',{
            q: document.getElementById("searchInput").value  
        }).then(function(response){
            tracks = response;
            playTrack(currentSong);
        }) 
    }) 
}) 

var localTracks = []  
var currentSong = 0; 

function playTrack(songId) {
    if( !players[songId]) {
     SC.stream('/tracks/' + tracks[songId].id).then(function(player) {
        players [songId] = player;
        players[songId].play();
    });
} else {
    players[songId].play();
}
} 

function stopAudio2(){
    players[currentSong].seek(0);
    players[currentSong].pause();
}

function pauseAudio2(){
    players[currentSong].pause();
}

function forwardAudio2(){
    stopAudio2();
    currentSong +=1;
    players[currentSong].play();
}; 

function rewindAudio2 (){
    stopAudio2();
    currentSong=-1;
    players[currentSong].play(); 
    currentSong
} 

function SetVolume(val) {
    var player = tracks[currentSong];
    player.volume = val / 100;
    players[currentSong].setVolume(player.volume);
}

