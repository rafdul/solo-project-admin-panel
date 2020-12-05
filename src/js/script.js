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
$(document).ready( function () {
  $('#table-payout').DataTable({
    'language': {
      'url': '//cdn.datatables.net/plug-ins/1.10.21/i18n/Polish.json'
    },
    'columnDefs': [{
      'width': '23%',
    }]
  });
});


var table = $('#table-payout').DataTable();
$('#table-payout').css('display', 'table');
// table.responsive.recalc();

// $('#table-payout').DataTable()
//   .columns.adjust()
//   .responsive.recalc();
