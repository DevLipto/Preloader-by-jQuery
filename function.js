$(document).ready(function(){

    $(window).on("load", function () {
        // When the page is fully loaded, hide the preloader and show the content.
        $(".preloader").fadeOut("slow", function () {
            $(".content").fadeIn("slow");
        });
    });

})