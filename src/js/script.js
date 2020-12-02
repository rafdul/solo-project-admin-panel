/* global $ */


// datepicker
$(function() {
  $('input[name="dates"]').daterangepicker({
    opens: 'left'
  }, function(start, end) {
    console.log('A new date selection was made: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

// nadanie klasy min-grid poprzez klik w hamburger
console.log(document.querySelector('.hamburger'));
document.querySelector('.hamburger').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.dashboard').classList.toggle('min-grid');
  console.log(document.querySelector('.dashboard'));
});

// wysuwanie menu bocznego
// sprawdzenie szerokości ekranu i nadanie klasy min-grid (w określonej sytuacji)

let mobileViewport = window.matchMedia('screen and (max-width: 500px)');

mobileViewport.addEventListener('change', function(mq) {
  if(mq.matches == true) {
    changeDisplay();

    if(document.querySelector('.dashboard').classList.contains('min-grid') == false) {
      document.querySelector('.dashboard').classList.add('min-grid');
    }
  }
});

// zmiana z display none na block dla elementów top-menu w side-menu
function changeDisplay() {
  const element = document.querySelector('.side-menu__top-menu');
  console.log(element.style.display);
  if(element.style.display == 'none' || element.style.display == '') {
    element.style.display = 'block';
  }
  console.log(element.style.display);
}






