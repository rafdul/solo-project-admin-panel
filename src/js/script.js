/* global $ */


// datepicker
$(function() {
  $('input[name="dates"]').daterangepicker({
    opens: 'left'
  }, function(start, end) {
    console.log('A new date selection was made: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

// wysuwanie menu bocznego
// sprawdzenie szerokości ekranu i nadanie nowej klasy (w określonej sytuacji)

var mobileViewport = window.matchMedia('screen and (max-width: 500px)');

mobileViewport.addEventListener('change', function(mq) {
  if(mq.matches == true) {
    if(document.querySelector('.dashboard').classList.contains('min-grid') == false) {
      document.querySelector('.dashboard').classList.add('min-grid');
    }
  }
});

// console.log(document.querySelector('.dashboard'));
// console.log(document.querySelector('.dashboard').style.getPropertyValue('grid-template-columns'));


// nadanie nowej klasy poprzez klik w hamburger
console.log(document.querySelector('.hamburger'));
document.querySelector('.hamburger').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.dashboard').classList.toggle('min-grid');
  console.log(document.querySelector('.dashboard'));
});



// walidacja formularza po kliknięciu w submit
// console.log(document.querySelector('form'));

document.querySelector('form').addEventListener('submit', function(event) {
  var isFormValidate = true;

  // walidacja pola Name
  var nameInput = event.target.querySelector('input[name="user-name"]');
  if(nameInput.value === '') {
    isFormValidate = false;
    nameInput.parentElement.parentElement.querySelector('.error').innerHTML = 'Pole "Name" jest wymagane';
    nameInput.parentElement.classList.add('invalid');
    console.log(nameInput.parentElement);
  }

  // walidacja email
  var emailAddressInput = event.target.querySelector('input[name="user-email"]');
  const regEmail = /[a-zA-Z_0-9-]{3,}@[a-zA-Z0-9-]{2,}[.]{1}[a-zA-Z]{2,}/;
  if(regEmail.test(emailAddressInput.value) == false) {
    isFormValidate = false;
    emailAddressInput.parentElement.parentElement.querySelector('.error').innerHTML = 'Błędny adres e-mail';
    emailAddressInput.parentElement.classList.add('invalid');
  }

  // walidacja tel
  var telAddressInput = event.target.querySelector('input[name="user-phone"]');
  const regTel = /[0-9]{3}-[0-9]{3}-[0-9]{3}/;
  if(regTel.test(telAddressInput.value) == false) {
    isFormValidate = false;
    telAddressInput.parentElement.parentElement.querySelector('.error').innerHTML = 'Błędny numer telefonu';
    telAddressInput.parentElement.classList.add('invalid');
  }

  // walidacja password i repeat
  var passwordInput = event.target.querySelector('input[name="user-password"]');
  var repeatInput = event.target.querySelector('input[name="user-repeat"]');
  const regPassword = /[\S]{5,}/;
  if(regPassword.test(passwordInput.value) == false) {
    isFormValidate = false;
    passwordInput.parentElement.parentElement.querySelector('.error').innerHTML = 'Hasło musi mieć min. 5 znaków';
    passwordInput.parentElement.classList.add('invalid');
  }
  if (repeatInput.value != passwordInput.value) {
    isFormValidate = false;
    repeatInput.parentElement.parentElement.querySelector('.error').innerHTML = 'Powtórz poprawnie swoje hasło';
    repeatInput.parentElement.classList.add('invalid');
  }

  return !isFormValidate ? event.preventDefault() : true;
});

