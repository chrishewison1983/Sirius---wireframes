// =================================== Dashboard - JAVASCRIPT =================================== //

/////////////// ------------------------------ FILTER 1 - START ------------------------------ ///////////////
$('#completed-tasks-table tbody tr').hide();
$('#completed-tasks-table tbody tr.today').show();

$('#pagination-small.completed-tasks-pagination').hide();

$('#filter-date-completed').change(function(){
     if($(this).val() == "Today") {
          $('#completed-tasks-table tbody tr').hide();
          $('#completed-tasks-table tbody tr.today').show();

          $('.completed-tasks').find('.filter-numbers .number').text('1');
          $('.completed-tasks').find('.filter-numbers .desc').text('task');

          $('.description-title.completed .timeline-value').text('Today');

          $('#pagination-small.completed-tasks-pagination').hide();
     } else if ($(this).val() == "Last 7 days") {
          $('.description-title.completed .timeline-value').text('Last 7 days');

          $('#completed-tasks-table tbody tr').hide();
          $('#completed-tasks-table tbody tr.last-7-days').show();

          $('.completed-tasks').find('.filter-numbers .number').text('3');
          $('.completed-tasks').find('.filter-numbers .desc').text('tasks');

          $('#pagination-small.completed-tasks-pagination').hide();
     } else if ($(this).val() == "Last month") {
          $('.description-title.completed .timeline-value').text('Last month');

          $('#completed-tasks-table tbody tr').hide();
          $('#completed-tasks-table tbody tr.last-month').show();

          $('.completed-tasks').find('.filter-numbers .number').text('5');
          $('.completed-tasks').find('.filter-numbers .desc').text('tasks');

          $('#pagination-small.completed-tasks-pagination').hide();
     } else if ($(this).val() == "Last 60 days") {
          $('.description-title.completed .timeline-value').text('Last 60 days');

          $('#completed-tasks-table tbody tr').hide();
          $('#completed-tasks-table tbody tr.last-60-days').show();

          $('.completed-tasks').find('.filter-numbers .number').text('7');
          $('.completed-tasks').find('.filter-numbers .desc').text('tasks');

          $('#pagination-small.completed-tasks-pagination').hide();
     } else if ($(this).val() == "All") {
          $('.description-title.completed .timeline-value').text('All');

          $('#completed-tasks-table tbody tr').hide();
          $('#completed-tasks-table tbody tr.all').show();

          $('.completed-tasks').find('.filter-numbers .number').text('9');
          $('.completed-tasks').find('.filter-numbers .desc').text('tasks');

          $('#pagination-small.completed-tasks-pagination').show();
     } else {
          $('.description-title.completed .timeline-value').text('Today');
          $('#completed-tasks-table tbody tr').hide();
          $('#completed-tasks-table tbody tr.today').show();

          $('.completed-tasks').find('.filter-numbers .number').text('1');
          $('.completed-tasks').find('.filter-numbers .desc').text('task');

          $('#pagination-small.completed-tasks-pagination').hide();
     }

     $('.completed-tasks .filter-select-all-clear').show();
});
/////////////// ------------------------------ FILTER 1 - END ------------------------------ ///////////////

/////////////// ------------------------------ FILTER 2 - START ------------------------------ ///////////////
$('.completed-tasks #filter-type-task').change(function(){
     $('.completed-tasks .filter-select-all-clear').show();
});
/////////////// ------------------------------ FILTER 2 - END ------------------------------ ///////////////

/////////////// ------------------------------ FILTER 2 - START ------------------------------ ///////////////
$('.completed-tasks .filter-completed-user').keyup(function(){
     $('.completed-tasks .filter-select-all-clear').show();
});
/////////////// ------------------------------ FILTER 2 - END ------------------------------ ///////////////
