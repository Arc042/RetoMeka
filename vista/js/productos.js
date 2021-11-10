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

document.getElementById("user_sort").addEventListener("change", function(){
  console.log(document.getElementById("user_sort").value);
  
  if(document.getElementById("user_sort").value == 1) {
    ordenarAZ();
  }

  if(document.getElementById("user_sort").value == 0) {
    document.getElementById("relleno").innerHTML = "";
    mostrar();
  }

  if(document.getElementById("user_sort").value == 2) {
    document.getElementById("relleno").innerHTML = "";
    mostrarZA();
  }
})

function ordenarAZ() {
    var url = "../../controlador/controlador_tienda.php";
    console.log("prueba")
    fetch(url, {
        method: 'GET', 
        headers:{'Content-Type': 'application/json'}  // input data
        })
  
      .then(res => res.json()).then(result =>{
  
          // console.log('succes:',result.list);
          var ordenarAZ="";
          var ordenarAZ = result.list2;
          console.log(ordenarAZ);
          document.getElementById("relleno").innerHTML = "";
  
          for(var i = 0; i<=ordenarAZ.length-1; i++) {
  
            console.log(ordenarAZ[i]);
            console.log(i);
            console.log(ordenarAZ[i].nombre);
            
  
            document.getElementById("relleno").innerHTML += '<div id="container">'
              +'<div id="divcard">'
                +'<div class="card mb-3 cards" >'
                 + '<div>'
                   +' <div class="row g-0 cards">'
                    +  '<div class="col-md-8">'
                        +'<div class="card-body">'
                         + '<h5 class="card-title">'+ordenarAZ[i].nombre+'</h5>'
                         + '<ul>'
                           + '<li>'+ordenarAZ[i].descripcion+'</li>'
                          +'</ul>'
                          +'<ul class="list-group list-group-flush">'
                            +'<li class="list-group-item">'+ordenarAZ[i].precio+'</li>'
                         + '</ul>'
                       + '</div>'
                      +'</div>'
                      +'<div class="col-md-4">'
                        +'<img src="'+ordenarAZ[i].img+'" class="img-fluid rounded-start"'
                          +'alt="">'
                     + '</div>'
                    +'</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
              +'<div id="divimg">'
                +'<div>'
              
                  +'<img src="'+ordenarAZ[i].img+'" class="img-fluid rounded-start" alt="">'
              
                +'</div>'
              +'</div>'
            +'</div>'
            
            document.getElementById("relleno").innerHTML += '<div id="container">'
            +'<div id="divimg">'
                +'<div>'
              
                  +'<img src="'+ordenarAZ[i+1].img+'" class="img-fluid rounded-start" alt="">'
              
                +'</div>'
              +'</div>'  
            +'<div id="divcard">'
                +'<div class="card mb-3 cards" >'
                 + '<div>'
                   +' <div class="row g-0 cards">'
                    +  '<div class="col-md-8">'
                        +'<div class="card-body">'
                         + '<h5 class="card-title">'+ordenarAZ[i+1].nombre+'</h5>'
                         + '<ul>'
                           + '<li>'+ordenarAZ[i+1].descripcion+'</li>'
                          +'</ul>'
                          +'<ul class="list-group list-group-flush">'
                            +'<li class="list-group-item">'+ordenarAZ[i+1].precio+'</li>'
                         + '</ul>'
                       + '</div>'
                      +'</div>'
                      +'<div class="col-md-4">'
                        +'<img src="'+ordenarAZ[i+1].img+'" class="img-fluid rounded-start"'
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

function mostrarZA() {
  var url = "../../controlador/controlador_tienda.php";
  console.log("prueba")
  fetch(url, {
      method: 'GET', 
      headers:{'Content-Type': 'application/json'}  // input data
      })

    .then(res => res.json()).then(result =>{

        // console.log('succes:',result.list);
        var ordenarZA="";
        var ordenarZA = result.list3;
        console.log(ordenarZA);
        document.getElementById("relleno").innerHTML = "";

        for(var i = 0; i<=ordenarZA.length-1; i++) {

          console.log(ordenarZA[i]);
          console.log(i);
          console.log(ordenarZA[i].nombre);
          

          document.getElementById("relleno").innerHTML += '<div id="container">'
            +'<div id="divcard">'
              +'<div class="card mb-3 cards" >'
               + '<div>'
                 +' <div class="row g-0 cards">'
                  +  '<div class="col-md-8">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+ordenarZA[i].nombre+'</h5>'
                       + '<ul>'
                         + '<li>'+ordenarZA[i].descripcion+'</li>'
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+ordenarZA[i].precio+'</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4">'
                      +'<img src="'+ordenarZA[i].img+'" class="img-fluid rounded-start"'
                        +'alt="">'
                   + '</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'
            +'<div id="divimg">'
              +'<div>'
            
                +'<img src="'+ordenarZA[i].img+'" class="img-fluid rounded-start" alt="">'
            
              +'</div>'
            +'</div>'
          +'</div>'
          
          document.getElementById("relleno").innerHTML += '<div id="container">'
          +'<div id="divimg">'
              +'<div>'
            
                +'<img src="'+ordenarZA[i+1].img+'" class="img-fluid rounded-start" alt="">'
            
              +'</div>'
            +'</div>'  
          +'<div id="divcard">'
              +'<div class="card mb-3 cards" >'
               + '<div>'
                 +' <div class="row g-0 cards">'
                  +  '<div class="col-md-8">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+ordenarZA[i+1].nombre+'</h5>'
                       + '<ul>'
                         + '<li>'+ordenarZA[i+1].descripcion+'</li>'
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+ordenarZA[i+1].precio+'</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4">'
                      +'<img src="'+ordenarZA[i+1].img+'" class="img-fluid rounded-start"'
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