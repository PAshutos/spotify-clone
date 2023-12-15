console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    { songName: "Maroon", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Maroon", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Maroon", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Maroon", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Maroon", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Maroon", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
]
   

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime<= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-3x fa-circle-play');
        masterPlay.classList.add('fa-solid fa-3x fa-circle-pause');
    }
})
//Listent to Events
myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update Seekbar
})
