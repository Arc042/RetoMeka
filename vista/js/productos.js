/*window.onload = function() {
    mostrar();
    console.log('fbidffiusbfivu')
  };*/

  document.addEventListener("DOMContentLoaded", function (event){
    mostrar();

  })
function mostrar() {
	var url = "../../controlador/controlador_tienda.php";
	
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })

    .then(res => res.json()).then(result =>{

        // console.log('succes:',result.list);
        var producto="";
        var producto = result.list;
        // console.table(producto[0]);

        for(var i = 0; i<=producto.length-1; i++) {

          console.log(producto);

          document.getElementById("relleno").innerHTML += '<div id="container">'
            +'<div id="divcard">'
              +'<div class="card mb-3 cards" >'
               + '<div>'
                 +' <div class="row g-0 cards">'
                  +  '<div class="col-md-8">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+producto[i].nombre+'</h5>'
                       + '<ul>'
                         + '<li>'+producto[i].descripcion+'</li>'
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i].precio+'</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4">'
                      +'<img src="" class="img-fluid rounded-start"'
                        +'alt="">'
                   + '</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'
            +'<div id="divimg">'
              +'<div>'
            
                +'<img src="" class="img-fluid rounded-start" alt="">'
            
              +'</div>'
            +'</div>'
          +'</div>'
        }
    })
    .catch(error => console.log('Error status:', error));
}

function ordenarAlfabetoAZ() {

    var url = "controlador/controlador_tienda.php";
	
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
    .then(res => res.json()).then(result =>{

        console.log('succes:',res.list);
    
        var producto = result.list;
        
        document.getElementById("user_sort").addEventListener("change", function(){

            for(let i = 0; i<producto.length; i++) {
    
                producto += "";
    
            }
            document.getElementById("").innerHTML=producto.short();

        })
    })
    .catch(error => console.log('Error status:', error));
}

function ordenarAlfabetoZA() {

    var url = "controlador/controlador_tienda.php";
	
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
    .then(res => res.json()).then(result =>{

        console.log('succes:',res.list);
    
        var producto = result.list;
        
        document.getElementById("user_sort").addEventListener("change", function(){

            for(let i = 0; i<producto.length; i++) {
    
                producto += "";
    
            }
            document.getElementById("").innerHTML=producto.reverse();

        })
    })
    .catch(error => console.log('Error status:', error));
}
