function mostrar() {

	var url = "controlador/controlador_tienda.php";
	
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })

    .then(res => res.json()).then(result =>{

        console.log('succes:',res.list);

        var prodcuto = result.list;

        var resultado = "";

        for(let i = 0; i<prodcuto.length; i++) {

            prodcuto += "";
        }
        document.getElementById("").innerHTML=prodcuto;
    })
    .catch(error => console.log('Error status:', error));
}