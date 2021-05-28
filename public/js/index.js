
$(function () {
    $(".landingSection").backstretch("../images/Providence.jpg");

    $("#aboutUs").backstretch([{
        url: "../images/aboutStretch.png",
        alignX: 0,
        alignY: 0

    }]);

    $('.img-row').hover(function () {
        $(this).find('.three-pic-row-text').toggleClass('underline');
    });

    $(".list-group-item").hover(function () {
        $(this).find('.hop-type').toggleClass('underline');
    });

    $(".list-group-item").click(function(){
      $(".hop-icon").css("visibility", "hidden");
      $(this).find(".hop-icon").css("visibility", "visible");
    });
});