var navHeight = 91; //default
var width = 1000;
var desktop = false;

$(function () {

    onceLoaded();

});

function scrollPageTo(id) {

    var offset = 0;
    var current = $(document).scrollTop();
    var target = $("#" + id).offset().top;
    if (width > 1200 || width < 1201 && target < current) {
        offset = navHeight;
    }


    $('html,body').stop().animate({ scrollTop: target - offset }, 500, "swing", function () {
        return false;
    });

}

function setDesktop() {
    if ($(window).width() > 1200) {
        desktop = true;
    }
    navHeight = $("nav").outerHeight() || 91;
    width = $(window).width();
}

function onceLoaded() {
    if ($("nav").length) {
        //always collapse nav when link is clicked
        $(".nav-link").click(function () {
            $('.collapse').collapse('hide');
        });

        // detect scroll top or down
        if ($('.smart-scroll').length > 0 && $(window).width() < 1201) {
            var last_scroll_top = 0;
            $(window).on('scroll', function () {
                scroll_top = $(this).scrollTop();
                if (scroll_top > last_scroll_top && $(this).scrollTop() > 100) {

                    $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                }
                else {
                    $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                }
                last_scroll_top = scroll_top;
            });

        }

        setDesktop();

        $(window).on('resize', function () {
            $('.collapse').collapse('hide');
            setDesktop();
        });

        if (desktop) {
            $(document).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $(".navbar").addClass('scrolled');
                } else {
                    $(".navbar").removeClass('scrolled');
                }

            });
        } else {
            $("nav").addClass('scrolled');
        }

    } else {
        setTimeout(onceLoaded, 100);
    }

}
