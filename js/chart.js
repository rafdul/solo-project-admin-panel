/* global Chart */

// zmiana ułożenia (bar / horizontal) wykresu po przekroczeniu szer. 400px
let mobileViewport = window.matchMedia('screen and (max-width: 400px)');

mobileViewport.addEventListener('change', function(mq) {
  console.log(window.innerWidth);
  if (mq.matches == true) {
    document.querySelector('.myChart').classList.remove('show');
    document.querySelector('.myChart2').classList.add('show');
  } else {
    document.querySelector('.myChart2').classList.remove('show');
    document.querySelector('.myChart').classList.add('show');
  }
});


// myChart 'bar'
let ctx = document.getElementById('myChart').getContext('2d');

let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    }, {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      hidden: true,
    }]
  },
  options: {
    legend: {
      display: true,
      position: 'top',
    },
    maintainAspectRatio: false,
  }
});
console.log(chart);
console.log(chart.config);
console.log(chart.config.type);


// myChart2 'horizontalBar'
let context = document.getElementById('myChart2').getContext('2d');

let chart2 = new Chart(context, {
  type: 'horizontalBar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    }, {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      hidden: true,
    }]
  },
  options: {
    legend: {
      display: true,
      position: 'top',
    },
    maintainAspectRatio: false,
  }
});
console.log(chart2);
console.log(chart2.config);
console.log(chart2.config.type);

// zachowanie układu wykresu po odświeżeniu strony
if (window.innerWidth <= 400) {
  document.querySelector('.myChart').classList.remove('show');
  document.querySelector('.myChart2').classList.add('show');
} else {
  document.querySelector('.myChart2').classList.remove('show');
  document.querySelector('.myChart').classList.add('show');
}
