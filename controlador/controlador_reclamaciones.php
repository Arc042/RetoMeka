<?php
//Controlador que inserta las reclamaciones del formulario en la BBDD
include_once ('../modelo/reclamacion_model.php');

$data=json_decode(file_get_contents("php://input"), true);

$reclamacion = new reclamacion_model();

$reclamacion->nombre=$data['nombre'];
$reclamacion->correo=$data['correo'];
$reclamacion->texto=$data['texto'];

$response=array();

$response['error']=$reclamacion->insert();
echo json_encode($response);

