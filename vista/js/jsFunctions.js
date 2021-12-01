function sessionVarsView() {
	var url = "../../controlador/cSessionVarsView.php";

	fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }  // input data
	})
		.then(res => res.json()).then(result => {

			// console.log(result);

			if (result.error == "logged") {
				// alert("Your login is " + result.user.username);
				// document.getElementById("msg").innerHTML = "You are " + result.user.nombre + " and type : " + result.user.tipo;
				document.getElementById("usuario").innerHTML = result.user.username;
				if (result.user.tipo == "AdminInformatico") {
					document.getElementById("administrador").style.display = "inline-block";
					document.getElementById("usuario").style.display = "inline-block";
					document.getElementById("usuario").disabled = true;

				} else if (result.user.tipo == "AdminFinanzas") {
					document.getElementById("banca").style.display = "inline-block";
					document.getElementById("administrador").style.display = "none";
					document.getElementById("usuario").style.display = "inline-block";
					document.getElementById("usuario").disabled = true;

				}  else if (result.user.tipo == "Usuario"){
					document.getElementById("usuario").style.display = "inline-block";
					document.getElementById("usuario").disabled = true;
					//document.getElementById("comprar").style.display = "inline-block";
				}
				document.getElementById("btnLogin").style.display = "none";				
				document.getElementById("logout").style.display = "inline-block";
			} else {
				
				//document.getElementById("msg").innerHTML = result.error;
			}
		})
		.catch(error => console.error('Error status:', error));
}


function login() {

	var username = document.getElementById("name").value;
	var password = document.getElementById("password").value;

	var url = "../../controlador/controller_login.php";
	var data = { 'username': username, 'contrasena': password };

	fetch(url, {
		method: 'POST', // or 'POST'
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers: { 'Content-Type': 'application/json' }  // input data
	})
		.then(res => res.json()).then(result => {

			alert(result.error);
		
			if (result.error == "no error") {
				// document.getElementById("msg").innerHTML = "You are " + result.user.name + " and type : " + result.user.tipo;
				document.getElementById("name").value ="";
				document.getElementById("password").value ="";
				document.getElementById("btnLogin").style.display = "none";

				if (result.user.tipo == "AdminInformatico") {
					document.getElementById("btnLogin").style.display = "none";
					document.getElementById("administrador").style.display = "inline-block";

				} else if (result.user.tipo == "AdminFinanzas") {
					document.getElementById("banca").style.display = "inline-block";
					document.getElementById("clientes").style.display = "inline-block";
					document.getElementById("btnLogin").style.display = "none";
				} else if (result.user.tipo == "Usuario"){
					document.getElementById("usuario").style.display = "inline-block";
					document.getElementById("usuario").disabled = true;
				}
				// document.getElementById("divUser").style.display="none";
				document.getElementById("logout").style.display = "inline-block";
			} else {
				// document.getElementById("msg").innerHTML = result.error;
			}
		})
		.catch(error => console.error('Error status:', error));
}

function logout() {

	var url = "../../controlador/controller_logout.php";
	fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }  // input data
	})
		.then(res => res.json()).then(result => {

			console.log(result.error);

			// document.getElementById("msg").innerHTML = "Session destruida. You are not logged";

			buttons = document.querySelectorAll("#buttons button");

			for (let i = 0; i < buttons.length; i++) {
				buttons[i].style.display = "none";
			}
			document.getElementById("btnLogin").style.display = "block";
			document.getElementById("submit").style.display = "inline-block";
			document.getElementById("comprar").style.display = "none";
		})
		.catch(error => console.error('Error status:', error));
}

function register() {
	
	var username = document.getElementById("username").value;
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var password = document.getElementById("contrasena").value;
	

	var url = "../../controlador/controller_register.php";
	var data = { 'username': username, 'nombre': nombre, 'apellidos': apellidos, 'contrasena': password};

	fetch(url, {
		method: 'POST', // or 'POST'
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers: { 'Content-Type': 'application/json' }  // input data
	})
		.then(res => res.json()).then(result => {
			
			
			alert(result.error);
			
			if (result.error=="Se ha insertado correctamente") {
				$("#modalFormRegister").css('display', 'none');
        		$("#modalFormRegister").css("transition","0,5s");
				document.getElementById("username").value="";
				document.getElementById("nombre").value="";
				document.getElementById("apellidos").value="";
				document.getElementById("contrasena").value="";
			}
		
		})
		.catch(error => console.error('Error status:', error));
}