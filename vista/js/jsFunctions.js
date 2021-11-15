var Imagenes = ["../imagenes/IMGINDEX/3005287.jpg", 
"../imagenes/IMGINDEX/Ave.webp", "../imagenes/IMGINDEX/dron-cofepasa-blog.jpg", "../imagenes/IMGINDEX/DroneQuadcopter.webp", "../imagenes/IMGINDEX/f608x342-340279_370002_13.jpg", "../imagenes/IMGINDEX/Hacedorentaller.webp", "../imagenes/IMGINDEX/Masca.webp", "../imagenes/IMGINDEX/reunióndenegocios.webp", "../imagenes/IMGINDEX/taller-1.jpg", "../imagenes/IMGINDEX/Volarunaviónnotripulado.webp"]


var textoarray1 = ["HOLA", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni expedita vitae officia tempora eius dolor quaerat. Facere suscipit ullam officiis?."];
var textoarray2 = ["ADIOS", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, optio. Consequuntur saepe a	voluptatibus numquam tempora ea odit ab reprehenderit voluptatum quis? Culpa, sint eos."];


document.addEventListener("DOMContentLoaded", function (event) {

	// sessionVarsView();
	
	// document.getElementById("submit").addEventListener('click', login);
	// document.getElementById("logout").addEventListener('click', logout);

	// document.getElementById("btnLogin").addEventListener('click', function () {
	// 	alert("hola")
	// 	modal = document.getElementById("modalForm");
	// 	modal.style.display = "block";
	// 	modal.style.transition = "0,5s";
	// 	modal.style.opacity = "1";
	// 	modal.style.backgroundColor = "#00000066";


	// 	exit = document.getElementById("exit");
	// 	exit.addEventListener('click', function () {
	// 		removeElement(modal);

	// 	});
	// 	function removeElement(modal) {

	// 		modal.style.cssText = " opacity: -=1; transition: 300; display: none";
	// 	}
	// });
	// LOGIN
	// document.getElementById("btnLogin").addEventListener('click', function(){

	// 	document.getElementById("divUser").style.display="block";
	// });

})

function sessionVarsView() {
	var url = "../../controlador/cSessionVarsView.php";

	fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }  // input data
	})
		.then(res => res.json()).then(result => {

			// console.log(result);

			if (result.error == "no error") {

				// document.getElementById("msg").innerHTML = "You are " + result.user.nombre + " and type : " + result.user.tipo;
				if (result.user.tipo == "AdminInformatico") {
					document.getElementById("clientes").style.display = "inline-block";
				} else if (result.user.tipo == "AdminFinanzas") {
					document.getElementById("banca").style.display = "inline-block";

				}
				// document.getElementById("modalForm").style.display="none";
				document.getElementById("logout").style.display = "inline-block";
			} else {
				document.getElementById("msg").innerHTML = result.error;
			}
		})
		.catch(error => console.error('Error status:', error));
}






function login() {

	var name = document.getElementById("name").value;
	var password = document.getElementById("password").value;

	var url = "../../controlador/controller_login.php";
	var data = { 'nombre': name, 'contrasena': password };

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
				// document.getElementById("divUser").style.display="none";

				if (result.user.tipo == "AdminInformatico") {
					document.getElementById("clientes").style.display = "inline-block";

				} else if (result.user.tipo == "AdminFinanzas") {
					document.getElementById("banca").style.display = "inline-block";

				}
				// document.getElementById("divUser").style.display="none";
				document.getElementById("logout").style.display = "inline-block";
			} else {
				alert(result.error)
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
			document.getElementById("submit").style.display = "inline-block";
		})
		.catch(error => console.error('Error status:', error));
}

