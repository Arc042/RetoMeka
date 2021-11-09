document.addEventListener("DOMContentLoaded",function (event) {
	
		
		  $("#header").load("header.html"); 
		  $("#footer").load("footer.html"); 
	
	  
    sessionVarsView();
	
     document.getElementById("submit").addEventListener('click', login);
     document.getElementById("logout").addEventListener('click', logout);
    
	document.getElementById("btnLogin").addEventListener('click', function(){
		alert("hola")
		document.getElementById("divUser").style.display="block";
		
	  });
    // LOGIN
	// document.getElementById("btnLogin").addEventListener('click', function(){
		
	// 	document.getElementById("divUser").style.display="block";
	// });
})

function sessionVarsView()
{
	var url = "../../controlador/cSessionVarsView.php";
	
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
	.then(res => res.json()).then(result => {
	
		console.log(result);
		
		if (result.error =="no error"){
			
			document.getElementById("msg").innerHTML="You are "+result.user.nombre+" and type : "+result.user.tipo;
			if (result.user.tipo == "AdminInformatico")
			{
				alert("usuario tipo 1")		
			}
			document.getElementById("divUser").style.display="none";
			document.getElementById("logout").style.display="inline-block";
		} else {
			document.getElementById("msg").innerHTML=result.error;		
		}
	})
	.catch(error => console.error('Error status:', error));			
}
function login()
{
	alert("hola");
	var name=document.getElementById("name").value;
	var password=document.getElementById("password").value;
	
	var url = "../../controlador/controller_login.php";
	var data = {'nombre':name, 'contrasena':password};
	
	fetch(url, {
		  method: 'POST', // or 'POST'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
	.then(res => res.json()).then(result => {
	
		alert(result.error); 		
		if (result.error =="no error")
   		{
			document.getElementById("msg").innerHTML="You are "+result.user.name+" and type : "+result.user.tipo;
			document.getElementById("name").value="";
			document.getElementById("password").value="";
			document.getElementById("divUser").style.display="none";
			
			if (result.user.tipo ==  "AdminInformatico")
			{
				alert("usuario tipo 1")		
			}
			document.getElementById("divUser").style.display="none";
			document.getElementById("logout").style.display="inline-block";
   		} else {
			document.getElementById("msg").innerHTML =result.error;
   		}		
	})
	.catch(error => console.error('Error status:', error));			
}

function logout(){
	
	var url = "../../controlador/controller_logout.php";
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
	.then(res => res.json()).then(result => {
	
		console.log(result.error);
		
		document.getElementById("msg").innerHTML ="Session destruida. You are not logged" ;
		document.getElementById("numVisits").value=result.numVisits;
		
		buttons=document.querySelectorAll("#buttons button");
		
		for (let i=0;i<buttons.length;i++){
			buttons[i].style.display="none";
		}		
	document.getElementById("btnLogin").style.display="inline-block";
	})
	.catch(error => console.error('Error status:', error));		
}

