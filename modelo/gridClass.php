<?php

class gridClass{
    public $id;
    public $img;


public function getId()
{
    return $this->id;
}

public function setId($id)
{
    $this->id = $id;

    return $this;
}

public function getImg()
    {
        return $this->img;
    }

    public function setImg($img)
    {
        $this->img = $img;

        return $this;
    }
}
?>