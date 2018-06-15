
//sort out picture size
function responsiveem() {
    var fontsize = $('picture').width() / 100;

    console.log($('picture').width());
    console.log(fontsize);

    $('.responsiveem').css('font-size', fontsize);
}
$(document).ready(responsiveem);
$(window).resize(responsiveem);

//page turner
$.fn.inView = function () {
    var win = $(window);
    obj = $(this);
    var scrollPosition = win.scrollTop();
    var visibleArea = win.scrollTop() + win.height();
    var objEndPos = (obj.offset().top + obj.outerHeight());
    return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
};
function pages() {
    $('body').addClass('animating');
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {
        $('body').removeClass('animating');
    }, 3000));
    var scrollnumber = ($(window).scrollTop());
    if (scrollnumber > 0) {
        $('body').addClass('not-top');
    }
    else {
        $('body').removeClass('not-top');
    }
    $('page').each(function () {
        var id = $(this).attr('id');
        var page = id.slice(-1);
        if ($(this).inView() === true) {
            $('body').attr('page', page);
        }
    });
}
$(window).scroll(pages);
$(window).resize(pages);
$('column').scroll(pages);
$('column').resize(pages);