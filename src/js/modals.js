// funkcja do zamykania modala = usunięcie klasy .show
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

// podpięcie closeModal pod przyciski oznaczone klasą .js--close-modal
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

// podpięcie closeModal pod tło overlaya
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

// podpięcie closeModal pod klawisz ESC
document.addEventListener('keyup', function(e) {
  /* if(e.keyCode === 27) { --> uznane jest za depreaced*/
  if(e.key === 'Escape') {
    closeModal();
  }
});

// funkcja otwierająca modal
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
    console.log('modal', modal);
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

// wywowałenie modala po kliknięcie w przycisk QUIT
document.querySelector('.top-menu__exit').addEventListener ('click', function(event) {
  event.preventDefault;
  openModal('#quit-modal');
});

document.querySelector('.side-menu__top-menu--exit').addEventListener ('click', function(event) {
  event.preventDefault;
  openModal('#quit-modal');
});

// wywołanie modala po kliknięciu w przycisk login/profile
document.querySelector('.top-menu__profile').addEventListener ('click', function(event) {
  event.preventDefault;
  openModal('#login-modal');
});
