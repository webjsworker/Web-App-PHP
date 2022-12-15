<?php
require("user-model.php");
require("controller.php");

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
  case "GET":
    if (isset($_GET["login"]) && isset($_GET["password"])) {
      $user = new User($_GET["login"], $_GET["password"]);
      getUser($user);
    }
    if (!isset($_GET["login"]) && !isset($_GET["password"])) {
      ExitUser();
    }

    break;
  case "POST":
    $user = new User($_POST["login"], $_POST["password"], $_POST["email"], $_POST["name"]);
   if( checkUser($user)){
    echo json_encode("User has been created");
   } else {
     addUser($user);
   } ;
   
    break;

}
?>