/*Carga dinamicamente el header y el footer*/

window.onload=function() {

    $("#header").load("header.html",funcionesHeader); 
    $("#footer").load("footer.html"); 


  function funcionesHeader(){
    // sessionVarsView();
    if (window.location.pathname=="/vista/html/catalogo.html") {
      sesion2();
    } else {
      sessionVarsView();
    }

    if (window.location.pathname=="/vista/html/catalogo.html?") {
      sesion2();
    } else {
      sessionVarsView();
    }

    $("#submit").on('click', login);
    $("#logout").on('click', logout);
    $("#submitregister").on('click', register);
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

    var target2 = $("#modalFormRegister");
    $("#exit2").on('click', function(){
      removeElement(target2);
    });

    function removeElement(target2) {
      target.animate({
        opacity: "-=1"
      }, 300, function() {
        // target.remove();
        $('#modalFormRegister').css('display', 'none');
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

      $("#btnregistrarmodal").click(function(){
        
        // alert("modal mostrada")
        $("#modalForm").css('display', 'none');
        $("#modalFormRegister").css('display', 'block');
        $("#modalFormRegister").css("transition","0,5s");
        // $("#myModal").addClass("modal fade in");
        $("#modalFormRegister").css("opacity","1");
        $("#modalFormRegister").css("background-color","#00000066");
      });
  }
 
 

}
/*Fin carga dinamica del header y footer*/

 