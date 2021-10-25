<?php

    class provee_class{
        public $idProveedor;
        public $idProducto;
        public $fecha;
        public $cantidad;
        public $numeroPedido;

        
        

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
         * Get the value of idProducto
         */ 
        public function getIdProducto()
        {
                return $this->idProducto;
        }

        /**
         * Set the value of idProducto
         *
         * @return  self
         */ 
        public function setIdProducto($idProducto)
        {
                $this->idProducto = $idProducto;

                return $this;
        }

        /**
         * Get the value of fecha
         */ 
        public function getFecha()
        {
                return $this->fecha;
        }

        /**
         * Set the value of fecha
         *
         * @return  self
         */ 
        public function setFecha($fecha)
        {
                $this->fecha = $fecha;

                return $this;
        }

        /**
         * Get the value of cantidad
         */ 
        public function getCantidad()
        {
                return $this->cantidad;
        }

        /**
         * Set the value of cantidad
         *
         * @return  self
         */ 
        public function setCantidad($cantidad)
        {
                $this->cantidad = $cantidad;

                return $this;
        }

        /**
         * Get the value of numeroPedido
         */ 
        public function getNumeroPedido()
        {
                return $this->numeroPedido;
        }

        /**
         * Set the value of numeroPedido
         *
         * @return  self
         */ 
        public function setNumeroPedido($numeroPedido)
        {
                $this->numeroPedido = $numeroPedido;

                return $this;
        }
    }

    

?>