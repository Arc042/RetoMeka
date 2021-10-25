/*Carga dinamicamente el header y el footer*/
window.onload=function() {
  $(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });
}
/*Fin carga dinamica del header y footer*/
