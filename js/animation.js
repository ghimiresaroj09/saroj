const certificate = [
  {
    name: "Cloud Foundations",
    publisher: "AWS Academy"
  },
  {
    name: "Introduction to Networks",
    publisher: "Cisco (CCNA)"
  },
  {
    name: "Quality Assurance Training",
    publisher: "Mindrisers Institute of technology"
  },
  {
    name: "Python Programming (30 Hours)",
    publisher: "Texas College of Management & IT"
  }
];

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const certificateName = document.querySelector(".gallery-name");
const certificatePublisher = document.querySelector(".gallery-desc");
const upArrows = document.querySelectorAll(".nav-arrow.up");
const downArrows = document.querySelectorAll(".nav-arrow.down");
let currentIndex = 0;
let isAnimating = false;


document.querySelectorAll('.nav-arrow').forEach(button => {
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});


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

  certificateName.style.opacity = "0";
  certificatePublisher.style.opacity = "0";

  setTimeout(() => {
    certificateName.textContent = certificate[currentIndex].name;
    certificatePublisher.textContent = certificate[currentIndex].publisher;
    certificateName.style.opacity = "1";
    certificatePublisher.style.opacity = "1";
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









//My services

const root = document.documentElement;
const marqueeContent = document.querySelector(".marquee-content");

// get how many elements are visible in the viewport
let marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"));

// total elements in the original list
let totalElements = marqueeContent.children.length;

// set CSS variable for total elements
root.style.setProperty("--marquee-elements", totalElements);

// clone first N elements to create infinite scroll
for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// recalc width and animation duration after clones
const marqueeElementWidth = marqueeContent.children[0].offsetWidth;
root.style.setProperty("--marquee-element-width", marqueeElementWidth + "px");
root.style.setProperty("--marquee-animation-duration", `${marqueeContent.children.length * 3}s`);

// Optional: recalc on window resize for responsiveness
window.addEventListener("resize", () => {
  marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"));
  const marqueeElementWidth = marqueeContent.children[0].offsetWidth;
  root.style.setProperty("--marquee-element-width", marqueeElementWidth + "px");
  root.style.setProperty("--marquee-animation-duration", `${marqueeContent.children.length * 3}s`);
});














//Mouse Trailing animation with Scratch Effect

const mainCursor = document.querySelector('.cursor');  // Big circle
const tailCursor = document.querySelector('.cursor2'); // Trailing small circle
const scratchCanvas = document.getElementById('scratch-canvas');
const ctx = scratchCanvas.getContext('2d');

// Set canvas size to window size
function resizeCanvas() {
  scratchCanvas.width = window.innerWidth;
  scratchCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let mouseX = 0, mouseY = 0; // Real mouse pointer
let tailX = 0, tailY = 0;   // Tail cursor position
let prevTailX = 0, prevTailY = 0; // Previous tail position for drawing lines

// Set offset distance for tail cursor behind the main pointer
const tailOffsetDistance = 20; // pixels

// Array to store scratch trails with their timestamps
const scratches = [];
const scratchFadeDuration = 2000; // 2 seconds fade out

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Center main cursor on pointer using CSS transform (-50%, -50%)
  mainCursor.style.left = `${mouseX}px`;
  mainCursor.style.top = `${mouseY}px`;
});

function drawScratchLine(fromX, fromY, toX, toY, timestamp) {
  scratches.push({
    fromX,
    fromY,
    toX,
    toY,
    startTime: timestamp
  });
}

function animateTail() {
  const lag = 0.15; // Smaller = slower trailing (higher lag means slower movement)
  
  // Move tail cursor position toward mouse position with lag
  tailX += (mouseX - tailX) * lag;
  tailY += (mouseY - tailY) * lag;

  // Calculate vector from tail to mouse to offset tail behind the pointer
  let dx = tailX - mouseX;
  let dy = tailY - mouseY;
  let dist = Math.sqrt(dx * dx + dy * dy);
  
  let offsetX = 0, offsetY = 0;
  if(dist !== 0) {
    offsetX = (dx / dist) * tailOffsetDistance;
    offsetY = (dy / dist) * tailOffsetDistance;
  }
  
  // Position tail cursor behind the main cursor
  tailCursor.style.left = `${tailX + offsetX}px`;
  tailCursor.style.top = `${tailY + offsetY}px`;

  // Draw a line from previous position to current position if there's movement
  const movementDistance = Math.sqrt(
    Math.pow(tailX - prevTailX, 2) + Math.pow(tailY - prevTailY, 2)
  );
  
  // Only draw if tail has moved significantly
  if(movementDistance > 2) {
    drawScratchLine(prevTailX, prevTailY, tailX, tailY, Date.now());
    prevTailX = tailX;
    prevTailY = tailY;
  }

  // Clear and redraw canvas
  ctx.clearRect(0, 0, scratchCanvas.width, scratchCanvas.height);
  
  const currentTime = Date.now();
  
  // Draw all active scratches
  scratches.forEach((scratch, index) => {
    const elapsed = currentTime - scratch.startTime;
    const progress = elapsed / scratchFadeDuration;
    
    // Remove scratches that have completely faded
    if(progress >= 1) {
      scratches.splice(index, 1);
      return;
    }
    
    // Calculate opacity (fade out effect)
    const opacity = 1 - progress;
    
    // Draw the scratch line with fading effect
    ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.6})`;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    ctx.moveTo(scratch.fromX, scratch.fromY);
    ctx.lineTo(scratch.toX, scratch.toY);
    ctx.stroke();
    
    // Add a subtle glow effect by drawing wider semi-transparent lines
    ctx.strokeStyle = `rgba(0, 217, 255, ${opacity * 0.2})`;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(scratch.fromX, scratch.fromY);
    ctx.lineTo(scratch.toX, scratch.toY);
    ctx.stroke();
  });

  requestAnimationFrame(animateTail);
}

animateTail();
