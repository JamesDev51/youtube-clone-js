const subscribeBtn = document.getElementById("jsSubscribeBtn")
const subscribeToken = document.getElementById("jsSubscribeToken")
const channelId = document.getElementById("jsChannelId")

const CSB = "colorSb"
const CN = "colorNo"

let channelIdValue
let token

//click subscribe btn
function handleSubscribeBtn(){
    try{
        subscribeBtn.removeEventListener("click",handleSubscribeBtn)
        subscribeBtn.addEventListener("click",handleCancelBtn)
        subscribeToken.value="yes"
        subscribeBtn.classList.remove(CN)
        subscribeBtn.classList.add(CSB)
        subscribeBtn.innerHTML="구독중"
        fetch(`/api/${channelIdValue}/subscribe`,{method:"POST"})
        
    }catch(error){
        console.log(error)
    }
}

//cancel subscribe btn
function handleCancelBtn(){
    try{
        subscribeBtn.removeEventListener("click",handleCancelBtn)
        subscribeBtn.addEventListener("click",handleSubscribeBtn)
        subscribeToken.value="no"
        subscribeBtn.classList.remove(CSB)
        subscribeBtn.classList.add(CN)
        subscribeBtn.innerHTML="구독"
        fetch(`/api/${channelIdValue}/subscribe/cancel`,{method:"POST"})
    }catch(error){
        console.log(error)
    }
}


function init(){
    token=subscribeToken.value
    channelIdValue = channelId.value
    if(token=="yes"){
        subscribeBtn.classList.add(CSB)
        subscribeBtn.innerHTML="구독중"
        subscribeBtn.addEventListener("click",handleCancelBtn)
    }else{
        subscribeBtn.classList.add(CN)
        subscribeBtn.innerHTML="구독"
        subscribeBtn.addEventListener("click",handleSubscribeBtn)
    }
}

if(subscribeBtn){
    init()
}