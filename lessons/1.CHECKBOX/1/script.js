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