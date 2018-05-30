
// =================================== Reporting period - JAVASCRIPT =================================== //
// $('.reporting-period-journey #cta-footer').hide();

// Abandon report
$(".report-abandoned-notes").on("click", function (e) {
     $('#abandon-report-button').removeClass('de-activate');
     $('#abandon-report-button').attr('href', '#abandon-report');
     $('#abandon-report-button').attr('rel', 'modal:open');
});

$('.edit-content-report-period').hide();

$("#edit-reporting-period, #edit-report-due-date, #edit-level-102").click( function(e){
     e.preventDefault();
     $('.form-group').removeClass('read-only');
     $('input[type="text"]').removeAttr('readonly');
     $('#report-level-gen').removeAttr('disabled');
     $('.edit-due-date').addClass('read-only');
     $('.edit-due-date input[type="text"]').attr('readonly');
     $(this).hide();
});

// Form validation
// Page 1 - reporting period
$('.edit-content-due-date').hide();

$("#edit-reporting-period").click( function(e){
     e.preventDefault();
     $(this).hide();
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
$('.report-due-date-notes').hide();

$("#edit-report-due-date").click( function(e){
     e.preventDefault();
     $(this).hide();
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
$('.general-report-level').hide();

$("#edit-level-102").click( function(e){
     e.preventDefault();
     $(this).hide();
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

// Page 4 - create report
$(".report-value-notes").click(function () {
     $('#lodge-report-button').removeClass('de-activate').attr('rel', 'modal:open').attr('href', '#lodge-report');
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

// Lodge report page
// $(".report-lodged-notes").click( function(e){
//      e.preventDefault();
//      $('#lodge-report-button').removeClass('de-activate');
//      $('#lodge-report-button').attr('href', '#lodge');
//      $('#lodge-report-button').attr('rel', 'modal:open');
// });

// Show hide the different versions of the report period
$('.alpha-reports-V2, .beta-reports').hide();

$('input[name="report-type"]').click(function() {
     if ($(this).val() == 'Alpha V1') {
          $('.alpha-reports-V1').show();
          $('.alpha-reports-V2, .beta-reports').hide();
     } else if ($(this).val() == 'Alpha V2') {
          $('.alpha-reports-V2').show();
          $('.alpha-reports-V1, .beta-reports').hide();
     } else if ($(this).val() == 'Beta') {
          $('.beta-reports').show();
          $('.alpha-reports-V1, .alpha-reports-V2').hide();
     }
});

// Controls the report links
$('.report-content-link').click( function(e){
     e.preventDefault();
     var linkNumber = $(this).data('link');

     var items = $(this).siblings('.report-content-link');
     items.each(function() {
          $(this).text($(this).data('closed-text')).removeClass('close');
     });

     $(this).text($(this).text() == $(this).data('closed-text') ? $(this).data('open-text') : $(this).data('closed-text')).toggleClass('close');

     $(this).parent().siblings(`.report-content-section`).removeClass('open');

     if ($(this).hasClass('close')) {
          $(this).parent().siblings(`.report-content-section[data-link="${linkNumber}"]`).toggleClass('open');
     }
});

$('.pending-report').click( function(e){
     $(this).closest('li').find('.report-info').toggleClass('show');
});
