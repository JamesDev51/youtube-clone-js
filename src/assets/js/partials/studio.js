
const submitBtn = document.getElementById("sdImgSubmitBtn")
const resetBtn = document.getElementById("sdImgResetBtn")

const imgForm = document.getElementById("jsSdImgForm")
const avatarInput = document.getElementById("jsAvatarInput")
const avatarLabel = document.getElementById("jsAvatarLabel")
const avatarName = document.getElementById("jsAvatarName")
const coverInput = document.getElementById("jsCoverInput")
const coverLabel = document.getElementById("jsCoverLabel")
const coverName = document.getElementById("jsCoverName")
const watermarkInput = document.getElementById("jsWatermarkInput")
const watermarkLabel = document.getElementById("jsWatermarkLabel")
const watermarkName = document.getElementById("jsWatermarkName")

const cnDetailForm = document.getElementById("jsCnDetailForm")
const cnName = document.getElementById("jsCnName")
const cnDescription = document.getElementById("jsCnDescription")

function disableBtn(){
    submitBtn.disabled=true
    resetBtn.disabled=true
}
function changeBtn(){
    submitBtn.disabled=false
    submitBtn.style.backgroundColor="#80bfff"
    submitBtn.style.cursor="pointer"
    submitBtn.style.opacity="1"
    resetBtn.disabled=false
    resetBtn.style.cursor="pointer"
    resetBtn.style.opacity="1"
}
function returnBtn(){
    submitBtn.style.backgroundColor="rgba(0,0,0,0.6)"
    submitBtn.style.cursor="default"
    submitBtn.disabled=true
    resetBtn.style.cursor="default"
    resetBtn.disabled=true
    
}

let avatarHave
let coverHave
let watermarkHave
let currentCnName
let currentCnDescription

//prepare to upload branding imgs 
function handleAvatarLabel(event){
    console.log(event)
    avatarLabel.innerHTML=" ✔ 준비됨"
    avatarLabel.style.color="#ff3300"
    avatarName.innerHTML=event.srcElement.files[0].name
    avatarHave=event.srcElement.files[0].name
    changeBtn()
}
function handleCoverLabel(event){
    coverLabel.innerHTML=" ✔ 준비됨"
    coverLabel.style.color="#ff3300"
    coverName.innerHTML=event.srcElement.files[0].name
    coverHave=event.srcElement.files[0].name
    changeBtn()
}
function handleWatermarkLabel(event){
    watermarkLabel.innerHTML=" ✔ 준비됨"
    watermarkLabel.style.color="#ff3300"
    watermarkName.innerHTML=event.srcElement.files[0].name
    watermarkHave=event.srcElement.files[0].name
    changeBtn()
}

//reset upload image
function handleImgReset(){
    imgForm.reset()
    returnBtn()
    if(avatarHave){
        avatarLabel.innerHTML=" ❌ 취소되었습니다. 재업로드를 원하시면 다시 눌러주세요."
        avatarLabel.style.color="blue"
    }else if(coverHave){
        coverLabel.innerHTML=" ❌ 취소되었습니다. 재업로드를 원하시면 다시 눌러주세요."
        coverLabel.style.color="blue"
    }else if(watermarkHave){
        watermarkLabel.innerHTML=" ❌ 취소되었습니다. 재업로드를 원하시면 다시 눌러주세요."
        watermarkLabel.style.color="blue"
    }
}

function cnImgInit(){
    disableBtn()
    avatarInput.addEventListener("input",handleAvatarLabel)
    coverInput.addEventListener("input",handleCoverLabel)
    watermarkInput.addEventListener("input",handleWatermarkLabel)
    imgForm.addEventListener("reset",handleImgReset)
}

if(avatarInput){
    cnImgInit()
}

//change channel name
function handleCnName(){
    
    if(cnName.value==currentCnName || cnName.value==""){
        returnBtn()
    }else{
        changeBtn()
    }
}

//
function handleCnDescription(event){
    let typed= event.srcElement.value
    if(typed==currentCnDescription || typed==""){
        returnBtn()
    }else{
        changeBtn()
    }
}

//reset change detail btn
function handleDetailReset(){
    cnDetailForm.reset()
    returnBtn()
}

function cnDetailInit(){
    disableBtn()
    currentCnName=cnName.value
    currentCnDescription=cnDescription.innerHTML
    cnName.addEventListener("input",handleCnName)
    cnDescription.addEventListener("input",handleCnDescription)
    cnDetailForm.addEventListener("reset",handleDetailReset)
}

if(cnName){
    cnDetailInit()
}