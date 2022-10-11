console.log("listen your music");
//Initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/ik saal music.mp3');
 let masterPlay=document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif');
let masterSongName = document.getElementById ('masterSongName');

let songItems= Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName:"IK SAAL",filPath:"songs/ik saal music.mp3",coverPath:"covers/music pic.jpg"},
    {songName:"ROCKSTAR",filPath:"songs/Rockstar.mp3",coverPath:"covers/rockstar pic song.jpg"},
     {songName:"COCKTAIL",filPath:"songs/Cocktail.mp3",coverPath:"covers/cocktail pic.jpg"},
    {songName:"LONDON TUMKDA",filPath:"songs/London Thumakda.mp3",coverPath:"covers/landan tumkta pic song.jpg"},
    {songName:"ALLAH WARIYA",filPath:"songs/Alla Waariyan.mp3",coverPath:"covers/aala wariya pic.jpg"},
]
songItems.forEach((element,i)=>{

  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0)
     {
           audioElement.play();
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
           gif.style.opacity=1;
     }
           else{
               audioElement.pause();
               masterPlay.classList.remove('fa-pause-circle');
               masterPlay.classList.add('fa-play-circle');
               gif.style.opacity=0;
              }
            }
)
//Listen to Events
 audioElement.addEventListener('timeupdate',()=>{
 

   //update Seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-cirle');
        element.classList.add('fa-play-cirle');
 })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-cirle');
        e.target.classList.add('fa-pause-cirle');
      
audioElement.src='songs/${songIndex+1}.mp3';
masterSongName.innerText=songs(songIndex).songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    masterSongName.innerText=songs(songIndex).songName;
audioElement.currentTime=0;
audioElement.play();
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    masterSongName.innerText=songs(songIndex).songName;
audioElement.currentTime=0;
audioElement.play();
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
})