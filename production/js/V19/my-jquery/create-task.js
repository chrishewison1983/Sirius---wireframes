// =================================== Create Task - JAVASCRIPT =================================== //
$('#create-task-button').addClass('de-activate').removeAttr('href');

$("#assign-to-myself, #assign-to-my-team").click( function(){
     $('.answer-task-team, .answer-task-user').slideUp();
});

$("#assign-to-user").click( function(){
     $('.answer-task-user').slideDown().css('display', 'inline-block');
     $('.answer-task-team').slideUp();
});

$("#assign-to-team").click( function(){
     $('.answer-task-team').slideDown().css('display', 'inline-block');
     $('.answer-task-user').slideUp();
});

// Form validation for pop-up
$('#confirm-re-assign-task').addClass('de-activate');

$("#assign-to-myself, #task-user, #assign-to-my-team, #task-team").click( function(){
     $('#confirm-re-assign-task').removeClass('de-activate');
});


$("#datepicker").click( function(){
     $('#create-task-button').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html#HandW');
});

// Populates modal name
$("#tasks-table .action-button").click( function(){
     var taskName = $(this).closest('tr').find('a.task').text();
     $('.action-task-name').text(taskName);

     $(this).closest('tr').addClass('action-row');
});

// Removes task from list
$("#confirm-complete-task, #confirm-re-assign-task").click( function(){
     $('#tasks-table .action-row').hide();
});

// Shows the confirmation panels
$("#confirm-complete-task").click( function(){
     var taskName = $(this).closest('.modal').find('.action-task-name').text();
     $('#task-complete').slideDown();
     $('.task-title').text(taskName);
     setTimeout(function() {
          $("#task-complete").slideUp();
     }, 5000);

     var taskNumber = parseInt($('ul.client-details li[data-tab="summary-tab-7"] span').text());

     $('ul.client-details li[data-tab="summary-tab-7"] span').text(taskNumber - 1);

     // $('#task-complete .complete-task-title').text(taskName);

});

$("#confirm-error-task").click( function(){
     var taskName = $(this).closest('.modal').find('.action-task-name').text();
     $('#task-error-message').slideDown();
     $('.task-title').text(taskName);
});

$("#confirm-re-assign-task").click( function(){
     var taskName = $(this).closest('.modal').find('.action-task-name').text();
     $('#task-re-assigned').slideDown();
     $('.task-title').text(taskName);
     setTimeout(function() {
          $("#task-re-assigned").slideUp()
     }, 5000);

     var taskNumber = parseInt($('ul.client-details li[data-tab="summary-tab-7"] span').text());

     $('ul.client-details li[data-tab="summary-tab-7"] span').text(taskNumber - 1);

});
