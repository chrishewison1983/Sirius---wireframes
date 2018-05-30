// =================================== Edit Deputy - JAVASCRIPT =================================== //
// Edit deputy
// Show's the values for Lara Stevens (Deputy 1)
if (window.location.href.indexOf("edit-deputy-1") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('.breadcrumb .page-title').text('Edit deputy');
     $('.deputy-first-name-answer').text('Lara');
     $('#action-panel .section-title').html("Edit <div class=\"deputy-first-name-answer\">Lara</div>'s details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"]').hide();

     // Change modal content
     $('#unlink-deputy h2').text('Mrs Lara Stevens');
     $('#unlink-deputy .unlink-deputy-name').text('Mrs Lara Stevens');

     // Changes the footer content
     $('#edit-deputy').text('Save & update deputy');
     $('#edit-deputy').attr('href', '../4-client-page/4a-new-client.html#HandW');
     $('#edit-deputy').removeClass('de-activate');
     $('#add-another-deputy').hide();

     // Shows form content
     $('.form-items-hidden').show();

     // Form content - 1 - Personal details
     $('#deputy-type').val('Lay');
     $('#deputy-title').val('Mrs');
     $('#deputy-first-name').val('Lara');
     $('#deputy-last-name').val('Stevens');
     $('#deputy-dob-day').val('17');
     $('#deputy-dob-month').val('07');
     $('#deputy-dob-year').val('1981');
     $('#deputy-address-line-1').val('34 Broomfield Place');
     $('#deputy-address-town').val('Stokesley');
     $('#deputy-manual-postcode').val('TS9 8TU');
     $('#deputy-country').val('United Kingdom');
     $('#deputy-phone-number').val('07079962666');
     $('#deputy-mob-number').val('07079962666');
     $('#deputy-email').val('lara.stevens@jourrapide.com');

     // Form content - 2 - Additional info
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
     $('#deputy-type-order').val('Lay');
     $('#deputy-relationship').val('Sibling');
     $('#deputy-relationship').parent().removeClass('read-only');
     $('#deputy-relationship').removeAttr('disabled');
     $('#deputy-relationship').siblings().html('Relationship to the client: <strong>Lay options</strong>');
     $('#deputy-relationship').html(`
          <option value=''>-- Select --</option>
          <option value='Sibling' selected>Sibling</option>
          <option value='Spouse'>Spouse</option>
          <option value='Common law partner'>Common law partner</option>
          <option value='Partner (not common law)'>Partner (not common law)</option>
          <option value='Child of client'>Child of client</option>
          <option value='Parent of client'>Parent of client</option>
          <option value='Friend'>Friend</option>
          <option value='Other relation'>Other relation</option>
     `);
     // $('#deputy-status').val('');
     $('#deputy-fee-payer').parent().addClass('checked');
     $('#deputy-fee-payer').attr('checked', 'checked');
     $('#deputy-main-correspondent').parent().addClass('checked');
     $('#deputy-main-correspondent').attr('checked', 'checked');
     $('#deputy-main-correspondent').parent().parent().addClass('read-only');
     $('#deputy-main-correspondent').attr("disabled", true);
}

// Show's the values for Bob Loblaw Ltd (Deputy 2)
if (window.location.href.indexOf("edit-deputy-2") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('.breadcrumb .page-title').text('Edit deputy');
     $('.deputy-first-name-answer').text('Bob Loblaw Ltd');
     $('#action-panel .section-title').html("Edit <div class=\"deputy-first-name-answer\">Bob Loblaw</div>'s details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"]').hide();

     // Change modal content
     $('#unlink-deputy h2').text('Bob Loblaw Ltd');
     $('#unlink-deputy .unlink-deputy-name').text('Bob Loblaw Ltd');

     // Changes the footer content
     $('#edit-deputy').text('Save & update deputy');
     $('#edit-deputy').attr('href', '../4-client-page/4a-new-client.html#HandW');
     $('#edit-deputy').removeClass('de-activate').addClass('edit-pro-deputy-journey');
     $('#add-another-deputy').hide();

     // Shows form content
     $('.form-items-hidden').show();

     // Form content - 3 - Case details
     $('#deputy-type-order').val('Professional');
     $('#deputy-relationship').val('Solicitor');
     $('#deputy-relationship').parent().removeClass('read-only');
     $('#deputy-relationship').removeAttr('disabled');
     $('#deputy-relationship').siblings().html('Relationship to the client: <strong>Professional options</strong>');
     $('#deputy-relationship').html(`
          <option value="">-- Select --</option>
          <option value="Panel deputy">Panel deputy</option>
          <option value="Bank official">Bank official</option>
          <option value="Solicitor" selected>Solicitor</option>
          <option value="Accountant">Accountant</option>
          <option value="Unregulated pro deputy">Unregulated pro deputy</option>
          <option value="Legal Professional">Legal Professional</option>
          <option value="Trust companies (not NHS/PCT)">Trust companies (not NHS/PCT)</option>
          <option value="Other professional">Other professional</option>
     `);
     $('.professional-contact, .professional-contact-letter').removeClass('hide');
     $('#deputy-professional-contact').val('Head office - London');
     // $('#deputy-status').val();
     $('#deputy-violent-risk').parent().addClass('checked');
     $('#deputy-violent-risk').attr('checked', 'checked');

}

// Show's the values for Carla Frith (Deputy 3)
if (window.location.href.indexOf("edit-deputy-3") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('.breadcrumb .page-title').text('Edit deputy');
     $('.deputy-first-name-answer').text('Carla');
     $('#action-panel .section-title').html("Edit <div class=\"deputy-first-name-answer\">Carla</div>'s details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"]').hide();

     // Change modal content
     $('#unlink-deputy h2').text('Mrs Carla Frith');
     $('#unlink-deputy .unlink-deputy-name').text('Mrs Carla Frith');

     // Changes the footer content
     $('#edit-deputy').text('Save & update deputy');
     $('#edit-deputy').attr('href', '../4-client-page/4a-new-client.html#HandW');
     $('#edit-deputy').removeClass('de-activate');
     $('#add-another-deputy').hide();

     // Shows form content
     $('.form-items-hidden').show();

     // Form content - 1 - Personal details
     $('#deputy-type').val('Lay');
     $('#deputy-title').val('Mrs');
     $('#deputy-first-name').val('Carla');
     $('#deputy-last-name').val('Frith');
     $('#deputy-dob-day').val('25');
     $('#deputy-dob-month').val('06');
     $('#deputy-dob-year').val('1983');
     $('#deputy-address-line-1').val('35 Broad Street');
     $('#deputy-address-town').val('Lower Welson');
     $('#deputy-manual-postcode').val('HR3 1UD');
     $('#deputy-country').val('United Kingdom');
     $('#deputy-phone-number').val('07772881687');
     $('#deputy-mob-number').val('07772881687');
     $('#deputy-email').val('carla.frith@jourrapide.com');

     // Form content - 2 - Additional info
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
     $('#deputy-type-order').val('Lay');
     $('#deputy-relationship').val('Sibling');
     $('#deputy-relationship').parent().removeClass('read-only');
     $('#deputy-relationship').removeAttr('disabled');
     $('#deputy-relationship').siblings().html('Relationship to the client: <strong>Lay options</strong>');
     $('#deputy-relationship').html(`
          <option value=''>-- Select --</option>
          <option value='Sibling' selected>Sibling</option>
          <option value='Spouse'>Spouse</option>
          <option value='Common law partner'>Common law partner</option>
          <option value='Partner (not common law)'>Partner (not common law)</option>
          <option value='Child of client'>Child of client</option>
          <option value='Parent of client'>Parent of client</option>
          <option value='Friend'>Friend</option>
          <option value='Other relation'>Other relation</option>
     `);
     // $('#deputy-status').val();
     $('#deputy-violent-risk').parent().addClass('checked');
     $('#deputy-violent-risk').attr('checked', 'checked');

}

// Show's the values for Melanie Rand (Deputy 4)
if (window.location.href.indexOf("edit-deputy-4") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('.breadcrumb .page-title').text('Edit deputy');
     $('.deputy-first-name-answer').text('Melanie');
     $('#action-panel .section-title').html("Edit <div class=\"deputy-first-name-answer\">Melanie</div>'s details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"]').hide();

     // Change modal content
     $('#unlink-deputy h2').text('Mrs Melanie Rand');
     $('#unlink-deputy .unlink-deputy-name').text('Mrs Melanie Rand');

     // Changes the footer content
     $('#edit-deputy').text('Save & update deputy');
     $('#edit-deputy').attr('href', '../4-client-page/4a-new-client.html#PFA');
     $('#edit-deputy').removeClass('de-activate');
     $('#add-another-deputy').hide();

     // Shows form content
     $('.form-items-hidden').show();

     // Form content - 1 - Personal details
     $('#deputy-type').val('Lay');
     $('#deputy-title').val('Mrs');
     $('#deputy-first-name').val('Melanie');
     $('#deputy-last-name').val('Rand');
     $('#deputy-dob-day').val('15');
     $('#deputy-dob-month').val('03');
     $('#deputy-dob-year').val('1990');
     $('#deputy-address-line-1').val('70 Moulton Road');
     $('#deputy-address-town').val('Gunby Green');
     $('#deputy-manual-postcode').val('N633 4RF');
     $('#deputy-country').val('United Kingdom');
     $('#deputy-phone-number').val('07783946627');
     $('#deputy-mob-number').val('07783946627');
     $('#deputy-email').val('melanie.rand@jourrapide.com');

     // Form content - 2 - Additional info
     $('#deputy-occupation').val('New accounts clerk');
     $('#deputy-correspondence-email').parent().addClass('checked');
     $('#deputy-correspondence-email').attr('checked', 'checked');
     $('#deputy-interpreter-no').parent().addClass('checked');
     $('#deputy-interpreter-no').attr('checked', 'checked');
     $('#deputy-newsletter-no').parent().addClass('checked');
     $('#deputy-newsletter-no').attr('checked', 'checked');

     // Form content - 3 - Case details
     $('#deputy-type-order').val('Lay');
     $('#deputy-relationship').val('Sibling');
     $('#deputy-relationship').parent().removeClass('read-only');
     $('#deputy-relationship').removeAttr('disabled');
     $('#deputy-relationship').siblings().html('Relationship to the client: <strong>Lay options</strong>');
     $('#deputy-relationship').html(`
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
     // $('#deputy-status').val();
     $('#deputy-violent-risk').parent().addClass('checked');
     $('#deputy-violent-risk').attr('checked', 'checked');

}


// $('.actions-panel-lay').show();
$('.actions-panel-pro, .actions-panel-pub').hide();

// Changes the URL's on the deputy HUB PAGES
if ($('.deputy-details-page').hasClass('professional')) {
     $('.edit-deputy-action').attr('href', '../12-edit-deputy/12a-check-deputy-1.html#pro')
} else if ($('.deputy-details-page').hasClass('public')) {
     $('.edit-deputy-action').attr('href', '../12-edit-deputy/12a-check-deputy-1.html#pub')
} else {
     $('.edit-deputy-action').attr('href', '../12-edit-deputy/12a-check-deputy-1.html#lay')
}


// Show's the values for Lara Stevens (Deputy 1)
if (window.location.href.indexOf("lay") != -1) {

     $('.actions-panel-lay').show();
     $('.actions-panel-pro, .actions-panel-pub').hide();

     // Changes the header
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('.deputy-order-details').hide();
     $('.breadcrumb').html('<a href="../index.html" class="user-type-link">Dashboard</a> <div class="separator"> > </div> <a href="../14-deputy-page/14a-deputy-page.html">Mrs Lara Stevens</a> <div class="separator"> > </div> <span>Check deputy details</span>');

     // Changes the CTA's
     $('.deputy-link-one').attr('href', '../5-add-deputy/5b-deputy-details.html#deputy-lay-edit');
     $('.deputy-link-two').attr('href', '../5-add-deputy/5c-additional-info.html#deputy-lay-edit');

}

if (window.location.href.indexOf("deputy-lay-edit") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('.breadcrumb').html(`
          <a href="../index.html" class="user-type-link">Dashboard</a>
          <div class="separator">&gt;</div>
          <a href="../14-deputy-page/14a-deputy-page.html">Mrs Lara Stevens</a>
          <div class="separator">&gt;</div>
          <span class="page-title">Edit deputy</span>

     `);
     $('h1').text('Edit: MRS LARA STEVENS');
     $('#action-panel .section-title').html("Edit <div class=\"deputy-first-name-answer\">Lara</div>'s details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"], .tab-link[data-tab="tab-2"], .tab-link[data-tab="tab-3"]').hide();

     // Changes the footer content
     $('#edit-deputy').text('Save & update deputy');
     $('#edit-deputy').attr('href', '../14-deputy-page/14a-deputy-page.html');
     $('#edit-deputy').removeClass('de-activate');
     $('#add-another-deputy').hide();

     // Shows form content
     $('.form-items-hidden').show();

     // Form content - 1 - Deputy details
     $('#deputy-type').val('Lay');
     $('#deputy-title').val('Mrs');
     $('#deputy-first-name').val('Lara');
     $('#deputy-middle-name').val('');
     $('#deputy-last-name').val('Stevens');
     $('#deputy-dob-day').val('17');
     $('#deputy-dob-month').val('07');
     $('#deputy-dob-year').val('1981');
     $('#deputy-previous-name').val('Miss Lara Hodgeson');
     $('#deputy-address-line-1').val('34 Broomfield Place');
     $('#deputy-address-line-2').val('');
     $('#deputy-address-town').val('');
     $('#deputy-address-county').val('STOKESLEY');
     $('#deputy-manual-postcode').val('TS9 8TU');
     $('#deputy-country').val('United Kingdom');
     $('#deputy-phone-number').val('07079962666');
     $('#deputy-mob-number').val('07079962666');
     $('#deputy-email').val('lara.stevens@jourrapide.com');

     // Form content - 2 - Additional info
     $('#deputy-occupation').val('University professor');
     $('#deputy-correspondence-email').parent().addClass('checked');
     $('#deputy-correspondence-email').attr('checked', 'checked');
     $('#deputy-special-spelling').parent().addClass('checked');
     $('#deputy-special-spelling').attr('checked', 'checked');
     $('#deputy-interpreter-no').parent().addClass('checked');
     $('#deputy-interpreter-no').attr('checked', 'checked');
     $('#deputy-newsletter-no').parent().addClass('checked');
     $('#deputy-newsletter-no').attr('checked', 'checked');

}

// Show's the values for Bob Loblaw Ltd (Deputy 2)
if (window.location.href.indexOf("pro") != -1) {

     $('.actions-panel-pro').show();
     $('.actions-panel-lay, .actions-panel-pub').hide();

     // Changes the header
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('#section-header h1').text('Check Bob Loblaw Ltd details');
     $('.deputy-order-details').hide();
     $('.breadcrumb').html('<a href="../index.html" class="user-type-link">Dashboard</a> <div class="separator"> > </div> <a href="../14-deputy-page/14b-deputy-page.html">Bob Loblaw Ltd</a> <div class="separator"> > </div> <span>Check deputy details</span>');

     // Changes the CTA's
     $('.deputy-link-one').attr('href', '../5-add-deputy/5b-deputy-details.html#deputy-pro-edit');
     $('.deputy-link-two').attr('href', '../5-add-deputy/5c-additional-info.html#deputy-pro-edit');

}

if (window.location.href.indexOf("deputy-pro-edit") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('.breadcrumb').html(`
          <a href="../index.html" class="user-type-link">Dashboard</a>
          <div class="separator">&gt;</div>
          <a href="../14-deputy-page/14b-deputy-page.html">Bob Loblaw Ltd</a>
          <div class="separator">&gt;</div>
          <span class="page-title">Edit deputy</span>

     `);
     $('h1').text('Edit: Bob Loblaw Ltd');
     $('#action-panel .section-title').html("Edit deputies details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"], .tab-link[data-tab="tab-2"], .tab-link[data-tab="tab-3"]').hide();

     // Changes the footer content
     $('#edit-deputy').text('Save & update deputy');
     $('#edit-deputy').attr('href', '../14-deputy-page/14b-deputy-page.html');
     $('#edit-deputy').removeClass('de-activate');
     $('#add-another-deputy').hide();

     // Shows form content
     $('.form-items-hidden').show();
     $('.form-deputy-company-info').show();
     $('.interchangeable-values').addClass('professional');

     $('.form-deputy-first-name .required, .form-deputy-last-name .required').hide();

     // Form content - 1 - Deputy details
     $('#deputy-type').val('Professional');
     $('#deputy-correspondence-name').val('Mr Stanley William Evans');
     $('#deputy-organisation-name').val('Bob Loblaw Ltd');
     $('#deputy-company-ref').val('12345678');
     $('#deputy-title').val('Mr');
     $('#deputy-first-name').val('Stanley');
     $('#deputy-middle-name').val('William');
     $('#deputy-last-name').val('Evans');
     $('#deputy-dob-day').val('06');
     $('#deputy-dob-month').val('01');
     $('#deputy-dob-year').val('1986');
     $('#deputy-previous-name').val('');
     $('#deputy-address-line-1').val('92 York Road');
     $('#deputy-address-line-2').val('');
     $('#deputy-address-town').val('Oxnop Ghyll');
     $('#deputy-manual-postcode').val('CF8 1HN');
     $('#deputy-country').val('Wales');
     $('#deputy-phone-number').val('01239448394');
     $('#deputy-mob-number').val('07852591663');
     $('#deputy-email').val('stanley.evans@bobloblaw.lawblog.com');

     // Form content - 2 - Additional info
     $('#deputy-occupation').val('Solicitor');
     $('#deputy-correspondence-email').parent().addClass('checked');
     $('#deputy-correspondence-email').attr('checked', 'checked');
     $('#deputy-interpreter-no').parent().addClass('checked');
     $('#deputy-interpreter-no').attr('checked', 'checked');
     $('#deputy-newsletter-no').parent().addClass('checked');
     $('#deputy-newsletter-no').attr('checked', 'checked');

}

// Show's the values for Weston Parpenham (Deputy 3)
if (window.location.href.indexOf("pub") != -1) {

     $('.actions-panel-pub').show();
     $('.actions-panel-lay, .actions-panel-pro').hide();

     // Changes the header
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('#section-header h1').text('Check Weston Parpenham\'s details');
     $('.deputy-order-details').hide();
     $('.breadcrumb').html('<a href="../index.html" class="user-type-link">Dashboard</a> <div class="separator"> > </div> <a href="../14-deputy-page/14c-deputy-page.html">Weston Parpenham</a> <div class="separator"> > </div> <span>Check deputy details</span>');

     // Changes the CTA's
     $('.deputy-link-one').attr('href', '../5-add-deputy/5b-deputy-details.html#deputy-pa-edit');
     $('.deputy-link-two').attr('href', '../5-add-deputy/5c-additional-info.html#deputy-pa-edit');

}

if (window.location.href.indexOf("deputy-pa-edit") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('.breadcrumb').html(`
          <a href="../index.html">My tasks</a>
          <div class="separator">&gt;</div>
          <a href="../14-deputy-page/14c-deputy-page.html">Weston Parpenham</a>
          <div class="separator">&gt;</div>
          <span class="page-title">Edit deputy</span>

     `);
     $('h1').text('Edit: Weston Parpenham');
     $('#action-panel .section-title').html("Edit deputies details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"], .tab-link[data-tab="tab-2"], .tab-link[data-tab="tab-3"]').hide();

     // Changes the footer content
     $('#edit-deputy').text('Save & update deputy');
     $('#edit-deputy').attr('href', '../14-deputy-page/14c-deputy-page.html');
     $('#edit-deputy').removeClass('de-activate');
     $('#add-another-deputy').hide();

     // Shows form content
     $('.form-items-hidden').show();
     $('.form-deputy-company-info').show();
     $('.form-deputy-company-organisation').addClass('read-only');
     $('#deputy-organisation-yes, #deputy-organisation-no').attr('disabled', 'disabled');
     $('.interchangeable-values').addClass('public');
     $('.form-deputy-occupation, .form-deputy-special').hide();

     $('.form-deputy-company-ref .required').hide();
     $('.form-deputy-title, .form-deputy-first-name, .form-deputy-middle-name, .form-deputy-last-name, .form-deputy-dob').hide();

     // Form content - 1 - Deputy details
     $('#deputy-type').val('Public authority');
     $('#deputy-correspondence-name').val('Mr Nicolas Austin Taylor');
     $('#deputy-organisation-name').val('Weston Parpenham');
     $('#deputy-company-ref').val('12345678');
     $('#deputy-title').val('Mr');
     $('#deputy-first-name').val('Nicolas');
     $('#deputy-middle-name').val('Austin');
     $('#deputy-last-name').val('Taylor');
     $('#deputy-previous-name').val('');
     $('#deputy-address-line-1').val('7 Farburn Terrace');
     $('#deputy-address-line-2').val('');
     $('#deputy-address-town').val('Weston Parpenham');
     $('#deputy-manual-postcode').val('PE17 0FS');
     $('#deputy-country').val('United Kingdom');
     $('#deputy-phone-number').val('01268449380');
     $('#deputy-mob-number').val('07951798017');
     $('#deputy-email').val('n.taylor@weston.parpenham.gov.uk');

     // Form content - 2 - Additional info
     $('#deputy-correspondence-email').parent().addClass('checked');
     $('#deputy-correspondence-email').attr('checked', 'checked');
     $('#deputy-correspondence-phone').parent().addClass('checked');
     $('#deputy-correspondence-phone').attr('checked', 'checked');
     $('#deputy-interpreter-no').parent().addClass('checked');
     $('#deputy-interpreter-no').attr('checked', 'checked');
     $('#deputy-newsletter-no').parent().addClass('checked');
     $('#deputy-newsletter-no').attr('checked', 'checked');

}


// Unlink deputy, also shows the confirmation panels
$(".tertiary.unlink").on("click", function (e) {
     var unlinkName = $(this).closest('tr').find('.name div').text();
     $('#unlink-deputy-list h2').text(unlinkName);
     $('#unlink-deputy-list .unlink-deputy-name').text(unlinkName);
});

$("#confirm-unlink-deputy").click( function(){
     $('#unlink-complete').slideDown();
     $('.error-row').hide();
     setTimeout(function() {
          $("#unlink-complete").slideUp()
     }, 5000);

     var deputyNumber = parseInt($('ul.client-details li[data-tab="summary-tab-7"] span').text());

     $('ul.client-details li[data-tab="summary-tab-7"] span').text(deputyNumber - 1);

});

// Unlink deputy code
$('#unlink-deputy-modal').hide();

$("#deputy-status").change(function () {
     if ($(this).val() == 'Error') {
          $('#unlink-deputy-modal').show();
          $('.fee-payer').addClass('read-only');
          $('.fee-payer').find('label').removeClass('checked');
          $('.fee-payer').find('#deputy-fee-payer').removeAttr('checked');
          $('#deputy-main-correspondent').parent().removeClass('checked');
          $('#deputy-fee-payer').attr('disabled', 'disabled');
     } else {
          $('#unlink-deputy-modal').hide();
          $('.fee-payer').removeClass('read-only');
          // $('.fee-payer').find('label').addClass('checked');
          // $('.fee-payer').find('#deputy-fee-payer').attr('checked');
     }
});

// Change deputy status
$(".edit-form-item-status").click( function(e){
     e.preventDefault();
     $('.deputy-case-information').toggle('slow');
     $(this).parent().toggleClass('read-only');
     $(this).toggleClass('close');
     $(this).text($(this).text() == 'edit' ? 'cancel' : 'edit');
});

$(".revert-form-item-status").click( function(e){
     e.preventDefault();
     $(this).siblings().find('.deputy-status-answer').text('ACTIVE');
     $(this).toggleClass('close');
     $('.deputy-case-status').show();
     $('.deputy-case-status').find('.edit-form-item-status').text('cancel');
     $('.deputy-case-status').find('.edit-form-item-status').addClass('close');
     $('.deputy-case-status-changed').hide();
});

// Changes the professional contact
$("#deputy-professional-contact").change( function(e){
     e.preventDefault();
     $('.professional-contact-letter').slideDown().removeClass('hide').css('display', 'inline-block');
     if ($(this).val() == 'Head office - London') {
          // $("#deputy-professional-contact-details").html(`
          //      <option value=''>-- Select --</option>
          //      <option value='Maisie O'Donnell'>Maisie O'Donnell - maisie.odonnell@bobloblaw.lawblog.com</option>
          //      <option value='Keira White'>Keira White - keira.white@bobloblaw.lawblog.com</option>
          //      <option value='Reece Bowen'>Reece Bowen - reece.bowen@bobloblaw.lawblog.com</option>
          // `);
          $(".form-group.professional-contact-letter .place-holder-text").html(`
               All future letters will be sent to:<br>
               <strong>Head office - London</strong>,<br>
               84 Crown Street,<br>
               London,<br>
               SW19 5GQ.
          `);
     } else if ($(this).val() == 'Coventry') {
          // $("#deputy-professional-contact-details").html(`
          //      <option value=''>-- Select --</option>
          //      <option value='Harvey Burgess'>Harvey Burgess - harvey.burgess@bobloblaw.lawblog.com</option>
          //      <option value='Yasmin West'>Yasmin West - yasmin.west@bobloblaw.lawblog.com</option>
          //      <option value='Tilly Steele'>Tilly Steele - tilly.steele@bobloblaw.lawblog.com</option>
          // `);
          $(".form-group.professional-contact-letter .place-holder-text").html(`
               All future letters will be sent to:<br>
               <strong>Coventry office</strong>,<br>
               81 Whatlington Road,<br>
               Coventry,<br>
               CV1 5NS.
          `);
     } else if ($(this).val() == 'Birmingham') {
          // $("#deputy-professional-contact-details").html(`
          //      <option value=''>-- Select --</option>
          //      <option value='Max Bird'>Max Bird - max.bird@bobloblaw.lawblog.com</option>
          //      <option value='Nicholas Bruce'>Nicholas Bruce - nicholas.bruce@bobloblaw.lawblog.com</option>
          // `);
          $(".form-group.professional-contact-letter .place-holder-text").html(`
               All future letters will be sent to:<br>
               <strong>Birmingham office</strong>,<br>
               57 Boroughbridge Road,<br>
               Birmingham,<br>
               B5 2SY.
          `);
     } else if ($(this).val() == 'Newcastle') {
          // $("#deputy-professional-contact-details").html(`
          //      <option value=''>-- Select --</option>
          //      <option value='Mia Storey'>Mia Storey - mia.storey@bobloblaw.lawblog.com</option>
          //      <option value='Brooke Quinn'>Brooke Quinn - brooke.quinn@bobloblaw.lawblog.com</option>
          // `);
          $(".form-group.professional-contact-letter .place-holder-text").html(`
               All future letters will be sent to:<br>
               <strong>Newcastle office</strong>,<br>
               25 Lairg Road,<br>
               Newcastle Upon Tyne,<br>
               NE7 1YX.
          `);
     } else if ($(this).val() == 'Liverpool') {
          // $("#deputy-professional-contact-details").html(`
          //      <option value=''>-- Select --</option>
          //      <option value='Ellis May'>Ellis May - ellis.may@bobloblaw.lawblog.com</option>
          //      <option value='Anthony Haynes'>Anthony Haynes - anthony.haynes@bobloblaw.lawblog.com</option>
          //      <option value='Natasha Tucker'>Natasha Tucker - natasha.tucker@bobloblaw.lawblog.com</option>
          // `);
          $(".form-group.professional-contact-letter .place-holder-text").html(`
               All future letters will be sent to:<br>
               <strong>Liverpool office</strong>,<br>
               27 Overton Circle,<br>
               Liverpool,<br>
               L3 8FH.
          `);
     } else if ($(this).val() == 'Manchester') {
          // $("#deputy-professional-contact-details").html(`
          //      <option value=''>-- Select --</option>
          //      <option value='Victoria Holden'>Victoria Holden - victoria.holden@bobloblaw.lawblog.com</option>
          //      <option value='Holly Abbott'>Holly Abbott - holly.abbott@bobloblaw.lawblog.com</option>
          //      <option value='Kai Steele'>Kai Steele - kai.steele@bobloblaw.lawblog.com</option>
          //      <option value='Elizabeth Reed'>Elizabeth Reed - elizabeth.reed@bobloblaw.lawblog.com</option>
          // `);
          $(".form-group.professional-contact-letter .place-holder-text").html(`
               All future letters will be sent to:<br>
               <strong>Manchester office</strong>,<br>
               63 Cunnery Rd,<br>
               Manchester,<br>
               M3 8WT.
          `);
     }
});
