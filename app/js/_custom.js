document.addEventListener("DOMContentLoaded", function() {

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        loop: true,
        items: 1,
        itemElement: "slide",
        nav: true,
        navText: ''
    });

    $(".next").click(function(){
        owl.trigger('next.owl.carousel');
    });

    $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
    });

    $(".mobile-mnu").click(function() {
        var thiss = $(this).find(".toggle-mnu")
        thiss.toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    $(".service-item h4").equalHeights();
     

});
