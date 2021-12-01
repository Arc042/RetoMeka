<?php

include_once ("connect_data.php");
include_once ("reclamacion_class.php");

class reclamacion_model extends reclamacion_class
{
    public $link;  
    
         
   
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
         
    }
    catch(Exception $e)
    {
    echo $e->getMessage();
    }
        $this->link->set_charset("utf8"); 
    }                   
 
 public function CloseConnect()
 {
     
     $this->link->close();
 }
 
 public function insert()
 {
     
      $this->OpenConnect();  
      $nombre= $this->nombre;
      $correo= $this->correo;
      $texto= $this->texto;
      $sql="INSERT INTO reclamaciones (reclamaciones.nombre, reclamaciones.correo, reclamaciones.texto) VALUES ('$nombre','$correo','$texto')";

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

