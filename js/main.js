/*скрипт для 100% высоты экрана*/
$(document).ready(function(){
 $('.header').height($(window).height());
})

/*плавный скрол*/
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })

/*Слайдер в хедере*/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
  	smartSpeed: 4000,
  	autoplaySpeed: 10000
  });
});