<?php

include_once ("../modelo/gridModelo.php");


$grid= new gridModelo();

$response=array();

$response['list']=$grid->setGrids(); // returns the list 

$response['error']="no error";


echo json_encode($response); // pasar de php a json

unset ($grid);

