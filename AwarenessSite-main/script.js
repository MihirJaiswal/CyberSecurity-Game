"use strict";

// console.log("hello");
const navLinks = document.querySelectorAll(".nav__link");
const footLinks = document.querySelectorAll(".footer__link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e.target);
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

footLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e.target);
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

const header = document.querySelector(".header__container");
const nav = document.querySelector(".nav__main");

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);


  'use strict';

  var c = document.getElementById('c');
  var ctx = c.getContext('2d');

  var WIDTH = c.width = window.innerWidth;
  var HEIGHT = c.height = window.innerHeight;
  var mouse = {
    x: 0,
    y: 0,
    isMoved: false
  };

  var Particle = function() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = 0;
    this.life = 0;
    this.radius = Math.random() * 5;
  };

  Particle.prototype = {
    constructor: Particle,
    update: function() {
      if(this.life > 0) {
        this.life -= 2;
        if(this.life < 50) {
          this.vx += Math.random() * 4 - 2;
          this.vy += Math.random() * 4 - 2;
          this.vx *= 0.9;
          this.vy *= 0.9;
          this.x += this.vx;
          this.y += this.vy;
          this.a = this.life / 50;						
        }
      }
    }
  }