/*Carga dinamicamente el header y el footer*/
window.onload=function() {

    $("#header").load("header.html",funcionesHeader); 
    $("#footer").load("footer.html"); 


    
  

  function funcionesHeader(){
    sessionVarsView();
    $("#submit").on('click', login);
    $("#logout").on('click', logout);
    $("#exit").on('click', function(){
      $("#modalForm").css( {
        transition : '2s', 
        right : "200px"
      });
     

    });
    $("#btnLogin").click(function(){
      alert("hola");
      $("#btnLogin").data("target","#modalForm");
      $("#btnLogin").data("toggle","modal");
      // $("#divUser").css("display", "block");
      
    
      $("#modalForm").show(function(){
        
        alert("modal mostrada")
        $("#modalForm").css('display', 'block');
        // $("#myModal").addClass("modal fade in");
        $("#modalForm").css("opacity","1");
        $("#modalForm").css("background-color","#00000066");
      });
      
      });
  }
 
 

}
/*Fin carga dinamica del header y footer*/

 