<?php
include_once ("connect_data.php");  
include_once("usuario_class.php");

class usuario_model extends usuario_class {
    
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
  
}
?>
