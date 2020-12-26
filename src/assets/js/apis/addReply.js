import axios from "axios"
const replyForm = document.getElementById("jsReplyForm")
const replyInput = document.getElementById("jsReplyInput")
const idHidden = document.getElementById("jsReplyCommentId")
const resetBtn = document.getElementById("jsReplyResetBtn")
const submitBtn = document.getElementById("jsReplySubmitBtn")





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
    //   if(response.status==200){
    //       postAddReply()
    //   }
}


function handelSubmit(event){
    event.preventDefault()
    const video = window.location.href.split("videos/")[1]
    const text = replyInput.value
    const commentId = idHidden.value
    sendReply(video,text,commentId)
    replyInput.value=""
}

function handleReset(){
    replyInput.value=""
}




function init(){
    replyForm.addEventListener("reset",handleReset)
    replyForm.addEventListener("submit",handelSubmit)

}

if(replyForm){
    init()
}