$(function () {
  const includes = $("[data-include]");
  //document.querySelector("[data-include]").innerText;
  jQuery.each(includes, function () {
    const file = "components/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});

$(".menu-btn").on("click", function () {
  $(".menu-wrapper").slideToggle("slow");
});
