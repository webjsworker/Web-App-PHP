<?php
require_once("user.php");

function addUser($user)
{
    return addUserService($user);
}
function getUser($user)
{
    return getUserService($user);
}
function ExitUser()
{
    return ExitUserService();
}
function checkUser($user){
    return checkUserService($user);
}
function getMessage(){
    return getUserMessage();
}
?>