$(document).ready(function(){
    
    $('.yearSlidser').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
             dots: false,
             arrows:false,
             lazyLoad: 'ondemand',
             ease : 'Pow4.easeIn',
             infinite: false,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      dots: true,
                    }
                  },
                  {
                    breakpoint: 769,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 2,
                      centerMode: false,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      centerMode: false,
                    }
                  }
    
                ]
            });

    $('.slicker').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows:false,
      lazyLoad: 'ondemand',
      ease : 'Pow4.easeIn',
      infinite: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },{
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }

      ]
  });

          })