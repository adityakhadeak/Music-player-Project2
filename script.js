console.log("Welcome to spotify");
let audioElement = new Audio("songs/1.mp3")
// Songs
let songIndex=0;
let songs = [
    { songName: "Mile Ho Tum Humko", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Maan Meri Jaan", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Tum Hi Ana", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Baarish (Half-girlfriend)", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Kesariya", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
]

//Get  Element
let song=Array.from(document.getElementsByClassName("song"));
let masterPlay = document.getElementById("masterPlay");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let seekSong = document.getElementById("seek-song");
let playSong=Array.from(document.getElementsByClassName("fa-dark"));
// changing the play/pause btn
let toToggle=document.getElementById(songIndex);

song.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("song-name")[0].innerText=songs[i].songName;
    // element.getElementsByClassName("song-len")[0].innerText=songs[i].songName;
});

masterPlay.addEventListener("click", () => {
    if (audioElement.paused) {
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        toToggle=document.getElementById(songIndex);
        toToggle.classList.remove("fa-circle-play")
        toToggle.classList.add("fa-circle-pause")
        audioElement.play()
    }
    else {
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        toToggle=document.getElementById(songIndex);
        toToggle.classList.add("fa-circle-play")
        toToggle.classList.remove("fa-circle-pause")
        audioElement.pause()
    }
});

audioElement.addEventListener("timeupdate", () => {
    let percent = ((audioElement.currentTime) / (audioElement.duration)) * 100;
    seekSong.value = percent;
});

seekSong.addEventListener("change", () => {
    audioElement.currentTime = (seekSong.value * (audioElement.duration)) / 100;
});
let makeAllPlay=()=>{
    playSong.forEach(element => {
            element.classList.add("fa-circle-play")
            element.classList.remove("fa-circle-pause")
            toToggle=document.getElementById(songIndex);
            toToggle.classList.add("fa-circle-play")
            toToggle.classList.remove("fa-circle-pause")
        })
    }
playSong.forEach(element => {
    element.addEventListener("click",(e) =>{
        makeAllPlay();
        // e.target.classList.remove("fa-circle-play")
        // e.target.classList.add("fa-circle-pause")
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        audioElement.currentTime=0;
        audioElement.pause();
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play();
    })
});

forward.addEventListener("click",()=>{
    if((songIndex)>=4)
    {
        songIndex=0;
        audioElement.currentTime=0;
        audioElement.pause();
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        makeAllPlay();
        toToggle=document.getElementById(songIndex);
        toToggle.classList.remove("fa-circle-play")
        toToggle.classList.add("fa-circle-pause")
    }
    else
    {
        songIndex+=1;
        audioElement.currentTime=0;
        audioElement.pause();
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        makeAllPlay();
        toToggle=document.getElementById(songIndex);
        toToggle.classList.remove("fa-circle-play")
        toToggle.classList.add("fa-circle-pause")
    }
})

backward.addEventListener("click",()=>{
    if((songIndex)<=0)
    {
        songIndex=4;
        audioElement.currentTime=0;
        audioElement.pause();
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        makeAllPlay();
        toToggle=document.getElementById(songIndex);
        toToggle.classList.remove("fa-circle-play")
        toToggle.classList.add("fa-circle-pause")
    }
    else
    {
        songIndex-=1;
        audioElement.currentTime=0;
        audioElement.pause();
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        makeAllPlay();
        toToggle=document.getElementById(songIndex);
        toToggle.classList.remove("fa-circle-play")
        toToggle.classList.add("fa-circle-pause")
    }
})
