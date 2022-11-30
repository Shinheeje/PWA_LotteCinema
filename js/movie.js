const $btn = $('.sec01_button a');

$btn.click(function () {
  $btn.removeClass("active");
  $(this).addClass("active");
});

$(".btn_all").click(function () {
  $(".all").fadeIn(500);
});

$(".btn_current").click(function () {
  $(".all").hide();
  $(".current").fadeIn(500);
});

$(".btn_schedule").click(function () {
  $(".all").hide();
  $(".schedule").fadeIn(500);
});

$(".btn_arte").click(function () {
  $(".all").hide();
  $(".arte").fadeIn(500);
});