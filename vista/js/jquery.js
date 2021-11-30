/*Carga dinamicamente el header y el footer*/

window.onload=function() {

    $("#header").load("header.html",funcionesHeader); 
    $("#footer").load("footer.html"); 


  function funcionesHeader(){
    // sessionVarsView();
    if (window.location.href=="http://hiru.zerbitzaria.net/vista/html/catalogo.html") {
      sesion2();
    } else {
      sessionVarsView();
    }

    if (window.location.href=="http://hiru.zerbitzaria.net/vista/html/catalogo.html?") {
      sesion2();
    } else {
      sessionVarsView();
    }

    $("#submit").on('click', login);
    $("#logout").on('click', logout);
    $("#comprar").css('display','inline-block');

    var target = $("#modalForm");
    $("#exit").on('click', function(){
      removeElement(target);
    });

    function removeElement(target) {
      target.animate({
        opacity: "-=1"
      }, 300, function() {
        // target.remove();
        $('#modalForm').css('display', 'none');
      });
     
    }


    $("#btnLogin").click(function(){
      // alert("hola");
      $("#btnLogin").data("target","#modalForm");
      $("#btnLogin").data("toggle","modal");
      // $("#divUser").css("display", "block");
      
    
      $("#modalForm").show(function(){
        
        // alert("modal mostrada")
        $("#modalForm").css('display', 'block');
        $("#modalForm").css("transition","0,5s");
        // $("#myModal").addClass("modal fade in");
        $("#modalForm").css("opacity","1");
        $("#modalForm").css("background-color","#00000066");
      });
      
 
      });
  }
 
 

}
/*Fin carga dinamica del header y footer*/

 