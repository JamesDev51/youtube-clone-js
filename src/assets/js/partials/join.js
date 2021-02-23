const joinDropList = document.querySelector(".join__social-content")
const newJoinTitle = document.querySelector(".join__form-title")
const joinSelect = document.querySelector(".join__select")
const joinForm = document.querySelector(".join__form")
const joinDone = document.querySelector(".join__done")

const SW__CN="showing"

function boldJoinSelect(){
    joinSelect.style.fontWeight = "600"
    joinSelect.style.fontSize = "17px"
}
function boldJoinForm() {
    joinForm.style.fontWeight = "600"
    joinForm.style.fontSize = "17px"
}
function socialJoinDropdown(){
    joinDropList.classList.toggle(SW__CN)
}


if(joinDropList){
    boldJoinSelect()
}
if(newJoinTitle){
    boldJoinForm()
}



window.socialJoinDropdown = socialJoinDropdown;