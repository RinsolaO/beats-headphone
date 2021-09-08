const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// VALIDATE

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Make NavLink Disappear On Link Click

const navLink = document.querySelectorAll(".nav-link");

function menuRemove() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", menuRemove));

// Change Background On Scroll

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY > 120) {
    header.classList.add("header-bg");
  } else {
    header.classList.remove("header-bg");
  }
}

window.addEventListener("scroll", function () {
  scrollHeader();
  scrollUp();
});

// Scroll UP Icon

const scrollBar = document.getElementById("scrollbar");

function scrollUp() {
  if (scrollY > 250) {
    scrollBar.classList.add("show-scroll");
  } else {
    scrollBar.classList.remove("show-scroll");
  }
}

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach ( section => {
//     const currentHeight = section.offsetHeight;
//     const sectionTop = section.offsetTop - 50;
//     const sectionId = section.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + currentHeight) {
//       document
//         .querySelector(".nav-menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav-menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }

// Highlight NAvLink

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// ScrollReveal

const sr = ScrollReveal({
  distance: "80px",
  duration: 3000,
  delay: 400,
  // reset: true,
});

sr.reveal(`.home-header, .section__title`);
sr.reveal(` .footer-copyright`, { origin: "top", distance: "30px" });
sr.reveal(`.home-img, .home-footer`, {
  origin: "top",
  delay: 1500,
  interval: 500,
  distance: "30px",
});
sr.reveal(` .products-card`, {
  origin: "top",
  delay: 100,
  interval: 500,
  distance: "30px",
});
sr.reveal(` .sponsor-img, .footer-container`, {
  origin: "bottom",
  distance: "30px",
  interval: 1000,
});
sr.reveal(`.specs-content, .case-img,.discount-animate`, {
  origin: "left",
});
sr.reveal(`.specs-img, .case-content, .discount-img`, {
  origin: "right",
});
