/*window.onload = function() {
    mostrar();
    console.log('fbidffiusbfivu')
  };*/

  document.addEventListener("DOMContentLoaded", function (event){
    mostrarAZ();
  })
function mostrarAZ() {
	var url = "../../controlador/controlador_tienda.php";
	
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })

    .then(res => res.json()).then(result =>{

        // console.log('succes:',result.list);
        var producto="";
        var producto = result.list;
        console.log(producto);

        for(var i = 0; i<=producto.length-1; i++) {

          console.log(producto[i]);

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
                      +'<img src="'+producto[i].img+'" class="img-fluid rounded-start"'
                        +'alt="">'
                   + '</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'
            +'<div id="divimg">'
              +'<div>'
            
                +'<img src="'+producto[i].img+'" class="img-fluid rounded-start" alt="">'
            
              +'</div>'
            +'</div>'
          +'</div>'
          
          document.getElementById("relleno").innerHTML += '<div id="container">'
          +'<div id="divimg">'
              +'<div>'
            
                +'<img src="'+producto[i+1].img+'" class="img-fluid rounded-start" alt="">'
            
              +'</div>'
            +'</div>'  
          +'<div id="divcard">'
              +'<div class="card mb-3 cards" >'
               + '<div>'
                 +' <div class="row g-0 cards">'
                  +  '<div class="col-md-8">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+producto[i+1].nombre+'</h5>'
                       + '<ul>'
                         + '<li>'+producto[i+1].descripcion+'</li>'
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i+1].precio+'</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4">'
                      +'<img src="'+producto[i+1].img+'" class="img-fluid rounded-start"'
                        +'alt="">'
                   + '</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'
          +'</div>'
          i++
        }
    })
    .catch(error => console.log('Error status:', error));
}