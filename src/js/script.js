const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 0;

function updateCarousel() {
  const offset = items[currentIndex].offsetLeft;
  track.style.transform = `translateX(-${offset}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);
window.addEventListener("load", updateCarousel);

// ======= 👇 SUPORTE A GESTOS (TOUCH) PARA CELULARES =======
let startX = 0;
let endX = 0;

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

track.addEventListener("touchend", () => {
  const threshold = 50;

  if (startX - endX > threshold) {
    
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  } else if (endX - startX > threshold) {
    
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  startX = 0;
  endX = 0;
});