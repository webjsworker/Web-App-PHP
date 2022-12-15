if(localStorage.id === document.cookie){
    welcomeMesageOn("Hello" + localStorage.name)
} else {welcomeMesageOff()}

function GetAway(){
    localStorage.name = ''
    localStorage.id = ''
    headerMenu.style.display = 'block'   
    welcomeMesageOff()
}

headerGoOut.addEventListener("click", GetAway);