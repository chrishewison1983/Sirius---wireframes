// =================================== Create Task - JAVASCRIPT =================================== //
$('#create-task-button').addClass('de-activate').removeAttr('href');

$("#assign-to-user").click( function(){
     $('.answer-task-user').slideDown().css('display', 'inline-block');
     $('.answer-task-team').hide();
});

$("#assign-to-team").click( function(){
     $('.answer-task-team').slideDown().css('display', 'inline-block');
     $('.answer-task-user').hide();
});

$("#datepicker").click( function(){
     $('#create-task-button').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html#HandW');
});

// Populates modal name
$("#tasks-table .action").click( function(){
     var taskName = $(this).closest('tr').find('a.task').text();
     $('.action-task-name').text(taskName);     
});
