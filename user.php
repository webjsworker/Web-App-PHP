<?php
require_once("db.php");
require_once("auth.php");
require("response.php");

function ExitUserService()
{
  CloseAuth();
}

function addUserService($user)
{
  header('Content-Type: application/json; charset=utf-8');
  addUserDB($user);
  echo json_encode(new AddUserSuccssful);
  return;
}
function getUserService($userItem)
{
  $array = getUsers();
  $result = array_filter($array, function ($item) use ($userItem) {
    if ($item['login'] == $userItem->{'login'} && $item['password'] == $userItem->{'password'}) {
      return true;
    }
  });
  GetAuth();
  if (($result)) {
    header('Content-Type: application/json; charset=utf-8');
    $user = new UserExistMessages;
    $user->login = $result[array_key_first($result)]['login'];
      echo json_encode($user);
    } else {
    echo json_encode(new UserNotExistMessages);
  }
}

function checkUserService($user){
  $array = getUsers();
  $result = array_filter($array, function ($item) use ($user) {
    if ($item['login'] == $user->{'login'} || $item['email'] == $user->{'email'}) {
      return true;
    }
  });
  if (($result)) {
    return true;
    } else {
    return false;
    }
}
function getUserMessage(){
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode(new UserHasBeenCreated);
}

?>