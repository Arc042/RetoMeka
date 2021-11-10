// Funciones de la pagina de la cuenta bancaria

// Funcion que muestra los movimientos de la cuenta bancaria seleccionada
function movimientos() {
    console.log("movimientos")

    document.getElementById("campoDinamico").innerHTML = ''
    document.getElementById("campoDinamico").style.display = "none";

    document.getElementById("campoDinamico").innerHTML = '<div class="movimientos overflow-auto">'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisi.</p>'+
    '</div>'
    document.getElementById("campoDinamico").style.display = "block";
}

// Funcion que muestra la tabla de prestamos
function prestamo() {
    console.log("prestamos")

    document.getElementById("campoDinamico").innerHTML = ''
    document.getElementById("campoDinamico").style.display = "none";


}

// Funcion que muestra la tabla de leasing
function leasing() {
    console.log("leasing")

    document.getElementById("campoDinamico").innerHTML = ''
    document.getElementById("campoDinamico").style.display = "none";


}

// Funcion para transferir capital de una cuenta a otra
function transferir() {
    console.log("transferir")

    document.getElementById("campoDinamico").innerHTML = ''
    document.getElementById("campoDinamico").style.display = "none";


}

// Funcion para insertar Capital a la cuenta bancaria
function insertar() {
    console.log("insertar")
    
    document.getElementById("campoDinamico").innerHTML = ''
    document.getElementById("campoDinamico").style.display = "none";

    document.getElementById("campoDinamico").innerHTML = '<form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">Cantidad de Capital a Insertar</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><button class="btn btn-primary" onclick="insertCorrecto()">Submit</button></form>'
    document.getElementById("campoDinamico").style.display = "block";
}

// Funcion que muestra un mensaje al insertar capital
function insertCorrecto() {
    Swal.fire(
        'Correcto!',
        'Insertado Correctamente',
        'success'
      )
}