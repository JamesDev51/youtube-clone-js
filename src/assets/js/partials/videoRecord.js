const recordContainer = document.getElementById("jsRecordContainer")
const recordPreview = document.getElementById("jsRecordPreview")
const recordBtn = document.getElementById("jsRecordBtn")
const recordBtnSize = document.getElementById("jsRecordBtnSize")
const recordTime = document.getElementById("jsTime")

let streamObject
let videoRecorder
let intervalTime
let finishToken=false

//change sec to form date 
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
    return `${hours}:${minutes}:${totalSeconds}`
};

//handle data when recording is done => make link and download
const handleData = (event) =>{
    const {data:blobObject}=event;
    const link = document.createElement("a")
    link.href=URL.createObjectURL(blobObject)
    link.download="recordedVideo.mp4"
    document.body.appendChild(link)
    link.click()
}

//stop recording 
const stopRecording =()=>{
    videoRecorder.stop()
    clearInterval(intervalTime)
    recordBtn.removeEventListener("click",stopRecording)
    recordBtn.innerHTML="녹화 시작하기"
    recordBtn.addEventListener("click",getRecording)
}

//refresh recording time for every sec
let i=0
function refreshRecordTime(){
    i+=1
    timeStr = formatDate(i)
    recordTime.innerHTML=timeStr
}

//start recording : make new mediarecorder and saving streams(blobs)
const startRecording = () =>{
    videoRecorder = new MediaRecorder(streamObject)
    videoRecorder.start()
    intervalTime = setInterval(refreshRecordTime,1000)
    recordBtn.addEventListener("click",stopRecording)
    videoRecorder.addEventListener("dataavailable",handleData)

}

//start recording with activate getusermedia for making new stream
const getRecording = async()=>{
    try{
        recordTime.innerHTML="00:00:00"
        i=0
        const stream =await navigator.mediaDevices.getUserMedia({
            audio:true,
            video:{
                width:{
                    ideal:960,min:640
                },
                height:{
                    ideal:540,min:360
                }
            }
        })
        recordPreview.srcObject=stream
        recordPreview.muted=true
        recordPreview.play()
        recordBtn.innerHTML="녹화 끝내기"
        streamObject = stream
        startRecording();
    }
    catch(error){
        console.log(error)
        recordBtn.innerHTML="녹화가 불가능합니다."
    }finally{
        recordBtn.removeEventListener("click",getRecording)
    }

}

function init(){
    recordBtn.addEventListener("click",getRecording)
}

if(recordContainer){
    init()
}