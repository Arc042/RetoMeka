// Funciones de la pagina de la cuenta bancaria
document.addEventListener("DOMContentLoaded", function (event){
    indexCuenta=0;
    mostrar();

})
nirekontua="";
idcuenta=0;
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
            
            for(var i = 0; i<cuenta.length; i++) {

             document.getElementById("seleccionarCuenta").innerHTML += "<option class='optcuenta' value='"+cuenta[i].idCuentaBancaria+"'>"+cuenta[i].tipoCuenta+"</option>";
             console.log(cuenta[i].idCuentaBancaria);
             //nirekontua=cuenta[i].idCuentaBancaria;
            }
            
            document.getElementById("seleccionarCuenta").addEventListener("change", function(){

                indexCuenta=document.getElementById("seleccionarCuenta").value;
                document.getElementById("saldo").innerHTML = "<h3 id='saldo'>Saldo:" +cuenta[indexCuenta-1].saldo+"</h3>";
                console.log("indexCuenta");
                console.log(indexCuenta);
                enseñarPorId();

                
                index=document.getElementById("seleccionarCuenta").value;
                nirekontua=index;
                console.log(index);
                document.getElementById("saldo").innerHTML = "<h3 id='saldo'>Saldo:" +cuenta[index-1].saldo+"</h3>";

            });
        })
        .catch(error => console.log('Error status:', error));
}

// document.getElementById("movimientos").addEventListener("click", function(){

//     console.log("indexCuenta");
//     console.log(indexCuenta);
//     enseñarPorId();

// })

function enseñarPorId() {
    //console.log(cuenta[i].idCuentaBancaria)
    
       

        console.log(indexCuenta);

        var url = "../../controlador/controlador_movimientos.php";
        var miData= {'idCuentaBancaria': indexCuenta};
        miData= JSON.stringify(miData);

        fetch(url, {
            method: 'POST', 
            body: miData,
            headers:{'Content-Type': 'application/json'}  // input data
            })

            .then(res => res.json()).then(result =>{
                console.log(result.list);

                var variable = "<table id='tabla'><tr><td>Id</td><td>fecha</td><td>Concepto</td><td>Cantidad</td></tr>"
                document.getElementById("campoDinamico").innerHTML="";
                for(var i = 0; i<result.list.length; i++) {

                     variable += 
                    '<tr>'
                    +'<td>'+result.list[i].idMovimientos+'</td>'
                    +'<td>'+result.list[i].fecha+'</td>'
                    +'<td>'+result.list[i].concepto+'</td>'
                    +'<td>'+result.list[i].cantidad+'</td>'
                    +'</tr>'
                    
                }
                variable += "</table>"
                document.getElementById("campoDinamico").innerHTML += variable;
            })
            .catch(error => console.log('Error status:', error));
}

// Funcion que muestra la tabla de prestamos
$('#prestamo').click(function() {
    console.log("hola")
    $('#campoDinamico').html('')

    $('#campoDinamico').html(
        
    )
    $('#campoDinamico').css('display','block')

    // console.log("insertar")
    // $('#campoDinamico').html('')
    // $('#campoDinamico').html('<form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">Cantidad de Capital a Insertar</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><button class="btn btn-primary" onclick="insertCorrecto()">Submit</button></form>')
    // $('#campoDinamico').css('display','block')

    $('#campoDinamico').html()
    $('.campoDinamico').css('display','block')
    
    

})


// Funcion que muestra la tabla de leasing
$('#leasing').click(function() {
    console.log("leasing")
    // $('#campoDinamico').html('')
    // $('#campoDinamico').html()
    $('#campoDinamico').css('display','block')
})


// Funcion para transferir capital de una cuenta a otra
$('#transferir').click(function() {
    console.log("transferir")
    $('#campoDinamico').html('')
    $('#campoDinamico').html()
    $('#campoDinamico').css('display','block')
})


function insertarSaldo() {
    valor = document.getElementById("seleccionarCuenta").value;

        console.log(valor);

        var url = "../../controlador/controlador_insertarSaldo.php";
        var miData= {'idCuentaBancaria': idCuentaBancaria};
        miData= JSON.stringify(miData);

        fetch(url, {
            method: 'POST', 
            body: miData,
            headers:{'Content-Type': 'application/json'}  // input data
            })

            .then(res => res.json()).then(result =>{
                console.log(result.list);

                document.getElementById("campoDinamico").innerHTML="";
                for(var i = 0; i<result.list.length; i++) {

                    var variable = 
                    '<tr>'
                    +'<td>'+result.list[i].idMovimientos+'</td>'
                    +'<td>'+result.list[i].fecha+'</td>'
                    +'<td>'+result.list[i].concepto+'</td>'
                    +'<td>'+result.list[i].cantidad+'</td>'
                    +'</tr></br>'
                    document.getElementById("campoDinamico").innerHTML += variable;
                    
                    
                }

            })
            .catch(error => console.log('Error status:', error));
}
// Funcion para insertar Capital a la cuenta bancaria
$('#insertar').click(function(){  
   
    alert(nirekontua)
    console.log("insertar")
    $('#campoDinamico').html('')
    $('#campoDinamico').html('<form action=""><div class="mb-3"><label for="" class="form-label">Cantidad de Capital a Insertar</label><input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><button class="btn btn-primary" id="ins">Submit</button></form>')
    $('#campoDinamico').css('display','block')

    $("#ins").click(function(){
        // alert("HOLA");
        insertarSaldo(nirekontua);
        
     
    });
});      


function insertarSaldo(nirekontua) {
    var saldo = document.getElementById("exampleInputEmail1").value;
        console.log(nirekontua);
// alert(valor)
        var url = "../../controlador/controlador_insertarSaldo.php";
        console.log("HEMEN")
        var miData= {'idCuentaBancaria':nirekontua, 'saldo':saldo};
        console.log(document.getElementById("exampleInputEmail1").value)
        miData= JSON.stringify(miData);
// console.log(miData)
        fetch(url, {
            method: 'POST', 
            body: miData,
            headers:{'Content-Type': 'application/json'}  // input data
            })

            .then(res => res.json()).then(result =>{
                console.log(result.list);
                alert(result.error);
                // mostrar();

            })
}


// Funcion que muestra un mensaje al insertar capital
