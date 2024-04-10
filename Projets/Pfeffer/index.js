document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider__items");
  const sliderWidth = sliderContainer.offsetWidth;
  const slides = document.querySelectorAll(".slider__items figure");
  const totalSlides = slides.length;

  // Clone the first and last slides
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);

  // Append the clones to the beginning and end of the slider
  sliderContainer.appendChild(firstClone);
  sliderContainer.insertBefore(lastClone, slides[0]);

  let isAnimating = false;

  document.querySelector(".right").addEventListener("click", () => {
    if (!isAnimating) {
      isAnimating = true;

      sliderContainer.scrollLeft += sliderWidth;

      // Check if reached the last clone, then reset to the first original slide
      if (sliderContainer.scrollLeft >= sliderWidth * totalSlides) {
        setTimeout(() => {
          sliderContainer.scrollLeft = 0;
          isAnimating = false;
        }, 300); // Delay the reset to ensure it happens after the scroll animation
      } else {
        isAnimating = false;
      }
    }
  });

  document.querySelector(".left").addEventListener("click", () => {
    if (!isAnimating) {
      isAnimating = true;

      sliderContainer.scrollLeft -= sliderWidth;

      // Check if reached the first clone, then reset to the last original slide
      if (sliderContainer.scrollLeft <= 0) {
        setTimeout(() => {
          sliderContainer.scrollLeft = sliderWidth * totalSlides;
          isAnimating = false;
        }, 300); // Delay the reset to ensure it happens after the scroll animation
      } else {
        isAnimating = false;
      }
    }
  });
});

console.log("ok");
document.querySelector(".more").addEventListener("click", () => {
  document.querySelectorAll(".details").forEach((e) => {
    e.style.bottom = 0;
  });
});
