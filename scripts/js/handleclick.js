const calculator = {
    displayValue: '0',
  };
  
function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}
  
function resetCalculator() {
    calculator.displayValue = '0';
}
  
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

// API call
function handlesubmit() {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.querySelector(".calculator-screen").value = this.responseText;
        }
      };
      xmlhttp.open("GET", "scripts/index.php?expression=" +  encodeURIComponent(calculator.displayValue), true);
      xmlhttp.send();
  }

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    event.preventDefault();
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
            updateDisplay();
        return;
    }

    if(target.classList.contains("submit")){
        handlesubmit();
        updateDisplay();

        return;
    }
    inputDigit(target.value);
    updateDisplay();
});