

  $(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 426, 
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 2641, 
          settings: {
            slidesToShow: 5
          }
        }
        
      ]
    });
    });
  


 