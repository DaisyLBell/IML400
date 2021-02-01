$(document).ready(function () {
    $('.red-circle').hover(function () {
        $('.blue-square').fadeOut();
    }, function () {
        $('.blue-square').fadeIn();
    });
});
