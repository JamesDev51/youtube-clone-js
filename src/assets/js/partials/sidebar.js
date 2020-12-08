const sidebarBig = document.querySelector(".sidebar__wrapper-big")
const sidebarSmall = document.querySelector(".sidebar__wrapper-small")
const sidebarButton = document.querySelector(".sidebar__button")
const sidebarMenu = document.querySelector(".sidebarMenu")

const loginForm = document.querySelector(".login__form-container")

const standardMain = document.querySelector("#mainStandard,#mainStudio")

const videoBody = document.querySelector("#bodyVideo")
const videoMain = document.querySelector("#mainVideo")
const videoHeader = document.querySelector("#videoHeader")
const videoSideDark = document.querySelector(".bodyDarkWrapper")

const cnHeaderCover = document.querySelector(".cnHeader__cover")
const cnHeaderWrapper = document.querySelector(".cnHeader__wrapper")
const sdCnAvatar= document.querySelector(".channel__avatar")
const sdCnAvatarHover = document.querySelector(".channel__avatar-hover")
const sdCnAvatarBig= document.querySelector(".channel__avatarBig")
const sdCnAvatarHoverBig = document.querySelector(".channel__avatar-hoverBig")

const SHOWING_CN="showing"
const DARK_CN = "dark"
const SIDEBARBIG_LS = "sidebarbig"

function loadSidebarOption() {
    let loadedSidebar = localStorage.getItem(SIDEBARBIG_LS);
    if(loadedSidebar === SHOWING_CN){
        sidebarBig.classList.add(SHOWING_CN)
        sidebarBig.style.width="250px"
        if(videoSideDark){
            videoSideDark.classList.add(DARK_CN);
            videoBody.style.overflow = "hidden";
        }
    }
}

function saveSidebarBig () {
    let hasClass = sidebarBig.classList.contains(SHOWING_CN);
    if(hasClass){
        localStorage.setItem(SIDEBARBIG_LS,SHOWING_CN)   

    }else{
        localStorage.removeItem(SIDEBARBIG_LS)
    }
}

function setChannelSize(){
    let hasClass = sidebarBig.classList.contains(SHOWING_CN);
    if(hasClass){
        cnHeaderCover.style.height="260px";
        cnHeaderWrapper.style.paddingLeft="130px"
        cnHeaderWrapper.style.paddingRight="130px"
    }else{
        cnHeaderCover.style.height="300px";
        cnHeaderWrapper.style.paddingLeft="200px"
        cnHeaderWrapper.style.paddingRight="200px"
    }
}


function setMainSize(){
    let hasClass = sidebarBig.classList.contains(SHOWING_CN);
    if(hasClass){
        standardMain.style.marginLeft="250px";
        if(loginForm){
            standardMain.style.marginLeft="80px";
        }
        if(cnHeaderCover || cnHeaderWrapper){
            setChannelSize();
        }
    }else{
        standardMain.style.marginLeft="80px"
        if(cnHeaderCover || cnHeaderWrapper){
            setChannelSize();
        }
    }
}

function setBodyDark(){
    let hasClass = sidebarBig.classList.contains(SHOWING_CN);
    if(hasClass){
        videoSideDark.classList.add(DARK_CN)
        videoBody.style.overflow = "hidden";
        
    }else{
        videoSideDark.classList.remove(DARK_CN)
        videoBody.style.overflow = "visible";
        
    }

}

function sidebarBtn() {
    sidebarBig.classList.toggle(SHOWING_CN)
    saveSidebarBig();
    setMainSize();
    
}

function sidebarVideoBtn() {
    sidebarBig.classList.toggle(SHOWING_CN)
    setBodyDark();
    saveSidebarBig();
    
}


function init(){
    loadSidebarOption();
    if(standardMain){
        setMainSize()
    }
}
if(sidebarBig){
    init();
}

function handleVideoDarkClick(){
    sidebarBig.classList.remove(SHOWING_CN);
    videoMain.style.marginLeft="0px"
    videoSideDark.classList.remove(DARK_CN)
    videoBody.style.overflow = "visible";
    localStorage.removeItem(SIDEBARBIG_LS)
}

if(videoSideDark){
    videoSideDark.addEventListener("click",handleVideoDarkClick)
}

window.sidebarBtn = sidebarBtn;
window.sidebarVideoBtn = sidebarVideoBtn;



function handleSdCnAvatarEnter(){
    sdCnAvatarHover.style.display="block";
}
function handleSdCnAvatarLeave(){
    sdCnAvatarHover.style.display="none";
}

if(sdCnAvatar && sdCnAvatarHover){
    sdCnAvatar.addEventListener("mouseover",handleSdCnAvatarEnter)
    sdCnAvatarHover.addEventListener("mouseleave",handleSdCnAvatarLeave)
}

function handleSdCnAvatarBigEnter(){
    sdCnAvatarHoverBig.style.display="block";
}
function handleSdCnAvatarBigLeave(){
    sdCnAvatarHoverBig.style.display="none";
}

if(sdCnAvatarBig && sdCnAvatarHoverBig){
    sdCnAvatarBig.addEventListener("mouseover",handleSdCnAvatarBigEnter)
    sdCnAvatarHoverBig.addEventListener("mouseleave",handleSdCnAvatarBigLeave)
}



