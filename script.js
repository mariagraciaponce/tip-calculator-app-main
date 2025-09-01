// Selección de elementos
const billInput = document.getElementById('bill');
const percentageButtons = document.querySelectorAll('.percentage-btn');
const customButton = document.getElementById('costum-btn');
const peopleInput = document.getElementById('number-people');
const resetButton = document.getElementById('reset-btn');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalDisplay = document.getElementById('total');

let billValue = 0;
let tipPercentage = 0;
let numberOfPeople = 1;


function calculateTip() {

    const tipAmount = (billValue * tipPercentage) / numberOfPeople;
    const totalAmount = (billValue / numberOfPeople) + tipAmount;

    // Mostrar resultados
    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalDisplay.textContent = `$${totalAmount.toFixed(2)}`;

     // Habilitar o deshabilitar el botón Reset
     if (billValue > 0 && numberOfPeople > 0) {
        resetButton.disabled = false;
    } else {
        resetButton.disabled = true;
    }
}


// Event listeners
billInput.addEventListener('input', () => {
    billValue = parseFloat(billInput.value) || 0;
    calculateTip();
});

percentageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        tipPercentage = parseFloat(e.target.textContent) / 100;
        calculateTip();
    });
});


peopleInput.addEventListener('input', () => {
    numberOfPeople = parseInt(peopleInput.value) || 1;
    calculateTip();
});

const errorMsg = document.querySelector('.form__flex p');

peopleInput.addEventListener('click', () => {
    numberOfPeople = parseInt(peopleInput.value);

    if (numberOfPeople === 0 || isNaN(numberOfPeople)) {
        errorMsg.classList.remove('hidden'); 
    } else {
        errorMsg.classList.add('hidden'); 
        calculateTip();
    }
});

resetButton.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    tipAmountDisplay.textContent = '$0.00';
    totalDisplay.textContent = '$0.00';
    billValue = 0;
    tipPercentage = 0;
    numberOfPeople = 1;
    resetButton.disabled = true;
});
