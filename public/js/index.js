const yearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

//mobile nav

const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//smooth scroll

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
      console.log("works");
    }
    // remove mobile navigation after click
    if (this.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
    // Add smooth scrolling to top of page
    else if (this.hash == "") {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//.classList.remove(".login-invisible"); document.querySelector(".login-register")

//sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting == true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
