"use strict";
//Прелоадер
var waiting = new Promise(function (resolve) {
  setTimeout(resolve, 500);
});

$(window).on('load', function () {
  waiting.then(function () {
    var $preloader = $('.preloader'),
      $loader = $preloader.find('.preloader__loader');
    $loader.fadeOut();
    $preloader.delay(250).fadeOut(200);
  });
});

//Бургер
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.menu").toggleClass("active");
    //Запрет прокрутки контента в открытом меню
    $("body").toggleClass("lock");
  });
});

//Умный Хэдер
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector(".header");

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //скролл вниз
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    //скролл вверх
    header.classList.remove("hide");
  }

  lastScroll = scrollPosition();
});

//Смена стилей хэдера при скроле
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("header").addClass("white-bg");
    } else {
      $("header").removeClass("white-bg");
    }
  });
});

//Смена стилей бургера при скроле
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".header__burger-container").addClass("white-burger");
    } else {
      $(".header__burger-container").removeClass("white-burger");
    }
  });
});

//Решаем проблему с якорями

$(document).ready(function () {
  var headerHeight = $("header").outerHeight();

  $(".menu__link,.mainscreen__scroll-link,.logo").click(function (e) {
    var targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top - headerHeight + 200 /*Отнимаем высоту Header`a если надо*/,
      },
      1000
    );

    e.preventDefault();
  });
});

//Инициализируем wow animations
new WOW().init();

//Инициализируем relax animations и задаём брейкпоинты
var rellax = new Rellax(".rellax", {
  // [xs, mobile, tablet] //
  breakpoints: [576, 1200, 1400],
});
