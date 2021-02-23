const videoViews = document.getElementById("jsVideoViews")

//register views to video
export const registerView = () => {
    const videoId= window.location.href.split("videos/")[1]
    try{
        fetch(`/api/${videoId}/view`,{method:"POST"})
        let videoViewNum = parseInt(videoViews.innerText)
        videoViewNum+=1
        videoViews.innerHTML=videoViewNum

    }
    catch(error){
        console.log(error)
    }
    
}