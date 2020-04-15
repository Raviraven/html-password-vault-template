"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("serviceworker.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below

const navigation__button = document.querySelector(".navigation__button--js");
navigation__button.addEventListener("click", (e) => {
  const navigation__list = document.querySelector(".navigation__list--js");
  navigation__list.classList.toggle("navigation__list--visible");

  if (navigation__list.classList.contains("navigation__list--visible")) {
    navigation__button.innerHTML = "X";
  } else {
    navigation__button.innerHTML = "☰";
  }
});
