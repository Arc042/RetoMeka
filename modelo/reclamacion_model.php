<?php

include_once ("connect_data.php");
include_once ("reclamacion_class.php");

class reclamacion_model extends reclamacion_class
{
    public $link;  // datu basera lotura - enlace a la bbdd
    public $objEditorial;  //editorialaren datuak gordeko dira hemen objetu bezala
         
   
 public function getObjEditorial() 
 {
        return $this->objectEditorial;
 }

 public function OpenConnect()
    {
    $konDat=new connect_data();
    try
    {
         $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
         // mysqli klaseko link objetua sortzen da dagokion konexio datuekin
         // se crea un nuevo objeto llamado link de la clase mysqli con los datos de conexión. 
    }
    catch(Exception $e)
    {
    echo $e->getMessage();
    }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta 
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }                   
 
 public function CloseConnect()
 {
     //mysqli_close ($this->link);
     $this->link->close();
 }
 
 public function insert()
 {
     
      $this->OpenConnect();  // konexio zabaldu  - abrir conexión   
      $nombre= $this->nombre;
      $correo= $this->correo;
      $texto= $this->texto;
      $sql="INSERT INTO reclamaciones (reclamaciones.nombre, reclamaciones.correo, reclamaciones.texto) VALUES ('$nombre','$correo','$texto')";
    //   $sql = "INSERT INTO reclamaciones '$nombre', '$correo', '$texto' VALUES reclamaciones.nombre ='$nombre', reclamaciones.correo = '$correo', reclamaciones.texto= '$texto'";
      
      $this->link->query($sql);
      
      if ($this->link->affected_rows == 1)
      {
          $msg= $sql." La reclamacion se ha insertado con exito. Num de inserts: ".$this->link->affected_rows;
      } else {
          $msg=$sql." Fallo al insertar la reclamacion: (" . $this->link->errno . ") " . $this->link->error;
      }
      $this->CloseConnect();
      return $msg;
 }

}

