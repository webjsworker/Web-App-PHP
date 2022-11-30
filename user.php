<?php
require_once("db.php");
require_once("auth.php");

function ExitUserService()
{
  CloseAuth();
}

function addUserService($user)
{
  addUserDB($user);
  //echo json_encode('Add user succssful');
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
    echo json_encode($result[array_key_first($result)]['login']);
  } else {
    echo json_encode('not exist');
  }
}


?>