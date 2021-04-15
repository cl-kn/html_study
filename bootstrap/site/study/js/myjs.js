$(function() {
    $('.navbar-collapse li a').each(function() {
        var target = $(this).attr('href');
        if (location.href.match(target)) {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    });
});