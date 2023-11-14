// MODAL HEADER JS START:
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// MODAL HEADER JS END:

// OWL CAROUSAL BANNER JS START:
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: true,
        items: 1
    })
});
$('.review-highlights').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: true,
    items: 2,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            margin: 0,
        },
        640: {
            items: 1,
        },
        768: {
            items: 1,
        },
        991: {
            items: 2,
        }
    }
});
$('.top-perks').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: true,
    items: 3,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 1,
        },
        768: {
            items: 2,
        },
        991: {
            items: 3,
        }
    }
})
// OWL CAROUSAL BANNER JS END:

//HAMBURGER JS START:
$(".hamburger").click(function () {
    $(".header-right-sec").toggleClass("opacity");
});
//HAMBURGER JS END:

// ACCORDIAN JS START:
$(document).ready(function () {
    $('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

});
// ACCORDIAN JS END: