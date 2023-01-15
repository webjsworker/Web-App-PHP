<?php
function GetAuth()
{
    session_start();
    $_SESSION['auth'] = true;
}

function CloseAuth()
{
    session_start();
    unset($_SESSION['auth']);
    unset($_COOKIE['PHPSESSID']);
    session_destroy();
}
?>