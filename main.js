$(function(){

    // Fixed Header 

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    // Smooth scroll
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffSet = $(elementID).offset().top;

        console.log(elementOffSet);

        $("html, body").animate({
            scrollTop: elementOffSet - 80
        }, 1000)
    })

    // Nav Toggle

    $('#navToggle').on("click", function() {
        $('.nav').toggleClass("showNav");
        $('.nav').slideToggle(200);
        
        $('.showNav').css('display', 'flex');
        $(".burger__item").toggleClass("showBurger");
    });

    let doc_w = window.innerWidth;
    $(window).on("load resize", function(){
         let doc_w = window.innerWidth;
        console.log(doc_w);

        if(doc_w > 992){
            $(".nav").css('display', 'flex');
        } else{
            $(".nav").css('display', 'none');
            $(".showNav").css('display', 'flex');
        }

    //Reviews
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
      });

});
