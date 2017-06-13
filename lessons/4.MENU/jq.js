$('#nav').on('mouseover',function () {

    var target = event.target;
    if(target.className == 'menu-item'){
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
})

$(document).on('mouseover',function(event){
    var target = event.target;
    if(target.className != 'menu-item' && target.className != 'submenu'){
        closeMenu();
    }
})

function closeMenu(){
    var subm = $('.submenu');
    for(var i = 0; i < subm.length; i++){
        subm[i].style.display = "none";
    }
}

