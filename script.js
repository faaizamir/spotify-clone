console.log("Welcome to Spotify");

//INITIALIZING THE VARIABLES
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    { songName: "Pachtaoge", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Bekhayali", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Lo Maan Liya", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Kaun Tujhe", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "To Phir Ao (Remix)", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Chale Aana", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Baarishein", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tu Har Lamha", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Ik Mulaqaat Ho", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Tum Hi Aana", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

// audioElement.play();
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/Pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
});

//LISTEN TO EVENTS
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}



songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        
        if (audioElement.paused || audioElement.currentTime <= 0) {
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        }
        else{
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-pause');
        e.target.classList.add('fa-play');
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        }
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
});














// / Handle play/Pause click
// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');
//         gif.style.opacity = 1;
//     }
//     else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause');
//         masterPlay.classList.add('fa-play');
//         gif.style.opacity = 0;
//     }
// });

// //LISTEN TO EVENTS
// audioElement.addEventListener('timeupdate', () => {
//     //update seekbar
//     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
//     myProgressBar.value = progress;
// });

// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
// })

// const makeAllPlays = () => {
//     songItemPlay.forEach((element) => {
//         element.classList.remove('fa-pause');
//         element.classList.add('fa-play');
//     })
// }

// songItemPlay.forEach((element) => {
//     element.addEventListener('click', (e) => {
//         songIndex = parseInt(e.target.id)
//         makeAllPlays();
//         e.target.classList.remove('fa-play');
//         e.target.classList.add('fa-pause');
//         audioElement.src = `songs/${songIndex + 1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');
//     })
// })

// document.getElementById('next').addEventListener('click', () => {
//     if (songIndex >= 9) {
//         songIndex = 0;
//     }
//     else {
//         songIndex += 1;
//     }
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.src = `songs/${songIndex + 1}.mp3`;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     gif.style.opacity = 1;
//     masterPlay.classList.remove('fa-play');
//     masterPlay.classList.add('fa-pause');
// })
// document.getElementById('previous').addEventListener('click', () => {
//     if (songIndex <= 0) {
//         songIndex = 0;
//     }
//     else {
//         songIndex -= 1;
//     }
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.src = `songs/${songIndex + 1}.mp3`;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     gif.style.opacity = 1;
//     masterPlay.classList.remove('fa-play');
//     masterPlay.classList.add('fa-pause');
// })