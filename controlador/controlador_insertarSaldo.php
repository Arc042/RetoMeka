<?php

include_once ('../modelo/cuentabancaria_model.php');

$data=json_decode(file_get_contents("php://input"), true);

$insertarSaldo = new cuentabancaria_model();
if (isset($idCuentaBancaria) )
 {
    
$insertarSaldo->setIdCuentaBancaria($idCuentaBancaria );    
 }

$response=array();
$insertarSaldo->idCuentaBancaria=$data['idCuentaBancaria'];
$insertarSaldo->saldo=$data['saldo'];
echo($insertarSaldo->idCuentaBancaria);
echo($insertarSaldo->saldo);

$response['error']=$insertarSaldo->updateSaldo();
echo json_encode($response);

