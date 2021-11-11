// Funciones de la pagina de la cuenta bancaria
document.addEventListener("DOMContentLoaded", function (event){
    mostrar();
})

function mostrar() {
        var url = "../../controlador/controller_banca.php";
        console.log("hola")
        fetch(url, {
              method: 'GET', 
              headers:{'Content-Type': 'application/json'}  // input data
              })
    
        .then(res => res.json()).then(result =>{
    
            // console.log('succes:',result.list);
            var cuenta="";
            var cuenta = result.list;
            console.log(cuenta);
    
            for(var i = 0; i<=cuenta.length; i++) {
    
              console.log(cuenta[i]);
    
              document.getElementById("seleccionarCuenta").innerHTML += "<option>"+cuenta[i].tipoCuenta+"</option>";
  
            }
        })
        .catch(error => console.log('Error status:', error));
}

// Funcion que muestra los movimientos de la cuenta bancaria seleccionada
$('#movimientos').click(function(){
    console.log("movimientos")
    $('#campoDinamico').html('')
    $('#campoDinamico').html('<div class="movimientos overflow-auto">'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '</div>')
    $('#campoDinamico').css('display','block')
})

// Funcion que muestra la tabla de prestamos
$('#prestamo').click(function() {
    console.log("prestamos")
    $('#campoDinamico').html('')
    $('#campoDinamico').html()
    $('#campoDinamico').css('display','block')
})


// Funcion que muestra la tabla de leasing
$('#leasing').click(function() {
    console.log("leasing")
    $('#campoDinamico').html('')
    $('#campoDinamico').html()
    $('#campoDinamico').css('display','block')
})


// Funcion para transferir capital de una cuenta a otra
$('#transferir').click(function() {
    console.log("transferir")
    $('#campoDinamico').html('')
    $('#campoDinamico').html()
    $('#campoDinamico').css('display','block')
})

// Funcion para insertar Capital a la cuenta bancaria
$('#insertar').click(function(){  
    console.log("insertar")
    $('#campoDinamico').html('')
    $('#campoDinamico').html('<form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">Cantidad de Capital a Insertar</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><button class="btn btn-primary" onclick="insertCorrecto()">Submit</button></form>')
    $('#campoDinamico').css('display','block')
})      

// Funcion que muestra un mensaje al insertar capital
function insertCorrecto() {
    Swal.fire(
        'Correcto!',
        'Insertado Correctamente',
        'success'
      )
}