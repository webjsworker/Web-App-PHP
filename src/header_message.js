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
1. - Проверить ввод пароля отличного от пароля в поле password 
(пожалуйста см. скрин и видео).
Сделано: Исправлена функция валидации поля повторного ввода пароля. 
2. - Как воспроизвести ошибку headers already sent:
 На данный момент я использую версию PHP 8.1.12, win 10 
 По тех. заданию, проверка на php 7.4. Нужно ли мне проверить работу на данной версии PHP ? 
 Создать Docker контейнер с конфигурацией,  linux, php 7.4? 
 На данный момент, при  авторизации под зарегистрированным пользоваетелем
  warning не регистрируется в error.log
  К примеру есть запись в error.log ранее :
  [Tue Nov 29 21:12:26.476374 2022] [php:warn] [pid 12204:tid 1084] 
  Что позволяет предположить что отображение, warning включено? 

`)
 
