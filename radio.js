//playlist. to add a song, just add the song in the array as follows: "path/name.format" dont forget a ,//
const musicdata = [
    "radio/01. THE IDOLM@STER (M@STER VERSION -REMIX-).mp3",
    "radio/02. GO MY WAY!! (M@STER VERSION).mp3",
    "radio/03. i.mp3",
    "radio/04. 空.mp3",
    "radio/05. shiny smile (M@STER VERSION).mp3",
    "radio/06. Colorful Days (M@STER VERSION).mp3",
    "radio/15. MUSIC♪ (M@STER VERSION).mp3"
];

// all variables used//
let currentSongIndex = 0;
let shuffleon = false;
const radio = document.getElementById("radio");
const shufflebutton = document.getElementById("shuffle");
const trackDisplay = document.getElementById("track");
const volumeControl = document.getElementById("volume");
const seekBar = document.getElementById("seekBar")


//interface//
volumeControl.addEventListener("input", () => {
    radio.volume = volumeControl.value;
})

radio.addEventListener("timeupdate", () => {
    seekBar.value = (radio.currentTime / radio.duration) * 100;
});

seekBar.addEventListener("input", () => {
    radio.currentTime = (seekBar.value / 100) * radio.duration
});

//loads both song and covers//

function loadSong(index, autoplay = false) {
    radio.src = musicdata[index];
    trackDisplay.textContent = musicdata[index].replace("radio/", "").replace(".mp3", "")
    radio.load();
    if (autoplay) {
        radio.play().catch(error => console.log("Autoplay blocked:", error));
    }
}

//controls//
function Play() {
    if (!radio.src) {
        loadSong(currentSongIndex, true);
    }
    else {
        radio.play();
    }
    
}

function Pause() {
    radio.pause();
}

function Next() {
    if (shuffleon) {
        currentSongIndex = Math.floor(Math.random() * musicdata.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % musicdata.length;
    }
    loadSong(currentSongIndex, true);
}

function Previous() {
    currentSongIndex = (currentSongIndex - 1 + musicdata.length) % musicdata.length;
    loadSong(currentSongIndex, true);
}

function Shuffle() {
    shuffleon = !shuffleon;
    shufflebutton.textContent = `Shuffle: ${shuffleon ? 'On' : 'Off'}`;
}

// Load first song but don't autoplay
loadSong(currentSongIndex);
radio.addEventListener("ended", Next);
