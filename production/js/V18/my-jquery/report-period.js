// =================================== Reporting period - JAVASCRIPT =================================== //
// $('.reporting-period-journey #cta-footer').hide();

// Abandon report
$("#confirm-abandon-report").on("click", function (e) {
     // Hides the cta
     $(".abandon-report").hide();

     // Changes the row items
     $('#reports-table tr[data-row="lodged-row"]').addClass('abandoned-report').removeClass('active-report');
     $('#reports-table tr[data-row="lodged-row"] td.first-column').html('<strong>Abandoned</strong>');
     $('#reports-table tr[data-row="lodged-row"] td .details a').removeClass('close');
     $('#reports-table tr[data-row="lodged-row"] td .description').removeClass('open-description');
});


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

// Populates the MODAL
$('#reporting-period-button').click( function(e){
     // Populates start date
     var reportStartDay = $('#report-start-day').val();
     var reportStartMonth = $('#report-start-month').val();
     var reportStartYear = $('#report-start-year').val();

     $('#edit-report-period h2 .report-start-date').html(reportStartDay + '/' + reportStartMonth + '/' + reportStartYear);

     // Populates end date
     var reportEndDay = $('#report-end-day').val();
     var reportEndMonth = $('#report-end-month').val();
     var reportEndYear = $('#report-end-year').val();

     $('#edit-report-period h2 .report-end-date').html(reportEndDay + '/' + reportEndMonth + '/' + reportEndYear);
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

// Populates the MODAL
$('#due-date-button').click( function(e){
     var reportDueDate = $('#datepicker').val();

     $('#edit-report-date h2 .report-due-date').html(reportDueDate);
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

// Populates the MODAL
// $('#level-102-button').click( function(e){
//      var reportDueDate = $('#datepicker').val();
//
//      $('#edit-report-date h2 .report-due-date').html(reportDueDate);
// });


// Page 4 - create report
// $("#report-value-care-expenses").keyup(function () {
//      $('#create-report-step-4-button').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html');
// });
$(".report-value-notes").click(function () {
     // $('#create-report-step-4-button').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html');
     $('#create-report-step-4-button').removeClass('de-activate').attr('rel', 'modal:open').attr('href', '#lodge');
});

// Populates modal
$(".pfa-link").click( function(){
     // Populates the dates
     var startDate = $(this).closest('li').find('.start-date-answer').text();
     var endDate = $(this).closest('li').find('.end-date-answer').text();

     $('#view-report .start-date-answer').text(startDate);
     $('#view-report .end-date-answer').text(endDate);

     // Changes the icon & title
     var reportTitle = $(this).text();

     // $('#view-report h1').html('<span class="icon pdf pfa"></span>' + reportTitle);
     $('#view-report h1').html('<span class="icon pdf"></span>' + reportTitle);
});

$(".hw-link").click( function(){

     // Populates the dates
     var startDate = $(this).closest('li').find('.start-date-answer').text();
     var endDate = $(this).closest('li').find('.end-date-answer').text();

     $('#view-report .start-date-answer').text(startDate);
     $('#view-report .end-date-answer').text(endDate);

     // Changes the icon & title
     var reportTitle = $(this).text();

     // $('#view-report h1').html('<span class="icon pdf handw"></span>' + reportTitle);
     $('#view-report h1').html('<span class="icon pdf handw"></span>' + reportTitle);

});


// $(".test-cta").click( function(e){
//      e.preventDefault();
//      alert('working');
// });
