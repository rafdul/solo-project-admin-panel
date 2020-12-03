// nadanie klasy min-grid poprzez klik w hamburger
console.log(document.querySelector('.hamburger'));
document.querySelector('.hamburger').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.dashboard').classList.toggle('min-grid');
  console.log(document.querySelector('.dashboard'));
});

// wysuwanie / chowanie menu bocznego podczas zmiany szerokości okna
// sprawdzenie szerokości ekranu i nadanie klasy min-grid (w określonej sytuacji)

let mobileViewport = window.matchMedia('screen and (max-width: 750px)');

mobileViewport.addEventListener('change', function(mq) {
  if(mq.matches == true) {
    changeDisplay();

    if(document.querySelector('.dashboard').classList.contains('min-grid') == false) {
      document.querySelector('.dashboard').classList.add('min-grid');
    }
  } else {
    changeDisplay();

    if(document.querySelector('.dashboard').classList.contains('min-grid') == true) {
      document.querySelector('.dashboard').classList.remove('min-grid');
    }
  }
});

// zmiana z display none na block dla elementów top-menu w side-menu
function changeDisplay() {
  const element = document.querySelector('.side-menu__top-menu');
  console.log(element.style.display);
  if(element.style.display == 'none' || element.style.display == '') {
    element.style.display = 'block';
  } else if (element.style.display == 'block') {
    element.style.display = 'none';
  }
  console.log(element.style.display);
}

// uruchamianie min-grid przy odświeżaniu strony poniżej szerokości 750px
// korzystam z window.innerWidth (sprawdza szerokość okna przeglądarki)

// function addMinGrid(el) {
//   console.log(el.matches);
//   if (el.matches) { // If media query matches
//     document.querySelector('.dashboard').classList.add('min-grid');
//     document.querySelector('.side-menu__top-menu').style.display = 'block';
//   } else {
//     document.querySelector('.dashboard').classList.remove('min-grid');
//   //   document.querySelector('.side-menu__top-menu').style.display = 'none';
//   }
// }

// let minGrid = window.matchMedia('(max-width: 750px)');
// addMinGrid(minGrid); // Call listener function at run time
// console.log('addMinGrid');

console.log('window.innerWidth:', window.innerWidth);
if (window.innerWidth <= 750) {
  document.querySelector('.dashboard').classList.add('min-grid');
  document.querySelector('.side-menu__top-menu').style.display = 'block';
} else {
  document.querySelector('.dashboard').classList.remove('min-grid');
}
