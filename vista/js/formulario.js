/*Solo deja escribir valores alfabeticos*/
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
  /*Fin solo valores alfabeticos*/

  document.getElementById("btnFormulario").onclick = function() {
      
    if (document.getElementById("name").value == "") {
        alert("no funciona nombre");
      } else {
        var name = true;
    }
   
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
  var correocomprobacion=false;
  var correo = document.getElementById("email");

  if (emailRegex.test(correo.value)) {
      correocomprobacion=true;
  } else {
      correocomprobacion=false;
      alert("no funciona email");
      /*alert("EMAIL NO VALIDO");*/
  } 
  }