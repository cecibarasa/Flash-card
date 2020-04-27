$('.obj').click(function() {
    $('.obj').toggle();
    $('.def').toggle();

});

$('.def').click(function() {
    $('.obj').slideToggle();
    $('.def').slideToggle();
})