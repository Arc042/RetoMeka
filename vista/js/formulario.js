//////////////Funcion solo deja escribir valores alfabeticos///////////
function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;
  
    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }
  
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }
  ///////////////Fin solo valores alfabeticos///////////////////



  ////////////Funcion click en boton de formulario/////////////////////
  document.getElementById("btnFormulario").onclick = function Hola() {

    if (document.getElementById("nombre").value == "") {
        alert("*Campo incompleto: Nombre*");
      } else {
        var name = true;
        console.log(name);
        
    // }

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    var correo = document.getElementById("email");
  
    if (emailRegex.test(correo.value)) {
        var correo=true;
        console.log(correo);
  
    } else {
        var correo=false;
        alert("*Campo incompleto: Email*");
        /*alert("EMAIL NO VALIDO");*/
    } 

    if (document.getElementById("mensaje").value == "") {
      alert("*Campo incompleto: Mensaje*");
    } else {
      var mensaje = true;
      console.log(mensaje);
  }
   
 
  if(name == true && mensaje == true && correo == true) {
    
    Swal.fire(
      'Correcto!',
      'Formulario enviado correctamente!',
      'success'
    )

    insert();
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
 
  }
}
/////////////FIn click boton formulario/////////////////////


////////////Funcion insertar formulario//////////////////////////
function insert() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("email").value;
  var texto = document.getElementById("mensaje").value;


  var url = "../../controlador/controlador_reclamaciones.php";
  var data = {'nombre':nombre, 'correo':correo, 'texto':texto };

  fetch(url, {
	  method: 'POST', // or 'POST'
	  body: JSON.stringify(data), // data can be `string` or {object}!
	  headers:{'Content-Type': 'application/json'}  //input data
	  })

    .then(res => res.json()).then(result => {
      
      console.log(result)
      document.getElementById("nombre").value="";
      document.getElementById("email").value="";
      document.getElementById("mensaje").value="";

})
.catch(error => console.error('Error status:', error));	
};
}
/////////Fin funcion insertar formulario//////////////////