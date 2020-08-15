const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

// Populate UI on page load
populateUI();

let ticketPrice = parseInt(movieSelect.value);

// Save selected movie
function saveMovieData(movieIndex) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
}

// Save selected seats
function saveSelectedSeats(selectedSeats) {
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
}

// Update total and count
function updatedSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  count.textContent = selectedSeatsCount;
  total.textContent = selectedSeatsCount * ticketPrice;

  // const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  // localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  saveSelectedSeats(selectedSeats);
}

// Get data from localStorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if ((selectedSeats !== null) & (selectedSeats.length > 0)) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = parseInt(e.target.value);
  saveMovieData(e.target.selectedIndex);
  updatedSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updatedSelectedCount();
  }
});

//  Initial count and total set
updatedSelectedCount();
