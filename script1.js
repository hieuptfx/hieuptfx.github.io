// Tham khảo từ Gemini

"use strict";
// Lấy các phần tử cần thiết
const formContainer = document.querySelector(".form-container");
const infoContainer = document.querySelector(".info-container");
const infoForm = document.querySelector(".info-form");
const emailInput = document.getElementById("email");
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Hàm kiểm tra và hiển thị lỗi
function validateInput(inputElement, errorMessage) {
  const errorSpan = inputElement.nextElementSibling;
  if (errorMessage) {
    errorSpan.textContent = errorMessage;
    return false;
  } else {
    errorSpan.textContent = "";
    return true;
  }
}

// Xử lý sự kiện khi submit form
infoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn hành vi submit mặc định của form

  // Lấy dữ liệu từ input
  const email = emailInput.value.trim();

  // Kiểm tra dữ liệu (kiểm tra lần lượt để hiển thị tất cả lỗi nếu có)
  const isEmailValid = validateInput(
    emailInput,
    !emailRegex.test(email) ? "Email không hợp lệ hoặc rỗng." : ""
  );

  // Nếu cả hai đều hợp lệ thì tiến hành hiển thị thông tin
  if (isEmailValid) {
    // Ẩn form và hiện container thông tin
    formContainer.classList.add("hidden");
    infoContainer.classList.remove("hidden");
  }
});

// just try
// for (
//   let i = 0;
//   i < document.querySelectorAll(".details-container__div").length;
//   i++
// ) {
//   const x = document.querySelector(`.details-container__div${i}`);
//   const y = document.querySelector(`.button-content${i}`);
//   function myfunction() {
//     if (x.style.display === "none") {
//       x.style.display = "block";
//       y.textContent = "Show less!";
//     } else {
//       x.style.display = "none";
//       y.textContent = "Show more!";
//     }
//   }
// }

// console.log(document.querySelectorAll(".details-container__div").length);

// const showHide = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// for (let i = 0; i < x.length; i++) x[i].addEventListener("click", openModal);

// // Lấy tất cả các nút có class là 'button-content'
// const toggleButtons = document.querySelectorAll(".button-content");

// // Lặp qua từng nút để gán sự kiện
// toggleButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // Tìm phần tử cha gần nhất có class 'skill-item'
//     const parentSkill = button.closest(".div2child");
//     // Tìm phần tử nội dung có class 'skill-content' bên trong phần tử cha
//     const content = parentSkill.querySelector(".details-container__div");

//     // Chuyển đổi trạng thái hiển thị của nội dung bằng cách thêm/xóa class 'hide'
//     content.classList.toggle("hidden");

//     // Cập nhật chữ trên nút dựa vào trạng thái hiện tại của nội dung
//     if (content.classList.contains("hidden")) {
//       // Nếu nội dung đang ẩn, chuyển nút về 'View More'
//       button.textContent = "Show more!";
//       // Ẩn nút đi
//       button.style.opacity = "0";
//     } else {
//       // Nếu nội dung đang hiện, chuyển nút về 'View Less'
//       button.textContent = "Show less!";
//     }
//   });

//   // Lắng nghe sự kiện hover vào skill-item để hiển thị nút
//   const parentSkill = button.closest(".div2child");
//   parentSkill.addEventListener("mouseenter", () => {
//     // Nút sẽ luôn hiển thị khi hover, trừ khi nội dung đang hiện
//     if (button.textContent === "View More") {
//       button.style.opacity = "1";
//     }
//   });

//   parentSkill.addEventListener("mouseleave", () => {
//     // Khi rời chuột, ẩn nút đi nếu nội dung chưa được mở
//     if (button.textContent === "View More") {
//       button.style.opacity = "0";
//     }
//   });
// });
