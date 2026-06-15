const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const header = document.querySelector(".header");

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const backToTop = document.getElementById("backToTop");

/* =========================
   LOAD SAVED THEME
========================= */

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
  body.classList.add("dark");

  if(themeToggle){
    themeToggle.textContent = "☀️";
  }

}else{

  if(themeToggle){
    themeToggle.textContent = "🌙";
  }

}

/* =========================
   THEME TOGGLE
========================= */

if(themeToggle){

  themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    const darkMode =
      body.classList.contains("dark");

    if(darkMode){

      themeToggle.textContent = "☀️";

      localStorage.setItem(
        "theme",
        "dark"
      );

    }else{

      themeToggle.textContent = "🌙";

      localStorage.setItem(
        "theme",
        "light"
      );

    }

  });

}

/* =========================
   MOBILE NAV TOGGLE
========================= */

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if(navLinks.classList.contains("active")){

    hamburger.textContent = "✕";
    hamburger.style.transform =
      "rotate(180deg)";

  }else{

    hamburger.textContent = "☰";
    hamburger.style.transform =
      "rotate(0deg)";

  }

});

/* =========================
   CLOSE MENU ON LINK CLICK
========================= */

document.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    hamburger.textContent = "☰";
    hamburger.style.transform =
      "rotate(0deg)";

  });

});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.classList.add("scrolled");

  }else{

    header.classList.remove("scrolled");

  }

});

/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function(e){

    const target =
      document.querySelector(
        this.getAttribute("href")
      );

    if(target){

      e.preventDefault();

      target.scrollIntoView({
        behavior:"smooth"
      });

    }

  });

});

/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar =
  document.querySelector(
    ".scroll-progress"
  );

window.addEventListener("scroll", () => {

  const scrollTop =
    window.scrollY;

  const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    (scrollTop / docHeight) * 100;

  progressBar.style.width =
    progress + "%";

});

/* =========================
   ACTIVE NAV LINKS
========================= */

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(
    ".nav-links a"
  );

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 120;

    if(window.scrollY >= sectionTop){

      current =
        section.getAttribute("id");

    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    const href =
      link.getAttribute("href");

    if(href === `#${current}`){

      link.classList.add("active");

    }

  });

});

/* =========================
   SCROLL REVEAL
========================= */

const fadeElements =
  document.querySelectorAll(
    ".fade-in"
  );

const revealOnScroll = () => {

  fadeElements.forEach(element => {

    const elementTop =
      element.getBoundingClientRect().top;

    const windowHeight =
      window.innerHeight;

    if(elementTop < windowHeight - 100){

      element.classList.add("show");

    }

  });

};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


/* =========================
   BACK TO TOP
========================= */

window.addEventListener("scroll", () => {

  if(window.scrollY > 500){

    backToTop.classList.add("show");

  }else{

    backToTop.classList.remove("show");

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters =
  document.querySelectorAll(".counter");

const runCounters = () => {

  counters.forEach(counter => {

    const target =
      +counter.dataset.target;

    let current = 0;

    const increment =
      target / 80;

    const updateCounter = () => {

      if(current < target){

        current += increment;

        counter.textContent =
          Math.ceil(current);

        requestAnimationFrame(
          updateCounter
        );

      }else{

        counter.textContent =
          target + "+";

      }

    };

    updateCounter();

  });

};

runCounters();