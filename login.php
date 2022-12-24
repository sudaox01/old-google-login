<?php
if (!$_SERVER['REQUEST_METHOD'] === 'POST') {
    die("Method Not Allowed. You used " . $_SERVER['REQUEST_METHOD'] . ". This script requires POST");
}
if(isset($_POST['Passwd']) && isset($_POST['Username'])) {
    
}
else {
    die("Username/Password not set.");
}
session_start();
$passwordcount = strlen($_POST['Passwd']);
$username = htmlspecialchars($_POST['Username']);
$passhid = str_repeat("*", $passwordcount);
echo("Username: $username<br>Password: $passhid<br>");
//$hashpwd = password_hash($_POST['Passwd'], PASSWORD_DEFAULT);
//unset($_POST['Passwd']);
//echo("Hashed password: $hashpwd<br>");
if(file_exists("users/$username.json")) {
  $userarray = json_decode(file_get_contents("users/$username.json"), true);
  if(isset($userarray['username'])) {
    if (password_verify($_POST['Passwd'], $userarray['password'])) {
        $_SESSION['username'] = $userarray['username'];
    $_SESSION['loggedin_gsignin'] = "true";
    header("Location: account.php?ref=login");
    die();
} else {
  header("Location: index.php?error=02");
}
  }
  else {
     header("Location: index.php?error=01");
      die();
  }
}
else {
   header("Location: index.php?error=01");
    die();
}