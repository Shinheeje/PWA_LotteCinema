$(".fotter_right_con2").click(function () {
  $(".gnb").animate({ right: 0 }, 700, "swing");
  $(".dark").css({ display: "block" });
});

$(".close").click(function () {
  $(".gnb").animate({ right: -320 }, 700, "swing");
  $(".dark").css({ display: "none" });
});


$(".dark").click(function () {
  $(".gnb").animate({ right: -320 }, 700, "swing");
  $(".dark").css({ display: "none" });
});
