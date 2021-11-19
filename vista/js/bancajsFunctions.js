// Funciones de la pagina de la cuenta bancaria
document.addEventListener("DOMContentLoaded", function (event){
    indexCuenta=0;
    mostrar();

})
nirekontua="";
idcuenta=0;
var saldoActual="";
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
                saldoActual=cuenta[indexCuenta-1].saldo;
                document.getElementById("saldo").innerHTML = "<h3 id='saldo'>Saldo:" +cuenta[indexCuenta-1].saldo+"</h3>";
                document.getElementById("btns").style.display="block";
                document.getElementById("campoDinamico").style.display="block";
                console.log("indexCuenta");
                // console.log(indexCuenta);
                // nirekontua=indexCuenta;
                enseñarPorId();
                
            });
        })
        .catch(error => console.log('Error status:', error));
}

// document.getElementById("movimientos").addEventListener("click", function(){
    
//     idcuenta=document.getElementById('seleccionarCuenta').value
//     console.log(idcuenta);
//     enseñarPorId(idcuenta);

// })

function enseñarPorId() {
    //console.log(cuenta[i].idCuentaBancaria)
    
        

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
    console.log("prestamos")
    $('#campoDinamico').html('')
    $('#campoDinamico').html('<div id="calculadora1"><fieldset><legend>Ingrese los datos aquí</legend><div style="float: left; padding: 10px;"><table><tbody><tr><td><input type="number" name="monto" id="input_monto" min="1" style="width: 100%"></td><td>Cantidad de cuotas<br><input type="number" name="cuotas" id="input_cuotas" min="1" max="1000" style="width: 100%"></td></tr><tr><td>Tasa de interés<br><input type="number" name="tasa" id="input_tasa" min="0.1" style="width: 100%"></td></tr><tr><td>Tipo de tasa<br><select id="select_tasa_tipo" style="width: 100%"><option value="mensual">Mensual</option><option value="anual">Anual</option></select></td></tr><tr><td>Periodo de pago<br><select id="select_periodo" style="width: 100%"><option value="diario">Diario</option><option value="semanal">Semanal</option><option value="quincenal">Quincenal</option><option value="mensual" selected="">Mensual</option><option value="bimestral">Bimestral</option><option value="trimestral">Trimestral</option><option value="cuatrimestral">Cuatrimestral</option><option value="semestral">Semestral</option><option value="anual">Anual</option></td></tr><tr><th><input type="button" value="Calcular" onclick="calcular();"></th></tbody></table><div id="enseñarDatos"><table id="table-2" style="width: 100%; text-align: right; border: 1px gray solid; border-collapse: collapse"><tbody><tr><th>Número</th><th>Interés</th><th>Abono al capital</th><th>Valor de la cuota</th><th>Saldo al capital</th></tr></tbody><tbody id="tbody_1"></tbody></table></div>')
    $('.campoDinamico').css('display','block')
    
    
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
    $('#campoDinamico').html('<h2>Transferencia:</h2><br><form action=""><div class="container"><div class="col-5"><h2>Desde</h2><p>Cuenta de origen<select class="form-select" aria-label="Default select example" id="CuentaOrigen"><option selected value="1">Cuenta Corriente</option><option value="2">Cuenta de Credito</option></select></p></div><div class="col-1"></div><div class="col-5"><h2>Hacia</h2><p>Cuenta de destino<select class="form-select" aria-label="Default select example" id="CuentaDestino"><option selected value="1">Cuenta Corriente</option><option value="2">Cuenta de Credito</option></select></p></div></div><h2>Fecha</h2><p>Inserte la fecha con el siguiente formato (Dia/Mes/Año)<form><div class="mb-3"><input type="date" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"></form></p><h2>Datos de transferencia</h2>Cantidad<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">Concepto<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"><br><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault">Confirmar transferencia</label><br><p><br><button class="btn btn-primary" id="trs">Transferir</button></p></form>');
    $('#campoDinamico').css('display','block')

    $("#trs").click(function(){
        
         //alert(nirekontua);
        transferirdinero(nirekontua);
        
    });

})
function transferirdinero(nirekontua) {
    var desde = document.getElementById("CuentaOrigen").value;
    console.log(desde)

    nirekontua = desde;
    console.log(nirekontua);

    var destino = document.getElementById("CuentaDestino").value;
    console.log(destino);

    var capital = document.getElementById("exampleInputEmail1").value;
    console.log(capital)


    var url = "../../controlador/controlador_Tranferencia.php";
    var miData= {'origen':nirekontua,  'destino': destino, 'capital':capital};
    miData= JSON.stringify(miData);
    console.log(miData)
    console.log(saldoActual)
    console.log(capital)
    saldoActual=parseInt(saldoActual)-parseInt(capital);
    console.log(saldoActual)
            document.getElementById("saldo").innerHTML ="<h3 id='saldo'>Saldo:"+saldoActual+"</h3>";

    fetch(url, {
        method: 'POST', 
        body: miData,
        headers:{'Content-Type': 'application/json'}  // input data
        })

        .then(res => res.json()).then(result =>{
        

            console.log(result.error);
            // alert(result.error);
             //mostrar();
            
        })
       
}







// Funcion para insertar Capital a la cuenta bancaria
$('#insertar').click(function(){  
    // alert(nirekontua)
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
