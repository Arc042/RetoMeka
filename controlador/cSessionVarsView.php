<?php
require_once '../modelo/usuario_model.php';

$response=array();

session_start();

if ((isset($_SESSION['nombre']))  && (isset($_SESSION['tipo']))){
    
    $usuario= new usuario_model();
    
    $usuario->nombre=$_SESSION['nombre'];
    $usuario->type=$_SESSION['type'];
    
    $response['usuario']= $usuario;
    $response['error']="no error";
    
} else{  
    $response['error']="You are not logged";
}
echo json_encode($response);

unset($response);
