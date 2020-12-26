const modalBtn = document.querySelector(".window__modal-btn")
const modalC = document.querySelector(".modalComment")
const modalV= document.querySelector(".modalVideo")

function openModal(){
    modalV.style.display="flex"
}

function openCommentModal(){
    modalC.style.display="flex"
}

function closeModal(){
    modalV.style.display="none"
}
function closeCommentModal(){
    modalC.style.display="none"
}

function handleWindowClick(event){
    if(event.target==modalV){
        modalV.style.display="none"
    }
}
function handleCommentWindowClick(event){
    if(event.target==modalC){
        modalC.style.display="none"
    }
}




window.onclick=handleWindowClick
window.onclick=handleCommentWindowClick
window.openModal = openModal
window.closeModal = closeModal
window.openCommentModal = openCommentModal
window.closeCommentModal = closeCommentModal