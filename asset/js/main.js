// typinying home
const typed = new Typed(".typing", {
  strings: ["Web Developer", "Fullstack Developer", "Programmer"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

// srolup
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// navigasi transisi
const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1) {
    navbar.classList.replace("bg-transparent", "navbar-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace("navbar-color", "bg-transparent");
  }
});

// swiper card

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    520: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// change color
const colorPicker = document.querySelectorAll("input.input-color-picker");

const colorUpdate = (cssVars) => {
  const root = document.querySelector(":root");
  const keys = Object.keys(cssVars);
  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
};

colorPicker.forEach((item) => {
  item.addEventListener("input", (e) => {
    const cssPropName = `--pr-${e.target.getAttribute("data-id")}`;
    console.log(cssPropName);
    colorUpdate({
      [cssPropName]: e.target.value,
    });
  });
});

// responsive navbar
const navBar = document.querySelector(".nav");

document.querySelector("#humberger").onclick = () => {
  navBar.classList.toggle("on");
};
