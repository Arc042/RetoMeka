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
           
        }
        catch(Exception $e)
        {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8");
    }
    
    public function CloseConnect()
    {
        mysqli_close ($this->link);
    }

    public function mostrar() {
        $this->OpenConnect();

        $sql = "SELECT * FROM producto";

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $newProducto = new producto_model();

            $newProducto->idProducto=$row['idProducto'];
            $newProducto->nombre=$row['nombre'];
            $newProducto->tipo=$row['tipo'];
            $newProducto->descripcion=$row['descripcion'];
            $newProducto->precio=$row['precio'];
            $newProducto->stock=$row['stock'];
            $newProducto->img=$row['img'];

            array_push($list, $newProducto);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }

    public function ordenarAZ() {
        $this->OpenConnect();

        $sql = "SELECT * FROM producto ORDER BY nombre ASC";

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $newProducto = new producto_model();

            $newProducto->idProducto=$row['idProducto'];
            $newProducto->nombre=$row['nombre'];
            $newProducto->tipo=$row['tipo'];
            $newProducto->descripcion=$row['descripcion'];
            $newProducto->precio=$row['precio'];
            $newProducto->stock=$row['stock'];
            $newProducto->img=$row['img'];

            array_push($list, $newProducto);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }

     public function mostrarZA() {
        $this->OpenConnect();

        $sql = "SELECT * FROM producto ORDER BY nombre DESC";

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $productoAZ = new producto_model();

            $productoAZ->idProducto=$row['idProducto'];
            $productoAZ->nombre=$row['nombre'];
            $productoAZ->tipo=$row['tipo'];
            $productoAZ->descripcion=$row['descripcion'];
            $productoAZ->precio=$row['precio'];
            $productoAZ->stock=$row['stock'];
            $productoAZ->img=$row['img'];

            array_push($list, $productoAZ);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }

    public function ordenarTipo($tipo) {
        $this->OpenConnect();

        $sql = "SELECT * FROM producto WHERE tipo ='$tipo'";
        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $productoAZ = new producto_model();

            $productoAZ->idProducto=$row['idProducto'];
            $productoAZ->nombre=$row['nombre'];
            $productoAZ->tipo=$row['tipo'];
            $productoAZ->descripcion=$row['descripcion'];
            $productoAZ->precio=$row['precio'];
            $productoAZ->stock=$row['stock'];
            $productoAZ->img=$row['img'];

            array_push($list, $productoAZ);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }

    public function buscarNombre($nombre) {
        $this->OpenConnect();

        $sql = "SELECT * FROM producto WHERE `nombre` LIKE '%$nombre%';";
        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $producto = new producto_model();

            $producto->idProducto=$row['idProducto'];
            $producto->nombre=$row['nombre'];
            $producto->tipo=$row['tipo'];
            $producto->descripcion=$row['descripcion'];
            $producto->precio=$row['precio'];
            $producto->stock=$row['stock'];
            $producto->img=$row['img'];

            array_push($list, $producto);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }

    public function filtroPrecio($min,$max) {
        $this->OpenConnect();

        $sql = "SELECT * FROM `producto` WHERE `precio`>=$min AND `precio`<=$max;";
        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $producto = new producto_model();

            $producto->idProducto=$row['idProducto'];
            $producto->nombre=$row['nombre'];
            $producto->tipo=$row['tipo'];
            $producto->descripcion=$row['descripcion'];
            $producto->precio=$row['precio'];
            $producto->stock=$row['stock'];
            $producto->img=$row['img'];

            array_push($list, $producto);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }
}