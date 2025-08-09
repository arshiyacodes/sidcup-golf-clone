var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-b");

document.addEventListener("mousemove", function (dets) {
  console.log(dets);
  crsr.style.left = dets.x + 30 + "px";
  crsr.style.top = dets.y + "px";
  crsrblur.style.left = dets.x - 200 + "px";
  crsrblur.style.top = dets.y - 200 + "px";
});
var h4 = document.querySelectorAll(" #nav h4");
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.backgoundColor = "transparent";
    crsr.style.border = "1px solid #fff";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;

    crsr.style.backgoundColor = " #96c11e";
    crsr.style.border = "0px #96c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "75px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
    markers: false,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  duration: 0.6,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -100%",
    scrub: 1,
    markers: false,
  },
});
gsap.from("#about-us img , #middle-about-us", {
  y: 90,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    scrub: 3,
    markers: false,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 80%",
    end: "top 65%",
    scrub: 2,
    markers: false,
  },
});
gsap.from("#colon-1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    start: "top 50%",
    end: "top 45%",
    scrub: 4,
    markers: false,
  },
});
gsap.from("#colon-2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    start: "top 50%",
    end: "top 45%",
    scrub: 4,
    markers: false,
  },
});
gsap.from("#page-4 h1 ", {
  y: 50,

  scrollTrigger: {
    trigger: "#page-4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
    markers: false,
  },
});
