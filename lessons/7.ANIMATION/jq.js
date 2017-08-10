$('button').on('click',function () {

	var pos = 0;
	var id = setInterval(frame, 10);
	function frame(){
		if(pos == 350){
			clearInterval(id);
		}else{
			pos++;
			$("#myAnimation").css('top',(pos +'px'));
			$("#myAnimation").css('left',(pos + 'px'));
		}
	}
});


