use: "strict";
console.log(1);

const submitBtn = document.getElementById("submitInteger");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(1);
  let stockPrice = 59;
  let quarter = 4;
  let years = 35;
  let percentageGrowth = 1.0175;
  let dividend = 0.46;
  let investment = 59;
  let shares = investment / stockPrice;
  for (let i = 0; i < years; i++) {
    for (let j = 0; j < quarter; j++) {
      investment = (investment + shares * dividend) * percentageGrowth;
      console.log(
        `In Q${j + 1} of year ${years}, your investment is worth ${investment} `
      );
      dividend = dividend + 0.02;
    }
  }
});
