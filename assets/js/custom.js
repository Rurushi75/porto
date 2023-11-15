$(document).ready(function () {
    // Remove Preloader
    $("#preloader").fadeOut("slow");

    // Set Animasi
    init_animate();

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            380: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: false
            },
        }
    })
});

// Navigation Active
$("a.nav-link").on("click", function() {
    $(this).addClass("active");
});



// TRigger Element with class animate_animated
function init_animate() {
    $(".animate__animated").each(function () {
        $(this).on('inview', function (event, isInView) {
            // mangambuil nilai atribute data animate
            var animate_class = $(this).attr("data-animate");

            // mendeteksi element ketika mengambil
            if (isInView) {
                // jika tampil/Visible
                $(this).addClass(animate_class);
                console.log(isInView)
            } else {
                // jika tidak tampil / not visible
                $(this).removeClass(animate_class);
                console.log(false)
                console.log(isInView)
            }
        });
    });
}

$('.slider').bxSlider({
    autoControls: true,
    auto: true,
    pager: true,
    slideWidth: 800,
    mode: 'fade',
    captions: true,
    speed: 100
});