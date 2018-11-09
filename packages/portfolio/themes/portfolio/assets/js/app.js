import '../scss/style.scss';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel';
//import 'owl.carousel2.thumbs';

import ScrollReveal from 'scrollreveal';
import InfiniteScroll from 'infinite-scroll';
import GMaps from 'gmaps';
import { iframeResizer } from 'iframe-resizer';
import VanillaTilt from 'vanilla-tilt'


$('.header form input').on('focus', function(){
  console.log($(this).data('placeholder'));
    $(this).data('placeholder2', $(this).attr('placeholder'));
    $(this).attr('placeholder', $(this).data('placeholder'));
}).on('blur', function(){
    $(this).attr('placeholder', $(this).data('placeholder2'));
});


var elem = document.querySelector('.projectlist__blocks');
if(elem){
  var infScroll = new InfiniteScroll( elem, {
    // options
    path: '.paginate-ajax li.next a',
    append: '.projectlink',
    history: 'push',
    scrollThreshold: 700,
    hideNav: '.paginate-ajax'
  });

  // element argument can be a selector string
  //   for an individual element
  var infScroll = new InfiniteScroll( '.projectlist__blocks', {
    // options
  });
}


var elemSearch = document.querySelector('.infinite');
if(elemSearch){
  var infScroll = new InfiniteScroll( elemSearch, {
    // options
    path: '.pagination li.next a',
    append: '.result',
    history: 'push',
    scrollThreshold: 700,
    hideNav: '.pagination'
  });

  // element argument can be a selector string
  //   for an individual element
  var infScroll = new InfiniteScroll( '.infinite', {
    // options
  });
}

var initMap = () => {
  var getZoom = function getZoom() {
    if (isMobile()) {
      return 11;
    }
    return 14;
  }

  var isMobile = function isMobile() {
    return $(window).width() < 768;
  }




  const map = new GMaps({
    div: '#map',
    disableDefaultUI: true,
    lat: 51.621116,
    lng: 4.871725,
    zoom: getZoom()
  });

  const styles = [
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e9e9e9"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dedede"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#333333"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f2f2f2"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    }
];

  map.addStyle({
      styledMapName:"Styled Map",
      styles: styles,
      mapTypeId: "map_style"
  });



  map.setStyle("map_style");
  map.addMarker({
    lat: 51.624116,
    lng: 4.871725,
    title: 'Prins Pils',
    click: function(e) {
      var url = 'https://maps.google.com/?saddr=current+location&daddr=Florijnstraat%202%20Oosterhout'

      window.open(url, "_blank");
    }
  });
};

window.initMap = initMap;

jQuery(document).ready(function($) {

  if (document.getElementById('rc-calculator') != null) {
    var iframes = iframeResizer({},'#rc-calculator');
  }


// $('.nav-dropdown').hover(function() {
//     $(this).find('ul').stop(true, true).slideDown(200);
//   }, function() {
//     $(this).find('ul').stop(true, true).slideUp(200);
// });

window.sr = ScrollReveal({reset: true});
sr.reveal('.floating-text-box, .reveal', {
  reset: false,
  origin: 'bottom',
  scale: '1',
  duration: 1000,
  viewFactor: 0.2,
  distance: '10vh',
  mobile: false
});

sr.reveal('.reveal-delay', {
  reset: false,
  origin: 'bottom',
  scale: '1',
  duration: 1000,
  viewFactor: 0.5,
  distance: '10vh',
}, 100);

sr.reveal('.reveal-down', {
  reset: false,
  origin: 'bottom',
  duration: 1000,
  delay: 500,
  scale: '1',
  viewFactor: 0.5,
  distance: '10vh',
});

sr.reveal('.reveal-left', {
  reset: false,
  origin: 'left',
  scale: '1',
  duration: 1000,
  viewFactor: 0.5,
  distance: '5vw',
  mobile: false,
});

sr.reveal('.reveal-right', {
  reset: false,
  origin: 'right',
  scale: '1',
  duration: 1000,
  viewFactor: 0.5,
  distance: '5vw',
  mobile: false
});

var dropdownOpen = false;
$('li.nav-dropdown').hover(function() {
  var dropdownOpen = true;
  console.log(dropdownOpen);
  $('.nav-dropdown').each(function() {
    //$(this).find('ul').addClass('no-effect');
  });

}, function(){
  $('.nav-dropdown').each(function() {
    //$(this).find('ul').removeClass('no-effect');
  });


});


$('.faq__question').on('click', function(){
  $(this).toggleClass('active');
  $(this).next('.faq__answer').slideToggle();
});


$('.image-gallery .content').on('click', function(){
  //console.log($(this));
  //$('.content:not('+$(this)+')').removeClass('active');
  $('.content').not(this).removeClass('active');
  $(this).toggleClass('active');
});

$('form.selector').submit(function(e){
  e.preventDefault();
  var selectValue = $(this).find('select').val();
  window.location.replace(selectValue);
});

$(".sliding-link").click(function(e) {
  // e.preventDefault();
  var aid = $(this).attr("href");
  $('html,body').animate({scrollTop: $(aid).offset().top - 50},'slow');
});




document.querySelector('.navbar-toggle').addEventListener('change', (event) => toggleMenu(event.target.checked));

var toggleMenu = (isMenuOpen) => {
  if (isMenuOpen) {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    $('body').addClass('toggled');
    $('.red span').addClass('animate');

    // window.addEventListener('click', function(e){
    //   if (document.querySelector('ul.navbar li').contains(e.target)){
    //     // Clicked in box
    //   } else{
    //     document.getElementById("toggle").checked = false;
    //     toggleMenu(false);

    //   }
    // });

  } else {
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    $('body').removeClass('toggled');
    $('.red span').removeClass('animate');

  }
};




// $('.owl-carousel').owlCarousel({
//   items: 1,
//   loop: true,
//   thumbs: true,
//   thumbsPrerendered: true
// });


// var menuOpen = false
// var menuToggle = document.getElementById('menu__toggle')


// menuToggle.addEventListener('click', function() {
//   menuOpen ? closeMenu() : openMenu()
// })

// $('.menu__mobile li a').on('click', function(event) {
//   closeMenu()
//   return true;
// });

// function openMenu() {
//   document.getElementById('menu__toggle').innerHTML = '<span class="menu__mobile__close"></span><i class="fa fa-lg fa-times" aria-hidden="true"></i>'
//   $('#menu__mobile').stop().fadeIn(150);


//   menuOpen = true;
// }

// function closeMenu() {
//   $('#menu__mobile').stop().fadeOut(150);
//   document.getElementById('menu__toggle').innerHTML = '<i class="fa fa-lg fa-bars" aria-hidden="true"></i>'

//   menuOpen = false;
// }

})

