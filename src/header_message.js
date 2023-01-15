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

console.log(`
Для проверяющего.
Внесены правки в соответсвии с последним фитбеком
1. -Проверить соответствие ответа формату JSON 
Cделано: в ответе от сервера приходит обьект JSON пример: {"status":"exist;","code":"200","login":"TomTom"}, ранее приходила строка "..."
2. -Проверить отправку формы уже зарегистрированного логина в БД. 
Cделано :  Исравлено, логин должен быть уникальным для регистрационной формы.
 3.-Проверить ввод валидного (цифры+буквы) пароля + спец.символы
Cделано:  Для пароля обязательно цифры+буквы. Образца test123. Допустимо test123^%&
4. -Проверить ввод пароля отличного от пароля в поле password.
Сделано : Валидация полей формы происходит по щелчку вне поля, либо кнопка отправить (register)
5. -Проверить ввод адреса уже зарегистрированного в БД 
Cделано :  Исравлено, логин должен быть уникальным для регистрационной формы.
6.Нельзя зарегистрировать пользователя с именем : "us"
Сделано : Валидация длинны имени установлено 2 символа. 
`)
 
