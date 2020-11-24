const uploadDropList = document.querySelector(".uploadDropdown-content")
const appsDropList = document.querySelector(".appsDropdown-content")
const alarmsDropList = document.querySelector(".alarmsDropdown-content")
const userDropList = document.querySelector(".userDropdown-content")
const headerUser = document.querySelector("#headerUserAvatar")

const sdUploadDropdownList = document.querySelector(".sdUploadDropdown-content")
const sdUserDropdownList = document.querySelector(".sdUserDropdown-content")
const headerUserSd = document.querySelector("#headerUserAvatarSd")


const mainStandard = document.querySelector("#mainStandard")
const sidebarStandard = document.querySelector("#sidebarStandard")
const headerOne = document.querySelector("#headerOne")
const headerTwo = document.querySelector("#headerTwo")

const mainStudio = document.querySelector("#mainStudio")
const sidebarStudio = document.querySelector("#sidebarStudio")
const headerOneStudio = document.querySelector("#sdHeaderOne")
const headerTwoStudio = document.querySelector("#sdHeaderTwo")

const SW__CN="showing"
const bd_CN="border"

//Btn Dropdown Function
function uploadDropdown() {
    switchDropdownUpload()
    uploadDropList.classList.toggle(SW__CN)
}
function appsDropdown() {
    switchDropdownApps()
    appsDropList.classList.toggle(SW__CN)
}
function alarmsDropdown() {
    switchDropdownAlarms()
    alarmsDropList.classList.toggle(SW__CN)
}
function userDropdown() {
    switchDropdownUser()
    userDropList.classList.toggle(SW__CN)
    headerUser.classList.toggle(bd_CN)
    
}

//Studio Btn Function
function sdUploadDropdown(){
    switchDropdownSdUpload()
    sdUploadDropdownList.classList.toggle(SW__CN)
}
function sdUserDropdown(){
    switchDropdownSdUser()
    sdUserDropdownList.classList.toggle(SW__CN)
    headerUserSd.classList.toggle(bd_CN)
}


//Header User Border 

function handleUserBorder(){
    haveCnUser = userDropList.classList.contains(SW__CN)
    if(haveCnUser){
        headerUser.classList.add(bd_CN)
    }else{
        headerUser.classList.remove(bd_CN)
    }
}

function handleUserSdBorder(){
    const haveCnSdUser = sdUserDropdownList.classList.contains(SW__CN)
    if(haveCnSdUser){
        headerUserSd.classList.add(bd_CN)
    }else{
        headerUserSd.classList.remove(bd_CN)
    }
}


//Btn Switch Function
function switchDropdownUpload(){
    const haveCnApps = appsDropList.classList.contains(SW__CN)
    const haveCnAlarms = alarmsDropList.classList.contains(SW__CN)
    const haveCnUser = userDropList.classList.contains(SW__CN)
    if( haveCnApps || haveCnAlarms || haveCnUser){
        appsDropList.classList.remove(SW__CN)
        alarmsDropList.classList.remove(SW__CN)
        userDropList.classList.remove(SW__CN)
        handleUserBorder()
    }
}
function switchDropdownApps(){
    const haveCnUplaod = uploadDropList.classList.contains(SW__CN)
    const haveCnAlarms = alarmsDropList.classList.contains(SW__CN)
    const haveCnUser = userDropList.classList.contains(SW__CN)
    if(haveCnUplaod ||haveCnAlarms || haveCnUser){
        uploadDropList.classList.remove(SW__CN)
        alarmsDropList.classList.remove(SW__CN)
        userDropList.classList.remove(SW__CN)
        handleUserBorder()
    }
}
function switchDropdownAlarms(){
    const haveCnUplaod = uploadDropList.classList.contains(SW__CN)
    const haveCnApps = appsDropList.classList.contains(SW__CN)
    const haveCnUser = userDropList.classList.contains(SW__CN)

    if(haveCnUplaod || haveCnApps || haveCnUser){
        uploadDropList.classList.remove(SW__CN)
        appsDropList.classList.remove(SW__CN)
        userDropList.classList.remove(SW__CN)
        handleUserBorder()
    }
}
function switchDropdownUser(){
    const haveCnUplaod = uploadDropList.classList.contains(SW__CN)
    const haveCnApps = appsDropList.classList.contains(SW__CN)
    const haveCnAlarms = alarmsDropList.classList.contains(SW__CN)

    if(haveCnUplaod || haveCnApps || haveCnAlarms ){
        uploadDropList.classList.remove(SW__CN)
        appsDropList.classList.remove(SW__CN)
        alarmsDropList.classList.remove(SW__CN)
    }
}
function switchDropdownSdUpload(){
    const haveCnSdUser = sdUserDropdownList.classList.contains(SW__CN)
    if(haveCnSdUser){
        sdUserDropdownList.classList.remove(SW__CN)
        handleUserSdBorder()
    }
}
function switchDropdownSdUser(){
    const haveCnSdUpload = sdUploadDropdownList.classList.contains(SW__CN)
    if(haveCnSdUpload){
        sdUploadDropdownList.classList.remove(SW__CN)
    }
}








//Window Click Btn finish for standard
function handleStandardClick(){
    const haveCnUplaod = uploadDropList.classList.contains(SW__CN)
    const haveCnApps = appsDropList.classList.contains(SW__CN)
    const haveCnAlarms = alarmsDropList.classList.contains(SW__CN)
    const haveCnUser = userDropList.classList.contains(SW__CN)
    if(haveCnUplaod || haveCnApps || haveCnAlarms || haveCnUser)
    {
        uploadDropList.classList.remove(SW__CN)
        appsDropList.classList.remove(SW__CN)
        alarmsDropList.classList.remove(SW__CN)
        userDropList.classList.remove(SW__CN)
        
    }
}
        
function windowStandardClick (){
    headerOne.addEventListener("click",handleStandardClick)
    headerTwo.addEventListener("click",handleStandardClick)
    mainStandard.addEventListener("click",handleStandardClick)
    sidebarStandard.addEventListener("click",handleStandardClick)
}

if(mainStandard || sidebarStandard ||headerOne || headerTwo )
{
    windowStandardClick()
}

//Window Click Btn finish for studio


function handleStudioClick(){
const haveCnSdUpload = sdUploadDropdownList.classList.contains(SW__CN)
const haveCnSdUser = sdUserDropdownList.classList.contains(SW__CN)

if(haveCnSdUpload || haveCnSdUser){
    sdUploadDropdownList.classList.remove(SW__CN)
    sdUserDropdownList.classList.remove(SW__CN)
    handleUserSdBorder()
    
}
}

function windowStudioClick(){
    mainStudio.addEventListener("click",handleStudioClick)
    sidebarStudio.addEventListener("click",handleStudioClick)
    headerOneStudio.addEventListener("click",handleStudioClick)
    headerTwoStudio.addEventListener("click",handleStudioClick)
}

if(mainStudio || sidebarStudio || headerOneStudio || headerTwoStudio)
{
    windowStudioClick()
}



window.userDropdown = userDropdown;
window.uploadDropdown = uploadDropdown;
window.appsDropdown = appsDropdown;
window.alarmsDropdown = alarmsDropdown;

window.sdUploadDropdown = sdUploadDropdown;
window.sdUserDropdown = sdUserDropdown;