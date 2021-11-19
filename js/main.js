$(document).ready(function(){
  /* navbar shrink */
  $(window).on("scroll", function(){
    if($(this).scrollTop() > 90){
      $(".navbar").addClass("navbar-shrink")
    }
    else{
      $(".navbar").removeClass("navbar-shrink")
    }
  })

  /** */
  $('.features-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive:{
      0:{
        items: 1,
      },
      600:{
        items: 2,
      },
      1000:{
        items: 3,
      }
    }
  })

  /** */
  $('.screenshots-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive:{
      0:{
        items: 1,
      },
      600:{
        items: 2,
      },
      1000:{
        items: 4,
      }
    }
  })

  /** */
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive:{
      0:{
        items: 1,
      },
      600:{
        items: 2,
      },
      1000:{
        items: 3,
      }
    }
  })

  /** */
  $('.team-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive:{
      0:{
        items: 1,
      },
      600:{
        items: 2,
      },
      1000:{
        items: 4,
      }
    }
  })

  /* */
  $('.authors-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive:{
      0:{
        items: 1,
      },
      600:{
        items: 2,
      },
      1000:{
        items: 4,
      }
    }
  })

  /*/*/
  $.scrollIt({
    topOffset: -50
  })

  $(".nav-link").on("click", function(){
    $(".navbar-collapse").collapse("hide")
  })

  $('.count').each(function(){
    var $this = $(this),
    countTo = $this.attr('data-count');
    $({countNum : $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 5000,
      step: function(){
        $this.text(Math.floor(this.countNum));
      },
      complete: function(){
        $this.text(this.countNum + '+')
      }
    })
  })

})




