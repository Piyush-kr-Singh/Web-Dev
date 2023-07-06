console.log("welcome to musify");

let songIndex = 0;
let audioElement = new Audio('songs/apna bana le.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

});


audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


let songs = [
    { songName: "apna bana le", filePath: "songs/1.mp3", coverPath: "apna bana le.webp" },
    { songName: "Desh Mere", filePath: "songs/2.mp3", coverPath: "desh mere.avif" },

    { songName: "Hamdard", filePath: "songs/3.mp3", coverPath: "humdard.jpeg" },
    { songName: "Tera Fitoor", filePath: "songs/4.mp3", coverPath: "tera fitoor.jpg" },

    { songName: "Pal", filePath: "songs/5.mp3", coverPath: "pal.jpeg" },
    { songName: "Kesariya", filePath: "songs/6.mp3", coverPath: "kesariya.jpg" },

    { songName: "apna bana le", filePath: "songs/pal.mp3", coverPath: "apna bana le.webp" },
    { songName: "Desh Mere", filePath: "songs/tera fitoor.mp3", coverPath: "desh mere.avif" },

    { songName: "apna bana le", filePath: "songs/apna bana le.mp3", coverPath: "apna bana le.webp" },
    { songName: "Desh Mere", filePath: "songs/desh mere.mp3", coverPath: "desh mere.avif" },

    { songName: "apna bana le", filePath: "songs/apna bana le.mp3", coverPath: "apna bana le.webp" },
    { songName: "Desh Mere", filePath: "songs/desh mere.mp3", coverPath: "desh mere.avif" },

    { songName: "apna bana le", filePath: "songs/apna bana le.mp3", coverPath: "apna bana le.webp" },
    { songName: "Desh Mere", filePath: "songs/desh mere.mp3", coverPath: "desh mere.avif" },

    { songName: "apna bana le", filePath: "songs/apna bana le.mp3", coverPath: "apna bana le.webp" },
    { songName: "Desh Mere", filePath: "songs/desh mere.mp3", coverPath: "desh mere.avif" },

    { songName: "apna bana le", filePath: "songs/apna bana le.mp3", coverPath: "apna bana le.webp" },
    { songName: "Desh Mere", filePath: "songs/desh mere.mp3", coverPath: "desh mere.avif" },

]


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

const makeAllPause = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {

        //console.log(e.target);
        //if (audioElement.paused || audioElement.currentTime <= 0) {

        // if(e.target.classList= 'fa-pause-circle')
        // {
        //     audioElement.pause();
        //     e.target.classList.remove('fa-pause-circle');
        //     e.target.classList.add('fa-play-circle');
        // }

            makeAllPlays();
            songIndex = parseInt(e.target.id);

            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        //}

        // else
        // {
        //     //makeAllPause();
        //     e.target.classList.remove('fa-pause-circle');
        //     e.target.classList.add('fa-play-circle');
        //     gif.style.opacity=0;
        //     audioElement.pause();
        //     audioElement.currentTime=0;
        //     masterPlay.classList.remove('fa-pause-circle');
        //     masterPlay.classList.add('fa-play-circle');

        // }

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})