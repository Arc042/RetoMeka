function mostrar() {

	var url = "controlador/controlador_tienda.php";
	
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })

    .then(res => res.json()).then(result =>{

        console.log('succes:',res.list);

        var producto = result.list;

        for(let i = 0; i<producto.length; i++) {

            producto += "";
        }
        document.getElementById("").innerHTML=producto;
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
