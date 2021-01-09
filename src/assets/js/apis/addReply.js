import axios from "axios"
const replyForm = document.getElementById("jsReplyForm")
const replyInput = document.getElementById("jsReplyInput")
const idHidden = document.getElementById("jsReplyCommentId")
const resetBtn = document.getElementById("jsReplyResetBtn")
const submitBtn = document.getElementById("jsReplySubmitBtn")


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


const sendReply = async(video,text,commentId) => {
    const response = await axios({
        method: 'post',
        url: `/api/${video}/reply`,
        data: {
          video,
          text,
          commentId
        }
      });
}


function handelSubmit(event){
    event.preventDefault()
    const video = window.location.href.split("videos/")[1]
    const text = replyInput.value
    const commentId = idHidden.value
    sendReply(video,text,commentId)
    replyInput.value=""
    returnBtn()
    setTimeout(function(){location.reload()},150)
}

function handleReset(){
    replyInput.value=""
    disableBtn()
    returnBtn()
}

function handleBtn(event){
    if(event.srcElement.value == ""){
        disableBtn()
        returnBtn()
    }else{
        changeBtn()
    }
}



function init(){
    replyForm.addEventListener("reset",handleReset)
    replyForm.addEventListener("submit",handelSubmit)
    replyInput.addEventListener("input",handleBtn)

}

if(replyForm){
    init()
}