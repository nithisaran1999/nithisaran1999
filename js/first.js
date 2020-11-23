$(function () {
  $("#buttonA").click(function () {
    $("html", "body").animate(
      {
        scrollTop: $("#pageA").offset().top,
      },
      2000
    );
  });

  $("#buttonB").click(function () {
    $("html", "body").animate(
      {
        scrollTop: $("#pageB").offset().top,
      },
      2000
    );
  });
});
