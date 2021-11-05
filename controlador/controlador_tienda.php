<?php

include_once '../model/producto_Model.php';

$newProducto = new producto_model();

$response = array();

$response['list']=$newProducto->mostrar();

$response['error']="no error";

echo json_encode($response);

unset($producto);