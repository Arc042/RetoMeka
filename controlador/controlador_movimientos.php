<?php
//Controlador para los movimientos de las transferencias entre cuentas
include_once '../modelo/movimientos_model.php';

$movimientos = new movimientos_model();

$response = array();

$dato=file_get_contents('php://input');
$dato=json_decode($dato);

$idCuentaBancaria=$dato->idCuentaBancaria;


$response['list']=$movimientos->mostrar($idCuentaBancaria);
$response['error']="no error";

echo json_encode($response);

unset($producto);