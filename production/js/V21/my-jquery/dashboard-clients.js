// =================================== Dashboard - JAVASCRIPT =================================== //
$('.view-full-details').click( function(e){
     var dataValue = $(this).data('value');
     $(`#dashboard-clients-table tr.summary-row[data-value="${dataValue}"]`).toggleClass('open');
     $(`#dashboard-clients-table tr.details-row[data-value="${dataValue}"]`).toggle();
});


$('.re-assign-panel.client-controller').hide();
$('.filter-panel.client-controller .cancel-re-assign').hide();

/////////////// ------------------------------ FILTER 1 - START ------------------------------ ///////////////
$('.filter-category').change(function(){

     $('.my-clients-assign-to, .team-user-in-team, .select-deputy-type, #my-clients-user-in-team, #my-clients-user-another-team, .my-clients-task-team').prop('selectedIndex',0);

     $('.client-filter').find('.step-2, .step-3, .step-4').hide();
     $('.client-filter').find('.step-1, .step-2, .step-3').removeClass('step-1-filter-active step-2-filter-active step-3-filter-active');

     if($(this).val() == "My clients") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();

          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.my-client').show();

          $('.my-clients-assign-to option[value="Me"]').hide();

     } else if ($(this).val() == "My teams clients") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1.filter-a').css('display', 'inline-block');

          $('.client-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-clients-table tbody tr').show();
          $('#dashboard-clients-table tbody tr.details-row').hide();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Deputy type") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1.filter-b').css('display', 'inline-block');

          $('.client-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-clients-table tbody tr').show();
          $('#dashboard-clients-table tbody tr.details-row').hide();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Another team") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1.filter-c').css('display', 'inline-block');

          $('.client-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-clients-table tbody tr').show();
          $('#dashboard-clients-table tbody tr.details-row').hide();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Another user") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1.filter-d').css('display', 'inline-block');

          $('.client-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-clients-table tbody tr').show();
          $('#dashboard-clients-table tbody tr.details-row').hide();

          $('.my-clients-assign-to option[value="Me"]').show();

     }  else if ($(this).val() == "Search clients") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1.filter-e').css('display', 'inline-block');

          $('.client-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-clients-table tbody tr').show();
          $('#dashboard-clients-table tbody tr.details-row').hide();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "PFA orders") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-1.filter-four').css('display', 'inline-block');

          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.order-property').show();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "HandW orders") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();

          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.order-health').show();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else {
          $('.client-filter').find('.filter').hide();
          $('.client-filter').find('.step-1, .step-2').hide();
          $('#dashboard-clients-table tr').show();

          $('.my-clients-assign-to option[value="Me"]').show();
     }

     $('#dashboard-clients-table tr').removeClass('selected-item');
     $('#dashboard-clients-table tr .client-title').removeClass('checked');

     // $('.client-filter').find('.filter-numbers').hide();

     $(this).parent().parent().addClass('filter-active');

     $('.client-filter .filter-select-all-clear').show();
});
/////////////// ------------------------------ FILTER 1 - START ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 1 - START ------------------------------ ///////////////
/////////////// STEP 1 - START ///////////////
$('.my-clients-assign-to').change(function(){

     $('.client-filter').find('.step-2').addClass('step-2-filter-active');

     $('.client-filter .filter-select-all-clear').show();

     if ($(this).val() == 'Me') {
          $('.client-filter').find('.step-4').css('display', 'inline-block');

          $('.client-filter').find('.step-3').hide();

     } else if ($(this).val() == 'User in my team') {
          $('.client-filter').find('.step-3').css('display', 'inline-block');
          $('.client-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.client-filter').find('.step-3 .answer-my-team').css('display', 'inline-block');

          $('.client-filter').find('.step-3 .answer-client-team, .step-3 .answer-another-user').hide();
          $('.client-filter').find('.step-4').hide();

     } else if ($(this).val() == 'Another user') {
          $('.client-filter').find('.step-3').css('display', 'inline-block');
          $('.client-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.client-filter').find('.step-3 .answer-another-user').css('display', 'inline-block');

          $('.client-filter').find('.step-3 .answer-client-team, .step-3 .answer-my-team').hide();
          $('.client-filter').find('.step-4').hide();

     } else if ($(this).val() == 'My team') {
          $('.client-filter').find('.step-3').css('display', 'inline-block');
          $('.client-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.client-filter').find('.step-4').css('display', 'inline-block');

          $('.client-filter').find('.step-3').hide();

     } else if ($(this).val() == 'Other team') {
          $('.client-filter').find('.step-3').css('display', 'inline-block');
          $('.client-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.client-filter').find('.step-3 .answer-client-team').css('display', 'inline-block');

          $('.client-filter').find('.step-3 .answer-another-user, .step-3 .answer-my-team').hide();
          $('.client-filter').find('.step-4').hide();

     }

});

$('.my-clients-user-in-team, .my-clients-user-another-team').keyup(function(){
     $(this).parent().parent().addClass('step-3-filter-active');

     $('.client-filter').find('.step-4').css('display', 'inline-block');
});

$('.my-clients-task-team').change(function(){
     $(this).parent().parent().addClass('step-3-filter-active');

     $('.client-filter').find('.step-4').css('display', 'inline-block');
});


$('#select-all-clients').change(function(){

     $('.filter-panel.client-controller .cancel-re-assign').show();
     $('.filter-panel.client-controller .clear-filter').hide();

     // var sectionsClient = $('.summary-row');
     // function updateClientVisibility(){
     //      var checked = $("#select-all-clients:checked");
     //      if (checked.length === 0)
     //           checked = $("#select-all-clients");
     //
     //      // var checked = $("#filter-panel-documents :checkbox:checked");
     //      if(checked.length){
     //           sectionsDoc.hide();
     //           var selector = checked.toArray().map(item => '.' + $(item).val()).join(',');
     //           var typeSelector = '';
     //           var typeEl = $("#select-all-clients");
     //           typeSelector =
     //                typeEl.filter(':not(:checked)').length === typeEl.length ? '*'
     //                : ':not(' + typeEl.filter(':not(:checked)').toArray().map(
     //                     item => '.' + $(item).val()
     //                ).join(',') + ')';
     //
     //           $(selector).filter(typeSelector).show();
     //
     //      } else {
     //           sectionsDoc.show();
     //      }
     //      $('.filter-panel.client-controller .filter-numbers span.number').text($('#dashboard-clients-table tbody tr:visible').length);
     //
     // }
     //
     // $("#select-all-clients").click(updateClientVisibility);
     // updateClientVisibility();

     // 1 - My clients
     if($(this).is(":checked") && $('.filter-category').val() == 'My clients') {
          // $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('2');
          $('.clients-name').append(`
               <li>Mr Gerald Brackens</li>
               <li>Mr Oscar Chaplin</li>
          `);
     }

     // 2 - My teams clients
     if($(this).is(":checked") && $('.filter-category').val() == 'My teams clients') {
          // $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('1').removeClass('three-figures');
          $('.client-filter').find('.filter-numbers .desc').text('client');
          $('.clients-name').append(`
               <li>Miss Marguerite Owens</li>
          `);
     }

     // 3 - Deputy type
     if($(this).is(":checked") && $('.filter-category').val() == 'Deputy type' && $('.select-deputy-type').val() == 'Lay') {
          // $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('4').removeClass('three-figures');
          $('.clients-name').append(`
               <li>Mr Gerald Brackens</li>
               <li>Miss Marguerite Owens</li>
               <li>Mrs Celia Carr</li>
               <li>Ms Erika Neal</li>
          `);
     } else if($(this).is(":checked") && $('.filter-category').val() == 'Deputy type' && $('.select-deputy-type').val() == 'Professional') {
          // $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('2').removeClass('three-figures');
          $('.clients-name').append(`
               <li>Dr Marcus Roy</li>
               <li>Mr Oscar Chaplin</li>
          `);
     } else if($(this).is(":checked") && $('.filter-category').val() == 'Deputy type' && $('.select-deputy-type').val() == 'Public authority') {
          // $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('1').removeClass('three-figures');
          $('.client-filter').find('.filter-numbers .desc').text('client');
          $('.clients-name').append(`
               <li>Mr Harvey Stevenson</li>
          `);
     }

     // 4 - PFA orders
     if($(this).is(":checked") && $('.filter-category').val() == 'PFA orders') {
          // $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('6').removeClass('three-figures');
          $('.clients-name').append(`
               <li>Mr Gerald Brackens</li>
               <li>Mr Harvey Stevenson</li>
               <li>Miss Marguerite Owens</li>
               <li>Mrs Celia Carr</li>
               <li>Dr Marcus Roy</li>
               <li>Ms Erika Neal</li>
          `);
     }

     // 5 - HW orders
     if ($(this).is(":checked") && $('.filter-category').val() == 'HandW orders') {
          // $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('1').removeClass('three-figures');
          $('.client-filter').find('.filter-numbers .desc').text('client');
          $('.clients-name').append(`
               <li>Mr Oscar Chaplin</li>
          `);
          $('#re-assign-clients h2').text('');
     }

     if($(this).is(":checked")) {
          $('.re-assign-my-clients').removeClass('de-activate').attr('href', '#re-assign-clients');
          $('.re-assign-my-clients').attr('rel', 'modal:open');

          $('#dashboard-clients-table tbody tr').addClass('selected-item change-details');
          $('#dashboard-clients-table tbody tr input[name="re-assign-client"]').parent().addClass('checked');
          $('#dashboard-clients-table tbody tr input[name="re-assign-client"]').attr('checked', 'checked');

          $('.client-filter').find('.step-2').show();
          $('.client-filter').find('.main-filter').addClass('re-assign-active');
          // $('.client-filter').find('.step-1').addClass('step-1-filter-active');
          $('.client-filter').find('.re-assign-title.title-label').removeClass('hide');

          $('.client-filter').find('.main-filter, .step-1').addClass('de-activated step-1-filter-active');
          $('.client-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').attr('disabled' ,'disabled');

     } else {
          $('.re-assign-my-clients').addClass('de-activate').removeAttr('href');
          $('.re-assign-my-clients').removeAttr('rel');

          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1, .main-filter').removeClass('de-activated step-1-filter-active');
          // $('.client-filter').find('.step-1').removeClass('step-1-filter-active');
          $('.client-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');
          $('.client-filter').find('.filter-select-all-clear .cancel-re-assign').hide();
          $('.client-filter').find('.filter-select-all-clear .clear-filter').show();
          // $('.client-filter').find('.filter-numbers').css('display', 'none');

          $('#dashboard-clients-table tbody tr').removeClass('selected-item change-details');
          $('#dashboard-clients-table tbody tr input[name="re-assign-client"]').parent().removeClass('checked');
          $('#dashboard-clients-table tbody tr input[name="re-assign-client"]').removeAttr('checked');
     }

});
/////////////// STEP 1 - END ///////////////
/////////////// ------------------------------ OPTION 1 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 2 - START ------------------------------ ///////////////
$('.team-user-in-team').keyup(function(){
     $('.client-filter').find('.step-1.filter-a').addClass('step-1-filter-active');
});

$('.autocomplete-selected').click(function(){
     if ($(this).val() == 'Joe Bloggs') {
          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.joe-bloggs').show();
     }
});

/////////////// ------------------------------ OPTION 2 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 3 - START ------------------------------ ///////////////
$('#my-clients-another-team').change(function(){
     $('.client-filter').find('.step-1.filter-c').addClass('step-1-filter-active');
});
/////////////// ------------------------------ OPTION 3 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 4 - START ------------------------------ ///////////////
$('.filter-another-user-client').keyup(function(){
     $('.client-filter').find('.step-1.filter-d').addClass('step-1-filter-active');
});
/////////////// ------------------------------ OPTION 4 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 5 - START ------------------------------ ///////////////
$('.filter-search-clients').keyup(function(){
     $('.client-filter').find('.step-1.filter-e').addClass('step-1-filter-active');
});
/////////////// ------------------------------ OPTION 5 - END ------------------------------ ///////////////

/////////////// STEP 3 - START ///////////////
$('#select-team-member').change(function(){

     $('.client-filter').find('.team-member-selected').css('display', 'inline-block');

     $(this).parent().addClass('step-2-filter-active');

     if($(this).val() == "Bloggs, Joe") {
          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.joe-bloggs').show();
     } else if ($(this).val() == "Carter, Simon") {
          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.simon-carter').show();
     } else if ($(this).val() == "Harper, David") {
          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.david-harper').show();
     } else if ($(this).val() == "McDermot, Shiobhan") {
          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.shiobhan-mcdermot').show();
     } else if ($(this).val() == "Nixon, Hannah") {
          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.hannah-nixon').show();
     } else {
          $('#re-assign-team-member-clients').addClass('de-activate').removeAttr('href');
     }

     $('#select-team-member-clients').parent().removeClass('checked');
     $('#select-team-member-clients').removeAttr('checked');
     $('#re-assign-team-member-clients').addClass('de-activate').removeAttr('href');

});

$('#select-team-member-clients').change(function(){

     $('#re-assign-team-member-clients').removeClass('de-activate').attr('href', '#re-assign-clients');
     $('#re-assign-team-member-clients').attr('rel', 'modal:open');

     if($(this).is(":checked") && $('#select-team-member').val() == "Bloggs, Joe") {
          $('#dashboard-clients-table .joe-bloggs').toggleClass('selected-item');
          $('#dashboard-clients-table .joe-bloggs .client-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "Carter, Simon") {
          $('#dashboard-clients-table .simon-carter').toggleClass('selected-item');
          $('#dashboard-clients-table .simon-carter .client-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "Harper, David") {
          $('#dashboard-clients-table .david-harper').toggleClass('selected-item');
          $('#dashboard-clients-table .david-harper .client-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "McDermot, Shiobhan") {
          $('#dashboard-clients-table .shiobhan-mcdermot').toggleClass('selected-item');
          $('#dashboard-clients-table .shiobhan-mcdermot .client-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "Nixon, Hannah") {
          $('#dashboard-clients-table .hannah-nixon').toggleClass('selected-item');
          $('#dashboard-clients-table .hannah-nixon .client-title').toggleClass('checked');
     } else {
          $('#dashboard-clients-table tr').removeClass('selected-item');
          $('#dashboard-clients-table tr .client-title').removeClass('checked');

          $('#re-assign-team-member-clients').addClass('de-activate').removeAttr('href');
     }
});
/////////////// STEP 3 - END ///////////////

/////////////// STEP 4 - START ///////////////
$('.select-deputy-type').change(function(){

     $('.client-filter').find('.deputy-type-selected').css('display', 'inline-block');

     $('.client-filter').find('.step-1.filter-b').addClass('step-1-filter-active');

     $(this).parent().addClass('step-2-filter-active');

     if($(this).val() == "Lay") {
          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.deputy-lay').show();
     } else if ($(this).val() == "Professional") {
          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.deputy-professional').show();
     } else if ($(this).val() == "Public authority") {
          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.deputy-public-authority').show();
     } else {
          $('#dashboard-clients-table tbody tr').show();
          $('#dashboard-clients-table tbody tr.details-row').hide();
     }

     $('#select-all-deputy-types').parent().removeClass('checked');
     $('#select-all-deputy-types').removeAttr('checked');
     $('#re-assign-deputy-type').addClass('de-activate').removeAttr('href');

});

$('#select-all-deputy-types').change(function(){

     $('#re-assign-deputy-type').removeClass('de-activate').attr('href', '#re-assign-clients');
     $('#re-assign-deputy-type').attr('rel', 'modal:open');

     if($(this).is(":checked") && $('.select-deputy-type').val() == "Lay") {
          $('#dashboard-clients-table .deputy-lay').toggleClass('selected-item');
          $('#dashboard-clients-table .deputy-lay .client-title').toggleClass('checked');
     } else if($(this).is(":checked") && $('.select-deputy-type').val() == "Professional") {
          $('#dashboard-clients-table .deputy-professional').toggleClass('selected-item');
          $('#dashboard-clients-table .deputy-professional .client-title').toggleClass('checked');
     } else if($(this).is(":checked") && $('.select-deputy-type').val() == "Public authority") {
          $('#dashboard-clients-table .deputy-public-authority').toggleClass('selected-item');
          $('#dashboard-clients-table .deputy-public-authority .client-title').toggleClass('checked');
     } else {
          $('#dashboard-clients-table tr').removeClass('selected-item');
          $('#dashboard-clients-table tr .client-title').removeClass('checked');

          $('#re-assign-deputy-type').addClass('de-activate').removeAttr('href');
     }
});
/////////////// STEP 4 - END ///////////////

/////////////// CHANGES TO REASSIGN - START ///////////////
$(document).ready(function () {
     $('input[name="re-assign-client"]').click(function(){

          if($(this).is(":checked")) {
               $(this).parent().addClass("checked");
               $(this).attr('checked', 'checked');
               $(this).closest('tr').addClass('selected-item change-details');

               $('.re-assign-my-clients').removeClass('de-activate');
               $('.re-assign-my-clients').attr('href', '#re-assign-clients');
               $('.re-assign-my-clients').attr('rel', 'modal:open');

               // $('.client-filter').find('.filter-numbers').css('display', 'flex');

               $('.client-filter').find('.filter-numbers').addClass('selected');

               $('.filter-panel.client-controller .cancel-re-assign').show();
               $('.filter-panel.client-controller .clear-filter').hide();

               if ($('.filter-category').val() === 'My clients') {
                    $('.re-assign-panel.client-controller').show();
                    $('.filter-panel.client-controller').hide();

                    $('.client-filter').find('.filter-select-all-clear, .filter, .step-2').show();
                    $('.client-filter').find('.main-filter').removeClass('re-assign-active');

                    $('.client-filter').find('.main-filter, .step-1').removeClass('de-activated');
                    $('.client-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');

                    $('.client-filter').find('.step-2 .re-assign-title.title-label').removeClass('hide');

                    $('.client-filter').find('.cancel-re-assign').show();
                    // $('.client-filter .filter-select-all-clear').show();

                    $('.client-filter .re-assign-panel.client-controller .filter, .client-filter .re-assign-panel.client-controller .filter .step-2').show();
               } else {
                    $('.client-filter').find('.main-filter, .step-1').addClass('de-activated');
                    $('.client-filter').find('.step-1').addClass('step-1-filter-active');
                    $('.client-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').attr('disabled', 'disabled');

                    $('.client-filter').find('.step-2 .re-assign-title.title-label').removeClass('hide');

                    $('.client-filter').find('.filter-select-all-clear, .step-2').show();
                    $('.client-filter').find('.main-filter').addClass('re-assign-active');

                    $('.re-assign-panel.client-controller').hide();
                    $('.filter-panel.client-controller').show();

                    // $('.client-filter .filter-select-all-clear').hide();
               }

          } else {
               $(this).parent().removeClass("checked");
               $(this).removeAttr('checked', 'checked');
               $(this).closest('tr').removeClass('selected-item change-details');

               $('#select-all-clients').parent().removeClass('checked');
               $('#select-all-clients').removeAttr('checked');

               $('.client-filter').find('.filter-numbers .number').text('302').addClass('three-figures');

               // $('.client-filter').find('.filter-numbers').hide();

               if ($('input[name="re-assign-client"][checked]').length === 0) {
                    // $('.client-filter').find('.filter-numbers').hide();

                    $('.client-filter').find('.filter-numbers').removeClass('selected');
                    $('.client-filter').find('.filter-numbers .number').text('302').addClass('three-figures');

                    $('.client-filter').find('.main-filter, .step-1').removeClass('de-activated');
                    $('.client-filter').find('.step-1').addClass('step-1-filter-active');
                    // $('.client-filter').find('.step-1').removeClass('step-1-filter-active');
                    $('.client-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');

                    $('.client-filter').find('.step-2 .re-assign-title.title-label').addClass('hide');

                    if ($('.filter-category').val() === 'My clients') {
                         $('.client-filter').find('.filter-select-all-clear').hide();
                    } else {
                         $('.client-filter').find('.filter-select-all-clear, .filter-select-all-clear .clear-filter').show();
                         $('.client-filter').find('.step-2, .filter-select-all-clear .cancel-re-assign').hide();
                    }

                    // $('.client-filter').find('.filter-select-all-clear, .filter-select-all-clear .clear-filter').show();
                    // $('.client-filter').find('.step-2, .filter-select-all-clear .cancel-re-assign').hide();
                    $('.client-filter').find('.main-filter').addClass('re-assign-active');

                    $('.re-assign-my-clients').removeAttr('href').addClass('de-activate');
                    $('.re-assign-my-clients').removeAttr('rel');

                    $('.client-filter').find('.filter').hide();

                    // $('.client-filter .filter-select-all-clear').hide();

                    $('.re-assign-panel.client-controller').hide();
                    $('.filter-panel.client-controller').show();
               }

          }

     });
});

$(document).ready(function(){
     var $checkboxes = $('#dashboard-clients-table tr input[type="checkbox"]');

     $checkboxes.change(function(){
          var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
          $('.client-filter').find('.filter-numbers .number').text(countCheckedCheckboxes).removeClass('three-figures');

          if (countCheckedCheckboxes == 0) {
               $('.client-filter').find('.filter-numbers .number').text('302').addClass('three-figures');
          } else if (countCheckedCheckboxes <= 1) {
               $('.client-filter').find('.filter-numbers .desc').text('client');
          } else {
               $('.client-filter').find('.filter-numbers .desc').text('clients');
          }
     });
});
/////////////// CHANGES TO REASSIGN - START ///////////////

/////////////// ------------------------------ USER NAME POPULATION - START ------------------------------ ///////////////
$('#confirm-re-assign-client').click(function(){
     $('#re-assign-client-confirmation-message').slideDown();

     setTimeout(function() {
          $('#re-assign-client-confirmation-message').slideUp();
     }, 5000);

     // $('#dashboard-clients-table tr.selected-item').hide();

     $('.client-filter .filter-numbers').removeClass('selected');
     $('.client-filter .filter-numbers .number').text('302').addClass('three-figures');
     $('.client-filter .filter-numbers .desc').text('clients');

     // ========================= Changes to Name to David Harper ========================= //
     // Individual
     if ($('#filter-category').val() === 'My clients') {
          $('#dashboard-clients-table tr.selected-item').find('.user-name-change').text('Harper, David');
          $('#dashboard-clients-table tr').removeClass('selected-item');
          $('#dashboard-clients-table tr.change-details').addClass('david-harper');
          $('#dashboard-clients-table tr.change-details').removeClass('joe-bloggs');
          $('#dashboard-clients-table tr .client-title').removeClass('checked');
          $('#dashboard-clients-table tr .client-title').find('input').removeAttr('checked');

          $('.filter-panel').show().find('.step-2, .step-3, .step-4').hide();
          $('.re-assign-panel').hide().find('.step-2, .step-3, .step-4').hide();
          $('.filter-select-all-clear').hide();

     } else {
          $('#dashboard-clients-table tr.selected-item').hide();
          $('#dashboard-clients-table tr.selected-item').find('.user-name-change').text('Harper, David');
          $('#dashboard-clients-table tr').removeClass('selected-item');
          $('#dashboard-clients-table tr.change-details').addClass('david-harper');
          $('#dashboard-clients-table tr.change-details').removeClass('joe-bloggs');
          $('#dashboard-clients-table tr .client-title').removeClass('checked');
          $('#dashboard-clients-table tr .client-title').find('input').removeAttr('checked');

          $('.filter-panel').find('.step-2, .step-3, .step-4').hide();
          $('.filter-select-all-clear').find('.clear-filter').show();
          $('.filter-select-all-clear').find('.cancel-re-assign').hide();
          $('.main-filter, .step-1').removeClass('de-activated');
          $('.main-filter, .step-1').find('input').removeAttr('disabled');
     }

     // Select all
     if($('#select-all-clients').is(":checked")) {
          $('.filter-panel').show().find('.step-1, .step-2, .step-3, .step-4, .filter-select-all-clear').hide();
          $('.filter-panel').find('.main-filter').removeClass('filter-active');
          $('.filter-panel').find('input, select').prop('selectedIndex',0);

          $('.re-assign-panel').hide().find('.step-2, .step-3, .step-4').hide();

          $('#dashboard-clients-table tr').show();
          $('#dashboard-clients-table tr.change-details').find('.user-name-change').text('Harper, David');
     }

});
/////////////// ------------------------------ USER NAME POPULATION - END ------------------------------ ///////////////

$('.search-table').keyup(function(){
     $(this).parent().parent().addClass('filter-active re-assign-active');
     $('.caseworker-search').find('.filter-select-all-clear').show();
});
