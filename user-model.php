<?php
class User
{
    public $login, $password, $email, $name;

    function __construct($login, $password, $email = 'undefined', $name = 'undefined')
    {
        $this->login = $login;
        $this->password = strval(sha1($password));
        $this->email = $email;
        $this->name = $name;
    }

}
?>