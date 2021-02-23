import axios from "axios"
const likeWrapper = document.querySelector("#jsCommentLikeWrapper")
const likeBtns = document.querySelectorAll("#jsCommentLikeBtn")
const dislikeBtns = document.querySelectorAll("#jsCommentDislikeBtn")
const userId = document.getElementById("jsUserId")

let btn
let token, tokenValue
let commentId
let likeList,dislikeList
let userValue

//COMMENT LIKE DISLIKE NUMBER
//like number up
function likeNumUp(like){
    let num
    if (like.innerHTML==""){
        num=0
    }else{
        num=parseInt(like.innerHTML)
    }
    num+=1
    like.innerHTML=num
}

//dislike number up
function dislikeNumUp(dislike){
    let num
    if (dislike.innerHTML==""){
        num=0
    }else{
        num=parseInt(dislike.innerHTML)
    }
    num+=1
    dislike.innerHTML=num
}

//like number down
function likeNumDown(like){
    if(like.innerHTML == 1){
        like.innerHTML=""
    }
    else if (like.innerHTML != 0){
        like.innerHTML-=1
    }
}

//dislike number down
function dislikeNumDown(dislike){
    if(dislike.innerHTML == 1){
        dislike.innerHTML=""
    }
    else if (dislike.innerHTML != 0){
        dislike.innerHTML-=1
    }
}

//switch dislike to like
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

//cancel like
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

//handle click like btn
function handleLikeClick(event){
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
        likeNumDown(event.path[1].childNodes[1])
    }else if(dislikeList.includes(userValue) || tokenValue =="dislike"){
        token.value="like"
        switchDislikeLike(commentId)
        dislikeNumDown(event.path[3].children[4].children[0].children[1])
        likeNumUp(event.path[1].childNodes[1])
    }else{
        try{
            token.value="like"
            axios({
                method:"post",
                url:`/api/${commentId}/comment_like`,
                data:{commentId}
                })
            likeNumUp(event.path[1].childNodes[1])
        }catch(error){
            console.log(error)
        }
    }
}

//cancel dislike
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

//switch like to dislike
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

//handle click dislike btn 
function handleDislikeClick(event){
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
        dislikeNumDown(event.path[1].childNodes[1])
    }else if(likeList.includes(userValue) || tokenValue =="like"){
        token.value="dislike"
        switchlikeDislike(commentId)
        likeNumDown(event.path[3].children[2].children[0].children[1])
        dislikeNumUp(event.path[1].childNodes[1])
    }else{
        try{
            token.value="dislike"
            axios({
                method:"post",
                url:`/api/${commentId}/comment_dislike`,
                data:{commentId}
                })
            dislikeNumUp(event.path[1].childNodes[1])
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