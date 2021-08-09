$(document).ready(function(){
    $('#by-id h1:first').css("color","green");
    $('#by-id h1:last').css("color","red");
    $('.by-class h1:first').text("ABCD");
    $('.by-class h1:last').text("EFGH");
    $('[attr~="by-attr"] h1:first').css("font-size","14");
    $('[attr~="by-attr"] h1:last').css("font-size","72");
});
