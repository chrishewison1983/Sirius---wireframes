// =================================== Reporting period - JAVASCRIPT =================================== //
// $('.reporting-period-journey #cta-footer').hide();

$('.edit-content-report-period').hide();

$('#reporting-period-button').hide();

$("#edit-reporting-period, #edit-report-due-date, #edit-level-102").click( function(e){
     e.preventDefault();
     $('.form-group').removeClass('read-only');
     $('input[type="text"]').removeAttr('readonly');
     $('#report-level-gen').removeAttr('disabled');
     $('.edit-due-date').addClass('read-only');
     $('.edit-due-date input[type="text"]').attr('readonly');
     // $('.edit-report-period').slideDown();
     $(this).hide();
     // $('#reporting-period-button').show();
     // $('#report-level-min, #report-level-gen').removeAttr('disabled');
     // $('#reporting-end-date-button').hide();
});

// Form validation
// Page 1 - reporting period
$('.edit-content-due-date').hide();
$('#reporting-period-button').hide();

$("#edit-reporting-period").click( function(e){
     e.preventDefault();
     $(this).hide();
     $('#reporting-period-button').show();
     $('.edit-content-report-period').slideDown();
     $('#datepicker').removeAttr('disabled');
});

$(".edit-due-date #datepicker").click( function(e){
     $('.edit-content-due-date').slideDown();
});

$(".report-notes-section").click( function(e){
     e.preventDefault();
     $('#reporting-period-button').removeClass('de-activate');
});

// Changes the due date
$('#report-end-month').on("keyup", function() {
     $('.report-due-day-answer').text('05');
     $('.report-due-month-answer').text('12');
});

// Page 2 - due date
$('#due-date-button').hide();
$('.report-due-date-notes').hide();

$("#edit-report-due-date").click( function(e){
     e.preventDefault();
     $(this).hide();
     $('#due-date-button').show();
     $('.report-due-date-notes').show();
     $('#datepicker').removeAttr('disabled');
});

$(".report-due-date-notes").click( function(e){
     e.preventDefault();
     $('#due-date-button').removeClass('de-activate');
});

// Page 3 - level 102
$('#level-102-button').hide();
$('.general-report-level').hide();

$("#edit-level-102").click( function(e){
     e.preventDefault();
     $(this).hide();
     $('#level-102-button').toggle();
     $('.general-report-level').toggle();

     $('#report-level-gen').parent().addClass('checked');
     $('#report-level-gen').attr('checked', 'checked');
});

$(".report-level-notes").click( function(e){
     e.preventDefault();
     $('#level-102-button').removeClass('de-activate');
});

$('#report-level-gen').change(function(){
     if($(this).is(":checked")) {
          $('#level-102-button').removeClass("de-activate");
     } else {
          $('#level-102-button').addClass("de-activate");
     }
});
