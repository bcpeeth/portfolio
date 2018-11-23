import '../scss/style.scss';

import TypeIt from 'typeit';
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

new TypeIt('.type-it', {
  speed: 100,
  // lifeLike: false,
  autoStart: false,
  cursor: false,
  // loop: true
  })
  
  .type('Hi there!')
  .pause(1500)
  .delete(19)
  // .options({speed: 100})
  .type('Welcome to my portfolio.')
  // .pause(1500)



jQuery(document).ready(function($) {

  if (document.getElementById('rc-calculator') != null) {
    var iframes = iframeResizer({},'#rc-calculator');
  }

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

  } else {
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    $('body').removeClass('toggled');
    $('.red span').removeClass('animate');

  }
};


})

