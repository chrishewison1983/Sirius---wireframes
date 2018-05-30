// =================================== Create Deputy - JAVASCRIPT =================================== //

////////////////////////////////////// SEARCH - START //////////////////////////////////////
// Add deputy
$(document).ready(function(){
     $('#deputy-added').hide();

     $('#add-another-deputy').click(function(){
     	$('#deputy-added').slideDown('slow');
     });
});

// Exisiting deputies
$('#exisiting-deputies').hide();

$(document).ready(function(){
     // $('#deputy-name').keypress(function(){
     // 	$('#add-new-deputy').removeClass('de-activate');
     //      // $('#exisiting-deputies').slideDown('slow');
     // });
     // $("#deputy-first-name").keyup(function(event) {
     //      var stt = $(this).val();
     //      $(".deputy-first-name-answer").text(stt);
     // });
     $("#deputy-name").keyup(function(event) {
          var stt = $(this).val();
          $(".deputy-name-answer").text(stt);
     });

     $("#deputy-name-search").click( function(e){
          e.preventDefault();
          $('#exisiting-deputies').slideDown('slow');
          $('#add-new-deputy').removeClass('de-activate');
          $('#add-new-deputy').attr('href', '5b-deputy-details.html');
     });

});

$(document).keypress(function(e) {
     if(e.which == 13) {
          e.preventDefault();
          $('#exisiting-deputies').slideDown('slow');
          $('#add-new-deputy').removeClass('de-activate');
          $('#add-new-deputy').attr('href', '5b-deputy-details.html');
     }
});

////////////////////////////////////// SEARCH - START //////////////////////////////////////

////////////////////////////////////// STEP - 1 - START //////////////////////////////////////
$('.form-items-hidden').hide();

$("#deputy-type").change(function () {
     $('.form-items-hidden').show();
});

// Title - other
$('.deputy-title-other-answer').hide();

$("#deputy-title").change(function () {
     if ($(this).val() == 'Other') {
          $('.deputy-title-other-answer').slideDown();
     } else {
          $('.deputy-title-other-answer').slideUp();
     }
});

// Error message
$('.too-young').hide();
$('.too-old').hide();
$("#add-deputy-error-2000, #add-deputy-error-1879").hide();

// function refreshPage(){
//     window.location.reload();
// }

$("#deputy-dob-year").on('input', function(event){
     if ($(this).val() == '2000') {
          $('#add-deputy-step-1, #add-deputy-error-1879, #add-deputy-error-1879').hide();
          $("#add-deputy-error-2000").show();
     } else if ($(this).val() == '1879') {
          $('#add-deputy-step-1, #add-deputy-error-2000, #add-deputy-error-2000').hide();
          $("#add-deputy-error-1879").show();
     } else {
          $("#add-deputy-step-1").show();
          $("#add-deputy-error-2000, #add-deputy-error-1879").hide();
     }
});

// DOB - error 2000 details
$("#add-deputy-error-2000").click( function(){
     // Show's the error message
     $('#error-message').show();

     // Add anchor links to the selected groups
     $('#dob-error').addClass('error-field');

     // Error relavent text
     $('li.too-young').css('display', 'list-item');
     $('span.too-young').css('display', 'inline-block');
     $('.too-old').hide();
     $('.help-text').hide();

});

// DOB - error 1879 details
$("#add-deputy-error-1879").click( function(){
     // Show's the error message
     $('#error-message').show();

     // Add anchor links to the selected groups
     $('#dob-error').addClass('error-field');

     // Error relavent text
     $('li.too-old').css('display', 'list-item');
     $('span.too-old').css('display', 'inline-block');
     $('.too-young').hide();
     $('.help-text').hide();

});

// Country functionality
$('.deputy-outside-uk, .deputy-airmail-required').hide();

$("#deputy-country").change(function () {
     if ($(this).val() == 'Outside') {
          $('.deputy-outside-uk, .deputy-airmail-required').slideDown();
     } else {
          $('.deputy-outside-uk, .deputy-airmail-required').slideUp();
     }
});

// Page validation
$('#add-deputy-step-1').addClass('de-activate').removeAttr('href');

$("#deputy-last-name, #deputy-organisation-name").keyup(function() {
     if (!this.value) {
          $('#add-deputy-step-1').addClass('de-activate');
          $('#add-deputy-step-1').removeAttr('href');
     } else {
          $('#add-deputy-step-1').removeClass('de-activate');
          $('#add-deputy-step-1').attr('href' ,'5c-additional-info.html');
     }
});

// Changes depending on the type of deputy
$("#deputy-type").change(function () {
     if ($(this).val() == 'Lay') {
          // Hides company info panel
          $('.form-deputy-company-info').slideUp();

          // Changes manditory fields
          $('.form-deputy-first-name .required, .form-deputy-last-name .required').show();

          // Show fields
          $('.form-deputy-title, .form-deputy-first-name, .form-deputy-middle-name, .form-deputy-last-name, .form-deputy-dob').show();

          // Changes the order of the deputy details
          $('.interchangeable-values').addClass('lay');
          $('.interchangeable-values').removeClass('professional, public');

     } else if ($(this).val() == 'Professional') {
          // Shows company info panel
          $('.form-deputy-company-info').slideDown();

          // Changes the state of the organisation question
          $('#deputy-organisation-yes').parent().parent().removeClass('read-only');
          $('#deputy-organisation-yes').parent().addClass('checked').attr('checked', 'checked');
          $('#deputy-organisation-yes').removeAttr('disabled');
          $('#deputy-organisation-no').removeAttr('disabled');

          // Changes manditory fields
          $('.form-deputy-first-name .required, .form-deputy-last-name .required').hide();

          // Show fields
          $('.form-deputy-title, .form-deputy-first-name, .form-deputy-middle-name, .form-deputy-last-name, .form-deputy-dob').show();

          // Changes the order of the deputy details
          $('.interchangeable-values').addClass('professional');
          $('.interchangeable-values').removeClass('lay, public');

     } else if ($(this).val() == 'Public authority') {
          // Shows company info panel
          $('.form-deputy-company-info').slideDown();

          // Changes the state of the organisation question
          $('#deputy-organisation-yes').parent().parent().addClass('read-only');
          $('#deputy-organisation-yes').parent().addClass('checked').attr('checked', 'checked');
          $('#deputy-organisation-yes').attr('disabled', 'disabled');
          $('#deputy-organisation-no').attr('disabled', 'disabled');
          $('#deputy-organisation-no').parent().parent().addClass('read-only');
          $('#deputy-organisation-no').parent().removeClass('checked').removeAttr('checked');

          // Changes manditory fields
          $('.form-deputy-correspondence-name .required').show();
          $('.form-deputy-organisation-name .required').show();
          $('.form-deputy-company-ref .required').hide();

          // Hide fields
          $('.form-deputy-title, .form-deputy-first-name, .form-deputy-middle-name, .form-deputy-last-name, .form-deputy-dob').hide();

          // Changes the order of the deputy details
          $('.interchangeable-values').addClass('public');
          $('.interchangeable-values').removeClass('lay, professional');

     } else {
          $('.form-deputy-company-info').slideUp();
     }
});

// Changes manditory fields
$("#deputy-organisation-yes").click( function(){
     if($(this).is(':checked')) {
          // Deputy details
          $('.form-deputy-first-name .required').hide();
          $('.form-deputy-last-name .required').hide();
          $('.form-deputy-company-ref .required').hide();

          // Company details
          $('.form-deputy-correspondence-name .required').show();
          $('.form-deputy-organisation-name .required').show();
          $('.form-deputy-company-ref .required').hide();
     }
});

$("#deputy-organisation-no").click( function(){
     if($(this).is(':checked')) {
          // Deputy details
          $('.form-deputy-first-name .required').show();
          $('.form-deputy-last-name .required').show();
          $('.form-deputy-company-ref .required').show();

          // Company details
          $('.form-deputy-correspondence-name .required').hide();
          $('.form-deputy-organisation-name .required').hide();
          $('.form-deputy-company-ref .required').hide();
     }
});
////////////////////////////////////// STEP - 1 - END //////////////////////////////////////

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

////////////////////////////////////// STEP - 2 - START //////////////////////////////////////
$("#deputy-interpreter-yes").click( function(){
     if($(this).is(':checked')) { $('.interpreter-details').slideDown(); }
});
$("#deputy-interpreter-no").click( function(){
     if($(this).is(':checked')) { $('.interpreter-details').slideUp(); }
});
////////////////////////////////////// STEP - 2 - END //////////////////////////////////////

////////////////////////////////////// STEP - 3 - START //////////////////////////////////////
// Type of deputy
$(document).ready(function () {
     $("#deputy-type-order").change(function () {
          var val = $(this).val();
          $("#deputy-relationship").parent().removeClass('read-only');
          $("#deputy-relationship").removeAttr('disabled');
          if (val == "Lay") {
               $("#deputy-relationship").html(`
                    <option value=''>-- Select --</option>
                    <option value='Sibling'>Sibling</option>
                    <option value='Spouse'>Spouse</option>
                    <option value='Common law partner'>Common law partner</option>
                    <option value='Partner (not common law)'>Partner (not common law)</option>
                    <option value='Client's child'>Client's child</option>
                    <option value='Client's parent'>Client's parent</option>
                    <option value='Friend'>Friend</option>
                    <option value='Other relation'>Other relation</option>
               `);
               $("#deputy-relationship").siblings().html('Relationship to the client: <strong>Lay options</strong>');
               $(".other-relation, .other-professional").slideUp();
          } else if (val == "Professional") {
               $("#deputy-relationship").html(`
                    <option value=''>-- Select --</option>
                    <option value='Panel deputy'>Panel deputy</option>
                    <option value='Bank official'>Bank official</option>
                    <option value='Solicitor'>Solicitor</option>
                    <option value='Accountant'>Accountant</option>
                    <option value='Unregulated pro deputy'>Unregulated pro deputy</option>
                    <option value='Legal Professional'>Legal Professional</option>
                    <option value='Trust companies (not NHS/PCT)'>Trust companies (not NHS/PCT)</option>
                    <option value='Other professional'>Other professional</option>
               `);
               $("#deputy-relationship").siblings().html('Relationship to the client: <strong>Professional options</strong>');
               $(".other-relation, .other-professional").slideUp();
          } else if (val == "Public authority") {
               $("#deputy-relationship").html(`
                    <option value='Local Authority'>Local authority</option>
                    <option value='NHS Trust'>NHS trust</option>
                    <option value='PCT'>PCT</option>
               `);
               $("#deputy-relationship").siblings().html('Relationship to the client: <strong>Public authority options</strong>');
               $(".other-relation, .other-professional").slideUp();
          }
     });
     $("#deputy-relationship").change(function () {
          var val = $(this).val();
          if (val == "Other relation") {
               $(".other-relation").slideDown();
               $(".other-professional").slideUp();
          } else if (val == "Other professional") {
               $(".other-relation").slideUp();
               $(".other-professional").slideDown();
          } else {
               $(".other-relation, .other-professional").slideUp();
          }
     });
});

// Violent risk
$('.violent-answer').hide();

$("#deputy-violent-risk").click( function(){
     if($(this).is(':checked')) { $('.violent-answer').slideDown(); }
     else { $('.violent-answer').slideUp(); }
});

// Make deputy fee payer
$('#add-deputy-modal').hide();

$("#make-deputy-fee-payer").click( function(){

     $('#add-deputy-modal').hide();
     $('#add-deputy-step-3').show();

     // // Removes the attribute for the fee payer tick box
     // $('.fee-payer').removeAttr('href');
     // $('.fee-payer').removeAttr('rel');
     //
     // // Pre ticks the fee payer
     // $('#deputy-fee-payer').parent().addClass('checked');
     // $('#deputy-fee-payer').attr('checked', 'checked');
     //
     // // Pre ticks the main correspodence
     // $('#deputy-main-correspondent').parent().addClass('checked');
     // $('#deputy-main-correspondent').attr('checked', 'checked');
     //
     // // Disables the main correspodence
     // $('#deputy-main-correspondent').parent().parent().addClass('read-only');
     // $('#deputy-main-correspondent').attr("disabled", true);

 });

// Changes the state of the main correspodence
$('#deputy-fee-payer').change(function(){
     if($(this).is(":checked")) {
          // Hides the main CTA
          $('#add-deputy-modal').show();
          $('#add-deputy-step-3').hide();

          // Makes main correspodence Checked
          $('#deputy-main-correspondent').parent().addClass('checked');
          $('#deputy-main-correspondent').attr("checked", 'checked');

          // Makes main correspodence Disabled
          $('#deputy-main-correspondent').parent().parent().addClass('read-only');
          $('#deputy-main-correspondent').attr("disabled", true);
     } else {
          // Shows the main CTA
          $('#add-deputy-modal').hide();
          $('#add-deputy-step-3').show();

          // Makes main correspodence Disabled
          $('#deputy-main-correspondent').parent().removeClass('checked');
          $('#deputy-main-correspondent').removeAttr("checked");

          // Allows main correspodence to be active
          $('#deputy-main-correspondent').parent().parent().removeClass('read-only');
          $('#deputy-main-correspondent').removeAttr("disabled");
     }
});
////////////////////////////////////// STEP - 3 - END //////////////////////////////////////
