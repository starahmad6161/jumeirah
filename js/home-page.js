$(function() {
    'use strict';

    $(window).on('load resize', function () {  

        if (window.innerWidth >= 768) {
            $(".header .slider").css({
                height: "calc( 100vh - " + ($(".header .nav-bar").innerHeight() + 25) + "px)"
            });
        } else {
            
            $(".header .slider").css({
                height: "calc( 100vh - " + $(".header .nav-bar").innerHeight() + "px)"
            });
        }
    });
    
    

    
    /*Main Section Accordion*/
   $(".main-section .main-section-box .section-sidebar .accordion-container .accordion-item .acc-head svg").on('click', function () {  
       let accordionItem = $(this).parents('.accordion-item');
       accordionItem.find('.acc-content').slideToggle(200).toggleClass('active');
       $(this).parents('.acc-head').toggleClass('selected');
   });

   //Sidebar [Price Bar]
   let barMaxPrice_sidebar =  $('.main-section .main-section-box .section-sidebar .accordion-container .accordion-item .acc-content .price-bar .bar-container').data('max-price');
   $('.main-section .main-section-box .section-sidebar .accordion-container .accordion-item .acc-content .price-bar .bar-container .bar-item').each(function () {  
       let dataPrice = $(this).data('price'),
        totalPer = ( dataPrice *100) / barMaxPrice_sidebar;  
        $(this).css({
            height: totalPer + "%"
        });
   });
   //Slider
   let barVal = 0;
   $('.main-section .main-section-box .section-sidebar .accordion-container .accordion-item .acc-content .custom-scroll .scroll-range').on('input', function () {  
       let inputVal = $(this).val();
       let barContainerWidth = $('.main-section .main-section-box .section-sidebar .accordion-container .accordion-item .acc-content .price-bar .bar-container').innerWidth();
       let priceBarWidth = $('.main-section .main-section-box .section-sidebar .accordion-container .accordion-item .acc-content .price-bar').innerWidth();
        barVal = inputVal;
        if (barContainerWidth > priceBarWidth) {
            if (inputVal > 70) {
                 barVal = barContainerWidth - priceBarWidth;
             }
             //Bar
             $('.main-section .main-section-box .section-sidebar .accordion-container .accordion-item .acc-content .price-bar .bar-container').css({
                 transform: "translateX(-" + barVal + "px)"
             });
        }
        //Circle
       let num = 0;
       if (inputVal > 95) {
            num  = 20;
       }
        $('.main-section .main-section-box .section-sidebar .accordion-container .accordion-item .acc-content .custom-scroll .scroll-circle').css({
            left:  "calc(" + inputVal +  "% - "+ num +"px)"
        });
   });

   //Stop Auto Slide carousel On [.pricing-calendar ]
   $('.main-section .main-section-box .section-sidebar .accordion-container .accordion-item .pricing-calendar .carousel').carousel({
        interval: false
    });
    
    //Card Slide [owlCarousel lib]
    let hoteltabsSwiper = new Swiper('.hotel-section .card .card-details .tabs-container .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.hotel-section .card .card-details .tabs-container .swiper-button-next',
          prevEl: '.hotel-section .card .card-details .tabs-container .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            }
        }
    });
    let contentSwiperPhoto = new Swiper('.hotel-section .tab-content.photo-content .swiper-container',{
        //Your options here:
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.hotel-section .tab-content.photo-content .swiper-button-next',
            prevEl: '.hotel-section .tab-content.photo-content .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            568: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 6
            }
        }
    });
    let contentSwiperReview = new Swiper('.hotel-section .tab-content.reviews-content .swiper-container',{
        //Your options here:
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.hotel-section .tab-content.reviews-content .swiper-button-next',
            prevEl: '.hotel-section .tab-content.reviews-content .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    });
    let contentSwiperRoom = new Swiper('.hotel-section .tab-content.room-type-content .swiper-container',{
        //Your options here:
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.hotel-section .tab-content.room-type-content .swiper-button-next',
            prevEl: '.hotel-section .tab-content.room-type-content .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    });

    
    /*Hotel Section */
    //$(".hotel-section .card.active").show().siblings().hide();
    $('.hotel-section .card .card-arrow.arrow-down').on('click', function () {  
        $(this).parents('.card').addClass('active').find('.card-details').slideDown(200);
    });
    $('.hotel-section .card .card-arrow.arrow-up').on('click', function () {  
        $(this).parents('.card').removeClass('active').find('.card-details').slideUp(200);
    });
    //Add Class active to tabs
    $('.hotel-section .card .card-details .tabs-container .swiper-slide').on('click', function () {
        let dataTabContent = $(this).data('tab-content');
        $(this).addClass('selected').siblings().removeClass('selected');
        console.log(dataTabContent);
        $(this).parents('.card-details').find(dataTabContent).fadeIn(200).addClass('active').siblings().fadeOut(0).removeClass('active');
    });
    //Custom Next/ Prev Arrow [for-tabs]
    $('.hotel-section .card .card-details .tabs-container .my-owl-prev').on('click', function () {  
        $(this).parents('.tab-content').find('.owl-carousel').trigger('prev.owl.carousel');
    });
    $('.hotel-section .card .card-details .tabs-container .my-owl-next').on('click', function () {  
        $(this).parents('.tab-content').find('.owl-carousel').trigger('next.owl.carousel');
    });

    //Custom Next/ Prev Arrow [For Content]
    $('.hotel-section .card .card-details .all-content .tab-content .my-owl-prev').on('click', function () {  
        $(this).parents('.tab-content').find('.owl-carousel').trigger('prev.owl.carousel');
    });
    $('.hotel-section .card .card-details .all-content .tab-content .my-owl-next').on('click', function () {  
        $(this).parents('.tab-content').find('.owl-carousel').trigger('next.owl.carousel');
    });

    //Trigger LightGallery
    $('#lightgallery').lightGallery();
    /*When Click Image open gallery*/
    $('.hotel-section .tab-content.photo-content .swiper-slide').on('click', function () {
        let photoContent = $(this).parents('.tab-content.photo-content');
        photoContent.find('#lightgallery .lg-item:eq('+ $(this).index() +')').trigger('click');
    });






    /*************************/
    /*******Flight Section****/
    /*************************/
    $('.flight-section .card .card-arrow.arrow-down').on('click', function () {  
        $(this).parents('.card').addClass('active').find('.card-details').slideDown(200);
    });
    $('.flight-section .card .card-arrow.arrow-up').on('click', function () {  
        $(this).parents('.card').removeClass('active').find('.card-details').slideUp(200);
    });
    
    
    let flightTabsSwiper = new Swiper('.flight-section .card .card-details .tabs-container .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.flight-section .card .card-details .tabs-container .swiper-button-next',
          prevEl: '.flight-section .card .card-details .tabs-container .swiper-button-prev',
        },
        simulateTouch: false,
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            567: {
                slidesPerView: 5
            }
        }
    });

    var windowWidth = window.innerWidth;
    if (windowWidth < 992) {
        $(".responsive-tabs .responsive-tabs-items .res-tab-item").each(function () {  
            var $this = this,
                dataClass = $(this).data("class"),
                responsive_tabs = $(this).parents(".responsive-tabs");
                responsive_tabs.find(dataClass).prepend($this);
        });
    }

    $(".responsive-tabs .res_tab_content.active .tab-content").fadeIn();
    $(".responsive-tabs .res-tab-item").on("click", function () {  
        var $this = this;
        var dataClass = $(this).data("class"),
            responsive_tabs = $(this).parents(".responsive-tabs");
            
        $(responsive_tabs).find(dataClass).siblings().find(".tab-content").fadeOut(0, function () {  
            $(responsive_tabs).find(dataClass).find(".tab-content").fadeIn(300);
        });
        //Scroll to Top
        responsive_tabs.find(".res-tab-item").removeClass("selected");
        $(this).addClass("selected");
    });

    $('.flight-section .card .card-details .tabs-container .swiper-slide').on('click', function () {  
        let dataTabContent = $(this).data('tab-content');
        $(this).addClass('selected').siblings().removeClass('selected');
        console.log($(this).parents('.card-details').find(dataTabContent));
        $(this).parents('.card-details').find(dataTabContent).fadeIn(200).addClass('active').siblings().fadeOut(0).removeClass('active');
    });


    /**************************************/
    /*********offer-imgs-section************/
    /**************************************/
    let offerImgsSwiper = new Swiper('.offer-imgs-section .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.offer-imgs-section .swiper-button-next',
          prevEl: '.offer-imgs-section .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            568: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1750: {
                slidesPerView: 4
            }
        }
    });
    //Footer datepicker
    $( "footer .datepicker" ).datepicker();


    $(window).on('load resize',  function () {  
        $('.main-section').css({
            paddingTop: ($('.header .slider .box-content .offer-box').innerHeight() / 2)
        });
    });
    
    
});