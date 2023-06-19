$(document).ready(function() {
    var slideCount = $('.slider img').length;
    var slideWidth = $('.slider img').width();
    var slideIndex = 0;

    $('.slider').css('width', slideCount * slideWidth);

    function slideNext() {
        if (slideIndex < slideCount - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        $('.slider').css('transform', 'translateX(' + (-slideIndex * slideWidth) + 'px)');
    }

    function slidePrev() {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = slideCount - 1;
        }
        $('.slider').css('transform', 'translateX(' + (-slideIndex * slideWidth) + 'px)');
    }

    $('.next').click(slideNext);
    $('.prev').click(slidePrev);
});
