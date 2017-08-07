
var modal = $('#myModal');
var btn = $("#MyBtn");
var span = $(".close");

$('#MyBtn').on('click',function(){
	$('#myModal').css('display','block');
});

$('.close').on('click',function(){
	$('#myModal').css('display','none');
});

$(document).on('click',function(event){
	if(event.target ==$('#myModal')) {
		$('#myModal').css('display','none');
	}
});