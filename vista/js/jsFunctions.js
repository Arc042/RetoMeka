document.addEventListener("DOMContentLoaded",function (event) {
    
    document.getElementById("submit").addEventListener('click', login);
    document.getElementById("logout").addEventListener('click', logout);


    
    // LOGIN
	document.getElementById("login").addEventListener('click', function(){
		document.getElementById("divUser").style.display="block";
	});
})