<?php
include_once ("connect_data.php");  // klase honetan gordetzen dira datu basearen datuak. erabiltzailea...
include_once("usuario_class.php");

class usuario_model extends usuario_class {
    
    private $link;
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
        mysqli_close ($this->link);
    }
    public function findUserByUsername()
    {
        $this->OpenConnect();
        
        $username=$this->username;
        $contrasena=$this->contrasena;
        
        $sql="SELECT usuario.*  FROM usuario WHERE usuario.username='$username'";
        $result= $this->link->query($sql);
        
        $valor=2;
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        { 
            if ($contrasena==$row['contrasena'])
            {
                $this->tipo=$row['tipo'];
                $valor=1;
            }else{
                $valor=3;
            }
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
        return $valor;
    }

    public function register($username,$nombre,$apellidos,$contrasena)
    {
        $this->OpenConnect();
        
        $sql="INSERT INTO `usuario`(`username`, `nombre`, `apellidos`, `contrasena`) VALUES ('$username','$nombre','$apellidos','$contrasena')";
        $result= $this->link->query($sql);
        
        $valor=false;
        
        /*if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        { 
            
            if ($row!=null)
            {
                $valor=true;
            }
        }*/
        
        //mysqli_free_result($result);
        $this->CloseConnect();
        //return $valor;
    }
  
}
?>
