const uploadDropList = document.querySelector(".uploadDropdown-content")
const appsDropList = document.querySelector(".appsDropdown-content")
const alarmsDropList = document.querySelector(".alarmsDropdown-content")
const settingsDropList = document.querySelector(".settingsDropdown-content")
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

const mainVideo = document.querySelector("#mainVideo")
const sidebarVideo = document.querySelector("#sidebarVideo")
const headerOneVideo = document.querySelector("#headerOneVideo")
const headerTwoVideo = document.querySelector("#headerTwoVideo")

const SW__CN="showing"
const bd_CN="border"

//Btn Dropdown Function
function uploadDropdownOne() {
    switchDropdownUploadOne()
    uploadDropList.classList.toggle(SW__CN)

}
function appsDropdownOne() {
    switchDropdownAppsOne()
    appsDropList.classList.toggle(SW__CN)
}
function settingsDropdownOne() {
    switchDropdownSettingsOne()
    settingsDropList.classList.toggle(SW__CN)
}

function uploadDropdownTwo() {
    switchDropdownUploadTwo()
    uploadDropList.classList.toggle(SW__CN)
}
function appsDropdownTwo() {
    switchDropdownAppsTwo()
    appsDropList.classList.toggle(SW__CN)
}
function alarmsDropdownTwo() {
    switchDropdownAlarmsTwo()
    alarmsDropList.classList.toggle(SW__CN)
}
function userDropdownTwo() {
    switchDropdownUserTwo()
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
    const haveCnUser = userDropList.classList.contains(SW__CN)
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
function switchDropdownUploadOne(){
    const haveCnApps = appsDropList.classList.contains(SW__CN)
    const haveCnSettings = settingsDropList.classList.contains(SW__CN)
    if( haveCnApps || haveCnSettings){
        appsDropList.classList.remove(SW__CN)
        settingsDropList.classList.remove(SW__CN)
    }
}
function switchDropdownAppsOne(){
    const haveCnUpload = uploadDropList.classList.contains(SW__CN)
    const haveCnSettings = settingsDropList.classList.contains(SW__CN)
    if(haveCnUpload || haveCnSettings){
        uploadDropList.classList.remove(SW__CN)
        settingsDropList.classList.remove(SW__CN)
    }
}
function switchDropdownSettingsOne(){
    const haveCnUpload = uploadDropList.classList.contains(SW__CN)
    const haveCnApps = appsDropList.classList.contains(SW__CN)
    if( haveCnUpload || haveCnApps ){
        uploadDropList.classList.remove(SW__CN)
        appsDropList.classList.remove(SW__CN)

    }
}
function switchDropdownUploadTwo(){
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
function switchDropdownAppsTwo(){
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
function switchDropdownAlarmsTwo(){
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
function switchDropdownSettings(){
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
function switchDropdownUserTwo(){
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

function handleStandardClickOne(){
    const haveCnUplaod = uploadDropList.classList.contains(SW__CN)
    const haveCnApps = appsDropList.classList.contains(SW__CN)
    const haveCnSettings = settingsDropList.classList.contains(SW__CN)
    if(haveCnUplaod || haveCnApps || haveCnSettings)
    {
        uploadDropList.classList.remove(SW__CN)
        appsDropList.classList.remove(SW__CN)
        settingsDropList.classList.remove(SW__CN)
    }
}

function handleStandardClickTwo(){
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
        handleUserBorder();
        
    }
}
        
function windowStandardClick (){
    headerOne.addEventListener("click",settingsDropList ? handleStandardClickOne : handleStandardClickTwo )
    headerTwo.addEventListener("click",settingsDropList ? handleStandardClickOne : handleStandardClickTwo)
    mainStandard.addEventListener("click",settingsDropList ? handleStandardClickOne : handleStandardClickTwo)
    sidebarStandard.addEventListener("click",settingsDropList ? handleStandardClickOne : handleStandardClickTwo)
}

if(mainStandard && sidebarStandard && headerOne && headerTwo )
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

//Window Click Btn finish for video

function handleVideoClickOne(){
    const haveCnUplaod = uploadDropList.classList.contains(SW__CN)
    const haveCnApps = appsDropList.classList.contains(SW__CN)
    const haveCnSettings = settingsDropList.classList.contains(SW__CN)
    if(haveCnUplaod || haveCnApps || haveCnSettings)
    {
        uploadDropList.classList.remove(SW__CN)
        appsDropList.classList.remove(SW__CN)
        settingsDropList.classList.remove(SW__CN)
    }
}

function handleVideoClickTwo(){
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
        handleUserBorder();
        
    }
}


function windowVideoClick (){
    headerOneVideo.addEventListener("click",settingsDropList ? handleVideoClickOne : handleVideoClickTwo )
    headerTwoVideo.addEventListener("click",settingsDropList ? handleVideoClickOne : handleVideoClickTwo)
    mainVideo.addEventListener("click",settingsDropList ? handleVideoClickOne : handleVideoClickTwo)
    sidebarVideo.addEventListener("click",settingsDropList ? handleVideoClickOne : handleVideoClickTwo)
}

if(mainVideo || sidebarVideo || headerOneVideo || headerTwoVideo){
    windowVideoClick()
}


window.uploadDropdownOne = uploadDropdownOne;
window.appsDropdownOne = appsDropdownOne;
window.settingsDropdownOne =settingsDropdownOne;

window.uploadDropdownTwo = uploadDropdownTwo;
window.appsDropdownTwo = appsDropdownTwo;
window.alarmsDropdownTwo = alarmsDropdownTwo;
window.userDropdownTwo = userDropdownTwo;

window.sdUploadDropdown = sdUploadDropdown;
window.sdUserDropdown = sdUserDropdown;