$(document).ready(function(){
    $('.carousel').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="../img/icons/chevron-left-solid.svg"> </button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../img/icons/chevron-right-solid.svg"> </button>',
       
        //slidesToShow: 3,
        centerMode: true,
        centerPadding: '120px',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      }); 
});