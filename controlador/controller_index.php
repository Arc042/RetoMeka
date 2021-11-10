<?php

if (isset($_COOKIE['numVisits']))
{
    $numVisits=$_COOKIE['numVisits']+1;
    
}else {
    $numVisits=0;
}
setcookie("numVisits",$numVisits);


