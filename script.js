const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function loaderAnimation(){

let tl = gsap.timeline();

tl.to(".loader .l1", {
  opacity:1,
  duration: .4,
  delay: 0.1,
});
tl.to(".loader .l1", {
  opacity:0,
  duration: .4,
  delay: 0.1,
});

tl.to(".loader .l2", {
  opacity:1,
  duration: .4,
  delay: 0.1,
});
tl.to(".loader .l2", {
  opacity:0,
  duration: .4,
  delay: 0.1,
});
tl.to(".loader .l3", {
  opacity:1,
  duration: .4,
  delay: 0.1,
});tl.to(".loader .l3", {
  opacity:0,
  duration: .4,
  delay: 0.1,
});

tl.to(".loader", {
  top: "-100vh",
  duration: 1.5,
  delay: 0.6,
});
}

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

loaderAnimation();
swiperAnimation();
page4Animation();
menuAnimation()