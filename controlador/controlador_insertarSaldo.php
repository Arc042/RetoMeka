<?php

include_once ('../modelo/cuentabancaria_model.php');

$data=json_decode(file_get_contents("php://input"), true);

$insertarSaldo = new cuentabancaria_model();

$insertarSaldo->idCuentaBancaria=$data['idCuentaBancaria'];
$insertarSaldo->tipoCuenta=$data['tipoCuenta'];
$insertarSaldo->saldo=$data['saldo'];

$response=array();

$response['error']=$insertarSaldo->insertarSaldo($idCuentaBancaria, $saldo);
echo json_encode($response);

