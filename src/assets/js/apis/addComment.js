import axios from "axios"
const commentForm = document.getElementById("jsCommentForm")
const commentInput = document.getElementById("jsCommentInput")
const resetBtn = document.getElementById("jsResetBtn")
const submitBtn = document.getElementById("jsSubmitBtn")


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
    submitBtn.style.backgroundColor="rgba(0,0,0,0.5)"
    submitBtn.style.cursor="default"
    submitBtn.disabled=true
    resetBtn.style.cursor="default"
    resetBtn.disabled=true
    
}

//comment ajax
const sendComment = async(video,text) => {
    await axios({
        method: 'post',
        url: `/api/${video}/comment`,
        data: {
        video,
        text
        }
    });

}

//submit comment
function handelSubmit(event){
    event.preventDefault()
    const video = window.location.href.split("videos/")[1]
    const text = commentInput.value
    sendComment(video,text)
    commentInput.value=""
    returnBtn()
    setTimeout(function(){location.reload()},150)
}

//reset btn
function handleReset(){
    commentInput.value=""
    disableBtn()
    returnBtn()
}

//empty btn disabled 
function handleBtn(event){
    if(event.srcElement.value == ""){
        disableBtn()
        returnBtn()
    }else{
        changeBtn()
    }
}

function init(){
    disableBtn()
    commentForm.addEventListener("reset",handleReset)
    commentForm.addEventListener("submit",handelSubmit)
    commentInput.addEventListener("input",handleBtn)
}

if(commentForm){
    init()
}