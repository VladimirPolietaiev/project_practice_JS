function fun1(){

var sel = document.getElementById('MySelect').selectedIndex;

	var options = document.getElementById('MySelect').options;
	
	alert ('Выбрана опция ' + options[sel].text);
}