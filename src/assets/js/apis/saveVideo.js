const saveVideoBtn = document.getElementById("jsVideoSaveBtn")
const saveVideoToken = document.getElementById("jsVideoSaveToken")

const CR = "colorRed"
let token

//click save video btn
function handleSaveBtn(){
    const videoId= window.location.href.split("videos/")[1]
    try{
        saveVideoBtn.removeEventListener("click",handleSaveBtn)
        saveVideoBtn.addEventListener("click",handleCancelBtn)
        saveVideoToken.value="yes"
        saveVideoBtn.classList.add(CR)
        fetch(`/api/${videoId}/watchlist`,{method:"POST"})

    }catch(error){
        console.log(error)
    }
}

//cancel save video btn
function handleCancelBtn(){
    const videoId= window.location.href.split("videos/")[1]
    try{
        saveVideoBtn.removeEventListener("click",handleCancelBtn)
        saveVideoBtn.addEventListener("click",handleSaveBtn)
        saveVideoToken.value="no"
        saveVideoBtn.classList.remove(CR)
        fetch(`/api/${videoId}/watchlist/cancel`,{method:"POST"})
    }catch(error){
        console.log(error)
    }

}


function init(){
    token=saveVideoToken.value
    if(token=="yes"){
        saveVideoBtn.classList.add(CR)
        saveVideoBtn.addEventListener("click",handleCancelBtn)
    }else{
        saveVideoBtn.addEventListener("click",handleSaveBtn)
    }
}

if(saveVideoBtn){
    init()
}