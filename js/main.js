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

$(".content-wrapper").on("click", function () {
  if (editPopupSwitcher) {
    TweenMax.to(editPopup, 1, {
      x: "-200%",
      display: "block",
      width: "60%",
      height: "0vh",
      ease: Power3.easeOut,
    });
  }
});

//Preview
const preview = $(".preview-wrapper");
const themeSelects = document.querySelectorAll(".theme-select");

const prewiewChild = function () {
  const nodes = [];

  const progressLine = $(".progress-line");

  nodes.push(progressLine[progressLine.length - 1]);
  nodes.push($(".preview-wrapper>a")[0]);
  return nodes;
};

const themePreview = {
  themeType: "indigo-theme",
  secondaryColor: "#4ebdd4",
};

$(".theme-select").on("click", function () {
  for (const el of themeSelects) {
    el.classList.remove("selected-theme");
  }
  this.classList.add("selected-theme");

  if (this.id === "indigo") {
    preview[0].classList.value = "preview-wrapper indigo-theme";
    themePreview.themeType = "indigo-theme";
  } else {
    preview[0].classList.value = "preview-wrapper black-theme";
    themePreview.themeType = "black-theme";
  }
});

$(".radio-item>label>span").on("click", function () {
  prewiewChild().forEach((el) => (el.style.backgroundColor = this.style.color));
  themePreview.secondaryColor = this.style.color;
});

$("#save-theme-btn").on("click", function () {
  theme.themeType = themePreview.themeType;
  theme.secondaryColor = themePreview.secondaryColor;
  theme.update();
});
