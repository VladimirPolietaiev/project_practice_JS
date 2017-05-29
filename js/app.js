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















