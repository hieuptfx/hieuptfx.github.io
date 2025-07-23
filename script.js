// "use strict";

// const formContainer = document.querySelector(".form-container");
// const infoContainer = document.querySelector(".info-container");

// function validateEmail(email) {
//   let re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
// if (validateEmail(email)) {
//   formContainer.classList.add("hidden");
//   infoContainer.classList.remove("hidden");
// }

// for (
//   let i = 0;
//   i < document.querySelectorAll(".details-container__div").length;
//   i++
// ) {

//   function myfunction() {
//     const x = document.querySelector(`.details-container__div${i}`);
//     const y = document.querySelector(`.button-content${i}`);
//     if (x.style.display === "none") {
//       x.style.display = "inline-block";
//       y.textContent = "Show less!";
//     } else {
//       x.style.display = "none";
//       y.textContent = "Show more!";
//     }
//   }
// }

const container = document.querySelectorAll(".details-container__div");
container.forEach((node) => {
  node.nextElementSibling.addEventListener("click", function () {
    if (node.nextElementSibling.textContent === "Show less!") {
      node.classList.add("hidden");
      node.nextElementSibling.textContent = "Show more!";
    } else {
      node.classList.remove("hidden");
      node.nextElementSibling.textContent = "Show less!";
    }
  });
});
