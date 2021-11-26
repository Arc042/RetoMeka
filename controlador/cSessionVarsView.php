<?php
require_once '../modelo/usuario_model.php';

$response=array();

session_start();

if ((isset($_SESSION['username']))  && (isset($_SESSION['tipo']))){
    
    $user= new usuario_model();
    
    $user->username=$_SESSION['username'];
    $user->tipo=$_SESSION['tipo'];
    
    $response['user']= $user;
    $response['error']="logged";
    
} else{  
    $response['error']="not logged";
}
echo json_encode($response);

unset($response);
