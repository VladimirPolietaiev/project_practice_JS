
$('input').keyup(function(){

	var input, filter, ul, li, a;
	input = $('#myInput');
	filter = input.val().toUpperCase();
	ul = $("myUL");
	li = $('ul li');


		li.each(function (i) {
		a = li[i].getElementsByTagName("a")[0];
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
			li[i].style.display = "";
		}else{
			li[i].style.display = "none";
		}
	})
});










