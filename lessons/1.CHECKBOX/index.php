<!DOCTYPE html>
<html lang="en">
<head>
<meta charset = "utf-8">
	<title>Hello from JavaScript! Всем привет от JS!</title>
</head>
<body>
  <label><input type="checkbox" id="one" onchange="fun1()"> Проверка чекбокса</label>
 <script src="script.js"> </script>
</body>

</html>

<!--<!DOCTYPE html>        Код на чистом JS - тоже также работает!

содержимое infex.php

<html lang="en">
<head>
<meta charset = "utf-8">
	<title>Hello from JavaScript! Всем привет от JS!</title>
</head>
<body>
  <label><input class="my-checkbox" type="checkbox" /> Проверка чекбокса</label>
 <script src="script.js"> </script>
</body>

</html> 


содержимое script.js

document.addEventListener('DOMContentLoaded', function () {
  var myCheckbox = document.querySelector('.my-checkbox');

  myCheckbox.addEventListener('change', function () {
    if (myCheckbox.checked) {
      alert ('Он активен!');
    } else {
      alert ('Он НЕ активен!');
    }
  });
}, false);﻿



-->