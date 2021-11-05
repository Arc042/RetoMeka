document.addEventListener("DOMContentLoaded",function (event) {
    
    document.getElementById("submit").addEventListener('click', login);
    document.getElementById("logout").addEventListener('click', logout);
    
    // LOGIN
	document.getElementById("login").addEventListener('click', function(){
		document.getElementById("divUser").style.display="block";
	});
})

function sessionVarsView()
{
	var url = "controller/cSessionVarsView.php";
	
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
	.then(res => res.json()).then(result => {
	
		console.log(result);
		
		if (result.error =="no error"){
			
			document.getElementById("msg").innerHTML="You are "+result.user.name+" and type : "+result.user.type;
			if (result.user.type == 1)
			{
				document.getElementById("berria").style.display="inline-block";	
				document.getElementById("ezabatu").style.display="inline-block";	
				document.getElementById("aldatu").style.display="inline-block";		
			}
			document.getElementById("login").style.display="none";
			document.getElementById("logout").style.display="inline-block";
		} else {
			document.getElementById("msg").innerHTML=result.error;		
		}
	})
	.catch(error => console.error('Error status:', error));			
}

function mostrar() {

	var url = "controlador/controlador_tienda.php";
	
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
}