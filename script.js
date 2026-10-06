// =========================================================
// TINA PLUMBING WORX
// Website Interactions
// =========================================================


// =========================================================
// 01. MOBILE MENU
// =========================================================

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });


    // Close menu when a link is clicked

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });

}


// =========================================================
// 02. STICKY HEADER
// =========================================================

const siteHeader = document.getElementById("siteHeader");

function handleHeaderScroll() {

    if (!siteHeader) return;

    if (window.scrollY > 60) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();


// =========================================================
// 03. QUOTE FORM
// =========================================================

const quoteForm = document.getElementById("quoteForm");
const formSuccess = document.getElementById("formSuccess");

if (quoteForm && formSuccess) {

    quoteForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();


        if (!name || !phone || !service) {

            return;

        }


        // Create WhatsApp message

        let whatsappMessage =
            `Hi Tina Plumbing Worx,%0A%0A` +
            `My name is ${encodeURIComponent(name)}.%0A` +
            `My phone number is ${encodeURIComponent(phone)}.%0A` +
            `I need help with: ${encodeURIComponent(service)}.%0A`;


        if (message) {

            whatsappMessage +=
                `%0ADescription:%0A${encodeURIComponent(message)}.%0A`;

        }


        whatsappMessage +=
            `%0AI'm contacting you through your website.`;


        // Show success message

        formSuccess.classList.add("show");

        formSuccess.textContent =
            "Request prepared. Opening WhatsApp...";


        // Open WhatsApp

        setTimeout(() => {

            window.open(
                `https://wa.me/27634160719?text=${whatsappMessage}`,
                "_blank"
            );


            quoteForm.reset();


            formSuccess.textContent =
                "Your WhatsApp request is ready to send.";

        }, 500);

    });

}


// =========================================================
// 04. SMOOTH SCROLL
// =========================================================

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#" ||
            targetId.length < 2
        ) {
            return;
        }


        const target = document.querySelector(targetId);

        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// =========================================================
// 05. REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
    ".service-card, .why-item, .detail-item, .contact-method, .intro-content, .section-heading"
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)";

});


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// =========================================================
// 06. SERVICE CARD STAGGER
// =========================================================

const serviceCards =
    document.querySelectorAll(".service-card");


serviceCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 60}ms`;

});


// =========================================================
// 07. CURRENT YEAR
// =========================================================

const yearElements =
    document.querySelectorAll("[data-year]");


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});


// =========================================================
// 08. PHONE NUMBER PROTECTION / NORMALISATION
// =========================================================

const phoneLinks =
    document.querySelectorAll('a[href^="tel:"]');


phoneLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Calling Tina Plumbing Worx:"
        );

    });

});


// =========================================================
// 09. WHATSAPP TRACKING
// =========================================================

const whatsappLinks =
    document.querySelectorAll(
        'a[href*="wa.me"]'
    );


whatsappLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "WhatsApp contact initiated."
        );

    });

});


// =========================================================
// 10. PARALLAX HERO
// =========================================================

const heroBackground =
    document.querySelector(".hero-background");


window.addEventListener("scroll", () => {

    if (!heroBackground) return;

    if (window.innerWidth > 760) {

        const scrollPosition =
            window.scrollY;

        heroBackground.style.transform =
            `translateY(${scrollPosition * 0.18}px) scale(1.03)`;

    }

});


// =========================================================
// 11. ACTIVE NAVIGATION
// =========================================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".desktop-nav a");


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");


                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


// =========================================================
// 12. CONSOLE MESSAGE
// =========================================================

console.log(
    "%cTINA PLUMBING WORX",
    "font-size: 20px; font-weight: bold; color: #1597ff;"
);

console.log(
    "%cWebsite loaded successfully.",
    "font-size: 12px; color: #6e7c8c;"
);