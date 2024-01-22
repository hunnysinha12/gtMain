// Navigation

const menuBtn = document.querySelector("#nav-menu");
const sideBar = document.querySelector(".sidebar");
const mainNavItems = document.querySelector(".main-nav-bar-items");

menuBtn.addEventListener("click", function () {
  sideBar.style.display = "flex";
  //   mainNavItems.style.display = "none";
});

const closeMenuBtn = document.querySelector("#close-nav-menu");
const sideBarClose = document.querySelector(".sidebar");

closeMenuBtn.addEventListener("click", function () {
  sideBarClose.style.display = "none";
});

// End Navigation

// swiper js script 1
var swiper = new Swiper(".hero", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".hero .swiper-button-next",
    prevEl: ".hero .swiper-button-prev",
  },
});

// End swiper js 1
const filter_cat = document.querySelector(".filter-btn");

let active_cards = document.querySelectorAll(
  ".project-slider .swipwe-slide:not(.d-none"
);

filter_cat.forEach((filter) => {
  filter.addEventListener("click", function () {
    filter.classList.remove("btn-active");
  });
  this.classList.add("btn-active");
  const category = this.dataset.cat;
  const cards = document.querySelectorAll(".project-slider .swiper-slider");
  cards.forEach((card, index) => {
    card.classList.add("d-none");
  });
  let selectedcat;
  if (category === "all") {
    selectedcat = document.querySelectorAll(`project-slider .swipwe-slider`);
  } else {
    selectedcat = document.querySelectorAll(`[data-type= "${category}"]`);
  }
  let numberItems;
  if (selectedcat.length >= 4) {
    numberItems = 4;
  } else {
    numberItems = selectedcat.length;
  }

  for (let index = 0; index <= numberItems - 1; index++) {
    selectedcat[index].classList.remove("d-none");
  }

  // if number of cards is 0, show no result

  const cards_count = document.querySelectorAll(
    ".project-slider .swiper-slide:not(.d-none"
  );

  if (cards_count.length === 0) {
    document.querySelector(".no-results").classList.remove(".d-none");
  } else {
    document.querySelector(".no-results").classList.add(".d-none");
  }
});

// Filter card according to category

// End Filter card according to category

// Swiper Slider 2

var swiper = new Swiper(".swiper-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-slider .swiper-button-next",
    prevEl: ".swiper-slider .swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

//   Swiper Slider 2 End
