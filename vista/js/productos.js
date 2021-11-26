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

        for(var i = 0; i<=producto.length-2; i++) {
          console.log(i);

          const carc1 = producto[i].descripcion.split("-");
          const carc2 = producto[i+1].descripcion.split("-");

          var carc1text="";
          for (let i = 0; i < carc1.length; i++) {

            carc1text += '<li>'+carc1[i]+'</li>'
            
          }
          console.log(carc1text);
          var carc2text="";
          for (let i = 0; i < carc2.length; i++) {

            carc2text += '<li>'+carc2[i]+'</li>'
            
          }
          console.log(carc2text);

          console.log(producto[i]);

          document.getElementById("relleno").innerHTML += '<div id="container">'
            +'<div id="divcard">'
              +'<div class="card mb-3 cards" >'
               + '<div>'
                 +' <div class="row g-0 cards">'
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+producto[i].nombre+'</h5>'
                       + '<ul>'
                         + carc1text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i].precio+'€</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
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
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+producto[i+1].nombre+'</h5>'
                       + '<ul>'
                         + carc2text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i+1].precio+'€</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
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
        var producto="";
        var producto = result.list;
        console.log(producto);

        for(var i = 0; i<=producto.length-2; i++) {
          console.log(i);

          const carc1 = producto[i].descripcion.split("-");
          const carc2 = producto[i+1].descripcion.split("-");

          var carc1text="";
          for (let i = 0; i < carc1.length; i++) {

            carc1text += '<li>'+carc1[i]+'</li>'
            
          }
          console.log(carc1text);
          if (producto[i+1]!=null) {
          var carc2text="";
          for (let i = 0; i < carc2.length; i++) {

            carc2text += '<li>'+carc2[i]+'</li>'
            
          }
          console.log(carc2text);
          }

          console.log(producto[i]);

          document.getElementById("relleno").innerHTML += '<div id="container">'
            +'<div id="divcard">'
              +'<div class="card mb-3 cards" >'
               + '<div>'
                 +' <div class="row g-0 cards">'
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+producto[i].nombre+'</h5>'
                       + '<ul>'
                         + carc1text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i].precio+'€</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
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
          if (producto[i+1]!=null) {
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
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+producto[i+1].nombre+'</h5>'
                       + '<ul>'
                         + carc2text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i+1].precio+'€</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
                      +'<img src="'+producto[i+1].img+'" class="img-fluid rounded-start"'
                        +'alt="">'
                   + '</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'}
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
        var producto="";
        var producto = result.list;
        console.log(producto);

        for(var i = 0; i<=producto.length-2; i++) {
          console.log(i);

          const carc1 = producto[i].descripcion.split("-");
          const carc2 = producto[i+1].descripcion.split("-");

          var carc1text="";
          for (let i = 0; i < carc1.length; i++) {

            carc1text += '<li>'+carc1[i]+'</li>'
            
          }
          console.log(carc1text);
          if (producto[i+1]!=null) {
          var carc2text="";
          for (let i = 0; i < carc2.length; i++) {

            carc2text += '<li>'+carc2[i]+'</li>'
            
          }
          console.log(carc2text);
          }

          console.log(producto[i]);

          document.getElementById("relleno").innerHTML += '<div id="container">'
            +'<div id="divcard">'
              +'<div class="card mb-3 cards" >'
               + '<div>'
                 +' <div class="row g-0 cards">'
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+producto[i].nombre+'</h5>'
                       + '<ul>'
                         + carc1text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i].precio+'€</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
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
          if (producto[i+1]!=null) {
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
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                       + '<h5 class="card-title">'+producto[i+1].nombre+'</h5>'
                       + '<ul>'
                         + carc2text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i+1].precio+'€</li>'
                       + '</ul>'
                     + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
                      +'<img src="'+producto[i+1].img+'" class="img-fluid rounded-start"'
                        +'alt="">'
                   + '</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'}
          +'</div>'
          i++
        }
    })
    .catch(error => console.log('Error status:', error));
}

document.getElementById("user_filter").addEventListener("change", function(){

  if(document.getElementById("user_filter").value == 0) {
    document.getElementById("relleno").innerHTML = "";
    mostrar();
  } else{
  tipo = document.getElementById("user_filter").value;
  document.getElementById("relleno").innerHTML = "";
  ordenarTipo(tipo)
  }
})

function ordenarTipo(tipo) {
  var url = "../../controlador/controlador_tienda2.php";
  console.log("hjdhde")
  console.log(tipo)
  var miData= {'tipo': tipo};
  miData= JSON.stringify(miData);
  console.log("prueba")
  fetch(url, {
      method: 'POST', 
      body: miData,
      headers:{'Content-Type': 'application/json'}  // input data
      })

    .then(res => res.json()).then(result =>{
      // console.log('succes:',result.list);
      var producto="";
      var producto = result.list;
      console.log(producto);

      for(var i = 0; i<=producto.length-2; i++) {
        console.log(i);

        const carc1 = producto[i].descripcion.split("-");
        const carc2 = producto[i+1].descripcion.split("-");

        var carc1text="";
        for (let i = 0; i < carc1.length; i++) {

          carc1text += '<li>'+carc1[i]+'</li>'
          
        }
        console.log(carc1text);
        if (producto[i+1]!=null) {
        var carc2text="";
        for (let i = 0; i < carc2.length; i++) {

          carc2text += '<li>'+carc2[i]+'</li>'
          
        }
        console.log(carc2text);
      }

        console.log(producto[i]);

        document.getElementById("relleno").innerHTML += '<div id="container">'
          +'<div id="divcard">'
            +'<div class="card mb-3 cards" >'
            + '<div>'
              +' <div class="row g-0 cards">'
                +  '<div class="col-md-8" id="cardbody">'
                    +'<div class="card-body">'
                    + '<h5 class="card-title">'+producto[i].nombre+'</h5>'
                    + '<ul>'
                      + carc1text
                      +'</ul>'
                      +'<ul class="list-group list-group-flush">'
                        +'<li class="list-group-item">'+producto[i].precio+'€</li>'
                    + '</ul>'
                  + '</div>'
                  +'</div>'
                  +'<div class="col-md-4" id="cardimg">'
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
        if (producto[i+1]!=null) {
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
                +  '<div class="col-md-8" id="cardbody">'
                    +'<div class="card-body">'
                    + '<h5 class="card-title">'+producto[i+1].nombre+'</h5>'
                    + '<ul>'
                      + carc2text
                      +'</ul>'
                      +'<ul class="list-group list-group-flush">'
                        +'<li class="list-group-item">'+producto[i+1].precio+'€</li>'
                    + '</ul>'
                  + '</div>'
                  +'</div>'
                  +'<div class="col-md-4" id="cardimg">'
                    +'<img src="'+producto[i+1].img+'" class="img-fluid rounded-start"'
                      +'alt="">'
                + '</div>'
                +'</div>'
              +'</div>'
            +'</div>'
          +'</div>'}
        +'</div>'
        i++
      }
    })
    .catch(error => console.log('Error status:', error));
}

document.getElementById("user_name").addEventListener("keyup", function(){

  //console.log(document.getElementById("user_name").value);
  var nombre = document.getElementById("user_name").value;

    document.getElementById("relleno").innerHTML = "";
    buscarNombre(nombre)
  
})

function buscarNombre(nombre) {
  var url = "../../controlador/controlador_tienda3.php";
  var miData= {'nombre': nombre};
  miData= JSON.stringify(miData);

  fetch(url, {
      method: 'POST', 
      body: miData,
      headers:{'Content-Type': 'application/json'}  // input data
      })

    .then(res => res.json()).then(result =>{
      // console.log('succes:',result.list);
      var producto="";
      var producto = result.list;
      console.log(producto);

      for(var i = 0; i<=producto.length-1; i++) {
          console.log(i);

          const carc1 = producto[i].descripcion.split("-");

          var carc1text="";
          for (let i = 0; i < carc1.length; i++) {

            carc1text += '<li>'+carc1[i]+'</li>'
            
          }
          console.log(carc1text);

          if (producto[i+1]!=null) {
            
            const carc2 = producto[i+1].descripcion.split("-");
            
            var carc2text="";
          for (let i = 0; i < carc2.length; i++) {

            carc2text += '<li>'+carc2[i]+'</li>'
            
          }
          console.log(carc2text);
          }
          
          
          

          console.log(producto[i]);

          document.getElementById("relleno").innerHTML += '<div id="container">'
            +'<div id="divcard">'
              +'<div class="card mb-3 cards" >'
              + '<div>'
                +' <div class="row g-0 cards">'
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                      + '<h5 class="card-title">'+producto[i].nombre+'</h5>'
                      + '<ul>'
                        + carc1text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i].precio+'€</li>'
                      + '</ul>'
                    + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
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
          
          if (producto[i+1]!=null) {
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
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                      + '<h5 class="card-title">'+producto[i+1].nombre+'</h5>'
                      + '<ul>'
                        + carc2text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i+1].precio+'€</li>'
                      + '</ul>'
                    + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
                      +'<img src="'+producto[i+1].img+'" class="img-fluid rounded-start"'
                        +'alt="">'
                  + '</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'
          }
            

          +'</div>'
          i++
        }
    })
    .catch(error => console.log('Error status:', error));
}

document.getElementById("slider-range").addEventListener("click", function(){

  var dividirCadena=document.getElementById("amount").value.split("-",2);
  // alert(dividirCadena[0].replace('$', ''));
  // alert(dividirCadena[1].replace('$', ''));
  var min = dividirCadena[0].replace('$', '');
  var max = dividirCadena[1].replace('$', '');

    document.getElementById("relleno").innerHTML = "";
    filtroPrecio(min,max)
    
  
})

function filtroPrecio(min,max) {
  var url = "../../controlador/controlador_tienda4.php";
  var miData= {'min': min,'max': max};
  miData= JSON.stringify(miData);

  fetch(url, {
      method: 'POST', 
      body: miData,
      headers:{'Content-Type': 'application/json'}  // input data
      })

    .then(res => res.json()).then(result =>{
      if (result==null) {
        document.getElementById("relleno").innerHTML = ""
        document.getElementById("relleno").innerHTML += "No se ha encontrado ningun resultado"
      }

        // console.log('succes:',result.list);
      var producto="";
      var producto = result.list;
      console.log(producto);

      for(var i = 0; i<=producto.length-1; i++) {
          console.log(i);

          const carc1 = producto[i].descripcion.split("-");

          var carc1text="";
          for (let i = 0; i < carc1.length; i++) {

            carc1text += '<li>'+carc1[i]+'</li>'
            
          }
          console.log(carc1text);

          if (producto[i+1]!=null) {
            
            const carc2 = producto[i+1].descripcion.split("-");
            
            var carc2text="";
          for (let i = 0; i < carc2.length; i++) {

            carc2text += '<li>'+carc2[i]+'</li>'
            
          }
          console.log(carc2text);
          }
          
          
          

          console.log(producto[i]);

          document.getElementById("relleno").innerHTML += '<div id="container">'
            +'<div id="divcard">'
              +'<div class="card mb-3 cards" >'
              + '<div>'
                +' <div class="row g-0 cards">'
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                      + '<h5 class="card-title">'+producto[i].nombre+'</h5>'
                      + '<ul>'
                        + carc1text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i].precio+'€</li>'
                      + '</ul>'
                    + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
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
          
          if (producto[i+1]!=null) {
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
                  +  '<div class="col-md-8" id="cardbody">'
                      +'<div class="card-body">'
                      + '<h5 class="card-title">'+producto[i+1].nombre+'</h5>'
                      + '<ul>'
                        + carc2text
                        +'</ul>'
                        +'<ul class="list-group list-group-flush">'
                          +'<li class="list-group-item">'+producto[i+1].precio+'€</li>'
                      + '</ul>'
                    + '</div>'
                    +'</div>'
                    +'<div class="col-md-4" id="cardimg">'
                      +'<img src="'+producto[i+1].img+'" class="img-fluid rounded-start"'
                        +'alt="">'
                  + '</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'
          }
            

          +'</div>'
          i++
        }
    })
    .catch(error => console.log('Error status:', error));
}

