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

/////////////   tab  /////////////

var tab;
var tabContent;

window.addEventListener('load',function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName("tab");
    hideTabsContent(1);
})


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

        for (var i =0; i< tab.length; i++){
            if (target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
};

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        move(tabContent[b]);
    }
};

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


///////////SLIDER////

var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
}


/*////////////////////// /!*"Search for name"*!/*/

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i=0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        }else{
                li[i].style.display = "none";
             }
    }
}


/*//////map   API   //////////*/


function initMap() {
    var  map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.8000, lng: 24.0000},
        scrollwheel:true,
        zoom: 8
    })
}

///////////// modal windows ////////

window.onload = function () {
    var imgArr = document.getElementsByClassName('my__img');

    var modalWindow = document.getElementById('my__modal');
    var modalImg = document.getElementById('img01');
    var caption =document.getElementById('caption');
    var span = document.getElementById('close');
    var modalBlock = document.getElementById('modal__block');

    for(var i=0; i < imgArr.length;i++){
        var picture = imgArr[i];
        picture.onclick = function(){
            openImg(this);
        }
    }
    function openImg(pic){
        modalWindow.style.display='block';
        modalBlock.style.transform = 'translateY(0%)';
        modalImg.src = pic.src;
        modalImg.alt = pic.alt;
        caption.innerHTML = modalImg.alt;
    }

    function close(){
        modalWindow.style.display ='none';
    }
    span.onclick = function(){
        modalBlock.style.transform = 'translateY(-500%)';
        setTimeout(	close, 500);
    }
}

////////     progres bar  ////////

function move(tabContent){
    console.log("tabContent ", tabContent.classList)
    var elem = tabContent;
    var width = 0;
    var id = setInterval(frame, 10);
    function frame(){
        if(width>=100){
            clearInterval(id);
        }else{
            width++;
            elem.style.width = width + '%';
            elem.style.backgroundColor = '#81ee86';

        }
    }
}

////////////   popup /////////////////

function myPopup(){
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

////////////////   accordion ////////////////////////
function accord() {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for(i=0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");
        }
    }
}

////////// to do /////////////////



var myNodelist = document.getElementsByTagName('LI');
    for(var i=0; i < myNodelist.length; i++){
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

var close = document.getElementsByClassName("close");
for (var i=0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}


var list = document.getElementsByClassName('listMark');
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(ev){
        if(ev.target.tagName === 'LI'){
            ev.target.classList.toggle('checked');
        }
    },false);
}


function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("youInput").value;
    var t = document.createTextNode(inputValue);
    if(inputValue === ''){
        alert("Поле не может быть пустым!");
    }else{
        document.getElementById("myULL").appendChild(li);
    }

    document.getElementById("youInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i=0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

/*-------------
 Snack
-------------*/

document.getElementById('mybtn').onmouseover = function(event){
    var x = document.getElementById('snackbar');
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace('show',"");
    },3000);
};











