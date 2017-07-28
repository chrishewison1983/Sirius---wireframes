// =================================== Create Deputy - JAVASCRIPT =================================== //
// Add deputy
$(document).ready(function(){
     $('#deputy-added').hide();

     $('#add-another-deputy').click(function(){
     	$('#deputy-added').slideDown('slow');
     });
});

// Add edit deputies
// $('.remove-deputy').click(function(){
//      $('h2.case-number').append($(this).parent().parent().find('h2').text());
// });
//
$('#confirm-remove-1').click(function(){
     $('.case-item[data-case-id="1"]').hide('slow', function(){ $(this).remove(); });
});
$('#confirm-remove-2').click(function(){
     $('.case-item[data-case-id="2"]').hide('slow', function(){ $(this).remove(); });
});
$('#confirm-remove-3').click(function(){
     $('.case-item[data-case-id="3"]').hide('slow', function(){ $(this).remove(); });
});
$('#confirm-remove-4').click(function(){
     $('.case-item[data-case-id="4"]').hide('slow', function(){ $(this).remove(); });
});

// $('#edit-deputy').click(function(){
//      $("#edit-title, .edit-deputy-form").show('slow');
//      $("#check-details-title").hide('slow');
// });


// Exisiting deputies
$('#exisiting-deputies').hide();

$(document).ready(function(){
     $('#deputy-last-name').keypress(function(){
     	$('#add-new-deputy').removeClass('de-activate');
          $('#exisiting-deputies').slideDown('slow');
     });
     $("#deputy-first-name").keyup(function(event) {
          var stt = $(this).val();
          $(".deputy-first-name").text(stt);
     });
     $("#deputy-last-name").keyup(function(event) {
          var stt = $(this).val();
          $(".deputy-last-name").text(stt);
     });
});


// Error message
$('.too-young').hide();
$('.too-old').hide();

$("#deputy-dob").keyup(function(event){
     if ($("#deputy-dob").val() == '25/12/2000') {
          $('#add-deputy, #add-another-deputy').removeAttr('href').addClass('de-activate');
          $('#error-message').show();
          $('#dob-error').addClass('error-field');
          $('.too-young').show();
          $('.too-old').hide();
     } else if ($("#deputy-dob").val() == '25/12/1880') {
          $('#error-message').show();
          $('#dob-error').addClass('error-field');
          $('.too-young').hide();
          $('.too-old').show();
          $('#add-deputy, #add-another-deputy').removeAttr('href').addClass('de-activate');
     } else {
          $('#error-message').hide();
          $('#dob-error').removeClass('error-field');
          $('#add-deputy, #add-another-deputy').removeClass('de-activate');
          $('#add-deputy').attr('href', '../4-client-page/4a-new-client.html');
          $('#add-another-deputy').attr('href' ,'#');
     }
});

$('#deputy-first-name, #deputy-last-name').on('change textInput input', function () {
     if ($(this).val() == '' || $(this).val() == null ) {
          $('#add-deputy, #add-another-deputy').removeAttr('href').addClass('de-activate');
     } else {
          $('#add-deputy, #add-another-deputy').removeClass('de-activate');
          $('#add-deputy').attr('href', '../4-client-page/4a-new-client.html');
          $('#add-another-deputy').attr('href' ,'#');
     }
});

// $("#deputy-first-name").keypress(function(event){
//      if ($(this).val() == '' || $(this).val() == null ) {
//           $('#add-deputy, #add-another-deputy').removeAttr('href').addClass('de-activate');
//      } else {
//           $('#add-deputy, #add-another-deputy').removeClass('de-activate');
//           $('#add-deputy').attr('href', '../4-client-page/4a-new-client.html');
//           $('#add-another-deputy').attr('href' ,'#');
//      }
// });
