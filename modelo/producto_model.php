<?php

include_once ("connect_data.php"); 
include_once("producto_class.php");

class producto_model extends producto_class{

    private $link;

    public function OpenConnect()
    {
        $konDat=new connect_data();
        try
        {
            $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
            // mysqli klaseko link objetua sortzen da dagokion konexio datuekin
            // se crea un nuevo objeto llamado link de la clase mysqli con los datos de conexiÃ³n.
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
        mysqli_close ($this->link);
    }

    public function mostrar() {
        $this->OpenConnect();
        $sql = "CALL";

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $newProducto = new productos_model();

            $newProducto->idProducto=$row['idProducto'];
            $newProducto->nombre=$row['nombre'];
            $newProducto->tipo=$row['tipo'];
            $newProducto->descripcion=$row['descripcion'];
            $newProducto->precio=$row['precio'];
            $newProducto->stock=$row['stock'];

            array_push($list, $newProducto);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }
}