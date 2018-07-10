// =================================== Create deputy - COOKIES =================================== //
// Add deputy populate
$('#new-deputy-details .place-holder-text').show();
$('#new-deputy-details .person-detail-item').hide();

// First page name capture
$("#add-new-deputy").on("click", function (e) {
     $.cookie("deputy-name", $("#deputy-name").val(), {path:'/'});
});

if ($.cookie("deputy-name")) {
     $(".deputy-name-answer").text($.cookie("deputy-name"));
}

$("#add-deputy-step-1, #add-another-deputy, .check-edit").on("click", function (e) {
     $.cookie("deputy-first-name", $("#deputy-first-name").val(), {path:'/'});
     $.cookie("deputy-last-name", $("#deputy-last-name").val(), {path:'/'});
});

// Step 1
$("#add-deputy-step-1").on("click", function (e) {

     $.cookie("create-deputy-step-1", true, {path:'/'});

     // DEPUTY PERSONAL DETAILS
     $.cookie("deputy-type", $("#deputy-type").val(), {path:'/'});
     $.cookie("deputy-organisation", $("input[name=deputy-organisation]:checked").val(), {path:'/'});
     $.cookie("deputy-title", $("#deputy-title").val(), {path:'/'});
     $.cookie("deputy-title-other", $("#deputy-title-other").val(), {path:'/'});
     $.cookie("deputy-first-name", $("#deputy-first-name").val(), {path:'/'});
     $.cookie("deputy-middle-name", $("#deputy-middle-name").val(), {path:'/'});
     $.cookie("deputy-last-name", $("#deputy-last-name").val(), {path:'/'});
     $.cookie("deputy-correspondence-name", $("#deputy-correspondence-name").val(), {path:'/'});
     $.cookie("deputy-organisation-name", $("#deputy-organisation-name").val(), {path:'/'});
     $.cookie("deputy-company-ref", $("#deputy-company-ref").val(), {path:'/'});
     $.cookie("deputy-dob-day", $("#deputy-dob-day").val(), {path:'/'});
     $.cookie("deputy-dob-month", $("#deputy-dob-month").val(), {path:'/'});
     $.cookie("deputy-dob-year", $("#deputy-dob-year").val(), {path:'/'});
     $.cookie("deputy-previous-name", $("#deputy-previous-name").val(), {path:'/'});
     $.cookie("deputy-address-line-1", $("#deputy-address-line-1").val(), {path:'/'});
     $.cookie("deputy-address-line-2", $("#deputy-address-line-2").val(), {path:'/'});
     $.cookie("deputy-address-line-3", $("#deputy-address-line-3").val(), {path:'/'});
     $.cookie("deputy-address-town", $("#deputy-address-town").val(), {path:'/'});
     $.cookie("deputy-address-county", $("#deputy-address-county").val(), {path:'/'});
     $.cookie("deputy-manual-postcode", $("#deputy-manual-postcode").val(), {path:'/'});
     $.cookie("deputy-country", $("#deputy-country").val(), {path:'/'});
     $.cookie("deputy-country-desc", $("#deputy-country-description").val(), {path:'/'});
     $.cookie("deputy-airmail", $("input[name=deputy-airmail]:checked").val(), {path:'/'});
     $.cookie("deputy-phone-number", $("#deputy-phone-number").val(), {path:'/'});
     $.cookie("deputy-mob-number", $("#deputy-mob-number").val(), {path:'/'});
     $.cookie("deputy-email", $("#deputy-email").val(), {path:'/'});
     $.cookie("deputy-financial", $("#deputy-financial").val(), {path:'/'});
     $.cookie("deputy-violent-risk", $("#deputy-violent-risk").is(':checked'), {path:'/'});
     /* textarea */ $.cookie("deputy-violent-answer", $(".violent-answer .jqte_editor").html(), {path:'/'});

});

// Step 2
$("#add-deputy-step-2").on("click", function (e) {

     $.cookie("create-deputy-step-2", true, {path:'/'});
     $.cookie("deputy-created", true, {path:'/'});

     // ADDITIONAL DEPUTY DETAILS
     $.cookie("deputy-digital", $("input[name=deputy-digital]:checked").val(), {path:'/'});
     $.cookie("deputy-occupation", $("#deputy-occupation").val(), {path:'/'});
     $.cookie("deputy-correspondence-post", $("#deputy-correspondence-post:checked").val(), {path:'/'});
     $.cookie("deputy-correspondence-phone", $("#deputy-correspondence-phone:checked").val(), {path:'/'});
     $.cookie("deputy-correspondence-email", $("#deputy-correspondence-email:checked").val(), {path:'/'});
     $.cookie("deputy-correspondence-welsh", $("#deputy-correspondence-welsh:checked").val(), {path:'/'});
     $.cookie("deputy-special-audio", $("#deputy-special-audio:checked").val(), {path:'/'});
     $.cookie("deputy-special-print", $("#deputy-special-print:checked").val(), {path:'/'});
     $.cookie("deputy-special-hearing", $("#deputy-special-hearing:checked").val(), {path:'/'});
     $.cookie("deputy-special-spelling", $("#deputy-special-spelling:checked").val(), {path:'/'});
     $.cookie("deputy-interpreter", $("input[name=deputy-interpreter]:checked").val(), {path:'/'});
     $.cookie("deputy-interpreter-details", $("#deputy-interpreter-details").val(), {path:'/'});
     $.cookie("deputy-newsletter", $("input[name=deputy-newsletter]:checked").val(), {path:'/'});

});

// Step 3
$("#add-deputy-step-3, #add-another-deputy").on("click", function (e) {

     $.cookie("create-deputy-step-3", true, {path:'/'});

     // DEPUTY CASE DETAILS
     $.cookie("deputy-type", $("#deputy-type-order").val(), {path:'/'});
     $.cookie("deputy-relationship", $("#deputy-relationship").val(), {path:'/'});
     $.cookie("deputy-status", $("#deputy-status").val(), {path:'/'});
     $.cookie("deputy-status-date", $("#datepicker").val(), {path:'/'});
     // Other - these are dependent on other values
     $.cookie("deputy-other-relation", $("#deputy-other-relation").val(), {path:'/'});
     $.cookie("deputy-other-professional", $("#deputy-other-professional").val(), {path:'/'});
     $.cookie("deputy-fee-payer", $("#deputy-fee-payer").is(':checked'), {path:'/'});
     $.cookie("deputy-main-correspondent", $("#deputy-main-correspondent").is(':checked'), {path:'/'});

});
// DEPUTY CASE DETAILS
if ($.cookie("deputy-type")) {
     $("#deputy-type-order").val($.cookie("deputy-type"));

     $('#deputy-relationship').parent().removeClass('read-only');
     $('#deputy-relationship').removeAttr('disabled');

     $("#edit-deputy-type").val($.cookie("deputy-type"));
     $(".deputy-type-answer").text($.cookie("deputy-type"));
}

$('.edit-relationship-lay').hide();
$('.edit-relationship-professional').hide();
$('.edit-relationship-public').hide();

// VALUES for: deputy-type - LAY
if ($.cookie("deputy-type") == 'Lay') {
     $('.relationship-lay').show();
     $('.relationship-professional').hide();
     $('.relationship-public').hide();

     $('.edit-relationship-lay').show();
     $('.edit-relationship-professional').hide();
     $('.edit-relationship-public').hide();

     $("#deputy-relationship, #edit-deputy-relationship").html(`
          <option value=''>-- Select --</option>
          <option value='Sibling'>Sibling</option>
          <option value='Spouse'>Spouse</option>
          <option value='Common law partner'>Common law partner</option>
          <option value='Partner (not common law)'>Partner (not common law)</option>
          <option value='Child of client'>Child of client</option>
          <option value='Parent of client'>Parent of client</option>
          <option value='Friend'>Friend</option>
          <option value='Other relation'>Other relation</option>
     `);
     $("#deputy-relationship").siblings().html('Relationship to the client: <strong>Lay options</strong>');

     $("#deputy-relationship").val($.cookie("deputy-relationship"));
     $("#edit-deputy-relationship").val($.cookie("deputy-relationship"));
     $(".deputy-relationship-answer").text($.cookie("deputy-relationship"));

     // Hide the company info
     $('.deputy-company-info').hide();
}
// VALUES for: deputy-type - PROFESSIONAL
if ($.cookie("deputy-type") == 'Professional') {
     $('.relationship-lay').hide();
     $('.relationship-professional').show();
     $('.relationship-public').hide();

     $('.edit-relationship-lay').hide();
     $('.edit-relationship-professional').show();
     $('.edit-relationship-public').hide();

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

     $("#deputy-relationship").val($.cookie("deputy-relationship"));
     $("#edit-deputy-relationship").val($.cookie("deputy-relationship"));
     $(".deputy-relationship-answer").text($.cookie("deputy-relationship"));

     // Show the company info
     $('.deputy-company-info').show();
}
// VALUES for: deputy-type - PUBLIC AUTHORITY
if ($.cookie("deputy-type") == 'Public authority') {
     $('.relationship-lay').hide();
     $('.relationship-professional').hide();
     $('.relationship-public').show();

     // Hides other elements of the form for Step 2
     $('.form-deputy-occupation, .form-deputy-special, .form-deputy-interpreter').hide();
     $('.form-deputy-correspondence .welsh-correspondence').hide();

     $('.edit-relationship-lay').hide();
     $('.edit-relationship-professional').hide();
     $('.edit-relationship-public').show();

     $("#deputy-relationship").html(`
          <option value='Local Authority'>Local authority</option>
          <option value='NHS Trust'>NHS trust</option>
          <option value='PCT'>PCT</option>
     `);
     $("#deputy-relationship").siblings().html('Relationship to the client: <strong>Public authority options</strong>');

     $("#deputy-relationship").val($.cookie("deputy-relationship"));
     $("#edit-deputy-relationship").val($.cookie("deputy-relationship"));
     $(".deputy-relationship-answer").text($.cookie("deputy-relationship"));

     // Show the company info
     $('.deputy-company-info').show();

     // Hide the company info
     $('.non-company-info').hide();

}

if ($.cookie("deputy-relationship")) {
     $(".deputy-relationship-answer").text($.cookie("deputy-relationship"));
}

$('.deputy-other-relation-answer').hide();
$('.deputy-other-professional-answer').hide();

if ($.cookie("deputy-relationship") == 'Other relation') {
     $('.deputy-other-relation-answer').show();
     $('.deputy-other-professional-answer').hide();
     $('.other-relation').show();
     $('.other-professional').hide();
     $('#edit-deputy-other-relation').val();
     $(".deputy-relationship-answer").text($.cookie("deputy-other-relation"));
}
if ($.cookie("deputy-relationship") == 'Other professional') {
     $('.deputy-other-relation-answer').hide();
     $('.deputy-other-professional-answer').show();
     $('.other-relation').hide();
     $('.other-professional').show();
     $('#edit-deputy-other-professional').val($.cookie("deputy-other-professional"));
     $(".deputy-relationship-answer").text($.cookie("deputy-other-relation"));
}

if ($.cookie("deputy-status")) {
     $("#deputy-status").val($.cookie("deputy-status"));
     $("#edit-deputy-status").val($.cookie("deputy-status"));
     $(".deputy-status-answer").text($.cookie("deputy-status"));
}

if ($.cookie("deputy-status") == 'Discharged' || $.cookie("deputy-status") == 'Suspended' || $.cookie("deputy-status") == 'Error') {
     $(".deputy-case-status").hide();
     $(".deputy-case-status-changed").show();
     $('.deputy-status-answer').text($.cookie("deputy-status"));
} else {
     $(".deputy-case-status").show();
     $(".deputy-case-status-changed").hide();
}


if ($.cookie("deputy-fee-payer") == 'true') {
     // Check the fee payer
     $("#deputy-fee-payer").parent().addClass('checked');
     $("#deputy-fee-payer").attr('checked', 'checked');
     $(".deputy-fee-payer-answer").text('Yes');

     // Check main correspondent
     $("#deputy-main-correspondent").parent().addClass('checked');
     $("#deputy-main-correspondent").attr('checked', 'checked');
     $(".deputy-main-correspondent-answer").text('Yes');
} else {
     // Un-check the fee payer
     $("#deputy-fee-payer").parent().removeClass('checked');
     $("#deputy-fee-payer").removeAttr('checked');
     $(".deputy-fee-payer-answer").text('No');

     // Check main correspondent
     $("#deputy-main-correspondent").parent().removeClass('checked');
     $("#deputy-main-correspondent").removeAttr('checked');
     $(".deputy-main-correspondent-answer").text('No');
}

if ($.cookie("deputy-main-correspondent") == 'true') {
     $("#deputy-main-correspondent").parent().addClass('checked');
     $("#deputy-main-correspondent").attr('checked', 'checked');
     $(".deputy-main-correspondent-answer").text('Yes');
} else {
     $("#deputy-main-correspondent").parent().removeClass('checked');
     $("#deputy-main-correspondent").removeAttr('checked');
     $(".deputy-main-correspondent-answer").text('No');
}

// COMPANY DETAILS
if ($.cookie("deputy-organisation") == 'undefined') {
     $('.deputy-organisation-answer').text('Yes');
} else {
     $('.deputy-organisation-answer').text($.cookie("deputy-organisation"));
}
if ($.cookie("deputy-correspondence-name")) { $('.deputy-correspondence-name-answer').text($.cookie("deputy-correspondence-name")); }
if ($.cookie("deputy-organisation-name")) { $('.deputy-organisation-name-answer').text($.cookie("deputy-organisation-name")); }
if ($.cookie("deputy-company-ref")) { $('.deputy-company-ref-answer').text($.cookie("deputy-company-ref")); }

// DEPUTY DETAILS
if ($.cookie("deputy-title") == 'Other') {
     $("#edit-deputy-title").val($.cookie("deputy-title-other"));
     $(".deputy-title-answer").text($.cookie("deputy-title-other"));
} else if ($.cookie("client-title")) {
     $("#edit-deputy-title").val($.cookie("deputy-title-other"));
     $(".deputy-title-answer").text($.cookie("deputy-title-other"));
}
if ($.cookie("deputy-first-name")) {
     $("#edit-deputy-first-name").val($.cookie("deputy-first-name"));
     $("#deputy-first-name").val($.cookie("deputy-first-name"));
     $(".deputy-first-name-answer").text($.cookie("deputy-first-name"));
     $('#new-deputy-details .place-holder-text').hide();
     $('#new-deputy-details .person-detail-item').show();
}
if ($.cookie("deputy-middle-name")) {
     $("#edit-deputy-middle-name").val($.cookie("deputy-middle-name"));
     $(".deputy-middle-name-answer").text($.cookie("deputy-middle-name"));
}
if ($.cookie("deputy-last-name")) {
     $("#edit-deputy-last-name").val($.cookie("deputy-last-name"));
     $("#deputy-last-name").val($.cookie("deputy-last-name"));
     $(".deputy-last-name-answer").text($.cookie("deputy-last-name"));
     $('#new-deputy-details .place-holder-text').hide();
     $('#new-deputy-details .person-detail-item').show();
}

if ($.cookie("deputy-previous-name")) {
     $("#edit-deputy-previous-name").val($.cookie("deputy-previous-name"));
     $(".deputy-previous-name-answer").text($.cookie("deputy-previous-name"));
}
if ($.cookie("deputy-dob-day")) {
     $("#edit-deputy-dob-day").val($.cookie("deputy-dob-day"));
     $(".deputy-dob-day-answer").text($.cookie("deputy-dob-day"));
}
if ($.cookie("deputy-dob-month")) {
     $("#edit-deputy-dob-month").val($.cookie("deputy-dob-month"));
     $(".deputy-dob-month-answer").text($.cookie("deputy-dob-month"));
}
if ($.cookie("deputy-dob-year")) {
     $("#edit-deputy-dob-year").val($.cookie("deputy-dob-year"));
     $(".deputy-dob-year-answer").text($.cookie("deputy-dob-year"));
}

if ($.cookie("deputy-address-line-1")) {
     $("#edit-deputy-address-line-1").val($.cookie("deputy-address-line-1"));
     $(".deputy-address-line-1-answer").text($.cookie("deputy-address-line-1"));
}
if ($.cookie("deputy-address-line-2") == '' || $.cookie("deputy-address-line-2") == null || $.cookie("deputy-address-line-2") == 'undefined') {
     $(".deputy-address-line-2-answer").hide();
} else if ($.cookie("deputy-address-line-2")) {
     $("#edit-deputy-address-line-2").val($.cookie("deputy-address-line-2"));
     $(".deputy-address-line-2-answer").html($.cookie("deputy-address-line-2") + ',<br>');
}
if ($.cookie("deputy-address-line-3") == '' || $.cookie("deputy-address-line-3") == null || $.cookie("deputy-address-line-3") == 'undefined') {
     $(".deputy-address-line-3-answer").hide();
} else if ($.cookie("deputy-address-line-3")) {
     $("#edit-deputy-address-line-3").val($.cookie("deputy-address-line-3"));
     $(".deputy-address-line-3-answer").html($.cookie("deputy-address-line-3") + ',<br>');
}
if ($.cookie("deputy-address-town")) {
     $("#edit-deputy-address-town").val($.cookie("deputy-address-town"));
     $(".deputy-address-town-answer").text($.cookie("deputy-address-town") + ',<br>');
}
if ($.cookie("deputy-address-county")) {
     $("#edit-deputy-address-county").val($.cookie("deputy-address-county"));
     $(".deputy-address-county-answer").text($.cookie("deputy-address-county") + ',<br>');
}

if ($.cookie("deputy-manual-postcode")) {
     $("#edit-deputy-manual-postcode").val($.cookie("deputy-manual-postcode"));
     $(".deputy-manual-postcode-answer").html($.cookie("deputy-manual-postcode") + ',<br>');
}
if ($.cookie("deputy-country")) {
     $("#edit-deputy-country").val($.cookie("deputy-country"));
     $(".deputy-country-answer").html($.cookie("deputy-country") + '.');
     $('.deputy-outside-uk, .deputy-airmail-required, .deputy-airmail-required-answer').hide();
} else if ($.cookie("deputy-country") == 'Outside') {
     $("#edit-deputy-country-desc").val($.cookie("deputy-country"));
     $('.deputy-outside-uk, .deputy-airmail-required, .deputy-airmail-required-answer').show();
     $(".deputy-country-answer").html($.cookie("deputy-country-desc") + '.');
}
if ($.cookie("deputy-airmail") == '' || $.cookie("deputy-airmail") == null || $.cookie("deputy-airmail") == 'undefined') {
     $(".deputy-airmail-answer").text('No');
} else if ($.cookie("deputy-airmail")) {
     $("#edit-deputy-airmail").val($.cookie("deputy-airmail"));
     $(".deputy-airmail-answer").text($.cookie("deputy-airmail"));
}

if ($.cookie("deputy-phone-number")) {
     $("#edit-deputy-phone-number").val($.cookie("deputy-phone-number"));
     $(".deputy-phone-number-answer").text($.cookie("deputy-phone-number"));
}
if ($.cookie("deputy-mob-number")) {
     $("#edit-deputy-mob-number").val($.cookie("deputy-mob-number"));
     $(".deputy-mob-number-answer").text($.cookie("deputy-mob-number"));
}
if ($.cookie("deputy-email")) {
     $("#edit-deputy-email").val($.cookie("deputy-email"));
     $(".deputy-email-answer").text($.cookie("deputy-email"));
}
if ($.cookie("deputy-financial")) {
     $("#edit-deputy-financial").val($.cookie("deputy-financial"));
     $(".deputy-financial-answer").text($.cookie("deputy-financial"));
}
if ($.cookie("deputy-violent-risk") == 'true') {
     $("#edit-deputy-violent-risk").parent().addClass('checked');
     $("#edit-deputy-violent-risk").attr('checked', 'checked');
     $(".deputy-violent-risk-answer").text('Yes');
     $('.violent-answer-text').show();
} else {
     $("#edit-deputy-violent-risk").parent().removeClass('checked');
     $("#edit-deputy-violent-risk").removeAttr('checked');
     $(".deputy-violent-risk-answer").text('No');
     $('.violent-answer-text').hide();
}

if ($.cookie("deputy-violent-answer")) {
     $(".deputy-violent-answer-text").text($.cookie("deputy-email"));
} else {
     $(".deputy-violent-answer-text").text($.cookie("deputy-email"));
}

// DEPUTY ADDITIONAL DETAILS
if ($.cookie("deputy-digital")) {
     $("#edit-deputy-digital").val($.cookie("deputy-digital"));
     $(".deputy-digital-answer").text($.cookie("deputy-digital"));
}
if ($.cookie("deputy-occupation")) {
     $("#edit-deputy-occupation").val($.cookie("deputy-occupation"));
     $(".deputy-occupation-answer").text($.cookie("deputy-occupation"));
}
if ($.cookie("deputy-correspondence-post") == 'post') {
     $("#edit-deputy-correspondence-post").attr('checked', 'checked');
     $("#edit-deputy-correspondence-post").parent().addClass('checked');
     $(".deputy-correspondence-post-answer").text($.cookie("deputy-correspondence-post"));
} else if ($.cookie("deputy-correspondence-post") == '' || $.cookie("deputy-correspondence-post") == 'null' || $.cookie("deputy-correspondence-post") == 'undefined') {
     $(".deputy-correspondence-post-answer").hide();
     $("#edit-deputy-correspondence-post").removeAttr('checked');
     $("#edit-deputy-correspondence-post").parent().removeClass('checked');
} else {
     $(".deputy-correspondence-post-answer").hide();
     $('.answer-holder').show();
}

if ($.cookie("deputy-correspondence-phone") == 'phone') {
     $("#edit-deputy-correspondence-phone").attr('checked', 'checked');
     $("#edit-deputy-correspondence-phone").parent().addClass('checked');
     $(".deputy-correspondence-phone-answer").text($.cookie("deputy-correspondence-phone"));
} else if ($.cookie("deputy-correspondence-phone") == '' || $.cookie("deputy-correspondence-phone") == 'null' || $.cookie("deputy-correspondence-phone") == 'undefined') {
     $(".deputy-correspondence-phone-answer").hide();
     $("#edit-deputy-correspondence-phone").removeAttr('checked');
     $("#edit-deputy-correspondence-phone").parent().removeClass('checked');
} else {
     $(".deputy-correspondence-phone-answer").hide();
     $('.answer-holder').show();
}

if ($.cookie("deputy-correspondence-email") == 'email') {
     $("#edit-deputy-correspondence-email").attr('checked', 'checked');
     $("#edit-deputy-correspondence-email").parent().addClass('checked');
     $(".deputy-correspondence-email-answer").text($.cookie("deputy-correspondence-email"));
} else if ($.cookie("deputy-correspondence-email") == '' || $.cookie("deputy-correspondence-email") == 'null' || $.cookie("deputy-correspondence-email") == 'undefined') {
     $(".deputy-correspondence-email-answer").hide();
     $("#edit-deputy-correspondence-email").removeAttr('checked');
     $("#edit-deputy-correspondence-email").parent().removeClass('checked');
} else {
     $(".deputy-correspondence-email-answer").hide();
     $('.answer-holder').show();
}
if ($.cookie("deputy-correspondence-welsh") == 'welsh') {
     $("#edit-deputy-correspondence-welsh").attr('checked', 'checked');
     $("#edit-deputy-correspondence-welsh").parent().addClass('checked');
     $(".deputy-correspondence-welsh-answer").text($.cookie("deputy-correspondence-welsh"));
} else if ($.cookie("deputy-correspondence-welsh") == '' || $.cookie("deputy-correspondence-welsh") == 'null' || $.cookie("deputy-correspondence-welsh") == 'undefined') {
     $(".deputy-correspondence-welsh-answer").hide();
     $("#edit-deputy-correspondence-welsh").removeAttr('checked');
     $("#edit-deputy-correspondence-welsh").parent().removeClass('checked');
} else {
     $(".deputy-correspondence-welsh-answer").hide();
     $('.answer-holder').show();
}

if ($.cookie("deputy-special-audio") == 'audio') {
     $("#edit-deputy-special-audio").attr('checked', 'checked');
     $("#edit-deputy-special-audio").parent().addClass('checked');
     $(".deputy-special-audio-answer").text($.cookie("deputy-special-audio"));
} else if ($.cookie("deputy-special-audio") == '' || $.cookie("deputy-special-audio") == 'null' || $.cookie("deputy-special-audio") == 'undefined') {
     $(".deputy-special-audio-answer").hide();
     $("#edit-deputy-special-audio").removeAttr('checked');
     $("#edit-deputy-special-audio").parent().removeClass('checked');
} else {
     $(".deputy-special-audio-answer").hide();
     $('.answer-holder').show();
}

if ($.cookie("deputy-special-print") == 'print') {
     $("#edit-deputy-special-print").attr('checked', 'checked');
     $("#edit-deputy-special-print").parent().addClass('checked');
     $(".deputy-special-print-answer").text($.cookie("deputy-special-print"));
} else if ($.cookie("deputy-special-print") == '' || $.cookie("deputy-special-print") == 'null' || $.cookie("deputy-special-print") == 'undefined') {
     $(".deputy-special-print-answer").hide();
     $("#edit-deputy-special-print").removeAttr('checked');
     $("#edit-deputy-special-print").parent().removeClass('checked');
} else {
     $(".deputy-special-print-answer").hide();
     $('.answer-holder').show();
}

if ($.cookie("deputy-special-hearing") == 'hearing') {
     $("#edit-deputy-special-hearing").attr('checked', 'checked');
     $("#edit-deputy-special-hearing").parent().addClass('checked');
     $(".deputy-special-hearing-answer").text($.cookie("deputy-special-hearing"));
} else if ($.cookie("deputy-special-hearing") == '' || $.cookie("deputy-special-hearing") == 'null' || $.cookie("deputy-special-hearing") == 'undefined') {
     $(".deputy-special-hearing-answer").hide();
     $("#edit-deputy-special-hearing").removeAttr('checked');
     $("#edit-deputy-special-hearing").parent().removeClass('checked');
} else {
     $(".deputy-special-hearing-answer").hide();
     $('.answer-holder').show();
}

if ($.cookie("deputy-special-spelling") == 'spelling') {
     $("#edit-deputy-special-spelling").attr('checked', 'checked');
     $("#edit-deputy-special-spelling").parent().addClass('checked');
     $(".deputy-special-spelling-answer").text($.cookie("deputy-special-spelling"));
} else if ($.cookie("deputy-special-spelling") == '' || $.cookie("deputy-special-spelling") == 'null' || $.cookie("deputy-special-spelling") == 'undefined') {
     $(".deputy-special-spelling-answer").hide();
     $("#edit-deputy-special-spelling").removeAttr('checked');
     $("#edit-deputy-special-spelling").parent().removeClass('checked');
} else {
     $(".deputy-special-spelling-answer").hide();
     $('.answer-holder').show();
}

if ($.cookie("deputy-interpreter") == 'Yes') {
     $(".deputy-interpreter-answer").text($.cookie("deputy-interpreter"));
     $("#edit-deputy-interpreter-yes").attr('checked', 'checked');
     $("#edit-deputy-interpreter-yes").parent().addClass('checked');
     $("#edit-deputy-interpreter-no").removeAttr('checked', 'checked');
     $("#edit-deputy-interpreter-no").parent().removeClass('checked');
     $('.interpreter-details').show();
     $('.deputy-interpreter-details-answer').show();
     $('#edit-deputy-interpreter-details').val($.cookie("deputy-interpreter-details"));
} else if ($.cookie("deputy-interpreter") == 'No') {
     $(".deputy-interpreter-answer").text($.cookie("deputy-interpreter"));
     $("#edit-deputy-interpreter-yes").removeAttr('checked', 'checked');
     $("#edit-deputy-interpreter-yes").parent().removeClass('checked');
     $("#edit-deputy-interpreter-no").attr('checked', 'checked');
     $("#edit-deputy-interpreter-no").parent().addClass('checked');
     $('.interpreter-details').hide();
     $('.deputy-interpreter-details-answer').hide();
}
if ($.cookie("deputy-newsletter") == 'Yes') {
     $(".deputy-newsletter-answer").text($.cookie("deputy-interpreter"));
     $("#edit-deputy-newsletter-yes").attr('checked', 'checked');
     $("#edit-deputy-newsletter-yes").parent().addClass('checked');
     $("#edit-deputy-newsletter-no").removeAttr('checked', 'checked');
     $("#edit-deputy-newsletter-no").parent().removeClass('checked');
} else if ($.cookie("deputy-newsletter") == 'No') {
     $(".deputy-newsletter-answer").text($.cookie("deputy-interpreter"));
     $("#edit-deputy-newsletter-yes").removeAttr('checked', 'checked');
     $("#edit-deputy-newsletter-yes").parent().removeClass('checked');
     $("#edit-deputy-newsletter-no").attr('checked', 'checked');
     $("#edit-deputy-newsletter-no").parent().addClass('checked');
}

// $('.remove-deputy').click(function(){
//      $.cookie("remove-case-number", $("h2").text(), {path:'/'});
// });

// Side panel details
$('#new-deputy-personal-details').hide();
$('#new-deputy-additional-info').hide();
$('#new-deputy-case-details').hide();

if ($.cookie("create-deputy-step-1") == 'true') {
     $('#new-deputy-personal-details').show();
     $('#new-deputy-case-details, #new-deputy-additional-info').hide();
}

if ($.cookie("create-deputy-step-1") && $.cookie("create-deputy-step-2") == 'true') {
     $('#new-deputy-personal-details, #new-deputy-additional-info').show();
     $('#new-deputy-case-details').hide();
}

if ($.cookie("create-deputy-step-1") && $.cookie("create-deputy-step-2") && $.cookie("create-deputy-step-3") == 'true') {
     $('#new-deputy-personal-details, #new-deputy-additional-info, #new-deputy-case-details').show();
}

if ($.cookie("create-deputy-step-3") == 'true') {
     $('ul.client-details.tabs.tabs li').removeClass('current');
     $('ul.client-details.tabs.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');
}


// Fee payer
$('#make-deputy-fee-payer').on("click", function (e) {
     $.cookie("deputy-fee-payer", true, {path:'/'});
     $.cookie("deputy-main-correspondent", true, {path:'/'});
});

if ($.cookie("deputy-fee-payer") == 'true') {
     // Checks feepayer
     $('#deputy-fee-payer').attr('checked', 'checked');
     $('#deputy-fee-payer').parent().addClass('checked');

     // Checks the main correspondent
     $('#deputy-main-correspondent').attr('checked', 'checked');
     $('#deputy-main-correspondent').parent().addClass('checked');
}

// Change CTA
if ($.cookie("order-journey") == 'PFA') {
     $('#add-deputy-step-3').attr('href', '../4-client-hub/4a-new-client.html#PFA');
} else if ($.cookie("order-journey") == 'HandW') {
     $('#add-deputy-step-3').attr('href', '../4-client-hub/4a-new-client.html#HandW');
} else {
     $('#add-deputy-step-3').attr('href', '../4-client-hub/4a-new-client.html');
}

// Add/edit deputies
// $('.deputies-list').hide();
// $('#list-of-deputies').hide();

$("#add-deputy-step-3").on("click", function (e) {
     $.cookie("deputy-added", true, {path:'/'});
});

if ($.cookie("deputy-added") == 'true' && $.cookie("order-journey") == 'HandW') {
     // Shows the confirmation panel
     $("#deputy-added-confirmation").show();

     // Changes the tabs
     $('#client-health .client-details.tabs li[data-tab="health-tab-4"]').addClass('current');
     $('#client-health .client-details.tabs li[data-tab="health-tab-1"], #client-health .client-details.tabs li[data-tab="health-tab-2"], #client-health .client-details.tabs li[data-tab="health-tab-3"], #client-health .client-details.tabs li[data-tab="health-tab-5"]').removeClass('current');
     $('#client-health #health-tab-4').addClass('current');
     $('#client-health #health-tab-1, #client-health #health-tab-2, #client-health #health-tab-3, #client-health #health-tab-5').removeClass('current');
     $('#client-property .client-details.tabs li[data-tab="property-tab-1"], #client-property .client-details.tabs li[data-tab="property-tab-2"], #client-property .client-details.tabs li[data-tab="property-tab-3"], #client-property .client-details.tabs li[data-tab="property-tab-4"], #client-property .client-details.tabs li[data-tab="property-tab-5"]').removeClass('current');
     $('#client-property #property-tab-1, #client-property #property-tab-2, #client-property #property-tab-3, #client-property #property-tab-4, #client-property #property-tab-5').removeClass('current');

     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#deputy-added-confirmation").hide(500);
          $.cookie("deputy-added", false, {path:'/'});
     }, 5000);
} else if ($.cookie("deputy-added") == 'true' && $.cookie("order-journey") == 'PFA') {
     // Shows the confirmation panel
     $("#deputy-added-confirmation").show();

     // Changes the tabs
     $('#client-property .client-details.tabs li[data-tab="property-tab-4"]').addClass('current');
     $('#client-property .client-details.tabs li[data-tab="property-tab-1"], #client-property .client-details.tabs li[data-tab="property-tab-2"], #client-property .client-details.tabs li[data-tab="property-tab-3"], #client-property .client-details.tabs li[data-tab="property-tab-5"]').removeClass('current');
     $('#client-property #property-tab-4').addClass('current');
     $('#client-property #property-tab-1, #client-property #property-tab-2, #client-property #property-tab-3, #client-property #property-tab-5').removeClass('current');
     $('#client-health .client-details.tabs li[data-tab="health-tab-1"], #client-health .client-details.tabs li[data-tab="health-tab-2"], #client-health .client-details.tabs li[data-tab="health-tab-3"], #client-health .client-details.tabs li[data-tab="health-tab-4"], #client-health .client-details.tabs li[data-tab="health-tab-5"]').removeClass('current');
     $('#client-health #health-tab-1, #client-health #health-tab-2, #client-health #health-tab-3, #client-health #health-tab-4, #client-health #health-tab-5').removeClass('current');


     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#deputy-added-confirmation").hide(500);
          $.cookie("deputy-added", false, {path:'/'});
     }, 5000);
}
