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

// Popup
const editPopup = document.querySelector(".edit-popup");
let editPopupSwitcher = false;

$("#edit").on("click", function () {
  this.classList.remove("pulse");
  editPopupSwitcher = !editPopupSwitcher;

  if (editPopupSwitcher) {
    TweenMax.to(editPopup, 1, {
      x: "2%",
      display: "block",
      width: "60%",
      height: "65vh",
      ease: Back.easeOut,
    });
  } else {
    TweenMax.to(editPopup, 1, {
      x: "-200%",
      display: "block",
      width: "60%",
      height: "0vh",
      ease: Power3.easeOut,
    });
  }
});
