/* global $ */

// datepicker
$(function() {
  $('input[name="dates"]').daterangepicker({
    opens: 'left'
  }, function(start, end) {
    console.log('A new date selection was made: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

// datatables - stronicowanie i sortowanie tabeli
// $(document).ready( function () {
//   $('#table-payout').DataTable({
//     language: {
//       url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Polish.json'
//     },
//   });
// });

// $(document).ready( function () {
//   $('#table-details').DataTable({
//     scrollX: true,
//     // scrollY: 350,
//     // responsive: true,
//     // paging:  false,
//     language: {
//       'url': '//cdn.datatables.net/plug-ins/1.10.21/i18n/Polish.json'
//     }
//   });
// });




// var table = $('#table-payout').DataTable();
// $('#table-payout').css('display', 'table');
// table.responsive.recalc();

// $('#table-payout').DataTable()
//   .columns.adjust()
//   .responsive.recalc();

// rangeslider
$('.js-range-slider').ionRangeSlider({
  // type: 'double',
  skin: 'square',
  min: 0,
  max: 168,
  from: 0,
  to: 168,
  postfix: ' h',
  // grid: true
});


