const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

imageLoader();
swiperAnimation();

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
