$('button').on('click', function() {
    $(':input:radio').each(function (index,data) {
        if ($('input:radio:checked')) {
            alert('Выбран ' + index + ' элемент!');
            }
    })
});






    // var clicked = $('input[type=radio]');

    // for (var i = 0; i < clicked.length; i++){
    //
    //     if(clicked.checked){
    //
    //         alert ('Выбран ' + i + ' элемент!');
    //     }
    // }


