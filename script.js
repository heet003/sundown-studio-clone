const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

loaderAnimation();
imageLoader();
swiperAnimation();
menuAnimation();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 40,
  });
}

function imageLoader() {
  let elemContainer = document.querySelector("#elem-container");
  let fixedImage = document.querySelector("#fixed-image");

  elemContainer.addEventListener("mouseenter", () => {
    fixedImage.style.display = "block";
  });

  elemContainer.addEventListener("mouseleave", () => {
    fixedImage.style.display = "none";
  });

  let imageURL;
  var elements = document.querySelectorAll(".element");
  elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      imageURL = element.getAttribute("data-image");
      fixedImage.style.backgroundImage = `url(${imageURL})`;
      console.log(imageURL);
    });
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var fullscr = document.querySelector("#fullscr");
  var navImage = document.querySelector("nav img");
  var flag = false;

  menu.addEventListener("click", () => {
    if (!flag) {
      fullscr.style.top = "0";
      fullscr.style.zIndex = "999";
      navImage.style.opacity = 0;
      fullscr.classList.toggle("open");
    } else {
      fullscr.style.top = "-200%";
      fullscr.style.zIndex = "99";
      navImage.style.opacity = 1;
      fullscr.classList.toggle("closed");
    }
    // flag = !flag;
    navImage.style.opacity = fullscr.classList.contains("open") ? 0 : 1;
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(() => {
    loader.style.top = "-100%";
  }, 4000);
}
