var tab;
var tabContent;

$(document).ready( function(){
	tabContent =$('.tabContent');
	tab = $('.tab');
	hideTabsContent(1);
});

function hideTabsContent(a){
	for(var i = a; i < tabContent.length; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('whiteborder');		
	}	
}

$('#tabs').on('click', function(event) {
	var target = event.target;
	if(target.className == 'tab'){
		for(var i = 0; i < tab.length; i++){
			if(target == tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
});

function showTabsContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideTabsContent(0);
		tab[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}