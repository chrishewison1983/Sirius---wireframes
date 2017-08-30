// =================================== Reporting period - JAVASCRIPT =================================== //
// $('.reporting-period-journey #cta-footer').hide();

$('.edit-report-period').hide();

$('#reporting-period-button').hide();

$("#edit-reporting-period").click( function(e){
     e.preventDefault();
     $('.form-group').removeClass('read-only');
     $('input[type="text"]').removeAttr('readonly');
     $('.edit-report-period').slideDown();
     $(this).hide();
     $('#reporting-period-button').show();
     $('#report-level-min, #report-level-gen').removeAttr('disabled');
});

$('#report-why').change(function(){
     $('#reporting-period-button').removeClass('de-activate');
     $('#reporting-period-button').attr('href', '#edit-report');
     $('#reporting-period-button').attr('rel', 'modal:open');
});

// General report level items shown
$('.general-report-level').hide();

$('#report-level-gen').change(function(){
     if($(this).is(":checked")) {
          $('.general-report-level').slideDown();
     } else {
          $('.general-report-level').slideUp();
     }
});
