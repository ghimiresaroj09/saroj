//Hide and show bars and cross

const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Click event for menu icon
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Click event for close icon
closeIcon.addEventListener('click', () => {
  navbar.classList.remove('show');
});

// Click event for nav links to close navbar
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
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
