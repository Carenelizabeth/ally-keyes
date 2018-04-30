function handleScrollDown(){
    $('.js-scroll-down').click(function(){
        console.log('arrow clicked');
        $('html, body').animate({
            scrollTop: $('main').offset().top
        }, 1500);
    })
}
function fadeInTitles(){
    console.log('fade in titles ran');
    $('.js-title').fadeIn(500);
    $('.js-sub-title').delay(1000).fadeIn(500);
    $('.js-angle').delay(3000).fadeIn(500);
}

$(function(){
    handleScrollDown;
    setTimeout(fadeInTitles, 500);
});