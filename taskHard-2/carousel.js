// const prevBtn = document.querySelector("button:nth-of-type(1)");
// const nextBtn = document.querySelector("button:nth-of-type(2)");
// const slides = document.querySelector(".slides");

// let i = 0;

// prevBtn.addEventListener("click", () => {
//   i++;
//   slides.computedStyleMap.transform = `translateX(-$(px)px)`;
//   nextBtn.addEventListener("click", () => {});
// });

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slidesWrapper = document.querySelector(".slides");

let index = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });

  const slideWidth = slides[0].offsetWidth + 30; // 260 + gap
  const centerOffset = (1000 - slideWidth) / 2; // төвд 1 зураг
  slidesWrapper.style.transform = `translateX(${
    centerOffset - index * slideWidth
  }px)`;
}

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  updateSlides();
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  updateSlides();
});

updateSlides();
