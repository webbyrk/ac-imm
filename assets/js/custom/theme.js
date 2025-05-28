// Mobile Navigation
const body = document.querySelector('body');

function mobileNavigationOn() {
    body.classList.add('mobile-menu-active');
}
function mobileNavigationOff() {
    body.classList.remove('mobile-menu-active');
}

// Banner Owl Carousel
$('.hero-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:1
        },
    }
})

// Testimonials Owl Carousel
$('.testimonials-owl').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        }
    },
    navText: [
        '<span class="material-symbols-outlined">arrow_left_alt</span>', 
        '<span class="material-symbols-outlined">arrow_right_alt</span>'
    ]
});

// About Course Owl Carousel
$('.about-coursel-owl').owlCarousel({
    loop: false,
    margin: 25,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        768 : {
            items: 2
        },
        1200 : {
            items: 3
        },
    },
    navText: [
        '<span class="material-symbols-outlined">arrow_left_alt</span>', 
        '<span class="material-symbols-outlined">arrow_right_alt</span>'
    ]
});

// Professor Owl Carousel
$('.prof-coursel-owl').owlCarousel({
    loop: false,
    margin: 25,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        768 : {
            items: 2
        },
        1200 : {
            items: 4
        },
    },
    navText: [
        '<span class="material-symbols-outlined">arrow_left_alt</span>', 
        '<span class="material-symbols-outlined">arrow_right_alt</span>'
    ]
});

function equalizeOwlHeights() {
    var maxHeight = 0;
    
    // Reset heights before recalculating
    $(".prof-coursel-owl .item .theme-box").css("height", "auto");

    // Find the tallest div
    $(".prof-coursel-owl .item .theme-box").each(function () {
        var thisHeight = $(this).outerHeight();
        if (thisHeight > maxHeight) {
            maxHeight = thisHeight;
        }
    });

    // Apply the max height to all divs
    $(".prof-coursel-owl .item .theme-box").css("height", maxHeight + "px");
}

$(document).ready(function () {
    equalizeOwlHeights();
});

// About Gallery Carousel
$('.about-gallery-owl').owlCarousel({
    loop: false,
    margin: 25,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
    },
    navText: [
        '<span class="material-symbols-outlined">arrow_left_alt</span>', 
        '<span class="material-symbols-outlined">arrow_right_alt</span>'
    ]
});

// Careers Carousel
$('.careers-coursel-owl').owlCarousel({
    loop: false,
    margin: 25,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        768 : {
            items: 2
        },
        1200 : {
            items: 3
        },
    },
    navText: [
        '<span class="material-symbols-outlined">arrow_left_alt</span>', 
        '<span class="material-symbols-outlined">arrow_right_alt</span>'
    ]
});

// Industries Carousel
$('.industries-coursel-owl').owlCarousel({
    loop: false,
    margin: 25,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        768 : {
            items: 2
        },
        1200 : {
            items: 4
        },
    },
    navText: [
        '<span class="material-symbols-outlined">arrow_left_alt</span>', 
        '<span class="material-symbols-outlined">arrow_right_alt</span>'
    ]
});

// Custom Accordion and Tabs
$(document).ready(function() {
    // Handle accordion header clicks
    $('.accordion-header').click(function() {
        // If this header is not already active
        if (!$(this).hasClass('active')) {
            // Close all other accordion contents
            $('.accordion-content').slideUp();
            $('.accordion-header').removeClass('active');
            
            // Open current accordion content
            $(this).addClass('active');
            $(this).next('.accordion-content').slideDown();
            
            // Handle tab switching
            const tabId = $(this).data('tab');
            $('.tab-content').removeClass('active');
            $('#' + tabId).addClass('active');
        }
        // If header is already active, do nothing
    });

    // Set initial state
    $('.accordion-header:first').addClass('active');
    $('.accordion-content:first').show();
});

// Custom Modal Image
$(document).ready(function () {
    $(".portfolio-image").click(function () {
        let imgSrc = $(this).attr("src"); // Get the clicked image src
        let imgFullName = imgSrc.split('/').pop(); // Extract full filename with extension
        let imgName = imgFullName.split('.').slice(0, -1).join('.'); // Extract filename without extension

        $("#modalImage").attr("src", imgSrc); // Update modal image
        $("#modalImage").attr("alt", imgName); // Set alt text without extension
        $("#photoModalLabel").text(imgFullName); // Set modal title with full filename (e.g., "photography.jpg")
    });
});



// Active Menu Item
$(document).ready(function () {
    var currentPage = window.location.pathname.split("/").pop();
    $(".theme-menu li a").each(function () {
        var menuItem = $(this).attr("href");
        if (menuItem === currentPage) {
            $(this).addClass("active");
        }
    });
});