
$(document).scroll(function() {
  var $nav = $(".navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

$(".menu_btn_container").click(function(){
  toggleMenu();
});

function toggleMenu(){
  $(".menu_btn_container").toggleClass("change");
  $(".mobile_menu").toggleClass("open");
}



