// ===== MODERN 3D ANIMATIONS & EFFECTS =====

// Floating Particles Background
function createFloatingParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'floating-particles';
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  `;
  document.body.appendChild(particleContainer);

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, rgba(0, 217, 255, 0.8) 0%, rgba(0, 217, 255, 0.2) 100%);
      border-radius: 50%;
      left: ${xPos}%;
      top: ${yPos}%;
      box-shadow: 0 0 ${size * 2}px rgba(0, 217, 255, 0.4);
      animation: floatParticle ${duration}s infinite ease-in-out ${delay}s;
    `;
    particleContainer.appendChild(particle);
  }

  // Add keyframes for floating animation
  if (!document.getElementById('floating-particles-keyframes')) {
    const style = document.createElement('style');
    style.id = 'floating-particles-keyframes';
    style.textContent = `
      @keyframes floatParticle {
        0% { transform: translate(0, 0); opacity: 0; }
        10% { opacity: 1; }
        50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
        90% { opacity: 1; }
        100% { transform: translate(0, -100px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

// Create AI & Network Animations
function createNetworkAnimation() {
  const container = document.createElement('div');
  container.className = 'network-container';
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;
  document.body.appendChild(container);

  // Create futuristic grid
  const grid = document.createElement('div');
  grid.className = 'futuristic-grid';
  document.body.appendChild(grid);

  // Create Network Nodes (AI nodes)
  const nodeCount = 8;
  const nodes = [];
  for (let i = 0; i < nodeCount; i++) {
    const node = document.createElement('div');
    node.className = 'network-node active';
    const size = Math.random() * 8 + 4;
    const x = Math.random() * 90 + 5;
    const y = Math.random() * 80 + 10;
    
    node.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      animation-delay: ${Math.random() * 2}s;
    `;
    
    container.appendChild(node);
    nodes.push({ x, y, size, element: node });
  }

  // Draw connections between nodes
  const canvas = document.createElement('canvas');
  canvas.className = 'neural-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  function drawConnections() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(0, 217, 255, 0.15)';
    ctx.lineWidth = 1;

    nodes.forEach((node, i) => {
      const screenX = (canvas.width * node.x) / 100;
      const screenY = (canvas.height * node.y) / 100;

      // Connect to nearby nodes
      nodes.forEach((otherNode, j) => {
        if (i < j) {
          const otherScreenX = (canvas.width * otherNode.x) / 100;
          const otherScreenY = (canvas.height * otherNode.y) / 100;
          const distance = Math.sqrt(
            Math.pow(screenX - otherScreenX, 2) + Math.pow(screenY - otherScreenY, 2)
          );

          if (distance < 300) {
            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(otherScreenX, otherScreenY);
            ctx.stroke();
          }
        }
      });
    });

    requestAnimationFrame(drawConnections);
  }

  drawConnections();

  // Redraw on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Create floating tech symbols
  const symbols = ['◆', '◇', '◈', '●', '○', '◉', '⬢', '⬡'];
  const symbolCount = 12;
  
  for (let i = 0; i < symbolCount; i++) {
    const symbol = document.createElement('div');
    symbol.className = 'tech-symbol';
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const x = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;

    symbol.style.cssText = `
      left: ${x}%;
      top: 100%;
      animation: floatTech ${duration}s linear ${delay}s infinite;
    `;
    container.appendChild(symbol);
  }
}

// Mouse Tilt 3D Effect
function add3DTiltEffect() {
  const cards = document.querySelectorAll('.service-box, .portfolio-box');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

// Gradient Animation Background
function setupGradientAnimation() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
  `;
  document.head.appendChild(style);
}

const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

function resetMenuIcons() {
  if (window.innerWidth > 768) { // desktop
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'none';
    navbar.classList.remove('show'); // remove mobile menu
  } else { // mobile
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}

// Initial load
resetMenuIcons();

// Update on window resize
window.addEventListener('resize', resetMenuIcons);

// Header scroll effect
let scrollTimer;
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Debounce active nav update
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    updateActiveNav();
  }, 50);
}, { passive: true });

// Open menu
menuIcon.addEventListener('click', () => {
  navbar.classList.add('show');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

// Close menu
closeIcon.addEventListener('click', () => {
  navbar.classList.remove('show');
  resetMenuIcons(); // reset icons correctly for screen
});

// Close menu on nav link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
    resetMenuIcons(); // reset icons after clicking link
  });
});




// Typing effect

document.addEventListener("DOMContentLoaded", () => {
    // Initialize modern effects
    createFloatingParticles();
    createNetworkAnimation();
    setupGradientAnimation();
    
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const typingElement = document.querySelector(".typing");
    const roles = ["Quality Analyst", "Quality Assurance Engineer", "Software Tester"];
    let roleIndex = 0;
    let charIndex = 0;
    let currentRole = "";
    let isDeleting = false;

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    function type() {
        if (isDeleting) {
            currentRole = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentRole = roles[roleIndex].substring(0, charIndex + 1);
            charIndex++;
        }

        typingElement.textContent = currentRole;

        if (!isDeleting && charIndex === roles[roleIndex].length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 150);
        }
    }

    type();
});








// Active nav update function - Global scope for scroll detection
function updateActiveNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");
    const bottomNavLinks = document.querySelectorAll(".bottom-nav-link");
    
    let current = "";
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = section.getAttribute("id");
        }
    });

    // Update top navbar
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    // Update bottom nav active state if exists
    bottomNavLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-section") === current) {
            link.classList.add("active");
        }
    });
}

// Initial call to set active on page load
document.addEventListener("DOMContentLoaded", function() {
    updateActiveNav();
    
    const bottomNavLinks = document.querySelectorAll(".bottom-nav-link");

    // Handle bottom nav click
    if (bottomNavLinks.length > 0) {
        bottomNavLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute("data-section");
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    }

    //Heading Animation
    const headings = document.querySelectorAll('.heading');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');   // Animate when visible
          } else {
            entry.target.classList.remove('animate'); // Remove animation when out of view
          }
        });
      },
      { threshold: 0.3 } // Adjust how much of the heading must be visible
    );

    headings.forEach(h => observer.observe(h));



    //Fav Icon animation
    const serviceIcons = document.querySelectorAll('.service-box i');

    const iconObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const icon = entry.target;
          const isDesktop = window.innerWidth > 768;

          if (entry.isIntersecting) {
            // Add animation with stagger
            const index = Array.from(serviceIcons).indexOf(icon);
            setTimeout(() => {
              icon.classList.add('animate-bounce');
            }, index * 150);
          } else if (isDesktop) {
            // On desktop, remove class when scrolling out to allow re-trigger
            icon.classList.remove('animate-bounce');
          }
          // On mobile, do nothing when scrolling out (animation stays)
        });
      },
      { threshold: 0.3 }
    );

    // Observe each icon
    serviceIcons.forEach(icon => iconObserver.observe(icon));




    //Social Media
    const socialIcons = document.querySelectorAll('.social-media a');

    const socialObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            socialIcons.forEach((icon, index) => {
              setTimeout(() => {
                icon.style.opacity = "1"; // ensure visible
                icon.classList.add('animate-fall');
              }, index * 150); // stagger each icon by 150ms
            });

            observer.disconnect(); // stop observing after first trigger
          }
        });
      },
      { threshold: 0.3 }
    );

    if (socialIcons.length > 0) {
      socialObserver.observe(socialIcons[0]); // observe first icon to trigger all
    }


    //Name Animation
    const letters = document.querySelectorAll('.home-content h1 span');

    const tilteobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const letter = entry.target;

      if (entry.isIntersecting) {
        // stagger letters when visible
        letters.forEach((l, i) => {
          setTimeout(() => {
            l.classList.add('animate');
          }, i * 100); // 0.1s stagger
        });
      } else {
        // remove animation when out of view
        letters.forEach(l => l.classList.remove('animate'));
      }
    });
  },
  { threshold: 0.3 }
);


    const h1 = document.querySelector('.home-content h1');
    tilteobserver.observe(h1);



    //Description
    const paragraph = document.querySelector('.home-content p.intro');

    const p_observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            paragraph.classList.add('animate');
          } else {
            paragraph.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    p_observer.observe(paragraph);


    //About typing
    const typingEl = document.querySelector('.about-content .typing-text');

    const skills = [
      'Manual Testing',
      'Automation Testing',
      'Performance Testing',
      'API Testing'
    ];

    let skillIndex = 0;
    let charIndex = 0;

    function typeSkill() {
      if (charIndex < skills[skillIndex].length) {
        typingEl.textContent += skills[skillIndex][charIndex];
        charIndex++;
        setTimeout(typeSkill, 100); // typing speed
      } else {
        setTimeout(deleteSkill, 1000); // pause before deleting
      }
    }

    function deleteSkill() {
      if (charIndex > 0) {
        typingEl.textContent = skills[skillIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteSkill, 50); // deleting speed
      } else {
        skillIndex = (skillIndex + 1) % skills.length; // loop skills
        setTimeout(typeSkill, 500);
      }
    }

    typeSkill();  // Start typing effect on page load


    //Contact Info
    const contactItems = document.querySelectorAll('.contact-info p, .contact-info h3');

    const contactObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactItems.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('contact-animate');
            }, i * 150); // stagger animation
          });
        } else {
          // Remove animation when leaving the section (optional)
          contactItems.forEach(item => item.classList.remove('contact-animate'));
        }
      });
    }, { threshold: 0.3 });

    contactObserver.observe(document.querySelector('.contact-info'));
});

// Run shake on page load
window.addEventListener("load", () => {
  const icons = document.querySelectorAll(".contact-social-media a");

  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("quake-on-load");

      setTimeout(() => {
        icon.classList.remove("quake-on-load");
      }, 800);

    }, index * 120);
  });
});

// IntersectionObserver - triggers every time section becomes visible
const smSection = document.querySelector(".contact-social-media");
const smIcons = document.querySelectorAll(".contact-social-media a");

const smObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        smIcons.forEach((icon, index) => {
          setTimeout(() => {
            icon.classList.add("quake-on-visible");

            setTimeout(() => {
              icon.classList.remove("quake-on-visible");
            }, 800);

          }, index * 120);
        });

      }
    });
  },
  { threshold: 0.3 }
);

smObserver.observe(smSection);


//Portfolio
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

const portfolioObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      // Stagger each box once
      portfolioBoxes.forEach((box, index) => {
        if(!box.classList.contains('animate-bloom')) {
          setTimeout(() => {
            box.classList.add('animate-bloom');
          }, index * 200);
        }
      });
    }
  });
}, { threshold: 0.3 });

portfolioBoxes.forEach(box => portfolioObserver.observe(box));



//Services
const serviceBoxes = document.querySelectorAll('.service-box');

const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      // Stagger each box
      serviceBoxes.forEach((box, index) => {
        // Only add if not already added
        if(!box.classList.contains('animate-service')) {
          setTimeout(() => {
            box.classList.add('animate-service');
          }, index * 200);
        }
      });
    }
  });
}, { threshold: 0.3 });

serviceBoxes.forEach(box => serviceObserver.observe(box));



//About Image
const aboutImg = document.querySelector('.about-img img');

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate-img');
    } else {
      entry.target.classList.remove('animate-img'); // replay if scrolling back
    }
  });
}, { threshold: 0.3 });

if (aboutImg) imgObserver.observe(aboutImg);

// ===== INITIALIZE 3D EFFECTS =====
// Add 3D tilt effect with a slight delay to ensure DOM is ready
setTimeout(() => {
  add3DTiltEffect();
  
  // Add glow effect on hover for enhanced visuals
  const glowStyle = document.createElement('style');
  glowStyle.textContent = `
    .service-box:hover, .portfolio-box:hover {
      background: linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(167, 139, 250, 0.1) 100%) !important;
    }
  `;
  document.head.appendChild(glowStyle);
}, 100);
