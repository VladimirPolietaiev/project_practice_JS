$('button').on('click', function() {
    var radi = $(':input:radio');

    for (var i = 0; i < radi.length; i++){
        if(radi[i].checked){
            alert ('Выбран ' + i + ' элемент!');
        }
    }
});


