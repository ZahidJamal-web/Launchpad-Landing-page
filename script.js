/* ==========================================
   LAUNCHPAD PREMIUM SCRIPT
   Dark Mode + Mobile Menu + FAQ +
   Back To Top + Scroll Animations
========================================== */

/* =========================
   THEME TOGGLE
========================= */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle?.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");

    if (themeIcon) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
}

themeToggle?.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");

        if (themeIcon) {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }

    } else {

        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");

        if (themeIcon) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
    }
});

/* =========================
   MOBILE MENU
========================= */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger?.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

});

/* Close menu after click */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            hamburger.classList.remove("active");

        });

    });

/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");

                const icon =
                    faq.querySelector("i");

                icon?.classList.remove("fa-minus");
                icon?.classList.add("fa-plus");
            }

        });

        item.classList.toggle("active");

        const icon =
            item.querySelector("i");

        if (item.classList.contains("active")) {

            icon?.classList.remove("fa-plus");
            icon?.classList.add("fa-minus");

        } else {

            icon?.classList.remove("fa-minus");
            icon?.classList.add("fa-plus");
        }

    });

});

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});

topBtn?.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.12)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {
            link.classList.add("active-link");
        }

    });

});

/* =========================
   REVEAL ON SCROLL
========================= */

const revealElements = document.querySelectorAll(
    ".about-card, .feature-card, .service-card, .faq-item, .contact-form, .contact-info, .stat-card"
);

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-active"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(el => {

    el.classList.add("reveal");
    revealObserver.observe(el);

});

/* =========================
   FLOATING HERO EFFECT
========================= */

const heroStats =
    document.querySelectorAll(".stat-card");

heroStats.forEach((card, index) => {

    card.style.animation =
        `floatCard ${3 + index}s ease-in-out infinite`;

});

/* =========================
   CONTACT FORM DEMO
========================= */

const contactForm =
    document.querySelector(".contact-form");

contactForm?.addEventListener("submit", e => {

    e.preventDefault();

    const button =
        contactForm.querySelector("button");

    const originalText =
        button.innerHTML;

    button.innerHTML =
        "Sending...";

    button.disabled = true;

    setTimeout(() => {

        button.innerHTML =
            "✓ Message Sent";

        setTimeout(() => {

            button.innerHTML =
                originalText;

            button.disabled = false;

            contactForm.reset();

        }, 2500);

    }, 1200);

});

/* =========================
   SMOOTH FADE-IN HERO
========================= */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});

/* =========================
   OPTIONAL PARTICLE EFFECT
========================= */

const hero = document.querySelector(".hero");

for (let i = 0; i < 20; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    hero?.appendChild(particle);
}

console.log(
    "%c🚀 LaunchPad Premium Loaded Successfully",
    "color:#6366f1;font-size:16px;font-weight:bold;"
);

/* Password Toggle */

const password =
document.getElementById("password");

const toggle =
document.getElementById("togglePassword");

toggle?.addEventListener("click", () => {

    const type =
    password.getAttribute("type");

    if(type === "password"){

        password.setAttribute(
            "type",
            "text"
        );

        toggle.innerHTML =
        '<i class="fas fa-eye-slash"></i>';

    }else{

        password.setAttribute(
            "type",
            "password"
        );

        toggle.innerHTML =
        '<i class="fas fa-eye"></i>';
    }
});

/* Theme Toggle */

const themeBtn =
document.getElementById("theme-toggle");

const icon =
themeBtn.querySelector("i");

if(localStorage.getItem("theme")==="dark"){

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    icon.classList.replace(
        "fa-moon",
        "fa-sun"
    );
}

themeBtn.addEventListener("click",()=>{

    const current =
    document.documentElement.getAttribute(
        "data-theme"
    );

    if(current==="dark"){

        document.documentElement.removeAttribute(
            "data-theme"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

        icon.classList.replace(
            "fa-sun",
            "fa-moon"
        );

    }else{

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

        icon.classList.replace(
            "fa-moon",
            "fa-sun"
        );
    }
});

/* Demo Submit */

document
.querySelector(".login-form")
.addEventListener("submit", e => {

    e.preventDefault();

    const btn =
    document.querySelector(
        ".login-btn"
    );

    btn.innerHTML =
    "Logging In...";

    setTimeout(()=>{

        window.location.href =
        "index.html";

    },1500);

});