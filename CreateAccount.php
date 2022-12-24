<?php
if(isset($_POST['username']) && isset($_POST['Passwd']) && isset($_POST['PasswdAgain']) && isset($_POST['loc']) && isset($_POST['Birthday'])) {
    echo("true");
}
else {
    die("false");
}
print_r(htmlspecialchars($_POST));
//print_r($_POST);
$cresponse = $_POST['g-recaptcha-response'];
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
            "secret=6Ld3Ja8bAAAAAMYVps2qP2D4RR7STC0aLPgmI5UP&response=$cresponse");

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);
print_r($_POST);
echo("$server_output");
$carray = json_decode($server_output, true);
print_r($carray);
if($carray['success'] === true) {
    echo("true");
}
else {
    echo("false");
   die();
}
$username = $_POST['username'];
$username = str_ireplace('..', '', $username);
$username = str_ireplace('/', '', $username);
$username = htmlspecialchars($username);
echo($username);
$hash = password_hash($_POST['Passwd'], PASSWORD_DEFAULT);
echo($hash);
$birthdate = htmlspecialchars($_POST['Birthday']);
echo($birthdate);
$location = htmlspecialchars($_POST['loc']);
echo($location);
if($_POST['Passwd'] === $_POST['PasswdAgain']) {
echo("true");
}
else {
    die("false");
}
unset($_POST['Passwd']);
unset($_POST['PasswdAgain']);
$userarray = array(
    "username" => $username,
    "password" => $hash,
    "birth" => $birthdate,
    "location" => $location
);
print_r($userarray);
$json = json_encode($userarray);
echo($json);
file_put_contents("users/$username.json", $json);
header("Location: index.php?ref=register");
?>