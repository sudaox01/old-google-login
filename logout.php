<?php
session_start();
$_SESSION['username'] = "";
$_SESSION['loggedin_gsignin'] = "";
unset($_SESSION['username']);
unset($_SESSION['loggedin_gsignin']);
unset($_SESSION);
header("Location: index.php?ref=logout");