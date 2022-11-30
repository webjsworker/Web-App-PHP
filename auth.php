<?php
function GetAuth()
{
    session_start();
    $_SESSION['auth'] = true;
}

function CloseAuth()
{
    session_start();
    session_destroy();
    unset($_SESSION['auth']);
    unset($_COOKIE['PHPSESSID']);
}
?>