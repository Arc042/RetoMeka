<?php

    class cuentabancaria_class{
        public $idCuentaBancaria;
        public $numCuenta;
        public $tipoCuenta;
        public $saldo;

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
         * Get the value of tipoCuenta
         */ 
        public function getTipoCuenta()
        {
                return $this->tipoCuenta;
        }

        /**
         * Set the value of tipoCuenta
         *
         * @return  self
         */ 
        public function setTipoCuenta($tipoCuenta)
        {
                $this->tipoCuenta = $tipoCuenta;

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

        /**
         * Get the value of numCuenta
         */ 
        public function getNumCuenta()
        {
                return $this->numCuenta;
        }

        /**
         * Set the value of numCuenta
         *
         * @return  self
         */ 
        public function setNumCuenta($numCuenta)
        {
                $this->numCuenta = $numCuenta;

                return $this;
        }
    }
    

?>