use: "strict";
console.log(1);

const submitBtn = document.getElementById("submitInteger");
const enterStockPrice = document.getElementById("integerInput");
const enterSharePrice = document.getElementById("shareInput");
const eneterDividend = document.getElementById("divedendInput");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(1);
  let stockPrice = 59;
  stockPrice = enterStockPrice.value;
  let quarter = 4;
  let years = 35;
  let percentageGrowth = 1.0175;
  let dividend = 0.46;
  // dividend = eneterDividend.value;
  let investment = 59;
  let shares = investment / stockPrice;
  shares = enterSharePrice.value;
  for (let i = 0; i < years; i++) {
    for (let j = 0; j < quarter; j++) {
      investment = (investment + shares * dividend) * percentageGrowth;
      console.log(
        `In Q${j + 1} of year ${
          i + 1
        }, your investment is worth ${investment}, and during this period your dividend paid to you is equal to ${dividend} `
      );
      dividend = dividend + 0.02;
    }
  }
  console.log(enterStockPrice.value);
});
