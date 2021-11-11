<?php

require_once '../modelo/usuario_model.php';

$data=json_decode(file_get_contents("php://input"),true);

$nombre=$data['nombre'];
$contrasena=$data['contrasena'];


$response=array();

if (( $nombre !=null ) && ( $contrasena !=null )){
 
    $user=new usuario_model();
    $user->nombre=$nombre;
    $user->contrasena=$contrasena;
    
    if ($user->findUserByUsername()) // si es correcto el userName y el password
    {
        session_start();
        $_SESSION['nombre']=$nombre;
        
        $_SESSION['tipo']=$user->tipo;
    
        $response['user']=$user; 
        $response['error']="no error";       
    }  else {        
        $response['error']="incorrect user"; // no correct user
    }
}  else {
    
    $response['error']="username or password not filled";     // not filled user or password
}

echo json_encode($response);

unset($response);

