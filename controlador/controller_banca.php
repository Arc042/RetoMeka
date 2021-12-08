<?php
//Controlador con el cual mostramos la cuentas bancarias
include_once '../modelo/cuentabancaria_model.php';

$cuentaBancaria = new cuentabancaria_model();

$response = array();

$response['list']=$cuentaBancaria->mostrar();

$response['error']="no error";

echo json_encode($response);

unset($response);