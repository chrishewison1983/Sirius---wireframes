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
          $(".deputy-first-name-answer").text(stt);
     });
     $("#deputy-last-name").keyup(function(event) {
          var stt = $(this).val();
          $(".deputy-last-name-answer").text(stt);
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
                    <option value='Sibling'>Sibling</option>
                    <option value='Spouse'>Spouse</option>
                    <option value='Child of Patient'>Child of Patient</option>
                    <option value='Parent of Patient'>Parent of Patient</option>
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
$("#add-deputy-error-2000, #add-deputy-error-1880").hide();

// function refreshPage(){
//     window.location.reload();
// }

$("#deputy-dob").on('input', function(event){
     if ($(this).val() == '25/12/2000') {
          $('#add-deputy-step-1, #add-deputy-error-1880, #add-deputy-error-1880').hide();
          $("#add-deputy-error-2000").show();
     } else if ($(this).val() == '25/12/1880') {
          $('#add-deputy-step-1, #add-deputy-error-2000, #add-deputy-error-2000').hide();
          $("#add-deputy-error-1880").show();
     } else {
          $("#add-deputy-step-1").show();
          $("#add-deputy-error-2000, #add-deputy-error-1880").hide();
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

});

// DOB - error 1880 details
$("#add-deputy-error-1880").click( function(){
     // Show's the error message
     $('#error-message').show();

     // Add anchor links to the selected groups
     $('#dob-error').addClass('error-field');

     // Error relavent text
     $('li.too-old').css('display', 'list-item');
     $('span.too-old').css('display', 'inline-block');
     $('.too-young').hide();

});

// Page validation
$("#deputy-first-name").keyup(function() {
     if (!this.value) {
          $('#add-deputy-step-1').addClass('de-activate');
          $('#add-deputy-step-1').removeAttr('href');
     } else {
          $('#add-deputy-step-1').removeClass('de-activate');
          $('#add-deputy-step-1').attr('href' ,'5c-case-details.html');
     }
});

$("#deputy-last-name").keyup(function() {
     if (!this.value) {
          $('#add-deputy-step-1').addClass('de-activate');
          $('#add-deputy-step-1').removeAttr('href');
     } else {
          $('#add-deputy-step-1').removeClass('de-activate');
          $('#add-deputy-step-1').attr('href' ,'5c-case-details.html');
     }
});


// Violent risk
$('.violent-answer').hide();

$("#deputy-violent-risk").click( function(){
     if($(this).is(':checked')) { $('.violent-answer').slideDown(); }
     else { $('.violent-answer').slideUp(); }
});
