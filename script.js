
function predict() {
  const input = document.getElementById("multiplierInput").value;
  const values = input.split(',').map(Number).filter(n => !isNaN(n));

  const resultBox = document.getElementById("prediction");
  if (values.length < 5) {
    resultBox.innerHTML = "Please enter at least 5 multipliers.";
    resultBox.className = "result red";
    return;
  }

  const last = values.slice(-5);
  const countLow = last.filter(x => x <= 1.10).length;
  const countHigh = last.filter(x => x >= 2.0).length;

  let message = "";
  let riskClass = "";

  if (countLow >= 3) {
    message = "⚠️ Danger: Likely crash incoming!";
    riskClass = "red";
  } else if (countHigh >= 2) {
    message = "🟢 Safe: Higher multiplier expected.";
    riskClass = "green";
  } else {
    message = "⚠️ Medium Risk: Play cautiously.";
    riskClass = "yellow";
  }

  resultBox.innerHTML = message;
  resultBox.className = "result " + riskClass;
}
