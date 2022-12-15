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
function messageUpOn(){
    MessageUP[0].style.display = 'block'
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
            console.log("Space")
            AddClassError(elem)
        }
    })

}
function checkValue(elem) {
   // console.log(elem.value)
    if (!elem.value) {
        AddClassError(elem)
        AddPlaceholder(elem)
     //   console.log('Empty')
    }
    return false
}
function Checklogin(elem) {
    if (elem.value) {
        if (/^[a-zA-Z1-9]+$/.test(elem.value) === false ||
            elem.value.length < 6 || elem.value.length > 20) {
            AddClassError(elem)
            console.log('Incorrect login');
            return false;
        } else {
            remoteClassError(elem)
            return true;
        }
    }
    IsSpace(elem)
    checkValue(elem)
}
function CheckPassword(elem) {
    if (elem.value) {
       // console.log(elem.value)
      //  console.log(/[a-z]+[0-9]+|[0-9]+[a-z]+$/gm.test(elem.value))
        if(/[a-z]+[0-9]+|[0-9]+[a-z]+$/gm.test(elem.value) === false){
            AddClassError(elem)
            console.log('Incorrect password');
            return false;
        }
        if (elem.value.length < 6 || elem.value.length > 20) {
            AddClassError(elem)
            console.log('Incorrect password');
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
            console.log('Incorrect email');
            return false;
        } else {
            remoteClassError(elem)
            return true;
        }
    }
    checkValue(elem)
}
function CheckConfirmPassword(elem, elemconfirm) {
    if (elem.value != elemconfirm.value || elemconfirm.value == "") {
        AddClassError(elemconfirm)
        AddPlaceholder(elemconfirm)
        return false;
    } else {
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
InName.onblur = function () { Checklogin(InName) };



