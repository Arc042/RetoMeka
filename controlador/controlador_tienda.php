<?php

include_once '../model/producto_Model.php';

$producto = new producto_model();

$response = array();

$response['list']=$producto->verProductos();

$response['error']="no error";

echo json_encode($response);

unset($producto);

