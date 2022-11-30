const welcomeMesage = document.querySelector('.welcom')
const headerMenu = document.querySelector('.menu')
const headerGoOut = document.querySelector('.out_menu')

function welcomeMesageOn(text) {
    welcomeMesage.style.display = 'block'
    welcomeMesage.innerHTML = text
    headerMenu.style.display = 'none'
    headerGoOut.style.display = 'block'
}
function welcomeMesageOff() {
    welcomeMesage.style.display = 'none'
    headerGoOut.style.display = 'none'
}
