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
Для проверяющего. 25.01.23
1.-Проверить ввод пароля отличного от пароля в поле password
+Сделано: Коррекция проверки поля confirm password.
2.-Проверить ввод валидного (цифры+буквы) пароля + спец.символы. 
Пользователь не должен быть зарегистрирован если в пароле содержаться спец 
символы. Валидный пароль пример: test123, невалидный пример: test123$
+Сделано: Для пороля не допустимы спец символы.
3.- Headers already sent" error in PHP
Сделано: в вайле error.log данного сообщения нет( прилагается с проектом). 
Конфигурация для php.ini
display_errors = On
error_reporting = E_ALL
Подскажите как ловить данный warning ?
4.- Скриншот 4(9)  code:400 
+ сделано: данные коды не принадлежать серверу. 
Условно: 200 успешное создание пользователя, 400 пользователь не создан. 
Данные коды приходят в ответе обьекте (JSON) ответа  сервера. 
`)
 
