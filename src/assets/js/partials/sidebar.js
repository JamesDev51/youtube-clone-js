const sidebarBig = document.querySelector(".sidebar__wrapper-big")
const sidebarButton = document.querySelector(".sidebar__button")
const main = document.querySelector("main")
const cnHeaderCover = document.querySelector(".cnHeader__cover")
const cnHeaderWrapper = document.querySelector(".cnHeader__wrapper")
const sdCnTitle = document.querySelector(".channel__title-wrapper")
const sdCnTitleHover = document.querySelector(".channel__title-hover")
const sdCnAvatarBig= document.querySelector(".channel__avatar")
const sdCnAvatarBigHover = document.querySelector(".channel__avatar-hover")

const SHOWING_CN="showing";
const SIDEBARBIG_LS = "sidebarbig"



function loadSidebarOption() {
    let loadedSidebar = localStorage.getItem(SIDEBARBIG_LS);
    if(loadedSidebar ==="showing"){
        sidebarBig.classList.add(SHOWING_CN)
    }
}

function saveSidebarBig () {
    let hasClass = sidebarBig.classList.contains(SHOWING_CN);
    if(hasClass){
        localStorage.setItem(SIDEBARBIG_LS,"showing")   
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
        main.style.marginLeft="250px";
        if(cnHeaderCover || cnHeaderWrapper){
            setChannelSize();
        }
       
    }else{
        main.style.marginLeft="80px"
        if(cnHeaderCover || cnHeaderWrapper){
            setChannelSize();
        }
    }
}

function sidebarBtn() {
    sidebarBig.classList.toggle("showing")
    saveSidebarBig();
    setMainSize();
    
}





function init(){
    loadSidebarOption();
    setMainSize();
}

init();

window.sidebarBtn = sidebarBtn;
window.sidebarBtn = sidebarBtn;

function handleSdCnTitleEnter(){
    sdCnTitleHover.style.display="block";
}

function handleSdCnTitleLeave(){
    sdCnTitleHover.style.display="none";
}

if(sdCnTitle && sdCnTitleHover){
    sdCnTitle.addEventListener("mouseover",handleSdCnTitleEnter)
    sdCnTitleHover.addEventListener("mouseleave",handleSdCnTitleLeave)
}

function handleSdCnAvatarBigEnter(){
    sdCnAvatarBigHover.style.display="block";
}
function handleSdCnAvatarBigLeave(){
    sdCnAvatarBigHover.style.display="none";
}

if(sdCnAvatarBig && sdCnAvatarBigHover){
    sdCnAvatarBig.addEventListener("mouseover",handleSdCnAvatarBigEnter)
    sdCnAvatarBigHover.addEventListener("mouseleave",handleSdCnAvatarBigLeave)
}



