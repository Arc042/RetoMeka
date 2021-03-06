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

    // Funcion para mostrar cuentas bancarias
    public function mostrar() {
        $this->OpenConnect();

        $sql = "SELECT * FROM cuentabancaria";

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $cuentaBancaria = new cuentabancaria_model();

            $cuentaBancaria->idCuentaBancaria=$row['idCuentaBancaria'];
            $cuentaBancaria->numCuenta=$row['numCuenta'];
            $cuentaBancaria->tipoCuenta=$row['tipoCuenta'];
            $cuentaBancaria->saldo=$row['saldo'];

            array_push($list, $cuentaBancaria);
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }


    // Funcion para actualizar saldo
    public function updateSaldo(){
        $this->OpenConnect();
        $idCuentaBancaria=$this->idCuentaBancaria;
        $saldo=$this->saldo;

        $sql = "UPDATE cuentabancaria SET saldo=saldo+'$saldo' WHERE idCuentaBancaria = '$idCuentaBancaria'";

        $result = $this->link->query($sql);

        
        $this->CloseConnect();
    }

    // Funcion para hacer una transferencia
    public function TransferirSaldo($origen, $destino, $importe, $fecha, $concepto){
        $this->OpenConnect();
        echo($importe);
        $sql = "update cuentabancaria SET saldo=saldo-$importe WHERE idCuentaBancaria=$origen";
        echo($sql);
        $result = $this->link->query($sql);

        $sql = "update cuentabancaria SET saldo=saldo+$importe WHERE idCuentaBancaria=$destino";
        echo($sql);
        $result = $this->link->query($sql);
       
        $sql = "CALL InsertarMovimientosMinus($origen,'$fecha','$concepto',$importe)";
         echo($sql);
        $result = $this->link->query($sql);
        
        $sql = "CALL InsertarMovimientosPlus($destino,'$fecha','$concepto',$importe)";
         echo($sql);
        $result = $this->link->query($sql);
        $this->CloseConnect();

        return "hecho";
    }
    
}