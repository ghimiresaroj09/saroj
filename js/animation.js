const teamMembers = [
  { name: "Luffy", role: "Founder" },
  { name: "Monkey D. Luffy", role: "Creative Director" },
  { name: "Luffy chan", role: "Lead Developer" },
  { name: "Lucy", role: "UX Designer" },
  { name: "Luffy kun", role: "Marketing Manager" },
  { name: "Monkey chan", role: "Product Manager" }
];

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const upArrows = document.querySelectorAll(".nav-arrow.up");
const downArrows = document.querySelectorAll(".nav-arrow.down");
let currentIndex = 0;
let isAnimating = false;

// Function to update carousel positions
function updateCarousel(newIndex) {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (newIndex + cards.length) % cards.length;

  cards.forEach((card, i) => {
    const offset = (i - currentIndex + cards.length) % cards.length;

    card.classList.remove(
      "center",
      "up-1",
      "up-2",
      "down-1",
      "down-2",
      "hidden"
    );

    if (offset === 0) card.classList.add("center");
    else if (offset === 1) card.classList.add("down-1");
    else if (offset === 2) card.classList.add("down-2");
    else if (offset === cards.length - 1) card.classList.add("up-1");
    else if (offset === cards.length - 2) card.classList.add("up-2");
    else card.classList.add("hidden");
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });

  memberName.style.opacity = "0";
  memberRole.style.opacity = "0";

  setTimeout(() => {
    memberName.textContent = teamMembers[currentIndex].name;
    memberRole.textContent = teamMembers[currentIndex].role;
    memberName.style.opacity = "1";
    memberRole.style.opacity = "1";
  }, 300);

  setTimeout(() => {
    isAnimating = false;
  }, 800);
}

// Event listeners for arrows, dots, cards
upArrows.forEach(arrow => arrow.addEventListener("click", () => updateCarousel(currentIndex - 1)));
downArrows.forEach(arrow => arrow.addEventListener("click", () => updateCarousel(currentIndex + 1)));
dots.forEach((dot, i) => dot.addEventListener("click", () => updateCarousel(i)));
cards.forEach((card, i) => card.addEventListener("click", () => updateCarousel(i)));
document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") updateCarousel(currentIndex - 1);
  else if (e.key === "ArrowDown") updateCarousel(currentIndex + 1);
});

// Touch swipe support
let touchStartY = 0;
let touchEndY = 0;
document.addEventListener("touchstart", e => touchStartY = e.changedTouches[0].screenY);
document.addEventListener("touchend", e => {
  touchEndY = e.changedTouches[0].screenY;
  const diff = touchStartY - touchEndY;
  if (Math.abs(diff) > 50) diff > 0 ? updateCarousel(currentIndex + 1) : updateCarousel(currentIndex - 1);
});

// Scroll indicator (optional)
function createScrollIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'scroll-indicator';
  indicator.innerHTML = 'scroll';
  document.body.appendChild(indicator);
}
createScrollIndicator();

// Initialize carousel
updateCarousel(0);

// === Automatic carousel for mobile only ===
let autoCarouselInterval;
function startAutoCarousel() {
  if (window.innerWidth <= 768) { // Mobile
    autoCarouselInterval = setInterval(() => updateCarousel(currentIndex + 1), 4000);
  }
}

function stopAutoCarousel() {
  clearInterval(autoCarouselInterval);
}

// Start auto carousel on load
startAutoCarousel();

// Restart on resize to handle mobile <-> desktop switch
window.addEventListener("resize", () => {
  stopAutoCarousel();
  startAutoCarousel();
});

/* -------------------------
   AUTO-SLIDE SYSTEM
-------------------------- */

let autoSlideInterval;
let inactivityTimer;

// Start auto sliding
function startAutoSlide() {
    stopAutoSlide();

    autoSlideInterval = setInterval(() => {
        updateCarousel(currentIndex + 1);
    }, 4000); // 4 seconds
}

// Stop auto sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Restart auto sliding after user stops interacting
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        startAutoSlide();
    }, 8000); // resume after 8 seconds
}

// User interactions that pause + later resume auto-slide
function userInteracted() {
    stopAutoSlide();
    resetInactivityTimer();
}

/* -------------------------
   HOOK INTO EXISTING EVENTS
-------------------------- */

// Arrows
upArrows.forEach(a => a.addEventListener("click", userInteracted));
downArrows.forEach(a => a.addEventListener("click", userInteracted));

// Dots
dots.forEach(dot => dot.addEventListener("click", userInteracted));

// Cards
cards.forEach(card => card.addEventListener("click", userInteracted));

// Keyboard arrows
document.addEventListener("keydown", userInteracted);

// Touch swipe (mobile)
document.addEventListener("touchstart", userInteracted);
document.addEventListener("touchend", userInteracted);

// Mouse wheel (desktop)
document.addEventListener("wheel", userInteracted, { passive: true });

/* -------------------------
   INIT
-------------------------- */
startAutoSlide();
