$(document).ready(function () {
    $('.title').click(function () {
        $(this).parents('.week').find('.content').slideToggle();
    });
});