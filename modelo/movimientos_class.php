<?php

    class movimientos_class{

        public $idMovimientos;
        public $fecha;
        public $concepto;
        public $cantidad;
        public $idCuentaBancaria;


        /**
         * Get the value of idMovimientos
         */ 
        public function getIdMovimientos()
        {
                return $this->idMovimientos;
        }

        /**
         * Set the value of idMovimientos
         *
         * @return  self
         */ 
        public function setIdMovimientos($idMovimientos)
        {
                $this->idMovimientos = $idMovimientos;

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
         * Get the value of concepto
         */ 
        public function getConcepto()
        {
                return $this->concepto;
        }

        /**
         * Set the value of concepto
         *
         * @return  self
         */ 
        public function setConcepto($concepto)
        {
                $this->concepto = $concepto;

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
         * Get the value of idCuentaBancaria
         */ 
        public function getIdCuentaBancaria()
        {
                return $this->idCuentaBancaria;
        }

        /**
         * Set the value of idCuentaBancaria
         *
         * @return  self
         */ 
        public function setIdCuentaBancaria($idCuentaBancaria)
        {
                $this->idCuentaBancaria = $idCuentaBancaria;

                return $this;
        }
    }
    

?>