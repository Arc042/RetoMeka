<?php

    class proveedores_class{
        public $idProveedor;
        public $cif;
        public $nombre;
        public $direccion;

        
        

        /**
         * Get the value of idProveedor
         */ 
        public function getIdProveedor()
        {
                return $this->idProveedor;
        }

        /**
         * Set the value of idProveedor
         *
         * @return  self
         */ 
        public function setIdProveedor($idProveedor)
        {
                $this->idProveedor = $idProveedor;

                return $this;
        }

        /**
         * Get the value of cif
         */ 
        public function getCif()
        {
                return $this->cif;
        }

        /**
         * Set the value of cif
         *
         * @return  self
         */ 
        public function setCif($cif)
        {
                $this->cif = $cif;

                return $this;
        }

        /**
         * Get the value of nombre
         */ 
        public function getNombre()
        {
                return $this->nombre;
        }

        /**
         * Set the value of nombre
         *
         * @return  self
         */ 
        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

                return $this;
        }

        /**
         * Get the value of direccion
         */ 
        public function getDireccion()
        {
                return $this->direccion;
        }

        /**
         * Set the value of direccion
         *
         * @return  self
         */ 
        public function setDireccion($direccion)
        {
                $this->direccion = $direccion;

                return $this;
        }
    }

    

?>