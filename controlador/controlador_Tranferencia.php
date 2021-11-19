<?php

include_once ('../modelo/cuentabancaria_model.php');

$data=json_decode(file_get_contents("php://input"), true);
$tranferir = new cuentabancaria_model();

 $response=array();
 $origen=$data['origen'];
 $destino=$data['destino'];
 $importe=$data['capital'];

$response['error']=$tranferir->TransferirSaldo($origen, $destino, $importe);
echo json_encode($response);