<?php

session_start();
session_destroy();
setcookie("PHPSESSID", "", time() - 3600);

setcookie("numVisits",1);

$response=array();

$response['error']="no error";  
$response['numVisits']=$_COOKIE['numVisits'];

echo json_encode($response);
