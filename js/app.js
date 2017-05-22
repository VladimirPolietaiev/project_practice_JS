//////////  nav ////////

document.getElementById('nav').onmouseover = function(event){
    var target = event.target;
    if (target.className == 'menu-item'){
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
     }
};

document.onmouseover = function(event) {
    var target = event.target;
    if (target.className != 'menu-item' && target.className != 'submenu'){
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i= 0; i < subm.length; i++){
        subm[i].style.display = ' none';
    }
}

///////////////////////////////////////////////

/////////////   tab

var tab;
var tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i=a; i <tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick= function (event) {
    var target = event.target;
    if (target.className == 'tab'){
        for (var i =0; i<tab.length; i++){
            if (target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

////////////////// modal window   ///////////////////////

var modal = document.getElementById('myModal');
var btn = document.getElementById("mybtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal){
        modal.style.display = 'none';
    }
};
















