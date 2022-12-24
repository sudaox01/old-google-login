<?php
session_start();
if(!isset($_SESSION['loggedin_gsignin'])) {
    header("index.php?ref=welcome&r=1");
}
$username = htmlspecialchars($_SESSION['username']);
echo("Coming soon. In the meantime, go to the <a href='og/?ref=account'>OldGoogle Homepage</a><br>Or, if you want to logout, Click <a href='logout.php?ref=account'>here</a>");
?>