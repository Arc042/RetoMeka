function sessionVarsView() {
	var url = "../../controlador/cSessionVarsView.php";

	fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }  // input data
	})
		.then(res => res.json()).then(result => {

			console.log(result);

			if (result.error == "no error") {

				document.getElementById("msg").innerHTML = "You are " + result.usuario.nombre + " and type : " + result.usuario.type;
				if (result.usuario.type == 1) {
					document.getElementById("berria").style.display = "inline-block";
					document.getElementById("ezabatu").style.display = "inline-block";
					document.getElementById("aldatu").style.display = "inline-block";
				}
				document.getElementById("login").style.display = "none";
				document.getElementById("logout").style.display = "inline-block";
			} else {
				document.getElementById("msg").innerHTML = result.error;
			}
		})
		.catch(error => console.error('Error status:', error));
}
