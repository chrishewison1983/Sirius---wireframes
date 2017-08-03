// =================================== Create Task - JAVASCRIPT =================================== //
$('.create-task #cta-footer').hide();

$("#assign-to-user").click( function(){
     $('.answer-task-user').css({"display": "inline-block"});
     $('.answer-task-team').hide();
});

$("#assign-to-team").click( function(){
     $('.answer-task-team').css({"display": "inline-block"});
     $('.answer-task-user').hide();
});

$("#datepicker").click( function(){
     $('#cta-footer').show();
});
