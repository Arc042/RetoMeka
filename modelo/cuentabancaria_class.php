<?php

    class cuentabancaria_class{
        public $idCuentaBancaria;
        public $tipo;
        public $saldo;
        public $movimientos;

        
        

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

        /**
         * Get the value of tipo
         */ 
        public function getTipo()
        {
                return $this->tipo;
        }

        /**
         * Set the value of tipo
         *
         * @return  self
         */ 
        public function setTipo($tipo)
        {
                $this->tipo = $tipo;

                return $this;
        }

        /**
         * Get the value of saldo
         */ 
        public function getSaldo()
        {
                return $this->saldo;
        }

        /**
         * Set the value of saldo
         *
         * @return  self
         */ 
        public function setSaldo($saldo)
        {
                $this->saldo = $saldo;

                return $this;
        }

        /**
         * Get the value of movimientos
         */ 
        public function getMovimientos()
        {
                return $this->movimientos;
        }

        /**
         * Set the value of movimientos
         *
         * @return  self
         */ 
        public function setMovimientos($movimientos)
        {
                $this->movimientos = $movimientos;

                return $this;
        }
    }

    

?>