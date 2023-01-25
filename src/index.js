const SINGITEM = document.getElementsByTagName('li')
const SINGINFORM = document.querySelector('.singin')
const SINGUPFORM = document.querySelector('.singup')
const SINGIN = SINGITEM[0]
const SINGUP = SINGITEM[1]
const EXIT = SINGITEM[2];
const SUBMITSINGUP = document.querySelectorAll('.form');
const SUBMITSINGUPFORM = document.getElementById('singup');
const SUBMITSINGINFORM = document.getElementById('singin');
const NONE = 'none'
const BLOCK = 'block'
const CLOSE = 'Close'
const SINGIN_CONTAINER = "singin_container"
const SINGUP_CONTANER = "singup_container"


let DisplayBlock = (elem) => {
    elem.style.display = BLOCK
}
let SingInClick = () => {

    DisplayBlock(SINGINFORM)
}

let SingUpClick = () => {

    DisplayBlock(SINGUPFORM)
}

let DisplayNone = (elem) => {
    elem.style.display = NONE
}

let GetElement = (elem) => {

    let element = elem.target.className
    if (element === SINGIN_CONTAINER || element === SINGUP_CONTANER) {
        DisplayNone(SINGINFORM)
        DisplayNone(SINGUPFORM)
    }
    let elemcontent = elem.target.innerHTML
    if (elemcontent === CLOSE) {
        DisplayNone(SINGINFORM)
        DisplayNone(SINGUPFORM)
    }
}

async function PostUser() {
     
    let request = await fetch('route.php', {
        method: 'POST',
        body: new FormData(SUBMITSINGUP[1])

    });
    let result = await request.json();
    if(result.code === '400'){
        messageUpOn(result.status, result.code);
        SINGUPFORM.style.display = 'block'
    } 
    if(result.code === '200'){
        messageUpOn(result.status, result.code);
        SINGUPFORM.style.display = 'block'
        setTimeout( ()=>{
          messageUpOff()
        SINGUPFORM.style.display = 'none'  
        } , 2000)
    }
      
}

let SubmitFormUp = (event) => {
    event.preventDefault();

    if (Checklogin(InLogin) &&
        CheckPassword(InPassword) &&
        CheckPassword(InConfirmPassword) &&
        CheckEmail(InEmail) &&
        CheckName(InName)) {
        PostUser()
       // SINGUPFORM.style.display = 'none'
    }
}
async function GetUser() {
    let form = new FormData(SUBMITSINGUP[0])
    let login = form.get('login')
    let password = form.get('password')
    let request = await fetch(`route.php/?login=${login}&password=${password}`, {
        method: 'GET',
    });
    let result = await request.json();
    //console.log(result.status)
    if (result.code == '400') {
        MessageOn()
        return true
    } 
    if(result.code == '200') {
        localStorage.name = result.login
        localStorage.id = document.cookie
        welcomeMesageOn("Hello " + result.login)
        MessageOff()
        SINGINFORM.style.display = 'none'
        ClearFrom()
        return false
    }
}

let SubmitFormIn = (event) => {
    event.preventDefault();
    if (Checklogin(Authlogin) && CheckPassword(AuthPassword)) {
        GetUser()
    }
}
async function ExitClick() {
       
    let request = await fetch(`route.php/`, {
        method: 'GET',
    });
}
SINGIN.addEventListener("click", SingInClick);
SINGUP.addEventListener("click", SingUpClick);
EXIT.addEventListener("click", ExitClick);
document.addEventListener('click', GetElement)
SUBMITSINGUP[1].addEventListener('submit', SubmitFormUp);
SUBMITSINGUP[0].addEventListener('submit', SubmitFormIn);

