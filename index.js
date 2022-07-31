const dropdownToggler = document.querySelector(".dropdown"),
  chevronDown = document.querySelector("i.fa-chevron-down"),
  chevronUp = document.querySelector("i.fa-chevron-up"),
  dropdownMenu = document.querySelector(".dropdown-menu");

// Nav menu dropdown animations
let toggle = false;
dropdownToggler.addEventListener("click", () => {
  if (!toggle) {
    gsap.to(chevronDown, {
      duration: 0.8,
      delay: 0.1,
      top: "150%",
      opacity: 0,
      ease: Power2.easeOut,
    });
    gsap.to(chevronUp, {
      duration: 0.8,
      delay: 0.8,
      top: "-100%",
      opacity: 1,
      ease: Power2.easeOut,
    });
    setTimeout(() => dropdownMenu.classList.add("show"), 300);
    toggle = true;
  } else {
    gsap.to(chevronDown, {
      duration: 0.8,
      delay: 1.5,
      top: "100%",
      opacity: 1,
      ease: Power2.easeOut,
    });
    gsap.to(chevronUp, {
      duration: 0.8,
      delay: 0.8,
      top: "0%",
      opacity: 0,
      ease: Power2.easeOut,
    });
    setTimeout(() => dropdownMenu.classList.remove("show"), 50);
    toggle = false;
  }
});

// Text reveal
const btnReveal = document.querySelector(".btn-reveal"),
  textWrapper = document.querySelector(".text-wrapper"),
  about = document.querySelector("#about");
btnReveal.addEventListener("click", (e) => {
  about.classList.toggle("reveal");
});

// Gsap animations on page load
const tl = gsap.timeline();
tl.from(".border", {
  delay: 0.5,
  duration: 1,
  opacity: 0,
  ease: Expo.easeInOut,
})
  .from(".brand", {
    duration: 1.2,
    y: -80,
    opacity: 0,
    ease: Expo.easeOut,
  })
  .from(".logo-img", {
    duration: 1,
    x: -60,
    opacity: 0,
    ease: Expo.easeInOut,
  })
  .from(
    ".menu-item",
    {
      duration: 2,
      y: 30,
      opacity: 0,
      ease: Expo.easeInOut,
      stagger: 0.6,
    },
    "-=1"
  )
  .from(".social-link", {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    stagger: 0.1,
  })
  .from(".explore > img", {
    duration: 2.5,
    opacity: 0,
    x: 10,
    ease: Power2.easeInOut,
  })
  .to(".image-group:nth-child(1) .box", {
    duration: 1.2,
    y: "-100%",
    ease: Expo.easeOut,
  })
  .to(
    ".image-group:nth-child(2) .box",
    {
      duration: 1.2,
      y: "100%",
      ease: Expo.easeOut,
    },
    "-=1.15"
  )
  .to(
    ".image-group:nth-child(3) .box",
    {
      duration: 1.2,
      y: "-100%",
      ease: Expo.easeOut,
    },
    "-=1.15"
  )
  .to(
    ".image-group:nth-child(4) .box",
    {
      duration: 1.2,
      y: "100%",
      ease: Expo.easeOut,
    },
    "-=1.15"
  )
  .from("#about", {
    duration: 1,
    opacity: 0,
    ease: Expo.easeInOut,
  })
  .from(".dropdown-action > i", {
    duration: 0.5,
    opacity: 0,
    y: -20,
    ease: Power2.easeOut,
  });
