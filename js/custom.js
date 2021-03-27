/*===================================================
                SERVICES
===================================================*/
$(document).ready(function () {
    // Handler for .ready() called.
    new WOW().init();
});

/*===================================================
                WORK
===================================================*/

$(document).ready(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });
});


/*===================================================
                TEAM
===================================================*/
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        
        //MAKING THE CAROUSEL SLIDER RESPONSIVE
        responsive : {
    // breakpoint from 0 up
    0 : {
        items:1
    },
    // breakpoint from 480 up
    480 : {
        items:2
    },
    // breakpoint from 768 up
    768 : {
        items:3
    }
}
        
        
    });
});

/*===================================================
                TESTIMONIALS
===================================================*/
$(document).ready(function () {
    $("#testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

/*===================================================
                STATS
===================================================*/

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*===================================================
                CLIENTS
===================================================*/
$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
       
//MAKING THE CAROUSEL SLIDER RESPONSIVE
        responsive : {
    // breakpoint from 0 up
    0 : {
        items:1
    },
    // breakpoint from 480 up
    480 : {
        items:3
    },
    // breakpoint from 768 up
    768 : {
        items:5
    },
    // breakpoint from 992 up
    992 : {
        items:6
    }
}
        
    });
});

/*===================================================
                NAVIGATION
===================================================*/

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            //hide nav
            $("nav").removeClass("stoika-topnav");

        } else {
            //show nav
            $("nav").addClass("stoika-topnav");
        }

    });
});

//ADDING SMOOTH SCROLLING TO NAVIGATION

$(document).ready(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 500, "easeInOutExpo");

    });

});

//CLOSING THE NAVBAR MOBILE NAVIGATION MENU WHEN AN ITEM IN THE MENU IS CLICKED

$(document).ready(function(){
    
 $("ul.navbar-nav li a").on("click touch", function(){
     $(".navbar-toggler").click();
     
 });
  
});


/*===================================================
                FOOTER
===================================================*/

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()<100) {
            //hide back to top button
            $("#back-to-top").fadeOut();

        } else {
            //show back to top button
            $("#back-to-top").fadeIn();
        }

    });
});

