function enviar() {

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    var correocomprobacion=false;
    var correo = document.getElementById("formControlLg");

  if (emailRegex.test(correo.value)) {
      correocomprobacion=true;
      Swal.fire(
        'Correcto!',
        'Suscrito Correctamente!',
        'success'
      )
      document.getElementById("formControlLg").value = "";
  } else {
      correocomprobacion=false;
      Swal.fire({
        icon: 'error',
        title: 'Email invalido!',
        text: 'ej: prueba@gmail.com',
      })
  } 
 
}