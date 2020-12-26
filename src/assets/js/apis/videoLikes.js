const videoLikeWrapper = document.getElementById("jsVideoLikeWrapper")
const likeBtn = document.getElementById("jsVideoLikeBtn")
const dislikeBtn = document.getElementById("jsVideoDislikeBtn")
const like =document.getElementById("jsVideoLike")
const dislike =document.getElementById("jsVideoDislike")
const videoToken = document.getElementById("jsVideoToken")


let value 
const CB="colorBlue"
const BB="borderBlue"

function switchDislikeLike(){
    let videoId= window.location.href.split("videos/")[1]
        if (videoId.includes('?')){
           videoId=videoId.split("?")[0] 
        }
        try{
            fetch(`/api/${videoId}/video_dislike/cancle`,{method:"POST"})
            fetch(`/api/${videoId}/video_like`,{method:"POST"})
            let dislikeNum = parseInt(dislike.innerText)
            let likeNum = parseInt(like.innerText)
            dislikeNum-=1
            likeNum+=1
            dislike.innerHTML=dislikeNum
            like.innerHTML=likeNum
            videoToken.value="like"
            likeBtn.classList.add(CB)
            videoLikeWrapper.classList.add(BB)
            dislikeBtn.classList.remove(CB)

        }
        catch(error){
            console.log(error)
        }
}


function cancleLike(){
        let videoId= window.location.href.split("videos/")[1]
        if (videoId.includes('?')){
           videoId=videoId.split("?")[0] 
        }
        try{
            fetch(`/api/${videoId}/video_like/cancle`,{method:"POST"})
            let likeNum = parseInt(like.innerText)
            likeNum-=1
            like.innerHTML=likeNum
            videoToken.value="no"
            likeBtn.classList.remove(CB)
            videoLikeWrapper.classList.remove(BB)
        }
        catch(error){
            console.log(error)
        }
} 


function handleLikeClick(){
    value = videoToken.value
    console.log(value)
    if(value=="no"){
        let videoId= window.location.href.split("videos/")[1]
        if (videoId.includes('?')){
            videoId=videoId.split("?")[0] 
         }
        try{
            fetch(`/api/${videoId}/video_like`,{method:"POST"})
            let likeNum = parseInt(like.innerText)
            likeNum+=1
            like.innerHTML=likeNum
            videoToken.value="like"
            likeBtn.classList.add(CB)
            videoLikeWrapper.classList.add(BB)

        }
        catch(error){
            console.log(error)
        }
    }
    else if(value=="dislike"){
        switchDislikeLike()
    }else if(value="like"){
        cancleLike()
    }
}

function switchLikeDislike(){
    let videoId= window.location.href.split("videos/")[1]
    if (videoId.includes('?')){
       videoId=videoId.split("?")[0] 
    }
    try{
        fetch(`/api/${videoId}/video_like/cancle`,{method:"POST"})
        fetch(`/api/${videoId}/video_dislike`,{method:"POST"})
        let dislikeNum = parseInt(dislike.innerText)
        let likeNum = parseInt(like.innerText)
        dislikeNum+=1
        likeNum-=1
        dislike.innerHTML=dislikeNum
        like.innerHTML=likeNum
        videoToken.value="dislike"
        dislikeBtn.classList.add(CB)
        videoLikeWrapper.classList.add(BB)
        likeBtn.classList.remove(CB)
    }
    catch(error){
        console.log(error)
    }
}


function cancleDislike(){
        let videoId= window.location.href.split("videos/")[1]
        if (videoId.includes('?')){
           videoId=videoId.split("?")[0] 
        }
        try{
            fetch(`/api/${videoId}/video_dislike/cancle`,{method:"POST"})
            let dislikeNum = parseInt(dislike.innerText)
            dislikeNum-=1
            dislike.innerHTML=dislikeNum
            videoToken.value="no"
            dislikeBtn.classList.remove(CB)
            videoLikeWrapper.classList.remove(BB)
        }
        catch(error){
            console.log(error)
        }
}


function handleDislikeClick(){
    value = videoToken.value
    if(value=="no" ){
        let videoId= window.location.href.split("videos/")[1]
        if (videoId.includes('?')){
           videoId=videoId.split("?")[0] 
        }
        try{
            fetch(`/api/${videoId}/video_dislike`,{method:"POST"})
            let dislikeNum = parseInt(dislike.innerText)
            dislikeNum+=1
            dislike.innerHTML=dislikeNum
            videoToken.value="dislike"
            dislikeBtn.classList.add(CB)
            videoLikeWrapper.classList.add(BB)
        }
        catch(error){
            console.log(error)
        }
    }else if(value=="like"){
        switchLikeDislike()
    }else if(value=="dislike"){
        cancleDislike()
    }
}

function likeColor(){
    value=videoToken.value
    if(value=="like"){
        likeBtn.classList.add(CB)
        videoLikeWrapper.classList.add(BB)
        
    }else if(value=="dislike"){
        dislikeBtn.classList.add(CB)
        videoLikeWrapper.classList.add(BB)
    }
}
 

function init(){
likeColor()
likeBtn.addEventListener("click",handleLikeClick)
dislikeBtn.addEventListener("click",handleDislikeClick)
}


if(videoLikeWrapper){
    init()
}