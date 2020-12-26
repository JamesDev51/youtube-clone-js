import axios from "axios"
const likeWrapper = document.querySelector("#jsCommentLikeWrapper")
const likeBtns = document.querySelectorAll("#jsCommentLikeBtn")
const dislikeBtns = document.querySelectorAll("#jsCommentDislikeBtn")
const userId = document.getElementById("jsUserId")

let token, tokenValue
let btn
let commentId
let likeList,dislikeList
let userValue


function switchDislikeLike(commentId){
    try{
        axios({
            method:"post",
            url:`/api/${commentId}/comment_dislike_cancle`,
            data:{commentId}
            })
        axios({
            method:"post",
            url:`/api/${commentId}/comment_like`,
            data:{commentId}
            })
            
        
    }catch(error){
        console.log(error)
    }
}



function cancelLike(commentId){
    try{
        axios({
            method:"post",
            url:`/api/${commentId}/comment_like_cancle`,
            data:{commentId}
            })
            
        
    }catch(error){
        console.log(error)
    }
}

function handleLikeClick(event){
    console.log(event)
    commentId=event.path[3].previousElementSibling.value
    likeList=event.path[2].previousElementSibling.value
    dislikeList=event.path[2].nextElementSibling.value
    userValue=userId.value
    btn=event.path[1]
    token=event.path[3].children[0]
    tokenValue=token.value
    
    
    if (likeList.includes(userValue) || tokenValue =="like"){
        token.value="none"
        cancelLike(commentId)
    }else if(dislikeList.includes(userValue) || tokenValue =="dislike"){
        token.value="like"
        switchDislikeLike(commentId)
    }else{
        try{
            token.value="like"
            axios({
                method:"post",
                url:`/api/${commentId}/comment_like`,
                data:{commentId}
                })
        }catch(error){
            console.log(error)
        }
    }
}

function cancelDislike(commentId){
    try{
        axios({
            method:"post",
            url:`/api/${commentId}/comment_dislike_cancle`,
            data:{commentId}
            })
            
        
    }catch(error){
        console.log(error)
    }
}

function switchlikeDislike(commentId){
    try{
        axios({
            method:"post",
            url:`/api/${commentId}/comment_like_cancle`,
            data:{commentId}
            })
        axios({
            method:"post",
            url:`/api/${commentId}/comment_dislike`,
            data:{commentId}
            })
    }catch(error){
        console.log(error)
    }
}

function handleDislikeClick(event){
    console.log(event)
    commentId=event.path[3].previousElementSibling.value
    likeList=event.path[3].children[1].value
    dislikeList=event.path[3].children[3].value
    userValue=userId.value
    btn=event.path[1]
    token=event.path[3].children[0]
    tokenValue=token.value
    
    if (dislikeList.includes(userValue) || tokenValue =="dislike"){
        token.value="none"
        cancelDislike(commentId)
    }else if(likeList.includes(userValue) || tokenValue =="like"){
        token.value="dislike"
        switchlikeDislike(commentId)
    }else{
        try{
            token.value="dislike"
            axios({
                method:"post",
                url:`/api/${commentId}/comment_dislike`,
                data:{commentId}
                })
        }catch(error){
            console.log(error)
        }
    }
}

function init(){

    likeBtns.forEach(function(likeBtn){
        likeBtn.addEventListener("click",handleLikeClick)
    })
    dislikeBtns.forEach(function(dislikeBtn){
        dislikeBtn.addEventListener("click",handleDislikeClick)
    })
}
if(likeWrapper){
    init()
}