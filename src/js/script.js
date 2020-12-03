/* global $ */

// datepicker
$(function() {
  $('input[name="dates"]').daterangepicker({
    opens: 'left'
  }, function(start, end) {
    console.log('A new date selection was made: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});






