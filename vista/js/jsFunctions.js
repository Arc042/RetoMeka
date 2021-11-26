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
				if (result.user.tipo == "AdminInformatico") {
					document.getElementById("administrador").style.display = "inline-block";
				} else if (result.user.tipo == "AdminFinanzas") {
					document.getElementById("banca").style.display = "inline-block";
					document.getElementById("administrador").style.display = "none";

				}  else if (result.user.tipo == "Usuario"){
					document.getElementById("clientes").style.display = "inline-block";
					document.getElementById("clientes").disabled = true;
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
					document.getElementById("clientes").style.display = "inline-block";
					document.getElementById("clientes").disabled = true;
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
		})
		.catch(error => console.error('Error status:', error));
}

