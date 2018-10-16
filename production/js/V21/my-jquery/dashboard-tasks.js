// =================================== Dashboard - JAVASCRIPT =================================== //

$('.re-assign-panel.task-controller').hide();
$('.filter-panel.task-controller .cancel-re-assign').hide();

/////////////// ------------------------------ FILTER 1 - START ------------------------------ ///////////////
$('.filter-tasks-category').change(function(){

     $(this).parents('.filter-panel').find('.my-tasks-assign-to, .tasks-team-user-in-team, #select-deputy-type, .my-tasks-assign-to, #my-tasks-user-in-team, #my-tasks-user-another-team, .my-tasks-team').prop('selectedIndex',0);

     $('.task-filter').find('.step-2, .step-3, .step-4').hide();
     $('.task-filter').find('.step-1, .step-2, .step-3').removeClass('step-1-filter-active step-2-filter-active step-3-filter-active');

     if($(this).val() == "My tasks") {
          $('.task-filter').find('.filter').css('display', 'inline-block');
          $('.task-filter').find('.step-1').hide();

          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.my-task').show();

          $(this).parents('.filter-panel').find('.my-tasks-assign-to option[value="Me"]').hide();

     } else if ($(this).val() == "My teams tasks") {
          $('.task-filter').find('.filter').css('display', 'inline-block');
          $('.task-filter').find('.step-1').hide();
          $('.task-filter').find('.step-2').hide();
          $('.task-filter').find('.step-1.filter-a').css('display', 'inline-block');

          $('.task-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-tasks-table tbody tr').show();
          $('#dashboard-tasks-table tbody tr.details-row').hide();

          $(this).parents('.filter-panel').find('.my-tasks-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Task type") {
          $('.task-filter').find('.filter').css('display', 'inline-block');
          $('.task-filter').find('.step-1').hide();
          $('.task-filter').find('.step-2').hide();
          $('.task-filter').find('.step-1.filter-b').css('display', 'inline-block');

          $('.task-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-tasks-table tbody tr').show();
          $('#dashboard-tasks-table tbody tr.details-row').hide();

          $(this).parents('.filter-panel').find('.my-tasks-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Another team") {
          $('.task-filter').find('.filter').css('display', 'inline-block');
          $('.task-filter').find('.step-1').hide();
          $('.task-filter').find('.step-2').hide();
          $('.task-filter').find('.step-1.filter-d').css('display', 'inline-block');

          $('.task-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-tasks-table tbody tr').show();
          $('#dashboard-tasks-table tbody tr.details-row').hide();

          $(this).parents('.filter-panel').find('.my-tasks-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Another user") {
          $('.task-filter').find('.filter').css('display', 'inline-block');
          $('.task-filter').find('.step-1').hide();
          $('.task-filter').find('.step-2').hide();
          $('.task-filter').find('.step-1.filter-e').css('display', 'inline-block');

          $('.task-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-tasks-table tbody tr').show();
          $('#dashboard-tasks-table tbody tr.details-row').hide();

          $(this).parents('.filter-panel').find('.my-tasks-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Due date") {
          $('.task-filter').find('.filter').css('display', 'inline-block');
          $('.task-filter').find('.step-1').hide();
          $('.task-filter').find('.step-2').hide();
          $('.task-filter').find('.step-1.filter-c').css('display', 'inline-block');

          $('.task-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-tasks-table tbody tr').show();
          $('#dashboard-tasks-table tbody tr.details-row').hide();

          $(this).parents('.filter-panel').find('.my-tasks-assign-to option[value="Me"]').show();

     } else {
          $('.task-filter').find('.filter').hide();
          $('.task-filter').find('.step-1, .step-2').hide();
          $('#dashboard-tasks-table tbody tr').show();
          $('#dashboard-tasks-table tbody tr.details-row').hide();

          $('.task-filter').find('.main-filter').removeClass('re-assign-active');

          $(this).parents('.filter-panel').find('.my-tasks-assign-to option[value="Me"]').show();
     }

     $('#dashboard-tasks-table tbody tr').removeClass('selected-item');
     $('#dashboard-tasks-table tbody tr .task-title').removeClass('checked');

     // $('.task-filter').find('.filter-numbers').hide();

     $(this).parent().parent().addClass('filter-active');

     $('.task-filter .filter-select-all-clear').show();

     $('.task-filter #select-all-tasks').removeAttr('checked');
     $('.task-filter .select-all-tasks').removeClass('checked');

});
/////////////// ------------------------------ FILTER 1 - START ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 1 - START ------------------------------ ///////////////
/////////////// STEP 1 - START ///////////////
$('.my-tasks-assign-to').change(function(){

     $('.task-filter').find('.step-2').addClass('step-2-filter-active');

     if ($(this).val() === '') {
          $('.task-filter').find('.step-4').css('display', 'inline-block');

          $('.task-filter').find('.step-3').hide();
     } else if ($(this).val() == 'Me') {
          $('.task-filter').find('.step-4').css('display', 'inline-block');

          $('.task-filter').find('.step-3').hide();

     } else if ($(this).val() == 'User in my team') {
          $('.task-filter').find('.step-3').css('display', 'inline-block');
          $('.task-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.task-filter').find('.step-3 .answer-my-team').css('display', 'inline-block');

          $('.task-filter').find('.step-3 .answer-task-team, .step-3 .answer-another-user').hide();
          $('.task-filter').find('.step-4').hide();

     } else if ($(this).val() == 'Another user') {
          $('.task-filter').find('.step-3').css('display', 'inline-block');
          $('.task-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.task-filter').find('.step-3 .answer-another-user').css('display', 'inline-block');

          $('.task-filter').find('.step-3 .answer-task-team, .step-3 .answer-my-team').hide();
          $('.task-filter').find('.step-4').hide();

     } else if ($(this).val() == 'My team') {
          $('.task-filter').find('.step-3').css('display', 'inline-block');
          $('.task-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.task-filter').find('.step-4').css('display', 'inline-block');

          $('.task-filter').find('.step-3').hide();

     } else if ($(this).val() == 'Other team') {
          $('.task-filter').find('.step-3').css('display', 'inline-block');
          $('.task-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.task-filter').find('.step-3 .answer-task-team').css('display', 'inline-block');

          $('.task-filter').find('.step-3 .answer-another-user, .step-3 .answer-my-team').hide();
          $('.task-filter').find('.step-4').hide();

     }

     $(this).parent().parent().addClass('filter-active');

     $('.task-filter').find('.filter-select-all-clear').show();
});

$('.my-tasks-user-in-team, .my-tasks-user-another-team').keyup(function(){
     $(this).parent().parent().addClass('step-3-filter-active');

     $('.task-filter').find('.step-4').css('display', 'inline-block');
});

$('.my-tasks-team').change(function(){
     $(this).parent().parent().addClass('step-3-filter-active');

     $('.task-filter').find('.step-4').css('display', 'inline-block');
});


$('#select-all-tasks').change(function(){

     $('.filter-panel.task-controller .cancel-re-assign').show();
     $('.filter-panel.task-controller .clear-filter').hide();

     // 1 - My clients
     if($(this).is(":checked") && $('#filter-tasks-category').val() == 'My tasks') {
          // $('.task-filter').find('.filter-numbers').css('display', 'flex');
          $('.task-filter').find('.filter-numbers .number').text('2');
          $('.tasks-name').append(`
               <li>Mr Gerald Brackens</li>
               <li>Mr Oscar Chaplin</li>
          `);
     }

     // 2 - My teams tasks
     if($(this).is(":checked") && $('#filter-tasks-category').val() == 'My teams tasks') {
          // $('.task-filter').find('.filter-numbers').css('display', 'flex');
          $('.task-filter').find('.filter-numbers .number').text('1');
          $('.task-filter').find('.filter-numbers .desc').text('task');
          $('.tasks-name').append(`
               <li>Miss Marguerite Owens</li>
          `);
     }

     // 3 - Task type
     if($('#filter-tasks-category').val() == 'Task type' && $(this).parents('.filter-panel').find('.my-tasks-assign-to').val() == 'User in my team') {
          $('.task-filter .answer-task-team').hide();
     }

     if($(this).is(":checked") && $('#filter-tasks-category').val() == 'Task type' && $('#select-deputy-type').val() == 'Lay') {
          // $('.task-filter').find('.filter-numbers').css('display', 'flex');
          $('.task-filter').find('.filter-numbers .number').text('4');
          $('.tasks-name').append(`
               <li>Mr Gerald Brackens</li>
               <li>Miss Marguerite Owens</li>
               <li>Mrs Celia Carr</li>
               <li>Ms Erika Neal</li>
          `);
     } else if($(this).is(":checked") && $('#filter-tasks-category').val() == 'Task type' && $('#select-deputy-type').val() == 'Professional') {
          // $('.task-filter').find('.filter-numbers').css('display', 'flex');
          $('.task-filter').find('.filter-numbers .number').text('2');
          $('.tasks-name').append(`
               <li>Dr Marcus Roy</li>
               <li>Mr Oscar Chaplin</li>
          `);
     } else if($(this).is(":checked") && $('#filter-tasks-category').val() == 'Task type' && $('#select-deputy-type').val() == 'Public authority') {
          // $('.task-filter').find('.filter-numbers').css('display', 'flex');
          $('.task-filter').find('.filter-numbers .number').text('1');
          $('.task-filter').find('.filter-numbers .desc').text('task');
          $('.tasks-name').append(`
               <li>Mr Harvey Stevenson</li>
          `);
     }

     // 4 - Due date
     if($(this).is(":checked") && $('#filter-tasks-category').val() == 'Due date') {
          // $('.task-filter').find('.filter-numbers').css('display', 'flex');
          $('.task-filter').find('.filter-numbers .number').text('6');
          $('.tasks-name').append(`
               <li>Mr Gerald Brackens</li>
               <li>Mr Harvey Stevenson</li>
               <li>Miss Marguerite Owens</li>
               <li>Mrs Celia Carr</li>
               <li>Dr Marcus Roy</li>
               <li>Ms Erika Neal</li>
          `);
     }

     // 5 - Unassigned
     if ($(this).is(":checked") && $('#filter-tasks-category').val() == 'Unassigned') {
          // $('.task-filter').find('.filter-numbers').css('display', 'flex');
          $('.task-filter').find('.filter-numbers .number').text('1');
          $('.task-filter').find('.filter-numbers .desc').text('task');
          $('.tasks-name').append(`
               <li>Mr Oscar Chaplin</li>
          `);
          $('#re-assign-tasks h2').text('');
     }

     if($(this).is(":checked")) {
          $('.re-assign-my-tasks').removeClass('de-activate').attr('href', '#re-assign-tasks');
          $('.re-assign-my-tasks').attr('rel', 'modal:open');

          $('#dashboard-tasks-table tbody tr').addClass('selected-item change-details');
          $('#dashboard-tasks-table tbody tr input[name="re-assign-task"]').parent().addClass('checked');
          $('#dashboard-tasks-table tbody tr input[name="re-assign-task"]').attr('checked', 'checked');

          $('.task-filter').find('.step-2').show();
          $('.task-filter').find('.main-filter').addClass('re-assign-active');
          $('.task-filter').find('.re-assign-title.title-label').removeClass('hide');

          $('.task-filter').find('.main-filter, .step-1').addClass('de-activated');
          $('.task-filter').find('.step-1').addClass('step-1-filter-active');
          $('.task-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').attr('disabled' ,'disabled');

     } else {
          $('.re-assign-my-tasks').addClass('de-activate').removeAttr('href');
          $('.re-assign-my-tasks').removeAttr('rel');

          $('.task-filter').find('.step-2').hide();
          $('.task-filter').find('.step-1, .main-filter').removeClass('de-activated');
          // $('.task-filter').find('.step-1').removeClass('step-1-filter-active');
          $('.task-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');
          $('.task-filter').find('.filter-select-all-clear .cancel-re-assign').hide();
          $('.task-filter').find('.filter-select-all-clear .clear-filter').show();

          $('#dashboard-tasks-table tbody tr').removeClass('selected-item change-details');
          $('#dashboard-tasks-table tbody tr input[name="re-assign-task"]').parent().removeClass('checked');
          $('#dashboard-tasks-table tbody tr input[name="re-assign-task"]').removeAttr('checked');
     }

});
/////////////// STEP 1 - END ///////////////
/////////////// ------------------------------ OPTION 1 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 2 - START ------------------------------ ///////////////
$('.tasks-team-user-in-team').keyup(function(){
     $('.task-filter').find('.step-1.filter-a').addClass('step-1-filter-active');
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks`);
     $('.filter-b').show();
});

$('.autocomplete-selected').click(function(){
     if ($(this).val() == 'Joe Bloggs') {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.joe-bloggs').show();
     }
});
/////////////// ------------------------------ OPTION 2 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 3 - START ------------------------------ ///////////////
// $('.filter-type-task').keyup(function(){
//      $('.task-filter').find('.step-1.filter-b').addClass('step-1-filter-active');
// });
//
// $('.caseworker-filter .filter-type-task').keyup(function(){
//      $('.caseworker-filter .task-filter').find('.filter-select-all-clear').show();
// });

$('#filter-type-task').change(function(){
     $('.task-filter').find('.step-1.filter-b').addClass('step-1-filter-active');
     $('#dashboard-tasks-table tbody tr, #completed-tasks-table tbody tr').hide();
     if ($(this).val() == 'CWRD') {
          $('#dashboard-tasks-table tbody tr.case-work-reply-due, #completed-tasks-table tbody tr.case-work-reply-due').show();
     } else if ($(this).val() == 'ORRE') {
          $('#dashboard-tasks-table tbody tr.order-review-the-order, #completed-tasks-table tbody tr.order-review-the-order').show();
     } else if ($(this).val() == 'ORAL') {
          $('#dashboard-tasks-table tbody tr.order-allocate-to-team, #completed-tasks-table tbody tr.order-allocate-to-team').show();
     } else if ($(this).val() == 'INAR') {
          $('#dashboard-tasks-table tbody tr.intro-arrange-settling-in, #completed-tasks-table tbody tr.intro-arrange-settling-in').show();
     } else if ($(this).val() == 'INSE') {
          $('#dashboard-tasks-table tbody tr.intro-settling-in-call, #completed-tasks-table tbody tr.intro-settling-in-call').show();
     } else if ($(this).val() == 'INNDR') {
          $('#dashboard-tasks-table tbody tr.intro-new-deputy-report, #completed-tasks-table tbody tr.intro-new-deputy-report').show();
     } else if ($(this).val() == 'VICO') {
          $('#dashboard-tasks-table tbody tr.visit-commission, #completed-tasks-table tbody tr.visit-commission').show();
     } else if ($(this).val() == 'VIRE') {
          $('#dashboard-tasks-table tbody tr.visit-required, #completed-tasks-table tbody tr.visit-required').show();
     } else if ($(this).val() == 'VIURE') {
          $('#dashboard-tasks-table tbody tr.visit-urgent-required, #completed-tasks-table tbody tr.visit-urgent-required').show();
     } else if ($(this).val() == 'VIRD') {
          $('#dashboard-tasks-table tbody tr.visit-report-due, #completed-tasks-table tbody tr.visit-report-due').show();
     }
});

$('.caseworker-filter .task-filter').find('.step-1.filter-b').show();

$('.caseworker-filter #filter-type-task').change(function(){
     $('.caseworker-filter .task-filter').find('.filter-select-all-clear').show();
});


// $('.filter-type-task').autocomplete({
//      lookup: currencies,
//      onSelect: function (suggestion) {
//           suggestion = suggestion.value;
//           suggestion = suggestion.toLowerCase().replace(new RegExp(' ', 'g'), '-');
//
//           while (suggestion.indexOf('--') > -1) {
//                suggestion = suggestion.replace('--', '-');
//           }
//
//           $('#dashboard-tasks-table tbody tr').hide();
//           $('#dashboard-tasks-table tbody tr.' + suggestion).show();
//      }
// });


/////////////// ------------------------------ OPTION 3 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 4 - START ------------------------------ ///////////////
$('#my-tasks-due-date').change(function(){

     $(this).parent().parent().addClass('step-1-filter-active');

     if($(this).val() == "Today") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.today').show();
     } else if ($(this).val() == "Next 7 days") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.next-7-days').show();
     } else if ($(this).val() == "Next month") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.next-month').show();
     } else if ($(this).val() == "Next 60 days") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.next-60-days').show();
     } else if ($(this).val() == "All") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.all').show();
     } else {
          $('#dashboard-tasks-table tbody tr').show();
          $('#dashboard-tasks-table tbody tr.details-row').hide();
     }
});
/////////////// ------------------------------ OPTION 4 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 5 - START ------------------------------ ///////////////
$('#my-tasks-another-team').change(function(){
     $(this).parent().parent().addClass('step-1-filter-active');

     if ($(this).val() === 'Team 1') {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.team-one').show();
     }
});
/////////////// ------------------------------ OPTION 5 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 6 - START ------------------------------ ///////////////
$('.filter-another-user').keyup(function(){
     $(this).parent().parent().addClass('step-1-filter-active');
     $('.filter-b').show();
});
/////////////// ------------------------------ OPTION 6 - END ------------------------------ ///////////////


/////////////// STEP 3 - START ///////////////
$('#select-team-member').change(function(){

     $('.task-filter').find('.team-member-selected').css('display', 'inline-block');

     $(this).parent().addClass('step-2-filter-active');

     if($(this).val() == "Bloggs, Joe") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.joe-bloggs').show();
     } else if ($(this).val() == "Carter, Simon") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.simon-carter').show();
     } else if ($(this).val() == "Harper, David") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.david-harper').show();
     } else if ($(this).val() == "McDermot, Shiobhan") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.shiobhan-mcdermot').show();
     } else if ($(this).val() == "Nixon, Hannah") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.hannah-nixon').show();
     } else {
          $('#re-assign-team-member-tasks').addClass('de-activate').removeAttr('href');
     }

     $('#select-team-member-tasks').parent().removeClass('checked');
     $('#select-team-member-tasks').removeAttr('checked');
     $('#re-assign-team-member-tasks').addClass('de-activate').removeAttr('href');

});

$('#select-team-member-tasks').change(function(){

     $('#re-assign-team-member-tasks').removeClass('de-activate').attr('href', '#re-assign-tasks');
     $('#re-assign-team-member-tasks').attr('rel', 'modal:open');

     if($(this).is(":checked") && $('#select-team-member').val() == "Bloggs, Joe") {
          $('#dashboard-tasks-table .joe-bloggs').toggleClass('selected-item');
          $('#dashboard-tasks-table .joe-bloggs .task-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "Carter, Simon") {
          $('#dashboard-tasks-table .simon-carter').toggleClass('selected-item');
          $('#dashboard-tasks-table .simon-carter .task-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "Harper, David") {
          $('#dashboard-tasks-table .david-harper').toggleClass('selected-item');
          $('#dashboard-tasks-table .david-harper .task-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "McDermot, Shiobhan") {
          $('#dashboard-tasks-table .shiobhan-mcdermot').toggleClass('selected-item');
          $('#dashboard-tasks-table .shiobhan-mcdermot .task-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "Nixon, Hannah") {
          $('#dashboard-tasks-table .hannah-nixon').toggleClass('selected-item');
          $('#dashboard-tasks-table .hannah-nixon .task-title').toggleClass('checked');
     } else {
          $('#dashboard-tasks-table tr').removeClass('selected-item');
          $('#dashboard-tasks-table tr .task-title').removeClass('checked');

          $('#re-assign-team-member-tasks').addClass('de-activate').removeAttr('href');
     }
});
/////////////// STEP 3 - END ///////////////

/////////////// STEP 4 - START ///////////////
$('#select-deputy-type').change(function(){

     $('.task-filter').find('.deputy-type-selected').css('display', 'inline-block');

     $('.task-filter').find('.step-1.filter-b').addClass('step-1-filter-active');
     $('.task-filter').find('.step-2').css('display', 'inline-block');

     $(this).parent().addClass('step-2-filter-active');

     if($(this).val() == "Lay") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.deputy-lay').show();
     } else if ($(this).val() == "Professional") {
          $('#dashboard-tasks-table tbody').hide();
          $('#dashboard-tasks-table tbody tr.deputy-professional').show();
     } else if ($(this).val() == "Public authority") {
          $('#dashboard-tasks-table tbody tr').hide();
          $('#dashboard-tasks-table tbody tr.deputy-public-authority').show();
     } else {
          $('#dashboard-tasks-table tbody tr').show();
          $('#dashboard-tasks-table tbody tr.details-row').hide();
     }

     $('#re-assign-deputy-type').addClass('de-activate').removeAttr('href');

});

/////////////// STEP 4 - END ///////////////

/////////////// CHANGES TO REASSIGN - START ///////////////
$(document).ready(function () {
     $('input[name="re-assign-task"]').click(function(){

          if($(this).is(":checked")) {
               $(this).parent().addClass("checked");
               $(this).attr('checked', 'checked');
               $(this).closest('tr').addClass('selected-item change-details');

               $('.re-assign-my-tasks').removeClass('de-activate');
               $('.re-assign-my-tasks').attr('href', '#re-assign-tasks');
               $('.re-assign-my-tasks').attr('rel', 'modal:open');

               // $('.task-filter').find('.filter-numbers').css('display', 'flex');

               $('.task-filter').find('.filter-numbers').addClass('selected');

               $('.filter-panel.task-controller .cancel-re-assign').show();
               $('.filter-panel.task-controller .clear-filter').hide();

               if ($('#filter-tasks-category').val() === '') {
                    $('.re-assign-panel.task-controller').show();
                    $('.filter-panel.task-controller').hide();

                    $('.task-filter').find('.filter-select-all-clear, .step-2').show();
                    $('.task-filter').find('.main-filter').removeClass('re-assign-active');

                    $('.task-filter').find('.main-filter, .step-1').removeClass('de-activated');
                    $('.task-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');

                    $('.task-filter').find('.step-2 .re-assign-title.title-label').removeClass('hide');

                    $('.re-assign-panel.task-controller .filter, .re-assign-panel.task-controller .filter .step-2').show();

               } else {
                    $('.task-filter').find('.main-filter, .step-1').addClass('de-activated');
                    $('.task-filter').find('.step-1').addClass('step-1-filter-active');
                    $('.task-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').attr('disabled', 'disabled');

                    $('.task-filter').find('.step-2 .re-assign-title.title-label').removeClass('hide');

                    $('.task-filter').find('.filter-select-all-clear, .step-2').show();
                    $('.task-filter').find('.main-filter').addClass('re-assign-active');

                    $('.re-assign-panel.task-controller').hide();
                    $('.filter-panel.task-controller').show();
               }

          } else {
               $(this).parent().removeClass("checked");
               $(this).removeAttr('checked', 'checked');
               $(this).closest('tr').removeClass('selected-item change-details');

               $('#select-all-tasks').parent().removeClass('checked');
               $('#select-all-tasks').removeAttr('checked');

               if ($('input[name="re-assign-task"][checked]').length === 0) {
                    // $('.task-filter').find('.filter-numbers').hide();

                    $('.task-filter').find('.filter-numbers').removeClass('selected');

                    $('.task-filter').find('.main-filter, .step-1').removeClass('de-activated');
                    $('.task-filter').find('.step-1').addClass('step-1-filter-active');
                    // $('.task-filter').find('.step-1').removeClass('step-1-filter-active');
                    $('.task-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');

                    $('.task-filter').find('.step-2 .re-assign-title.title-label').addClass('hide');

                    $('.task-filter').find('.filter-select-all-clear, .filter-select-all-clear .clear-filter').show();
                    $('.task-filter').find('.step-2, .filter-select-all-clear .cancel-re-assign, .step-3').hide();
                    $('.task-filter').find('.main-filter').addClass('re-assign-active');

                    $('.re-assign-my-tasks').removeAttr('href').addClass('de-activate');
                    $('.re-assign-my-tasks').removeAttr('rel');

                    $('.re-assign-panel.task-controller').hide();
                    $('.filter-panel.task-controller').show();
               }

          }

     });
});

$(document).ready(function(){
     var $checkboxes = $('#dashboard-tasks-table tr input[type="checkbox"]');

     $checkboxes.change(function(){
          var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
          $('.task-filter').find('.filter-numbers .number').text(countCheckedCheckboxes);

          if (countCheckedCheckboxes == 0) {
               $('.task-filter').find('.filter-numbers .number').text('15');
          } else if (countCheckedCheckboxes <= 1) {
               $('.task-filter').find('.filter-numbers .desc').text('task');
          } else {
               $('.task-filter').find('.filter-numbers .desc').text('tasks');
          }
     });
});
/////////////// CHANGES TO REASSIGN - END ///////////////

/////////////// ------------------------------ USER NAME POPULATION - START ------------------------------ ///////////////
$('#confirm-dashboard-re-assign-task').click(function(){
     $('#re-assign-task-confirmation-message').slideDown();

     setTimeout(function() {
          $('#re-assign-task-confirmation-message').slideUp();
     }, 5000);

     $('.task-filter .filter-numbers').removeClass('selected');
     $('.task-filter .filter-numbers .number').text('23').addClass('three-figures');
     $('.task-filter .filter-numbers .desc').text('clients');

     // $('#dashboard-tasks-table tr.selected-item').hide();

     // $('.task-filter .filter-numbers').hide();

     // ========================= Changes to Name to David Harper ========================= //
     // Individual
     if ($('#filter-tasks-category').val() === '') {
          $('#dashboard-tasks-table tr.selected-item').find('.user-name-change').text('Harper, David');
          $('#dashboard-tasks-table tr').removeClass('selected-item');
          $('#dashboard-tasks-table tr.change-details').addClass('david-harper');
          $('#dashboard-tasks-table tr.change-details').removeClass('joe-bloggs');
          $('#dashboard-tasks-table tr .task-title').removeClass('checked');
          $('#dashboard-tasks-table tr .task-title').find('input').removeAttr('checked');

          $('.filter-panel').show().find('.step-2, .step-3, .step-4').hide();
          $('.re-assign-panel').hide().find('.step-2, .step-3, .step-4').hide();
          $('.filter-select-all-clear').hide();

     } else {
          $('#dashboard-tasks-table tr.selected-item').hide();
          $('#dashboard-tasks-table tr.selected-item').find('.user-name-change').text('Harper, David');
          $('#dashboard-tasks-table tr').removeClass('selected-item');
          $('#dashboard-tasks-table tr.change-details').addClass('david-harper');
          $('#dashboard-tasks-table tr.change-details').removeClass('joe-bloggs');
          $('#dashboard-tasks-table tr .task-title').removeClass('checked');
          $('#dashboard-tasks-table tr .task-title').find('input').removeAttr('checked');

          $('.filter-panel').find('.step-2, .step-3, .step-4').hide();
          $('.filter-select-all-clear').find('.clear-filter').show();
          $('.filter-select-all-clear').find('.cancel-re-assign').hide();
          $('.main-filter, .step-1').removeClass('de-activated');
          $('.main-filter, .step-1').find('input').removeAttr('disabled');
     }

     // Select all
     if($('#select-all-tasks').is(":checked")) {
          $('.filter-panel').show().find('.step-1, .step-2, .step-3, .step-4, .filter-select-all-clear').hide();
          $('.filter-panel').find('.main-filter').removeClass('filter-active');
          $('.filter-panel').find('input, select').prop('selectedIndex',0);

          $('.re-assign-panel').hide().find('.step-2, .step-3, .step-4').hide();

          $('#dashboard-tasks-table tr').show();
          $('#dashboard-tasks-table tr.change-details').find('.user-name-change').text('Harper, David');
     }
});
/////////////// ------------------------------ USER NAME POPULATION - END ------------------------------ ///////////////
