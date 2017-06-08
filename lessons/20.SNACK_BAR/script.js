function myFunction(){
	var x = document.getElementById('snackbar');
	x.className = "show";
	setInterval(function(){
		x.className = x.className.replace("show", "");
	}, 3000);
}





















