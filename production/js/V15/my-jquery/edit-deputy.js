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
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '../4-client-page/4a-client-page.html');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').removeClass('de-activate');
     $('#add-another-deputy').hide();

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
     $('#deputy-type-order').val('Lay');
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

     // Changes tabs
     $('.tab-link[data-tab="tab-1"]').hide();

     // Changes the footer content
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '../4-client-page/4a-client-page.html');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').removeClass('de-activate');
     $('#add-another-deputy').hide();

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
     $('#deputy-type-order').val('Lay');
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

// Show's the values for Lara Stevens (Deputy 1)
if (window.location.href.indexOf("deputy-page-edit") != -1) {
     // Hides the progess bar
     $('nav.progress-bar').hide();

     // Changes the header content
     $('#section-header').addClass('deputy-page').addClass('content-page');
     $('.breadcrumb').html('<a href="../dashboard.html">My tasks</a><div class="separator">&gt;</div><span class="page-title">Edit deputy</span>');
     $('h1').text('Edit: MRS KATE ELOISE SMITH');
     $('#action-panel .section-title').html("Edit <div class=\"deputy-first-name-answer\">Kate</div>'s details");

     // Changes tabs
     $('.tab-link[data-tab="tab-1"], .tab-link[data-tab="tab-2"], .tab-link[data-tab="tab-3"]').hide();

     // Changes the footer content
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '../14-deputy-page/14a-deputy-page.html');
     $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').removeClass('de-activate');
     $('#add-another-deputy').hide();

     // Form content - 1 - Deputy details
     $('#deputy-type').val('Lay');
     $('#deputy-title').val('Mrs');
     $('#deputy-first-name').val('Kate');
     $('#deputy-last-name').val('Smith');
     $('#deputy-dob-day').val('21');
     $('#deputy-dob-month').val('09');
     $('#deputy-dob-year').val('1976');
     $('#deputy-address-line-1').val('39 Malborough Crescent');
     $('#deputy-address-line-2').val('Stevenage');
     $('#deputy-address-town').val('South Malling');
     $('#deputy-manual-postcode').val('BN7 8LQ');
     $('#deputy-country').val('England');
     $('#deputy-phone-number').val('01314993038');
     $('#deputy-mob-number').val('07840657726');
     $('#deputy-email').val('kate.smith@jourrapide.com');

     // Form content - 2 - Additional info
     $('#deputy-digital-no').parent().addClass('checked');
     $('#deputy-digital-no').attr('checked', 'checked');
     $('#deputy-occupation').val('Embalmer (Retired)');
     $('#deputy-correspondence-email').parent().addClass('checked');
     $('#deputy-correspondence-email').attr('checked', 'checked');
     $('#deputy-interpreter-no').parent().addClass('checked');
     $('#deputy-interpreter-no').attr('checked', 'checked');
     $('#deputy-newsletter-no').parent().addClass('checked');
     $('#deputy-newsletter-no').attr('checked', 'checked');

}
