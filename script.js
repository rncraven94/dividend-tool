use: "strict";
console.log(1);

const submitBtn = document.getElementById("submitInteger");

submitBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(1);
});
