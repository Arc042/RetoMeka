<?php
require_once '../modelo/usuario_model.php';

$response=array();

session_start();

if ((isset($_SESSION['nombre']))  && (isset($_SESSION['tipo']))){
    
    $user= new usuario_model();
    
    $user->nombre=$_SESSION['nombre'];
    $user->tipo=$_SESSION['tipo'];
    
    $response['user']= $user;
    $response['error']="logged";
    
} else{  
    $response['error']="not logged";
}
echo json_encode($response);

unset($response);
