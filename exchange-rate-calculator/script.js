const currencyEl_one = document.querySelector('#currency-one');
const amountEl_one = document.querySelector('#amount-one');

const currencyEl_two = document.querySelector('#currency-two');
const amountEl_two = document.querySelector('#amount-two');

const rateEl = document.querySelector('#rate');
const swap = document.querySelector('#swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency1 = currencyEl_one.value;
  const currency2 = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency2];
      console.log(data);
      console.log(data.rates);
      rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;

  calculate();
});

calculate();
