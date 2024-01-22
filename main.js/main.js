"use strict";

// slider
$(".openSlide").on("click", function (e) {
  $(".openSlide").not(e.target).next().slideUp(1000);
  $(e.target).next().slideToggle(1000);
});

// nav
$(".nav-log").on("click", function () {
  $(".nav-content").css({ display: "block" }).animate({ width: "13%" }, 500);
  $(".nav-log").animate({ marginLeft: "14%" }, 500);
  $(".content").animate({ marginLeft: "13%" }, 500);
});
$("#closeNav").on("click", function () {
  $(".nav-content").animate({ width: "0" }, 500, function () {
    $(".nav-content").css({ display: "none" });
  });
  $(".nav-log").animate({ marginLeft: "1%" }, 500);
  $(".content").animate({ marginLeft: "0" }, 500);
});

// timer
setInterval(function () {
  let eventDate = new Date(2024, 3, 20) - new Date();
  let seconds = Math.floor(eventDate / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  $("#firstBox").html(`<p class="time">${days}  D</p>`);
  $("#secendBox").html(`<p class="time">${hours}  h</p>`);
  $("#thirdBox").html(`<p class="time">${minutes}  m</p>`);
  $("#fourthBox").html(`<p class="time">${seconds}  s</p>`);
}, 1000);

//input

const textarea = document.querySelector("textarea");
let countArea = 100;

$(textarea).on("input", function (e) {
  let numOfWord = $(this).val().length;
  let finalNum =
    countArea - numOfWord > 0
      ? countArea - numOfWord
      : "your available character finished";
  $("#counter").text(finalNum);
});

//scorll

$(".links a").on("click", function (e) {
  let targetSec = $(this).attr("href");
  let { top: aboutSectionTop } = $(targetSec).offset();

  $("html,body").animate({ scrollTop: aboutSectionTop }, 1500);
});
