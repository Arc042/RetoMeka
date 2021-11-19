<?php

include_once '../modelo/producto_model.php';

$newProducto = new producto_model();

$response = array();

$dato=file_get_contents('php://input');
$dato=json_decode($dato);

$min=$dato->min;
$max=$dato->max;

$response['list']=$newProducto->filtroPrecio($min,$max);
$response['error']="no error";

echo json_encode($response);

unset($producto);