// Funciones de la pagina de la cuenta bancaria
document.addEventListener("DOMContentLoaded", function (event){
    indexCuenta=0;
    mostrar();
 
})
nirekontua="";
idcuenta=0;
var saldoActual="";
cuentas="";
canti="";

// funcion para rellenar el dropdown de las cuentas
function mostrar() {
        var url = "../../controlador/controller_banca.php";
        
        fetch(url, {
              method: 'GET',
              headers:{'Content-Type': 'application/json'} 
              })
   
        .then(res => res.json()).then(result =>{
   
            var cuenta="";
            var cuenta = result.list;
            
            cuentas=cuenta;
            document.getElementById("seleccionarCuenta").innerHTML=" <option disabled selected>Selecciona una opción</option>";
            for(var i = 0; i<cuenta.length; i++) {
              
             document.getElementById("seleccionarCuenta").innerHTML += "<option class='optcuenta' value='"+cuenta[i].idCuentaBancaria+"'>"+cuenta[i].numCuenta+"</option>";
             console.log(cuenta[i].idCuentaBancaria);
             console.log(cuenta[i].numCuenta)
             //nirekontua=cuenta[i].idCuentaBancaria;
            }
           
            document.getElementById("seleccionarCuenta").addEventListener("change", function(){
 
                indexCuenta=document.getElementById("seleccionarCuenta").value;
                saldoActual=cuenta[indexCuenta-1].saldo;
                document.getElementById("saldo").innerHTML = "<h3 id='saldo'>Saldo:" +cuenta[indexCuenta-1].saldo+"</h3>";
                document.getElementById("btns").style.display="block";
                document.getElementById("campoDinamico").style.display="block";
               
                
                 nirekontua=indexCuenta;
                 
                 mostrarPorId();
                
            });
        })
        .catch(error => console.log('Error status:', error));
}
 
function mostrarPorId() {
    
        

        var url = "../../controlador/controlador_movimientos.php";
        var miData= {'idCuentaBancaria': indexCuenta};
        miData= JSON.stringify(miData);
 
        fetch(url, {
            method: 'POST',
            body: miData,
            headers:{'Content-Type': 'application/json'}  // input data
            })
 
            .then(res => res.json()).then(result =>{
                
            
                var variable = "<table id='tabla'><tr><td>Fecha</td><td>Concepto</td><td>Precio</td></tr>"
                document.getElementById("campoDinamico").innerHTML="";
                for(var i = 0; i<result.list.length; i++) {
                
                     variable +=
                    '<tr>'
                    +'<td>'+result.list[i].fecha+'</td>'
                    +'<td>'+result.list[i].concepto+'</td>'
                    +'<td class="price">'+result.list[i].cantidad+'</td>'
                    +'</tr>'
                 

                }
                
                variable += "</table>"
              
                document.getElementById("campoDinamico").innerHTML += variable;
                canti= document.getElementsByClassName("price");
             for (let i = 0; i < canti.length; i++) {
              
             if(parseInt(canti[i].innerHTML)<0){
                 canti[i].style.color="red";

             }else{
                canti[i].style.color="green";

             
             }
            } 
               
                 

            })
            .catch(error => console.log('Error status:', error));
}
 
// Funcion que muestra la tabla de prestamos
$('#prestamo').click(function() {
    
    $('#campoDinamico').html('')
    $('#campoDinamico').html('<div id="calculadora1">'+
   '<fieldset>'+
    '<legend>Ingrese los datos aquí</legend>'+
    '<div id="div1">'+
        '<table><tbody><tr>'+
            '<td>'+
                'cantidad de capital'+
                '<input class="form-control" type="text" onkeypress="return solonumeros(event)" name="monto" id="input_monto" min="1" style="width: 100%">'+
            '</td>'+
            '<td>'+
                'Cantidad de cuotas'+
                '<input class="form-control" type="text" onkeypress="return solonumeros(event)" name="cuotas" id="input_cuotas" min="1" max="1000" style="width: 100%">'+
            '</td></tr>'+
        '<tr>'+
            '<td>'+
                'Tasa de interés<br>'+
                '<input class="form-control" type="text" onkeypress="return solonumeros(event)" name="tasa" id="input_tasa" min="0.1" style="width: 100%">'+
            '</td>'+
        '<td>Tipo de tasa<br>'+
            '<select class="form-select seleccion" id="select_tasa_tipo">'+
                '<option value="mensual">Mensual</option>'+
                '<option value="anual">Anual</option>'+
            '</select></td></tr><tr><td>Periodo de pago<br>'+
            '<select class="form-select seleccion" id="select_periodo">'+
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
        '<input class="btn btn-primary" type="button" value="Calcular" onclick="calcular();" >'+
        '</th></tbody></table>'+
    
    '<div id="enseñarDatos">'+
    '<br>'+
    '<table class="table tablaprestamo" id="table-2">'+
            '<tbody><tr>'+
            '<th scope="col">Número</th>'+
            '<th scope="col">Interés</th>'+
            '<th scope="col">Abono al capital</th>'+
            '<th scope="col">Valor de la cuota</th>'+
            '<th scope="col">Saldo al capital</th>'+
            '</tr></tbody>'+
    '<tbody id="tbody_1"></tbody></table></div>')
    $('#campoDinamico').css('display','block')
   
    
})
 
 
// Funcion que muestra la tabla de leasing
$('#leasing').click(function() {
   
    $('#campoDinamico').html('')
    $('#campoDinamico').html('<div id="calculadora2">'+
    '<fieldset>'+
     '<legend>Ingrese los datos aquí</legend>'+
     '<div id="div2">'+
         '<table><tbody><tr>'+
             '<td>'+
                 'cantidad de capital'+
                 '<input class="form-control" type="text" onkeypress="return solonumeros(event)" name="monto" id="input_monto1" min="1" style="width: 100%">'+
             '</td>'+
             '<td>'+
                 'Cantidad de cuotas'+
                 '<input class="form-control" type="text" onkeypress="return solonumeros(event)" name="cuotas" id="input_cuotas1" min="1" max="1000" style="width: 100%">'+
             '</td></tr>'+
         '<tr>'+
             '<td>'+
                 'Tasa de interés<br>'+
                 '<input class="form-control" type="text" onkeypress="return solonumeros(event)" name="tasa" id="input_tasa1" min="0.1" style="width: 100%">'+
             '</td>'+
         '<td>Tipo de tasa<br>'+
             '<select class="form-select seleccion" id="select_tasa_tipo2"'+
                 '<option value="mensual">Mensual</option>'+
                 '<option value="anual">Anual</option>'+
             '</select></td></tr><tr><td>Periodo de pago<br>'+
             '<select class="form-select seleccion" id="select_periodo2">'+
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
         '<input class="btn btn-primary" type="button" value="Calcular" onclick="calcularLeasing();">'+
         '</th></tbody></table>'+
     
     '<div id="enseñarDatos2">'+
     '<br>'+
     '<table class="table tablaleasing" id="table-3">'+
             '<tbody><tr>'+
             '<th scope="col">Número</th>'+
             '<th scope="col">valor de la cuota</th>'+
            '<th scope="col">IVA</th>'+
            '<th scope="col">Cuota total</th>'+
            '<th scope="col">Interés</th>'+
            '<th scope="col">Amortización</th>'+
            '<th scope="col">Deuda</th>'+
             '</tr></tbody>'+
     '<tbody id="tbody_2"></tbody></table></div>')
    $('#campoDinamico').css('display','block')
})
 

// Funcion para transferir capital de una cuenta a otra
$('#transferir').click(function() {
   

    console.log("transferir")
    $('#campoDinamico').html()
    $('#campoDinamico').html('<h2>Transferencia:</h2>'+
    '<br>'+
    '<form action="">'+
        
        '<div class="container">'+
            '<!-- cuenta desde la que se va a transferir el dinero -->'+
            '<div class="col-5 ejemplo">'+
                '<h2>Desde</h2>'+
                '<p>'+
                    'Cuenta de origen'+
                    '<select class="form-select" aria-label="Default select example" id="CuentaOrigen">'+
                        '<option selected value="1">Cuenta Corriente</option>'+
                        '<option value="2">Cuenta de Credito</option>'+
                    '</select>    '+
                '</p>'+
            '</div>'+
            '<div class="col-1"></div>'+
            '<!-- cuenta a la que se le va a transferir el dinero -->'+
            '<div class="col-5">'+
                '<h2>Hacia</h2>'+
                '<p>'+
                    'Cuenta de destino'+
                    '<select class="form-select" aria-label="Default select example" id="CuentaDestino">'+
                        '<option selected value="1">Cuenta Corriente</option>'+
                        '<option value="2">Cuenta de Credito</option>'+
                        '<option value="3">Cuenta diferente</option>'+
                    '</select> '+
                '</p>'+
            '</div>'+
        '</div>'+
        '<!-- fecha en la que se ha creado la transferencia -->'+
        '<h2>Fecha</h2>'+
        '<p>'+
            'Inserte la fecha actual'+
            '<form><div class="mb-3">'+
               ' <input type="date" class="form-control" id="data" >'+
          '  </form>'+
        '</p>'+
 
        '<h2>Datos de transferencia</h2>'+
        '<!-- cantidad que se quiere transferir -->'+
        'Cantidad'+
        '<input type="text" class="form-control" id="dinero" aria-describedby="emailHelp" onkeypress="return solonumeros(event)">'+
            
        '<!-- concepto/descripcion del movimiento -->'+
            'Concepto'+
        '<input type="text" class="form-control" id="conc">'+
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
            '<button type="button"  class="btn btn-primary" id="trs">Transferir</button>'+
        '</p>'+
    '</form> ')
   
    
    $('#campoDinamico').css('display','block');
       
        var combo=document.getElementById("seleccionarCuenta");
        var selected=combo.options[combo.selectedIndex].value;
         selected=selected-1;
        

        var newRow="";
        newRow +="Cuenta de origen:";
        newRow += "<select class='form-select' aria-label='Default select example' id='CuentaOrigen'>";
            newRow += "<option selected='' value='"+cuentas[selected].idCuentaBancaria+"'>"+cuentas[selected].tipoCuenta+"</option>";
        newRow +="</select>";

        document.querySelector(".ejemplo p").innerHTML=newRow;
        document.querySelector("#CuentaOrigen").setAttribute("disabled","");
            
        

        
        var newRow="";
        for (let z = 0; z < cuentas.length; z++) {
            if(cuentas[z].idCuentaBancaria!=nirekontua){
                newRow +='<option  value='+cuentas[z].idCuentaBancaria+'>'+cuentas[z].tipoCuenta+'</option>';
            }
            
           
        }
        document.getElementById("CuentaDestino").innerHTML=newRow;
        
        
        var check= document.getElementById("flexCheckDefault").checked;
     
    $("#trs").click(function(){
        
        var fecha = document.getElementById("data").value;
        var concepto =document.getElementById("conc").value;
        var check= document.getElementById("flexCheckDefault").checked;
        if((fecha=="") || (concepto=="") ){
            
            alert("campo vacio")
        }else{
            fecha=true;
            concepto=true;
            
           
        }
        if(check==false){
             alert("no se ha confirmado la transferencia")
            }



        if((fecha==true) && (concepto==true) && (check==true)){
            
            transferirdinero(nirekontua);
        }
        
       
        
        
    });
 
})
function transferirdinero(nirekontua) {
    var desde = document.getElementById("CuentaOrigen").value;
    
 
    nirekontua = desde;
    
 
    var destino = document.getElementById("CuentaDestino").value;
    

    var capital = document.getElementById("dinero").value;
    
    
    var fecha = document.getElementById("data").value;
    
    
    var concepto = document.getElementById("conc").value;
    
 
   
    var url = "../../controlador/controlador_Tranferencia.php";
    var miData= {'origen':nirekontua,  'destino': destino, 'capital':capital, 'fecha':fecha, 'concepto':concepto};
    miData= JSON.stringify(miData);
    alert("transferencia realizada con exito")
   
    saldoActual=saldoActual-capital;
    
    document.getElementById("saldo").innerHTML ="<h3 id='saldo'>Saldo:"+saldoActual.toFixed(2)+"</h3>";


    fetch(url, {
        method: 'POST',
        body: miData,
        headers:{'Content-Type': 'application/json'}  
        })
 
        .then(res => res.json()).then(result =>{
           
            //  alert(result.error);
            
           
        })

        document.getElementById("CuentaOrigen").value="";
            
        
        document.getElementById("CuentaDestino").value="";
        
    
        document.getElementById("dinero").value="";
        
        
        document.getElementById("data").value="";
        
        
        document.getElementById("conc").value="";

        mostrar();
        mostrarPorId();
        document.getElementById("saldo").innerHTML = "<h3 id='saldo'>Saldo:" +saldoActual.toFixed(2)+"</h3>";
}
 
// Funcion para insertar Capital a la cuenta bancaria
$('#insertar').click(function(){  
   
    $('#campoDinamico').html('')
    $('#campoDinamico').html('<form action="">'+
        '<div class="mb-3">'+
            '<label for="" class="form-label">Cantidad de Capital a Insertar</label>'+
            '<input type="text" class="form-control" id="cantidad" onkeypress="return solonumeros(event)" aria-describedby="emailHelp">'+
        '</div>'+
            '<button class="btn btn-primary" id="ins">ingresar</button>'+
    '</form>')
    $('#campoDinamico').css('display','block')
 
    $("#ins").click(function(){
        var saldo = document.getElementById("cantidad").value;        
        if(saldo.value==""){
            alert("campo vacio")
            
        }else{
            saldo=true;
            
               }
        if(saldo==true){
           
            insertarSaldo(nirekontua);
        }
       
        
     
    });
});      
 
 
function insertarSaldo(nirekontua) {
    var saldo = document.getElementById("cantidad").value;
       
        var url = "../../controlador/controlador_insertarSaldo.php";
        
        var miData= {'idCuentaBancaria':nirekontua, 'saldo':saldo};
       
        miData= JSON.stringify(miData);
        alert("ingreso realizado con exito")
        fetch(url, {
            method: 'POST',
            body: miData,
            headers:{'Content-Type': 'application/json'}  // input data
            })
 
            .then(res => res.json()).then(result =>{
                
                alert(result.error);
                
                
            })
}
 
 
// Funcion que muestra un mensaje al insertar capital
function insertCorrecto() {
    Swal.fire(
        'Correcto!',
        'Insertado Correctamente',
        'ok'
    )

}

  
function solonumeros(e){
    console.log(e.key); 
  
    if ((e.key<"0") || (e.key>"9")){
      return false;
      
    }else{
      return true;
      
    }
  }