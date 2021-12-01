<?php

require_once '../modelo/usuario_model.php';

$data=json_decode(file_get_contents("php://input"),true);

$username=$data['username'];
$nombre=$data['nombre'];
$apellidos=$data['apellidos'];
$contrasena=$data['contrasena'];

/*echo $username;
echo $nombre;
echo $apellidos;
echo $contrasena;*/


$response=array();

$newusuario = new usuario_model();


if (($username !=null) && ($nombre !=null) && ($apellidos !=null) && ($contrasena !=null)) {
    $response['list']=$newusuario->register($username,$nombre,$apellidos,$contrasena);
    $response['error']="Se ha insertado correctamente";
} else {
    if ($username ==null) {
    $response['error']="username vacio";
    } elseif ($nombre ==null) {
        $response['error']="nombre vacio";
    } elseif ($apellidos ==null) {
        $response['error']="apellidos vacio";
    } elseif ($contrasena ==null) {
        $response['error']="contraseña vacio";
    } 
}







// if (( $username !=null ) && ( $contrasena !=null )){
 
//     $user=new usuario_model();
//     $user->username=$username;
//     $user->contrasena=$contrasena;
    
//     $valor= $user->findUserByUsername();

//     if ($valor==1) // si es correcto el userName y el password
//     {
//         session_start();
//         $_SESSION['username']=$username;
        
//         $_SESSION['tipo']=$user->tipo;
    
//         $response['user']=$user; 
//         $response['error']="no error";       
//     }  else if($valor==2){        
//         $response['error']="incorrect username"; // no correct user
//     }else{
//         $response['error']="wrong password ";
//     }
// }  else {
    
//     $response['error']="username or password not filled";     // not filled user or password
// }



echo json_encode($response);
unset($response);


