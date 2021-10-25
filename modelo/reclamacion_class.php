<?php

    class reclamacion_class{
        public $idReclamaciones;
        public $nombre;
        public $correo;
        public $texto;

        /**
         * Get the value of idReclamaciones
         */ 
        public function getIdReclamaciones()
        {
                return $this->idReclamaciones;
        }

        /**
         * Set the value of idReclamaciones
         *
         * @return  self
         */ 
        public function setIdReclamaciones($idReclamaciones)
        {
                $this->idReclamaciones = $idReclamaciones;

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
         * Get the value of correo
         */ 
        public function getCorreo()
        {
                return $this->correo;
        }

        /**
         * Set the value of correo
         *
         * @return  self
         */ 
        public function setCorreo($correo)
        {
                $this->correo = $correo;

                return $this;
        }

        /**
         * Get the value of texto
         */ 
        public function getTexto()
        {
                return $this->texto;
        }

        /**
         * Set the value of texto
         *
         * @return  self
         */ 
        public function setTexto($texto)
        {
                $this->texto = $texto;

                return $this;
        }
    }

    

?>