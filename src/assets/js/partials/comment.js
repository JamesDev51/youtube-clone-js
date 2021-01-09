const replyBtns = document.querySelectorAll(".reply__write-btn")
const replyShowBtns = document.querySelectorAll(".reply__show-btn")




const SW_CN="showing"

function handleBtnClick(event){
    let replyInputWrapper =event.srcElement.parentElement.parentNode.nextElementSibling.childNodes[0]
    replyInputWrapper.classList.toggle(SW_CN)

}

function handleShowBtnClilck(event){
    let replyWrapper =  event.srcElement.nextSibling
    replyWrapper.classList.toggle(SW_CN)
    
    let cHave = replyWrapper.classList.contains(SW_CN) 
    
    
    if(cHave){
        event.target.innerHTML = `답글 닫기 <i class="fas fa-sort-up"></i>`
        
    }else{
        event.target.innerHTML = `답글 보기 <i class="fas fa-caret-down"></i>`
    }
}




function init(){
    replyBtns.forEach(function(replyBtn){
        replyBtn.addEventListener("click",handleBtnClick)
    })
    replyShowBtns.forEach(function(replyShowBtn){
        replyShowBtn.addEventListener("click",handleShowBtnClilck)
    })
}

if(replyBtns){
    init()
}