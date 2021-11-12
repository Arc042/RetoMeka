<?php

include_once ("connect_data.php"); 
include_once("movimientos_class.php");

class movimientos_model extends movimientos_class{

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

    public function mostrar($idCuentaBancaria) {
        $this->OpenConnect();

        $sql = "SELECT * FROM movimientos WHERE idCuentaBancaria = '$idCuentaBancaria'";

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $movimientos = new movimientos_model();

            $movimientos->idMovimientos=$row['idMovimientos'];
            $movimientos->fecha=$row['fecha'];
            $movimientos->concepto=$row['concepto'];
            $movimientos->cantidad=$row['cantidad'];
            $movimientos->idCuentaBancaria=$row['idCuentaBancaria'];

            array_push($list, $movimientos);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }

}