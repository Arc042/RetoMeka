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
                nirekontua=indexCuenta;
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
    console.log("hola")
    $('#campoDinamico').html('')
    $('#campoDinamico').html('<div id="calculadora1">'+
   '<fieldset>'+
    '<legend>Ingrese los datos aquí</legend>'+
    '<div style="float: left; padding: 10px;">'+
    '<table><tbody><tr>'+
        '<td>'+
            'cantidad de capital'+
            '<input class="form-control" type="number" name="monto" id="input_monto" min="1" style="width: 100%">'+
        '</td>'+
        '<td>'+
        'Cantidad de cuotas'+
        '<input class="form-control" type="number" name="cuotas" id="input_cuotas" min="1" max="1000" style="width: 100%">'+
        '</td></tr>'+
    '<tr>'+
        '<td>'+
            'Tasa de interés<br>'+
            '<input class="form-control" type="number" name="tasa" id="input_tasa" min="0.1" style="width: 100%">'+
        '</td>'+
    '<td>Tipo de tasa<br>'+
        '<select class="form-select seleccion" id="select_tasa_tipo" style="width: 100%">'+
            '<option value="mensual">Mensual</option>'+
            '<option value="anual">Anual</option>'+
        '</select></td></tr><tr><td>Periodo de pago<br>'+
        '<select class="form-select seleccion" id="select_periodo" style="width: 100%">'+
                    '<option value="diario">Diario</option>'+
                    '<option value="semanal">Semanal</option>'+
                    '<option value="quincenal">Quincenal</option>'+
                    '<option value="mensual" selected="">Mensual</option>'+
                    '<option value="bimestral">Bimestral</option>'+
                    '<option value="trimestral">Trimestral</option>'+
                    '<option value="cuatrimestral">Cuatrimestral</option>'+
                    '<option value="semestral">Semestral</option>'+
                    '<option value="anual">Anual</option>'+
        
    '</td></tr><tr><th>'+
    '<input class="btn btn-primary" type="button" value="Calcular" onclick="calcular();">'+
    '</th></tbody></table>'+
    '<div id="enseñarDatos">'+
    '<br>'+
    '<table class="table" id="table-2" style="width: 100%; text-align: right; border: 1px gray solid; border-collapse: collapse">'+
            '<tbody><tr>'+
            '<th scope="col">Número</th>'+
            '<th scope="col">Interés</th>'+
            '<th scope="col">Abono al capital</th>'+
            '<th scope="col">Valor de la cuota</th>'+
            '<th scope="col">Saldo al capital</th>'+
            '</tr></tbody>'+
    '<tbody id="tbody_1"></tbody></table></div>')
    $('#campoDinamico').css('display','block')
    
    //safoduishdias
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
    $('#campoDinamico').html()
    $('#campoDinamico').html('<h2>Transferencia:</h2>'+
    '<br>'+
    '<form>'+
        
        '<div class="container">'+
            '<!-- cuenta desde la que se va a transferir el dinero -->'+
            '<div class="col-5">'+
                '<h2>Desde</h2>'+
                '<p>'+
                    'Cuenta de origen'+
                    '<select class="form-select" aria-label="Default select example" id="seleccionarCuenta">'+
                        '<option selected value="Corriente">Cuenta Corriente</option>'+
                        '<option value="Credito">Cuenta de Credito</option>'+
                    '</select>    '+
                '</p>'+
            '</div>'+
            '<div class="col-1"></div>'+
            '<!-- cuenta a la que se le va a transferir el dinero -->'+
            '<div class="col-5">'+
                '<h2>Hacia</h2>'+
                '<p>'+
                    'Cuenta de destino'+
                    '<select class="form-select" aria-label="Default select example" id="seleccionarCuenta">'+
                        '<option selected value="Corriente">Cuenta Corriente</option>'+
                        '<option value="Credito">Cuenta de Credito</option>'+
                    '</select> '+
                '</p>'+
            '</div>'+
        '</div>'+
        '<!-- fecha en la que se ha creado la transferencia -->'+
        '<h2>Fecha</h2>'+
        '<p>'+
            'Inserte la fecha actual'+
            '<form><div class="mb-3">'+
               ' <input type="date" class="form-control" id="fecha" >'+
          '  </form>'+
        '</p>'+

        '<h2>Datos de transferencia</h2>'+
        '<!-- cantidad que se quiere transferir -->'+
        'Cantidad'+
        '<input type="text" class="form-control" id="Cantidad" aria-describedby="emailHelp">'+
            
        '<!-- concepto/descripcion del movimiento -->'+
            'Concepto'+
        '<input type="text" class="form-control" id="concepto">'+
        '<br> '+
        '<!-- recuadro para confirmar que deseas hacer la transferencia -->'+
        '<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">'+
        '<label class="form-check-label" for="flexCheckDefault">'+
           'Confirmar transferencia'+
        '</label>'+
        '<br>'+
       '<p>'+
            '<br>'+
            '<!-- boton para hacer la transferencia -->'+
            '<button type="button" class="btn btn-primary" onclick="insertCorrecto()">Transferir</button>'+
        '</p>'+
    '</form> ')
    $('#campoDinamico').css('display','block')
})

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
function insertCorrecto() {
    Swal.fire(
        'Correcto!',
        'Insertado Correctamente',
        'ok'
    )
    // Swal.fire(
    //     'Error!',
    //     'Campos Sin rellenar o erroneos',
    //     'ok'
    // )
}
