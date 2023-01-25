const Message = document.querySelector('.message').getElementsByTagName('span')
const MessageUP = document.querySelector('.messageUp').getElementsByTagName('span')
const inputItems = document.querySelectorAll('input');
const Authlogin = inputItems[0];
const AuthPassword = inputItems[1];
const InLogin = inputItems[3];
const InPassword = inputItems[4];
const InConfirmPassword = inputItems[5];
const InEmail = inputItems[6];
const InName = inputItems[7];



function ClearFrom() {
    for (const node of inputItems) {
        if (node.type != 'submit') {
            node.value = '';
        }
    }

}
function MessageOn() {
    Message[0].style.display = 'block'
}
function MessageOff() {
    Message[0].style.display = 'none'
}
function messageUpOn(message , code){
    if(code === '400'){
    MessageUP[0].style.display = 'block'
    MessageUP[0].style.color = 'red'
    MessageUP[0].innerHTML = message;
    }
    if(code === '200'){
        MessageUP[0].style.display = 'block'
        MessageUP[0].style.color = 'green'
        MessageUP[0].innerHTML = message;
    }
    
}

function messageUpOff(){
    MessageUP[0].style.display = 'none'
}

function AddClassError(elem) {
    elem.classList.add('validationError');
}
function remoteClassError(elem) {
    elem.classList.remove('validationError');
}
function AddPlaceholder(elem) {
    elem.placeholder = "There isn't value";
}
function IsSpace(elem) {
    let space = elem.value.split('').map(el => {
        if (el.charCodeAt(0) == 32) {
           // console.log("Space")
            AddClassError(elem)
        }
    })

}
function checkValue(elem) {
    if (!elem.value) {
        AddClassError(elem)
        AddPlaceholder(elem)
    }
    return false
}
function Checklogin(elem) {
    if (elem.value) {
        if (/^[a-zA-Z1-9]+$/.test(elem.value) === false ||
            elem.value.length < 6 || elem.value.length > 20) {
            AddClassError(elem)
            //console.log('Incorrect login');
            return false;
        } else {
            remoteClassError(elem)
            return true;
        }
    }
    IsSpace(elem)
    checkValue(elem)
}
function CheckName(elem) {
    
    if (elem.value) {
        if (/^[a-zA-Z]+$/.test(elem.value) === false ||
            elem.value.length < 2 || elem.value.length > 20) {
            AddClassError(elem)
            //console.log('Incorrect name');
            return false;
        } else {
            remoteClassError(elem)
            return true;
        }
    }
    IsSpace(elem)
    checkValue(elem)
}

function CheckConfirmPasswordAgain(){
    //console.log('confirm =>'   )
    if(inputItems[5].value){
        CheckConfirmPassword(InPassword, InConfirmPassword)  
    }
    
}

function CheckPassword(elem) {
    

    CheckConfirmPasswordAgain()

  //  /[a-z]+[0-9]+|[0-9]+[a-z]+$/
  // [^xyz]

    if (elem.value) {
        if(/^[a-z0-9_-]{6,24}$/gm.test(elem.value) === false){
            AddClassError(elem)
          //  console.log('Incorrect password');
            return false;
        }
        if (elem.value.length < 6 || elem.value.length > 20) {
            AddClassError(elem)
          //  console.log('Incorrect password');
            return false;
        } else {
            remoteClassError(elem)
            IsSpace(elem)
            return true;
        }
    }
    checkValue(elem)
 

}

function CheckEmail(elem) {
    if (elem.value) {
        if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(elem.value) === false) {
            AddClassError(elem)
          //  console.log('Incorrect email');
            return false;
        } else {
            remoteClassError(elem)
            return true;
        }
    }
    checkValue(elem)
}
function CheckConfirmPassword(elem , elemconfirm ) {
    
    if (elem.value != elemconfirm.value || elemconfirm.value == "") {
        AddClassError(elemconfirm)
        AddPlaceholder(elemconfirm)
        return false;
    } else {
        if(/^[a-z0-9_-]{6,24}$/gm.test(elem.value) === false){
        AddClassError(elem)
       // console.log('Incorrect password');
        return false;
    }
        remoteClassError(elemconfirm)
        return true;
    }
    
}

Authlogin.onblur = function () { Checklogin(Authlogin) };
AuthPassword.onblur = function () { CheckPassword(AuthPassword) };
InLogin.onblur = function () { Checklogin(InLogin) };
InPassword.onblur = function () { CheckPassword(InPassword) };
InConfirmPassword.onblur = function () { CheckConfirmPassword(InPassword, InConfirmPassword) };
InEmail.onblur = function () { CheckEmail(InEmail) };
InName.onblur = function () { CheckName(InName) };



