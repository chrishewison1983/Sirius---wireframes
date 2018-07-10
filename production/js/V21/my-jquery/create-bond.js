// =================================== Create Bond - JAVASCRIPT =================================== //

// THE BOND - activates the CTA
$(".bond-yes").click( function(){
     $('#create-bond-button').removeAttr('href').addClass('de-activate');
});

$("#bond-amount").keyup( function(){
     $('#create-bond-button').attr('href', '../4-client-hub/4a-new-client.html#PFA').removeClass('de-activate');
});


$(".bond-no").click( function(){
     $('#create-bond-button').attr('href', '../4-client-hub/4a-new-client.html#PFA').removeClass('de-activate');
});

$("#bond-amount").keyup(function() {
     if (!this.value) {
          $('#create-bond-button').addClass('de-activate');
          $('#create-bond-button').removeAttr('href');
     } else {
          $('#create-bond-button').removeClass('de-activate');
          $('#create-bond-button').attr('href', '../4-client-hub/4a-new-client.html#PFA');
     }
});

$('#create-bond-button').click( function(e){
     e.preventDefault();
     var goTo = $(this).attr('href');

     $('#confirmation-message').slideDown();

     setTimeout(function(){
         window.location = goTo;
    },3000);
});

// THE BOND - activates the renewal date
$('.edit-form-item').click( function(e){
     e.preventDefault();
     $(this).parent().removeClass('read-only');
     $('#bond-renewal-day, #bond-renewal-month, #bond-renewal-year').removeAttr('disabled');
});

// THE BOND - activates the other section
$('.bond-other-answer').hide();

$("#bond-company").change(function () {
     if ($(this).val() == 'Other') {
          $('.bond-other-answer').slideDown();
     } else {
          $('.bond-other-answer').slideUp();
     }

     if ($(this).val() === 'Howdens' && $("#bond-amount").val() === '21000' || $(this).val() === 'Deputy Bond Services (DBS)' && $("#bond-amount").val() === '21000') {
          $('.one-off-bond').slideDown().css('display', 'inline-block');
     } else {
          $('.one-off-bond').hide();
     }
});

// $("#bond-amount").keyup(function() {
//      if ($(this).val() === '21000' || $(this).val() === '21,000') {
//           $('.one-off-bond').slideDown();
//      } else {
//           $('.one-off-bond').hide();
//      }
// });

$("#bond-one-off-bond").click( function(){
     if($(this).is(':checked')) {
          $('.bond-renewal-info').hide();
     } else {
          $('.bond-renewal-info').show();
     }
});



////////////////////////////////////// THE BOND //////////////////////////////////////
$("#order-security-bond-yes").click( function(){
     if($(this).is(':checked')) {
          $('.bond-answer-hidden').slideDown('slow');
          $('.dispense-bond-info').slideUp();
     }
});
$("#order-security-bond-no").click( function(){
     if($(this).is(':checked')) {
          $('.bond-answer-hidden').slideUp('slow');
          $('.dispense-bond-info').slideUp();
     }
});

// =================================== Dispense Bond - START - JAVASCRIPT =================================== //
$("#dispense-bond-true").on("click", function (e) {
     $('.bond-answer-hidden').slideUp('slow');
     $('.why-edit-bond').slideUp('slow');
     $('.dispense-bond-info').slideDown();
     $('#dispense-bond').hide();
     $('#bond-details-section .section-title').text('Dispense with the bond');
     $('.the-bond-info #section-header h1').text('Dispense with the bond');
     $('#dispense-bond-button').show();
     $('#create-bond-button').hide();
});

$("#dispense-bond").on("click", function (e) {
     var bondValue = $('#bond-amount').val();
     $('#dispense h2').text('£' + bondValue);
});

$('input[name="dispensed-reason"]').on("click", function (e) {
     $('#dispense-bond-button').removeClass('de-activate').attr('href', '../4-client-hub/4a-new-client.html#PFA');
});

// =================================== Dispense Bond - END - JAVASCRIPT =================================== //

// Error message
$('#add-bond-error').hide();

$("#bond-ref-number").on('input', function(event){
     if ($(this).val() == 'HOW1234') {
          $('#create-bond-button').hide();
          $("#add-bond-error").show();
     } else {
          $("#create-bond-button").show();
          $("#add-bond-error").hide();
     }
});
