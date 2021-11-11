<?php

include_once ("connect_data.php"); 
include_once("cuentabancaria_class.php");

class cuentabancaria_model extends cuentabancaria_class{

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

        $sql = "SELECT * FROM cuentabancaria";

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $cuentaBancaria = new cuentabancaria_model();

            $cuentaBancaria->idCuentaBancaria=$row['idCuentaBancaria'];
            $cuentaBancaria->tipoCuenta=$row['tipoCuenta'];
            $cuentaBancaria->saldo=$row['saldo'];

            array_push($list, $cuentaBancaria);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }
}