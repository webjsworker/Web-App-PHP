<?php
function getUsers()
{
    $files = file_get_contents('bd.json');

    $array = json_decode($files, true);
    return $array;
}

function addUserDB($user)
{
    $bdArr = getUsers();
    $bdArr[] = $user;
    file_put_contents('bd.json', json_encode($bdArr));
    unset($bdArr);
    unset($user);
}
?>