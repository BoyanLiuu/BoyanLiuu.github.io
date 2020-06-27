"use strict";

var data = [
  {
    id: "",
    url: "https://boyanliuu.github.io/movie-websit/",
    gitHubUrl: "https://github.com/BoyanLiuu/movie-websit",
    img: "img/img1.png",
    title: "Movie Website",
    desc:
      "Browse your favorite movies, actors and watch trailers. See what's playing in theaters right now. Discover upcoming, trending, and top-rated titles.",
  },
  {
    id: "",
    url: "https://arcade-chat.herokuapp.com/",
    gitHubUrl: "https://github.com/BoyanLiuu/chatting-room",
    img: "img/arcade-chat.png",
    title: "Arcade chat room",
    desc:
      "Create rooms and talk with other friends. It implemented with Node.js, Express, Mongoose, Socket.io, and Passport for designing a real- time chat application.",
  },

  {
    id: `id = "tour"`,
    url: "",
    gitHubUrl: "https://github.com/BoyanLiuu/Go-Tour-Website",
    img: "img/go-tour.png",
    title: "Natours",
    desc:
      "An E commerce  tour website that users can login and buy tours review tours. Build by node.js, express.js and MongoDB",
  },
  {
    id: "",
    url: "https://simple-clothing-app.herokuapp.com/",
    gitHubUrl: "https://github.com/BoyanLiuu/react-Ecommerce-Website",
    img: "img/clothesApp.png",
    title: "Simpel Clothing App",
    desc:
      "A Clothing website that users can login and buy clothes. Build by react.js,redux firebase ",
  },
  {
    id: "",
    url: "https://hangman-react-js.herokuapp.com/",
    gitHubUrl: "https://github.com/BoyanLiuu/hangman-game",
    img: "img/hangman.png",
    title: "ReactJS Hangman Game",
    desc: "ReactJS Hangman Game Find a Programming Language",
  },
  {
    id: "",
    url: "https://boyanliuu.github.io/Pig-game/",
    gitHubUrl: "https://github.com/BoyanLiuu/Pig-game",
    img: "img/img2.png",
    title: "Pig Name game",
    desc: "An simple Pig name game build by vanilla javascript html and css",
  },
];

var flexGrid = document.querySelector(".flex-grid");
console.log();
data.forEach(function (el) {
  return (flexGrid.innerHTML +=
    '<article class="card">\n<div class="card__thumbnail">\n  <a class="card__img-container" href=' +
    el.url +
    ' target="_blank">\n    <img src=' +
    el.img +
    " alt=" +
    el.title +
    ' class="card__img">\n  </a>\n</div>\n<div class="card__description">\n  <h3 class="card__heading">\n    <a href=' +
    el.url +
    ' target="_blank" class="card__link"' +
    ">" +
    el.title +
    '</a>\n  </h3>\n  <p class="card__text">' +
    el.desc +
    "</p>\n  <a href=" +
    el.gitHubUrl +
    ' target="_blank"  class="card__github">\n    GitHub\n    <i class="fab fa-github"></i>\n  </a>\n</div>\n</article>');
});
var x = document.querySelectorAll(".card__link");
var temp = Array.from(x);
temp[2].setAttribute("href", "#lightbox");
temp[2].setAttribute("data-toggle", "modal");

// Specify last element of

// Browser support
function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) {
    return self.pageYOffset;
  }
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop) {
    return document.documentElement.scrollTop;
  }
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) {
    return document.body.scrollTop;
  }

  return 0;
}

// Determine the position of the destination element
function elmYPosition(eID) {
  var elm = document.querySelector(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

// Function to do the scrolling
function smoothScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
  return false;
}

// Triggering scroll function
document.querySelector(".user-nav").addEventListener("click", function (event) {
  var target = event.target;
  var anchorID = target.getAttribute("href");

  if (target.nodeName === "I" || target.nodeName === "SPAN") {
    anchorID = target.parentElement.getAttribute("href");
  }

  smoothScroll(anchorID);
});

document
  .querySelector(".footer-nav")
  .addEventListener("click", function (event) {
    var target = event.target;
    var anchorID = target.getAttribute("href");
    smoothScroll(anchorID);
  });

document.querySelector("#cta").addEventListener("click", function () {
  smoothScroll("#portfolio");
});
