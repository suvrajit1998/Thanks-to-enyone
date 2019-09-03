//toggle buttne starts

$(function(){
    $('.hamburger-menu').on('click', function (){
        $('.toggle').toggleClass('open');
        $('.nav-links').toggleClass('open');
    });
});