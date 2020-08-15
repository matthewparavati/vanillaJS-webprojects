const toggle = document.querySelector('#toggle');
const show = document.querySelector('#show');
const hide = document.querySelector('#hide');
const modal = document.querySelector('#modal');

// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav'),
);

// Show modal
show.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
hide.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e => {
  console.log(e.target);
  e.target == modal ? modal.classList.remove('show-modal') : false;
});
