let accButtons = document.getElementsByClassName('accordion');
let panels     = document.getElementsByClassName('panel');

for(let i = 0; i < accButtons.length; i++){
  accButtons[i].onclick = function(){
    for(let x = 0; x < panels.length; x++){
      panels[x].classList.remove('show')
    }
    this.nextElementSibling.classList.toggle('show');
  }
}



