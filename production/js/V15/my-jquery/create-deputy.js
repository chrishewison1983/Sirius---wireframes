// =================================== Create Deputy - JAVASCRIPT =================================== //
// Add deputy
$(document).ready(function(){
     $('#deputy-added').hide();

     $('#add-another-deputy').click(function(){
     	$('#deputy-added').slideDown('slow');
     });
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

// Type of deputy
$(document).ready(function () {
     $("#deputy-type").change(function () {
          var val = $(this).val();
          $("#deputy-relationship").parent().removeClass('read-only');
          $("#deputy-relationship").removeAttr('disabled');
          if (val == "Lay") {
               $("#deputy-relationship").html(`
                    <option value=''>-- Select --</option>
                    <option value='Child of client'>Child of client</option>
                    <option value='Sibling'>Sibling</option>
                    <option value='Spouse'>Spouse</option>
                    <option value='Parent of client'>Parent of client</option>
                    <option value='Civil Partner'>Civil Partner</option>
                    <option value='Friend'>Friend</option>
                    <option value='Partner (Not Civil Partner)'>Partner (Not Civil Partner)</option>
                    <option value='Other Relation'>Other Relation</option>
               `);
               $("#deputy-relationship").siblings().html('Relationship to the client: <strong>Lay options</strong>');
               $(".other-relation, .other-professional").slideUp();
          } else if (val == "Professional") {
               $("#deputy-relationship").html(`
                    <option value=''>-- Select --</option>
                    <option value='Panel Deputy'>Panel Deputy</option>
                    <option value='Bank Official'>Bank Official</option>
                    <option value='Solicitor'>Solicitor</option>
                    <option value='Accountant'>Accountant</option>
                    <option value='Unregulated Pro Deputy'>Unregulated Pro Deputy</option>
                    <option value='Legal Professional'>Legal Professional</option>
                    <option value='Trust Companies (Not NHS/PCT)'>Trust Companies (Not NHS/PCT)</option>
                    <option value='Other Professional'>Other Professional</option>
               `);
               $("#deputy-relationship").siblings().html('Relationship to the client: <strong>Professional options</strong>');
               $(".other-relation, .other-professional").slideUp();
          } else if (val == "Public authority") {
               $("#deputy-relationship").html(`
                    <option value='Local Authority'>Local Authority</option>
                    <option value='NHS Trust'>NHS Trust</option>
                    <option value='PCT'>PCT</option>
               `);
               $("#deputy-relationship").siblings().html('Relationship to the client: <strong>Public authority options</strong>');
               $(".other-relation, .other-professional").slideUp();
          }
     });
     $("#deputy-relationship").change(function () {
          var val = $(this).val();
          if (val == "Other Relation") {
               $(".other-relation").slideDown();
               $(".other-professional").slideUp();
          } else if (val == "Other Professional") {
               $(".other-relation").slideUp();
               $(".other-professional").slideDown();
          } else {
               $(".other-relation, .other-professional").slideUp();
          }
     });
});

$("#deputy-interpreter-yes").click( function(){
     if($(this).is(':checked')) { $('.interpreter-details').slideDown(); }
});
$("#deputy-interpreter-no").click( function(){
     if($(this).is(':checked')) { $('.interpreter-details').slideUp(); }
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

// Page validation
$('#add-deputy-step-1').addClass('de-activate').removeAttr('href');

// $("#deputy-first-name").keyup(function() {
//      if (!this.value) {
//           $('#add-deputy-step-1').addClass('de-activate');
//           $('#add-deputy-step-1').removeAttr('href');
//      } else {
//           $('#add-deputy-step-1').removeClass('de-activate');
//           $('#add-deputy-step-1').attr('href' ,'5d-case-details.html');
//      }
// });
//
$("#deputy-last-name").keyup(function() {
     if (!this.value) {
          $('#add-deputy-step-1').addClass('de-activate');
          $('#add-deputy-step-1').removeAttr('href');
     } else {
          $('#add-deputy-step-1').removeClass('de-activate');
          $('#add-deputy-step-1').attr('href' ,'5c-additional-info.html');
     }
});


// Violent risk
$('.violent-answer').hide();

$("#deputy-violent-risk").click( function(){
     if($(this).is(':checked')) { $('.violent-answer').slideDown(); }
     else { $('.violent-answer').slideUp(); }
});

// Edit deputy
// Show's the values for Lara Stevens (Deputy 1)
if (window.location.href.indexOf("edit-deputy-1") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('.breadcrumb .page-title').text('Edit deputy');
     $('.deputy-first-name-answer').text('Lara');
     $('#action-panel .section-title').html("Edit <div class=\"deputy-first-name-answer\">Lara</div>'s details");

     // Changes the footer content
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '#');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('onclick', 'history.back();');
     $('#add-another-deputy').hide();

     // Form content - 1 - Personal details
     $('#deputy-title').val('Mrs');
     $('#deputy-first-name').val('Lara');
     $('#deputy-last-name').val('Stevens');
     $('#deputy-dob-day').val('17');
     $('#deputy-dob-month').val('07');
     $('#deputy-dob-year').val('1981');
     $('#deputy-address-line-1').val('34 Broomfield Place');
     $('#deputy-address-town').val('Stokesley');
     $('#deputy-manual-postcode').val('TS9 8TU');
     $('#deputy-country').val('England');
     $('#deputy-phone-number').val('07079962666');
     $('#deputy-mob-number').val('07079962666');
     $('#deputy-email').val('lara.stevens@jourrapide.com');

     // Form content - 2 - Additional info
     $('#deputy-digital-no').parent().addClass('checked');
     $('#deputy-digital-no').attr('checked', 'checked');
     $('#deputy-occupation').val('University professor');
     $('#deputy-correspondence-email').parent().addClass('checked');
     $('#deputy-correspondence-email').attr('checked', 'checked');
     $('#deputy-special-spelling').parent().addClass('checked');
     $('#deputy-special-spelling').attr('checked', 'checked');
     $('#deputy-interpreter-no').parent().addClass('checked');
     $('#deputy-interpreter-no').attr('checked', 'checked');
     $('#deputy-newsletter-no').parent().addClass('checked');
     $('#deputy-newsletter-no').attr('checked', 'checked');

     // Form content - 3 - Case details
     $('#deputy-type').val('Lay');
     $('#deputy-relationship').val('Sibling');
     $('#deputy-relationship').parent().removeClass('read-only');
     $('#deputy-relationship').removeAttr('disabled');
     $('#deputy-relationship').siblings().html('Relationship to the client: <strong>Lay options</strong>');
     $('#deputy-relationship').html(`
          <option value=''>-- Select --</option>
          <option value='Child of client'>Child of client</option>
          <option value='Sibling' selected>Sibling</option>
          <option value='Spouse'>Spouse</option>
          <option value='Parent of client'>Parent of client</option>
          <option value='Civil Partner'>Civil Partner</option>
          <option value='Friend'>Friend</option>
          <option value='Partner (Not Civil Partner)'>Partner (Not Civil Partner)</option>
          <option value='Other Relation'>Other Relation</option>
     `);
     $('#deputy-status').val('Active');
     $('#deputy-fee-payer').parent().addClass('checked');
     $('#deputy-fee-payer').attr('checked', 'checked');
     $('#deputy-main-correspondent').parent().addClass('checked');
     $('#deputy-main-correspondent').attr('checked', 'checked');
     $('#deputy-main-correspondent').parent().parent().addClass('read-only');
     $('#deputy-main-correspondent').attr("disabled", true);
}

// Show's the values for Lara Stevens (Deputy 1)
if (window.location.href.indexOf("edit-deputy-2") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('.breadcrumb .page-title').text('Edit deputy');
     $('.deputy-first-name-answer').text('Carla');
     $('#action-panel .section-title').html("Edit <div class=\"deputy-first-name-answer\">Carla</div>'s details");

     // Changes the footer content
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '#');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('onclick', 'history.back();');
     $('#add-another-deputy').hide();

     // Form content - 1 - Personal details
     $('#deputy-title').val('Mrs');
     $('#deputy-first-name').val('Carla');
     $('#deputy-last-name').val('Frith');
     $('#deputy-dob-day').val('25');
     $('#deputy-dob-month').val('06');
     $('#deputy-dob-year').val('1983');
     $('#deputy-address-line-1').val('35 Broad Street');
     $('#deputy-address-town').val('Lower Welson');
     $('#deputy-manual-postcode').val('HR3 1UD');
     $('#deputy-country').val('England');
     $('#deputy-phone-number').val('07772881687');
     $('#deputy-mob-number').val('07772881687');
     $('#deputy-email').val('carla.frith@jourrapide.com');

     // Form content - 2 - Additional info
     $('#deputy-digital-yes').parent().addClass('checked');
     $('#deputy-digital-yes').attr('checked', 'checked');
     $('#deputy-occupation').val('Mental health assistant');
     $('#deputy-correspondence-phone').parent().addClass('checked');
     $('#deputy-correspondence-phone').attr('checked', 'checked');
     $('#deputy-correspondence-email').parent().addClass('checked');
     $('#deputy-correspondence-email').attr('checked', 'checked');
     $('#deputy-interpreter-no').parent().addClass('checked');
     $('#deputy-interpreter-no').attr('checked', 'checked');
     $('#deputy-newsletter-no').parent().addClass('checked');
     $('#deputy-newsletter-no').attr('checked', 'checked');

     // Form content - 3 - Case details
     $('#deputy-type').val('Lay');
     $('#deputy-relationship').val('Sibling');
     $('#deputy-relationship').parent().removeClass('read-only');
     $('#deputy-relationship').removeAttr('disabled');
     $('#deputy-relationship').siblings().html('Relationship to the client: <strong>Lay options</strong>');
     $('#deputy-relationship').html(`
          <option value=''>-- Select --</option>
          <option value='Child of client'>Child of client</option>
          <option value='Sibling' selected>Sibling</option>
          <option value='Spouse'>Spouse</option>
          <option value='Parent of client'>Parent of client</option>
          <option value='Civil Partner'>Civil Partner</option>
          <option value='Friend'>Friend</option>
          <option value='Partner (Not Civil Partner)'>Partner (Not Civil Partner)</option>
          <option value='Other Relation'>Other Relation</option>
     `);
     $('#deputy-status').val('Active');
     $('#deputy-violent-risk').parent().addClass('checked');
     $('#deputy-violent-risk').attr('checked', 'checked');

}

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
