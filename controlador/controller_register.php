<?php
/*Controlador para registrar un usuario*/
require_once '../modelo/usuario_model.php';

$data=json_decode(file_get_contents("php://input"),true);

$username=$data['username'];
$nombre=$data['nombre'];
$apellidos=$data['apellidos'];
$contrasena=$data['contrasena'];

$response=array();

$newusuario = new usuario_model();

if (($username !=null) && ($nombre !=null) && ($apellidos !=null) && ($contrasena !=null)) {
    $response['list']=$newusuario->register($username,$nombre,$apellidos,$contrasena);
    $response['error']="Se ha insertado correctamente";
} else {
    if ($username ==null) {
    $response['error']="username vacio";
    } elseif ($nombre ==null) {
        $response['error']="nombre vacio";
    } elseif ($apellidos ==null) {
        $response['error']="apellidos vacio";
    } elseif ($contrasena ==null) {
        $response['error']="contraseña vacio";
    } 
}

echo json_encode($response);
unset($response);