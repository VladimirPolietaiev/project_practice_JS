//Placeholder
var textfield=document.getElementById("field");
 textfield.onfocus = function (){
  if(textfield.value=="Enter your task"){
   textfield.value="";
  }
 };
 textfield.onblur = function(){
  if (textfield.value ==""){
   textfield.value="Enter your task";
  }
 };
///////////////////////////////////
var taskContainer = document.getElementById("taskContainer");
var field = document.getElementById("field");
var addButton = document.getElementById("addButton");
var div = document.createElement('div');
var span = document.createElement('span');
var checkBox = document.createElement('input');


addButton.onclick = function () {
  var div = document.createElement('div');
      var span = document.createElement('span');
      var checkBox = document.createElement('input');
   for (var i = 0; i<1; i++) {
    
     if (field.value =='Enter your task') {
      break;
     }
     ////////////
      checkBox.setAttribute("type", "checkbox");
      checkBox.classList.add('checkBox');
      //////////
      span.classList.add('close');
      span.innerHTML = '&times';
     //////////
     div.innerHTML = field.value;
     div.classList.add('task');
     div.appendChild(checkBox);
     div.appendChild(span);
     ////////
     taskContainer.appendChild(div);
     field.value="Enter your task";///Устанавливаем занчание по умоланию

    }//For End
        span.onclick = function () {
       this.parentNode.parentNode.removeChild(div);////Удаляем родителей 
      };
/////////////////////////////
     var marking = document.querySelector('div');///Выберем блок для зачеркивания
     markingFunction = function (event) {
      if (event.target.className === 'checkBox' && event.target.checked ) {//Определяем на каком элементе был клик
   event.target.parentNode.classList.add('checked');
  }
  else if (event.target.className === 'checkBox' && !event.target.checked ) {
   event.target.parentNode.classList.remove('checked');///Добавляем класс к родителю
  }
      
     };
     marking.addEventListener('click', markingFunction);    
};