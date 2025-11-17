const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

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







//active on the navbar

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});


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

const bloomObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      // Add staggered bloom
      portfolioBoxes.forEach((box, index) => {
        setTimeout(() => {
          box.classList.add('animate-bloom');
        }, index * 200); // each box blooms 200ms after previous
      });
    } else {
      // Optional: remove animation to replay on scroll back
      portfolioBoxes.forEach(box => box.classList.remove('animate-bloom'));
    }
  });
}, { threshold: 0.3 });

portfolioBoxes.forEach(box => bloomObserver.observe(box));


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
