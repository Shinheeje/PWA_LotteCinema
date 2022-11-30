const $btn1 = $('.slide_header a');

$btn1.click(function () {
  $btn1.removeClass("active");
  $(this).addClass("active");
});


$(".btn_current").click(function () {
  $(".all").hide();
  $(".current").fadeIn(500);
});

$(".btn_schedule").click(function () {
  $(".all").hide();
  $(".schedule").fadeIn(500);
});
