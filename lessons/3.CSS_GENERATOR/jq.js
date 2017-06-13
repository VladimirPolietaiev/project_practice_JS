function fun1(){

    var rtl = $('#rtl').val();
    var rtr = $('#rtr').val();
    var rbr = $('#rbr').val();
    var rbl = $('#rbl').val();
    var ttl = $('#ttl');
    var ttr = $('#ttr');
    var tbr = $('#tbr');
    var tbl = $('#tbl');

    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;

    $('#block').css('borderRadius',(rtl+'px ' +rtr + 'px ' +rbr+ 'px '+ rbl+ 'px '));
}