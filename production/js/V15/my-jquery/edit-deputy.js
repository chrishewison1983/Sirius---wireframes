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

     // Changes the footer content
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '../4-client-page/4a-new-client.html#HandW');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').removeClass('de-activate');
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
     $('#deputy-country').val('England');
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
          <option value='Sibling'>Sibling</option>
          <option value='Spouse'>Spouse</option>
          <option value='Common law partner'>Common law partner</option>
          <option value='Child of Patient'>Child of Patient</option>
          <option value='Parent of Patient'>Parent of Patient</option>
          <option value='Friend'>Friend</option>
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

     // Changes tabs
     $('.tab-link[data-tab="tab-1"]').hide();

     // Changes the footer content
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '../4-client-page/4a-new-client.html#HandW');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').removeClass('de-activate');
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
     $('#deputy-country').val('England');
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
          <option value='Sibling'>Sibling</option>
          <option value='Spouse'>Spouse</option>
          <option value='Common law partner'>Common law partner</option>
          <option value='Child of Patient'>Child of Patient</option>
          <option value='Parent of Patient'>Parent of Patient</option>
          <option value='Friend'>Friend</option>
          <option value='Other Relation'>Other Relation</option>
     `);
     $('#deputy-status').val('Active');
     $('#deputy-violent-risk').parent().addClass('checked');
     $('#deputy-violent-risk').attr('checked', 'checked');

}

// Show's the values for Lara Stevens (Deputy 1)
if (window.location.href.indexOf("deputy-lay-edit") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('.breadcrumb').html(`
          <a href="../dashboard.html">My tasks</a>
          <div class="separator">&gt;</div>
          <a href="../14-deputy-page/14a-deputy-page.html">Mrs Kate Eloise Smith</a>
          <div class="separator">&gt;</div>
          <span class="page-title">Edit deputy</span>

     `);
     $('h1').text('Edit: MRS KATE ELOISE SMITH');
     $('#action-panel .section-title').html("Edit <div class=\"deputy-first-name-answer\">Kate</div>'s details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"], .tab-link[data-tab="tab-2"], .tab-link[data-tab="tab-3"]').hide();

     // Changes the footer content
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '../14-deputy-page/14a-deputy-page.html');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').removeClass('de-activate');
     $('#add-another-deputy').hide();

     // Shows form content
     $('.form-items-hidden').show();

     // Form content - 1 - Deputy details
     $('#deputy-type').val('Lay');
     $('#deputy-title').val('Mrs');
     $('#deputy-first-name').val('Kate');
     $('#deputy-middle-name').val('Eloise');
     $('#deputy-last-name').val('Smith');
     $('#deputy-dob-day').val('21');
     $('#deputy-dob-month').val('09');
     $('#deputy-dob-year').val('1976');
     $('#deputy-previous-name').val('Mrs Kate Eloise Taylor');
     $('#deputy-address-line-1').val('39 Malborough Crescent');
     $('#deputy-address-line-2').val('');
     $('#deputy-address-town').val('Stevenage');
     $('#deputy-address-county').val('Hertfordshire');
     $('#deputy-manual-postcode').val('BN7 8LQ');
     $('#deputy-country').val('England');
     $('#deputy-phone-number').val('01314993038');
     $('#deputy-mob-number').val('07840657726');
     $('#deputy-email').val('kate.smith@jourrapide.com');

     // Form content - 2 - Additional info
     $('#deputy-occupation').val('Embalmer (Retired)');
     $('#deputy-correspondence-email').parent().addClass('checked');
     $('#deputy-correspondence-email').attr('checked', 'checked');
     $('#deputy-interpreter-no').parent().addClass('checked');
     $('#deputy-interpreter-no').attr('checked', 'checked');
     $('#deputy-newsletter-no').parent().addClass('checked');
     $('#deputy-newsletter-no').attr('checked', 'checked');

}

// Show's the values for Connor, Caur & Burrows (Deputy 2)
if (window.location.href.indexOf("deputy-pro-edit") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('.breadcrumb').html(`
          <a href="../dashboard.html">My tasks</a>
          <div class="separator">&gt;</div>
          <a href="../14-deputy-page/14b-pro-deputy-page.html">Connor, Caur & Burrows</a>
          <div class="separator">&gt;</div>
          <span class="page-title">Edit deputy</span>

     `);
     $('h1').text('Edit: Connor, Caur & Burrows');
     $('#action-panel .section-title').html("Edit deputies details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"], .tab-link[data-tab="tab-2"], .tab-link[data-tab="tab-3"]').hide();

     // Changes the footer content
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '../14-deputy-page/14b-pro-deputy-page.html');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').removeClass('de-activate');
     $('#add-another-deputy').hide();

     // Shows form content
     $('.form-items-hidden').show();
     $('.form-deputy-company-info').show();
     $('.interchangeable-values').addClass('professional');

     $('.form-deputy-first-name .required, .form-deputy-last-name .required').hide();

     // Form content - 1 - Deputy details
     $('#deputy-type').val('Professional');
     $('#deputy-correspondence-name').val('Mr Stanley William Evans');
     $('#deputy-organisation-name').val('Connor, Caur & Burrows');
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
     $('#deputy-email').val('stanley.evans@ccandb.com');

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
if (window.location.href.indexOf("deputy-pa-edit") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('.breadcrumb').html(`
          <a href="../dashboard.html">My tasks</a>
          <div class="separator">&gt;</div>
          <a href="../14-deputy-page/14c-pa-deputy-page.html">Weston Parpenham</a>
          <div class="separator">&gt;</div>
          <span class="page-title">Edit deputy</span>

     `);
     $('h1').text('Edit: Weston Parpenham');
     $('#action-panel .section-title').html("Edit deputies details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"], .tab-link[data-tab="tab-2"], .tab-link[data-tab="tab-3"]').hide();

     // Changes the footer content
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '../14-deputy-page/14c-pa-deputy-page.html');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').removeClass('de-activate');
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
     $('#deputy-country').val('England');
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
$("#confirm-unlink").click( function(){
     $('#unlink-complete').slideDown();
     $('.error-row').hide();
     setTimeout(function() {
          $("#unlink-complete").slideUp()
     }, 5000);
});
