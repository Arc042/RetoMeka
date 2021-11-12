var Imagenes = ["../imagenes/IMGINDEX/3005287.jpg", "../imagenes/IMGINDEX/Ave.webp", "../imagenes/IMGINDEX/dron-cofepasa-blog.jpg", "../imagenes/IMGINDEX/DroneQuadcopter.webp", "../imagenes/IMGINDEX/f608x342-340279_370002_13.jpg", "../imagenes/IMGINDEX/Hacedorentaller.webp", "../imagenes/IMGINDEX/Masca.webp", "../imagenes/IMGINDEX/reunióndenegocios.webp", "../imagenes/IMGINDEX/taller-1.jpg", "../imagenes/IMGINDEX/Volarunaviónnotripulado.webp"]


var textoarray1 = ["HOLA", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni expedita vitae officia tempora eius dolor quaerat. Facere suscipit ullam officiis?."];
var textoarray2 = ["ADIOS", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, optio. Consequuntur saepe a	voluptatibus numquam tempora ea odit ab reprehenderit voluptatum quis? Culpa, sint eos."];


document.addEventListener("DOMContentLoaded", function (event) {

	// sessionVarsView();
	// loadGrid();
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


function loadGrid() {

	// var url = "../../controlador/controller_index.php";


	// var newRow = "<div class='titulo '><h2>TITULO</h2></div>";
	// newRow += " <div class='texto1'><div class='t-1'>";
	// newRow += "<h6>" + textoarray1[0] + "</h6>";
	// newRow += "<p>" + textoarray1[1] + "</p></div ></div > ";
	// newRow += "<div class='img1'><img src=" + Imagenes[5] + "></div>"
	// newRow += "<div class='img2'><img src=" + Imagenes[7] + "></div>";
	// newRow += " <div class='texto2'><div class='t-2'>";
	// newRow += "<h6>" + textoarray2[0] + "</h6>";
	// newRow += "<p>" + textoarray2[1] + "</p></div ></div > ";
	// newRow += "<div class='img3'><img src=" + Imagenes[3] + "></div>"
	// newRow += " <div class='texto3'><div class='t-3'>";
	// newRow += "<h6>" + textoarray1[0] + "</h6>";
	// newRow += "<p>" + textoarray1[1] + "</p></div ></div>";
	// newRow += "<div class='img4'><img src=" + Imagenes[1] + "></div>";
	// newRow += " <div class='texto4'><div class='t-4'>";
	// newRow += "<h6>" + textoarray2[0] + "</h6>";
	// newRow += "<p>" + textoarray2[1] + "</p></div ></div> ";
	// newRow += "<div class='img5'><img src=" + Imagenes[6] + "></div>";

	// // console.log(newRow)

	// document.getElementById("contenedor").innerHTML = newRow; // add

	var url = "../../controlador/controller_index.php"
	fetch(url, {
	  method: 'GET', // or 'POST'
	})
	.then(res => res.json()).then(result => {
		
			console.log('Success:', result.list);
			
			var grids = result.list;

       		var newRow ="";

			for (let i = 0; i <grids.length; i++) {
				newRow +="<div class='titulo '><h2>TITULO</h2></div>";
				 newRow += " <div class='texto1'><div class='t-1'>";
				 newRow += "<h6>" + textoarray1[0] + "</h6>";
				 newRow += "<p>" + textoarray1[1] + "</p></div ></div > ";
				 newRow += "<div class='img1'><img src=" + Imagenes[5] + "></div>"
				 newRow += "<div class='img2'><img src=" + Imagenes[7] + "></div>";
				newRow += "<tr>" +"<td>"+pelikulak[i].idPelicula+"</td>"
									+"<td>"+pelikulak[i].TituloPelicula+"</td>"
									+"<td>"+pelikulak[i].Anio+"</td>"
									+"<td>"+pelikulak[i].objDirector.NombreDirector+"</td>"
									+"<td><img src='"+pelikulak[i].cartel+"'/></td>"
								+"</tr>";	
			}
       		newRow +="</table>";   
       		document.getElementById("tableFilms").innerHTML = newRow; // add
       		document.getElementById("numVisits").value=result.numVisits;
       		
       		var lista=loadSelect(pelikulak);;
       		document.getElementById("selectDelete").innerHTML=lista;
       		document.getElementById("selectUpdate").innerHTML=lista;
       		
       		var directors= result.directors;
       		
       		var listaDirectors=loadDirectors(directors);
       		
       		document.getElementById("SelectDirectorInsert").innerHTML=listaDirectors;
	})
	.catch(error => console.error('Error status:', error));	
};
};


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

