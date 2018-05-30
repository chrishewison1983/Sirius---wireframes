// =================================== Court Apps - JAVASCRIPT =================================== //
// ================== SECTION 2.1 ================== //
$("#preview-letter").on("click", function (e) {
     // Full name
     var courtFullName = $('#court-app-name').val()
     $('#print-send-modal.pdf-container').find('.court-app-user-name').text(courtFullName);

     // Address
     var courtAddress = $('#court-app-address').val()
     $('#print-send-modal.pdf-container').find('.court-app-address').text(courtAddress);

     // Phone
     var courtPhone = $('#court-app-phone-number').val()
     $('#print-send-modal.pdf-container').find('.court-app-phone-number').text(courtPhone);

     // Email
     var courtEmail = $('#court-app-email').val()
     $('#print-send-modal.pdf-container').find('.court-app-email').text(courtEmail);

     // Relationship
     var courtRelationship = $('#court-app-relationship').val()
     $('#print-send-modal.pdf-container').find('.court-app-relationship').text(courtRelationship);
});

// ================== SECTION 2.2 ================== //

// ================== SECTION 2.3 ================== //
$("#preview-letter").on("click", function (e) {
     // Full name
     var courtContactName = $('#court-app-contact-name').val()
     $('#print-send-modal.pdf-container').find('.court-app-contact-name').text(courtContactName);

     // Address
     var courtContactAddress = $('#court-app-contact-address').val()
     $('#print-send-modal.pdf-container').find('.court-app-contact-address').text(courtContactAddress);

     // Phone
     var courtContactNumber = $('#court-app-contact-phone').val()
     $('#print-send-modal.pdf-container').find('.court-app-contact-phone').text(courtContactNumber);

     // Email
     var courtContactEmail = $('#court-app-contact-email').val()
     $('#print-send-modal.pdf-container').find('.court-app-contact-email').text(courtContactEmail);

     // DX number
     var courtContactDX = $('#court-app-contact-dx').val()
     $('#print-send-modal.pdf-container').find('.court-app-contact-dx').text(courtContactDX);
});

// ================== SECTION 3.1 ================== //
$("#preview-letter").on("click", function (e) {
     // First name
     var courtApplicantFirstName = $('#court-app-applicant-first-name').val()
     $('#print-send-modal.pdf-container').find('.court-app-applicant-first-name').text(courtApplicantFirstName);

     // Last name
     var courtApplicantLastName = $('#court-app-applicant-last-name').val()
     $('#print-send-modal.pdf-container').find('.court-app-applicant-last-name').text(courtApplicantLastName);

     // Address
     var courtApplicantAddress = $('#court-app-applicant-address').val()
     $('#print-send-modal.pdf-container').find('.court-app-applicant-address').text(courtApplicantAddress);

     // Phone
     var courtApplicantNumber = $('#court-app-applicant-phone-number').val()
     $('#print-send-modal.pdf-container').find('.court-app-applicant-phone-number').text(courtApplicantNumber);

     // DOB
     var courtApplicantDOB = $('#court-app-applicant-dob').val()
     $('#print-send-modal.pdf-container').find('.court-app-applicant-dob').text(courtApplicantDOB);
});

// ================== SECTION 3.2 ================== //
$("#preview-letter").on("click", function (e) {
     // Accomodation
     var courtClientAccomodation = $('#court-app-client-accomodation').val()
     $('#print-send-modal.pdf-container').find('.court-app-client-accomodation').text(courtClientAccomodation);

     // Date
     var courtClientDate = $('#court-app-client-date').val()
     $('#print-send-modal.pdf-container').find('.court-app-client-date').text(courtClientDate);
});

// ================== SECTION 3.3 ================== //
$('.relationship-married, .relationship-divorced, .relationship-widowed').hide();

$("#preview-letter").on("click", function (e) {
     // Date
     var courtClientRelationshipDate = $('#court-app-client-relationship-date').val()
     $('#print-send-modal.pdf-container').find('.court-app-client-relationship-date').text(courtClientRelationshipDate);
});

$("#court-app-client-relationship").on("change", function (e) {
     if ($(this).val() == 'Married') {
          $('.relationship-married').slideDown();
          $('.relationship-divorced, .relationship-widowed').hide();
          $(this).parent().removeClass('no-margin');
     } else if ($(this).val() == 'Divorced') {
          $('.relationship-divorced').slideDown();
          $('.relationship-married, .relationship-widowed').hide();
          $(this).parent().removeClass('no-margin');
     } else if ($(this).val() == 'Widowed') {
          $('.relationship-widowed').slideDown();
          $('.relationship-married, .relationship-divorced').hide();
          $(this).parent().removeClass('no-margin');
     } else {
          $('.relationship-married, .relationship-divorced, .relationship-widowed').hide();
          $(this).parent().addClass('no-margin');
     }
});

// ================== SECTION 3.4 ================== //
$("#preview-letter").on("click", function (e) {
     // Ref no.
     var courtClientRef = $('#court-app-client-ref').val()
     $('#print-send-modal.pdf-container').find('.court-app-client-ref').text(courtClientRef);

     // Date of proceedings
     var courtClientProceedingsDate = $('#court-app-client-proceedings-date').val()
     $('#print-send-modal.pdf-container').find('.court-app-client-proceedings-date').text(courtClientProceedingsDate);
});

// ================== SECTION 4.1 ================== //
$("#preview-letter").on("click", function (e) {
     // Court order
     var courtCourtOrder = $('#court-app-court-order').val()
     $('#print-send-modal.pdf-container').find('.court-app-court-order').text(courtCourtOrder);
});


$('.second-applicant').hide();

$(".add").on("click", function (e) {
     $(this).text(function(i, text){
          return text === "Add second applicant" ? "Hide second applicant" : "Add second applicant";
     })
     $('.second-applicant').toggle().css('display', 'inline-block');
     $(this).toggleClass('close');
});

$('.court-app-other-address, .solicitor-text, .other-text').hide();

$("#court-app-address-choice").on("change", function (e) {
     if ($(this).val() == 'Applicant 1' || $(this).val() == 'Applicant 2') {
          $('.court-app-other-address').slideUp();
          $('.solicitor-text, .other-text').hide();
          $(this).parent().addClass('no-margin');
     } else if ($(this).val() == 'Solicitors address') {
          $('.court-app-other-address').slideDown();
          $(this).parent().removeClass('no-margin');
          $('.solicitor-text').show();
          $('.other-text').hide();
     } else if ($(this).val() == 'Other') {
          $('.court-app-other-address').slideDown();
          $(this).parent().removeClass('no-margin');
          $('.solicitor-text').hide();
          $('.other-text').show();
     }
});
