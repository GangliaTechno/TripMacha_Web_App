/* Sticky Navigation bar */
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');

    }
});
/* End of Sticky Navigation Bar */

/* Back to top button */
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 300) {
//         $('.back-to-top').fadeIn('slow');
//     } else {
//         $('.back-to-top').fadeOut('slow');
//     }
// });
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});
/* End of Back to top button */
