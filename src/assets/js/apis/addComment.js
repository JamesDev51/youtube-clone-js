import axios from "axios"
const commentForm = document.getElementById("jsCommentForm")
const commentInput = document.getElementById("jsCommentInput")
const resetBtn = document.getElementById("jsResetBtn")
const submitBtn = document.getElementById("jsSubmitBtn")



const sendComment = async(video,text) => {
    const response = await axios({
        method: 'post',
        url: `/api/${video}/comment`,
        data: {
          video,
          text
        }
      });
}


function handelSubmit(event){
    event.preventDefault()
    const video = window.location.href.split("videos/")[1]
    const text = commentInput.value
    sendComment(video,text)
    commentInput.value=""
}

function handleReset(){
    commentInput.value=""
}


function init(){
    commentForm.addEventListener("reset",handleReset)
    commentForm.addEventListener("submit",handelSubmit)
}

if(commentForm){
    init()
}