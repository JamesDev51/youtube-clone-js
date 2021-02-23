import { registerView } from "../apis/registerView"

const videoContainer = document.getElementById("jsVideoPlayer")
const video = document.getElementById("jsVideo")
const timeBar = document.getElementById("jsTime")
const playBtn = document.getElementById("jsPlayBtn")
const volumeBtn = document.getElementById("jsVolumeBtn")
const volumeBar = document.getElementById("jsVolumeBar")
const volumeBarCont = document.getElementById("jsVolumeBarContainer")
const currentTime = document.getElementById("jsCurrentTime")
const totalTime = document.getElementById("jsTotalTime")
const speedBar = document.getElementById("jsSpeedBar")
const speedBtn = document.getElementById("jsSpeedBtn")
const speedBarCont = document.getElementById("jsSpeedBarContainer")
const fullScrnBtn = document.getElementById("jsFullScreen")
const playBtnBig = document.getElementById("jsPlayBtnBig")
const videoThumbnail = document.querySelectorAll ("#jsVideoThumbnail")

const barWidth = "barWidth"
const HIDE="hide"
let savedVolume

//play / pause btn
function handlePlayBtnClick(){
    if(video.paused){
        video.play()
        playBtn.innerHTML='<i class="fas fa-pause"></i>'
        playBtnBig.innerHTML='<i class="fas fa-pause"></i>'
        
    }else{
        video.pause()
        playBtn.innerHTML='<i class="fas fa-play"></i>'
        playBtnBig.innerHTML='<i class="fas fa-play"></i>'
    }
}

//volume mute btn
function handleVolumeBtnClick(){
    if(video.muted){
        volumeBar.value=savedVolume
        video.muted=false
        if(savedVolume==0){
            volumeBtn.innerHTML='<i class="fas fa-volume-mute"></i>'    
        }else{
            volumeBtn.innerHTML='<i class="fas fa-volume-up"></i>'
        }
    }else{
        volumeBar.value=0
        video.muted=true
        volumeBtn.innerHTML='<i class="fas fa-volume-mute"></i>'
    }
}

//volume btn hover
function handleVolumeBtnHover(){
    volumeBarCont.classList.toggle(barWidth)
}

//speed cog btn hover
function handleSpeedBtnHover(){
    speedBarCont.classList.toggle(barWidth)
}

//remove full screen
function removeFullScreen(){
    document.exitFullscreen()
    fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>'
    fullScrnBtn.removeEventListener("click",removeFullScreen)
    fullScrnBtn.addEventListener("click",handleClickFullScrn)

    
}

//request video full screen
function handleClickFullScrn(){
    videoContainer.requestFullscreen()
    fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>'
    fullScrnBtn.removeEventListener("click",handleClickFullScrn)
    fullScrnBtn.addEventListener("click",removeFullScreen)
}

//function : change sec to form date time for video
const formatDate = seconds => {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber/3600);
    let minutes = Math.floor((secondsNumber-hours*3600)/60)
    let totalSeconds = secondsNumber - hours*3600 - minutes*60;

    if(hours < 10){
        hours = `0${hours}`;
    }
    if(minutes<10){
        minutes = `0${minutes}`;
    }
    if(seconds<10){
        totalSeconds = `0${totalSeconds}`;
    }
    return `${hours}:${minutes}:${totalSeconds} `
};

//set total time for video
function setTotalTime(){
    timeBar.max = video.duration
    const totalTimeStr = formatDate(video.duration)
    totalTime.innerHTML=totalTimeStr
}

//set current time for video
function getCurrentTime(){
    const currentTimeStr = formatDate(video.currentTime)
    currentTime.innerHTML=currentTimeStr
}

//handle when video is ended
function handleVideoEnded(){
    setTimeout(function(){
        video.currentTime=0
    },2000) 
    playBtn.innerHTML='<i class="fas fa-play"></i>'
    playBtnBig.innerHTML='<i class="fas fa-play"></i>'
    registerView()
    
}

//drag volume bar
function dragVolumeBar(event){
    const {target:{value:volumeValue}}=event
    video.volume=volumeValue
    savedVolume=volumeValue
    if(volumeValue>=0.8){
        volumeBtn.innerHTML='<i class="fas fa-volume-up"></i>'
        volumeBtn.addEventListener("click",handleVolumeBtnClick)
        video.muted=false
    }else if(volumeValue>=0.4){
        volumeBtn.innerHTML='<i class="fas fa-volume-down"></i>'
        volumeBtn.addEventListener("click",handleVolumeBtnClick)
        video.muted=false
    }else if(volumeValue>=0.1){
        volumeBtn.innerHTML='<i class="fas fa-volume-off"></i>'
        volumeBtn.addEventListener("click",handleVolumeBtnClick)
        video.muted=false
    }else {
        volumeBtn.innerHTML='<i class="fas fa-volume-mute"></i>'
        video.muted=true
    }
}

//drag speed bar
function dragSpeedBar(event){
    const {target:{value:speedValue}}=event
    video.playbackRate=speedValue
}

//drag time bar
function dragTimeBar(event){
    const {target:{value:currentTimeValue}}=event
    video.currentTime=currentTimeValue
    const currentTimeStr = formatDate(currentTimeValue)
    currentTime.innerHTML = currentTimeStr
}

//update current time for timebar 
function updateTimeBar(){
    timeBar.value = Math.floor(video.currentTime)
}

//set default on 0.5 for volume and volume bar
function setDefault(){
    video.volume=0.5 
    timeBar.max = video.duration
}

//hide big play btn
function hidePlayBtnBig(){
    playBtnBig.classList.toggle(HIDE)
}

//get big play btn
function getPlayBtnBig(){
    playBtnBig.classList.toggle(HIDE)
    
}

//click video to play and pause
function handleClickVideo(){
    if(video.paused){
        video.play()
        playBtn.innerHTML='<i class="fas fa-pause"></i>'
        playBtnBig.innerHTML='<i class="fas fa-pause"></i>'
        
    }else{
        video.pause()
        playBtn.innerHTML='<i class="fas fa-play"></i>'
        playBtnBig.innerHTML='<i class="fas fa-play"></i>'
    }
}

function init(){
    video.addEventListener("loadedmetadata",setDefault)
    playBtn.addEventListener("click",handlePlayBtnClick)
    volumeBtn.addEventListener("click",handleVolumeBtnClick)
    volumeBtn.addEventListener("mouseover",handleVolumeBtnHover)
    speedBtn.addEventListener("mouseover",handleSpeedBtnHover)
    fullScrnBtn.addEventListener("click",handleClickFullScrn)
    video.addEventListener("loadedmetadata",setTotalTime)
    video.addEventListener("timeupdate",getCurrentTime)
    video.addEventListener("ended",handleVideoEnded)
    volumeBar.addEventListener("input",dragVolumeBar)
    speedBar.addEventListener("input",dragSpeedBar)
    timeBar.addEventListener("input",dragTimeBar)
    video.addEventListener("timeupdate",updateTimeBar)
    playBtnBig.addEventListener("click",handlePlayBtnClick)
    video.addEventListener("play",hidePlayBtnBig)
    video.addEventListener("pause",getPlayBtnBig)
    setInterval(setTotalTime,1000)
    video.addEventListener("click",handleClickVideo)
}


if(videoContainer){
    init()
}

//video thumbnail for preview at home page
if(videoThumbnail){
    const vTLength = videoThumbnail.length
    for(let i=0 ; i<vTLength; i++){
        videoThumbnail[i].addEventListener("mouseenter",function(event){
            const {target}=event
            target.muted=true
            target.play()
            target.playbackRate=1.25
        })
        videoThumbnail[i].addEventListener("mouseleave",function(event){
            const {target}=event
            target.muted=true
            target.pause()
            target.currentTime = 0
        }) 
        videoThumbnail[i].addEventListener("timeupdate",function(event){
            const {target}=event
            const currentTime = target.currentTime
            if(currentTime>4){
                target.currentTime=0
            }
        })
    }
}
