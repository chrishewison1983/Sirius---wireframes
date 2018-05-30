// =================================== Dashboard - JAVASCRIPT =================================== //

$('.re-assign-panel.deputy-controller').hide();
$('.filter-panel.deputy-controller .cancel-re-assign').hide();

/////////////// ------------------------------ FILTER 1 - START ------------------------------ ///////////////
$('.filter-category-deputies').change(function(){

     $('.my-deputies-assign-to, #team-user-in-team, .select-deputy-type, .my-deputies-assign-to, #my-deputies-user-in-team, #my-deputies-user-another-team, .my-deputies-task-team').prop('selectedIndex',0);

     $('.deputy-filter').find('.step-2, .step-3, .step-4').hide();
     $('.deputy-filter').find('.step-1, .step-2, .step-3').removeClass('step-1-filter-active step-2-filter-active step-3-filter-active');

     if($(this).val() == "My deputies") {
          $('.deputy-filter').find('.filter').css('display', 'inline-block');
          $('.deputy-filter').find('.step-1').hide();

          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.my-deputy').show();

          $('.my-deputies-assign-to option[value="Me"]').hide();

     } else if ($(this).val() == "My teams deputies") {
          $('.deputy-filter').find('.filter').css('display', 'inline-block');
          $('.deputy-filter').find('.step-1').hide();
          $('.deputy-filter').find('.step-2').hide();
          $('.deputy-filter').find('.step-1.filter-a').css('display', 'inline-block');

          $('.deputy-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-deputies-table tbody tr').show();

          $('.my-deputies-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Deputy type") {
          $('.deputy-filter').find('.filter').css('display', 'inline-block');
          $('.deputy-filter').find('.step-1').hide();
          $('.deputy-filter').find('.step-2').hide();
          $('.deputy-filter').find('.step-1.filter-b').css('display', 'inline-block');

          $('.deputy-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-deputies-table tbody tr').show();

          $('.my-deputies-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Another team") {
          $('.deputy-filter').find('.filter').css('display', 'inline-block');
          $('.deputy-filter').find('.step-1').hide();
          $('.deputy-filter').find('.step-2').hide();
          $('.deputy-filter').find('.step-1.filter-c').css('display', 'inline-block');

          $('.deputy-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-deputies-table tbody tr').show();

          $('.my-deputies-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Another user") {
          $('.deputy-filter').find('.filter').css('display', 'inline-block');
          $('.deputy-filter').find('.step-1').hide();
          $('.deputy-filter').find('.step-2').hide();
          $('.deputy-filter').find('.step-1.filter-d').css('display', 'inline-block');

          $('.deputy-filter').find('.main-filter').addClass('re-assign-active');

          $('#dashboard-deputies-table tbody tr').show();

          $('.my-deputies-assign-to option[value="Me"]').show();

     } else {
          $('.deputy-filter').find('.filter').hide();
          $('.deputy-filter').find('.step-1, .step-2').hide();
          $('#dashboard-deputies-table tr').show();

          $('.my-deputies-assign-to option[value="Me"]').show();
     }

     $('#dashboard-deputies-table tr').removeClass('selected-item');
     $('#dashboard-deputies-table tr .deputy-title').removeClass('checked');

     $('.deputy-filter').find('.filter-numbers').hide();

     $(this).parent().parent().addClass('filter-active');

     $('.deputy-filter .filter-select-all-clear').show();
});
/////////////// ------------------------------ FILTER 1 - START ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 1 - START ------------------------------ ///////////////
/////////////// STEP 1 - START ///////////////
$('.my-deputies-assign-to').change(function(){

     $('.deputy-filter').find('.step-2').addClass('step-2-filter-active');

     $('.deputy-filter .filter-select-all-clear').show();

     if ($(this).val() == 'Me') {
          $('.deputy-filter').find('.step-4').css('display', 'inline-block');

          $('.deputy-filter').find('.step-3').hide();

     } else if ($(this).val() == 'User in my team') {
          $('.deputy-filter').find('.step-3').css('display', 'inline-block');
          $('.deputy-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.deputy-filter').find('.step-3 .answer-my-team').css('display', 'inline-block');

          $('.deputy-filter').find('.step-3 .answer-deputy-team, .step-3 .answer-another-user').hide();
          $('.deputy-filter').find('.step-4').hide();

     } else if ($(this).val() == 'Another user') {
          $('.deputy-filter').find('.step-3').css('display', 'inline-block');
          $('.deputy-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.deputy-filter').find('.step-3 .answer-another-user').css('display', 'inline-block');

          $('.deputy-filter').find('.step-3 .answer-deputy-team, .step-3 .answer-my-team').hide();
          $('.deputy-filter').find('.step-4').hide();

     } else if ($(this).val() == 'My team') {
          $('.deputy-filter').find('.step-3').css('display', 'inline-block');
          $('.deputy-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.deputy-filter').find('.step-4').css('display', 'inline-block');

          $('.deputy-filter').find('.step-3').hide();

     } else if ($(this).val() == 'Other team') {
          $('.deputy-filter').find('.step-3').css('display', 'inline-block');
          $('.deputy-filter').find('.step-3').removeClass('step-3-filter-active');
          $('.deputy-filter').find('.step-3 .answer-deputy-team').css('display', 'inline-block');

          $('.deputy-filter').find('.step-3 .answer-another-user, .step-3 .answer-my-team').hide();
          $('.deputy-filter').find('.step-4').hide();

     }

});

$('.my-deputies-user-in-team, .my-deputies-user-another-team').keyup(function(){
     $(this).parent().parent().addClass('step-3-filter-active');

     $('.deputy-filter').find('.step-4').css('display', 'inline-block');
});

$('.my-deputies-task-team').change(function(){
     $(this).parent().parent().addClass('step-3-filter-active');

     $('.deputy-filter').find('.step-4').css('display', 'inline-block');
});


$('#select-all-deputies').change(function(){

     $('.filter-panel.deputy-controller .cancel-re-assign').show();
     $('.filter-panel.deputy-controller .clear-filter').hide();

     // 1 - My deputies
     if($(this).is(":checked") && $('.filter-category-deputies').val() == 'My deputies') {
          $('.deputy-filter').find('.filter-numbers').css('display', 'flex');
          $('.deputy-filter').find('.filter-numbers .number').text('2');
          $('.deputies-name').append(`
               <li>Mr Gerald Brackens</li>
               <li>Mr Oscar Chaplin</li>
          `);
     }

     // 2 - My teams deputies
     if($(this).is(":checked") && $('.filter-category-deputies').val() == 'My teams deputies') {
          $('.deputy-filter').find('.filter-numbers').css('display', 'flex');
          $('.deputy-filter').find('.filter-numbers .number').text('1');
          $('.deputy-filter').find('.filter-numbers .desc').text('deputy');
          $('.deputies-name').append(`
               <li>Miss Marguerite Owens</li>
          `);
     }

     // 3 - Deputy type
     if($(this).is(":checked") && $('.filter-category-deputies').val() == 'Deputy type' && $('.select-deputy-type').val() == 'Lay') {
          $('.deputy-filter').find('.filter-numbers').css('display', 'flex');
          $('.deputy-filter').find('.filter-numbers .number').text('4');
          $('.deputies-name').append(`
               <li>Mr Gerald Brackens</li>
               <li>Miss Marguerite Owens</li>
               <li>Mrs Celia Carr</li>
               <li>Ms Erika Neal</li>
          `);
     } else if($(this).is(":checked") && $('.filter-category-deputies').val() == 'Deputy type' && $('.select-deputy-type').val() == 'Professional') {
          $('.deputy-filter').find('.filter-numbers').css('display', 'flex');
          $('.deputy-filter').find('.filter-numbers .number').text('2');
          $('.deputies-name').append(`
               <li>Dr Marcus Roy</li>
               <li>Mr Oscar Chaplin</li>
          `);
     } else if($(this).is(":checked") && $('.filter-category-deputies').val() == 'Deputy type' && $('.select-deputy-type').val() == 'Public authority') {
          $('.deputy-filter').find('.filter-numbers').css('display', 'flex');
          $('.deputy-filter').find('.filter-numbers .number').text('1');
          $('.deputy-filter').find('.filter-numbers .desc').text('deputy');
          $('.deputies-name').append(`
               <li>Mr Harvey Stevenson</li>
          `);
     }

     if($(this).is(":checked")) {
          $('.re-assign-my-deputies').removeClass('de-activate').attr('href', '#re-assign-deputies');
          $('.re-assign-my-deputies').attr('rel', 'modal:open');

          $('#dashboard-deputies-table tbody tr').addClass('selected-item change-details');
          $('#dashboard-deputies-table tbody tr input[name="re-assign-deputy"]').parent().addClass('checked');
          $('#dashboard-deputies-table tbody tr input[name="re-assign-deputy"]').attr('checked', 'checked');

          $('.deputy-filter').find('.step-2').show();
          $('.deputy-filter').find('.main-filter').addClass('re-assign-active');
          $('.deputy-filter').find('.re-assign-title.title-label').removeClass('hide');

          $('.deputy-filter').find('.main-filter, .step-1').addClass('de-activated');
          $('.deputy-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').attr('disabled' ,'disabled');

     } else {
          $('.re-assign-my-deputies').addClass('de-activate').removeAttr('href');
          $('.re-assign-my-deputies').removeAttr('rel');

          $('#dashboard-deputies-table tbody tr').removeClass('selected-item change-details');
          $('#dashboard-deputies-table tbody tr input[name="re-assign-deputy"]').parent().removeClass('checked');
          $('#dashboard-deputies-table tbody tr input[name="re-assign-deputy"]').removeAttr('checked');
     }

});
/////////////// STEP 1 - END ///////////////
/////////////// ------------------------------ OPTION 1 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 2 - START ------------------------------ ///////////////
$('.team-user-in-team-deputies').keyup(function(){
     $('.deputy-filter').find('.step-1.filter-a').addClass('step-1-filter-active');
});

$('.team-user-in-team').keyup(function(){
     $('.deputy-filter').find('.step-1.filter-a').addClass('step-1-filter-active');
});

$('.autocomplete-selected').click(function(){
     if ($(this).val() == 'Joe Bloggs') {
          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.joe-bloggs').show();
     }
});

/////////////// ------------------------------ OPTION 2 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 3 - START ------------------------------ ///////////////
$('.my-deputies-another-team').change(function(){
     $('.deputy-filter').find('.step-1.filter-c').addClass('step-1-filter-active');
});
/////////////// ------------------------------ OPTION 3 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 3 - START ------------------------------ ///////////////
$('.filter-another-user-deputy').keyup(function(){
     $('.deputy-filter').find('.step-1.filter-d').addClass('step-1-filter-active');
});
/////////////// ------------------------------ OPTION 3 - END ------------------------------ ///////////////

/////////////// STEP 3 - START ///////////////
$('#select-team-member').change(function(){

     $('.deputy-filter').find('.team-member-selected').css('display', 'inline-block');

     $(this).parent().addClass('step-2-filter-active');

     if($(this).val() == "Bloggs, Joe") {
          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.joe-bloggs').show();
     } else if ($(this).val() == "Carter, Simon") {
          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.simon-carter').show();
     } else if ($(this).val() == "Harper, David") {
          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.david-harper').show();
     } else if ($(this).val() == "McDermot, Shiobhan") {
          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.shiobhan-mcdermot').show();
     } else if ($(this).val() == "Nixon, Hannah") {
          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.hannah-nixon').show();
     } else {
          $('#re-assign-team-member-deputies').addClass('de-activate').removeAttr('href');
     }

     $('#select-team-member-deputies').parent().removeClass('checked');
     $('#select-team-member-deputies').removeAttr('checked');
     $('#re-assign-team-member-deputies').addClass('de-activate').removeAttr('href');

});

$('#select-team-member-deputies').change(function(){

     $('#re-assign-team-member-deputies').removeClass('de-activate').attr('href', '#re-assign-deputies');
     $('#re-assign-team-member-deputies').attr('rel', 'modal:open');

     if($(this).is(":checked") && $('#select-team-member').val() == "Bloggs, Joe") {
          $('#dashboard-deputies-table .joe-bloggs').toggleClass('selected-item');
          $('#dashboard-deputies-table .joe-bloggs .deputy-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "Carter, Simon") {
          $('#dashboard-deputies-table .simon-carter').toggleClass('selected-item');
          $('#dashboard-deputies-table .simon-carter .deputy-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "Harper, David") {
          $('#dashboard-deputies-table .david-harper').toggleClass('selected-item');
          $('#dashboard-deputies-table .david-harper .deputy-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "McDermot, Shiobhan") {
          $('#dashboard-deputies-table .shiobhan-mcdermot').toggleClass('selected-item');
          $('#dashboard-deputies-table .shiobhan-mcdermot .deputy-title').toggleClass('checked');

     } else if($(this).is(":checked") && $('#select-team-member').val() == "Nixon, Hannah") {
          $('#dashboard-deputies-table .hannah-nixon').toggleClass('selected-item');
          $('#dashboard-deputies-table .hannah-nixon .deputy-title').toggleClass('checked');
     } else {
          $('#dashboard-deputies-table tr').removeClass('selected-item');
          $('#dashboard-deputies-table tr .deputy-title').removeClass('checked');

          $('#re-assign-team-member-deputies').addClass('de-activate').removeAttr('href');
     }
});
/////////////// STEP 3 - END ///////////////

/////////////// STEP 4 - START ///////////////
$('.select-deputy-type').change(function(){

     $('.deputy-filter').find('.deputy-type-selected').css('display', 'inline-block');

     $('.deputy-filter').find('.step-1.filter-b').addClass('step-1-filter-active');

     $(this).parent().addClass('step-2-filter-active');

     if($(this).val() == "Lay") {
          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.deputy-lay').show();
     } else if ($(this).val() == "Professional") {
          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.deputy-professional').show();
     } else if ($(this).val() == "Public authority") {
          $('#dashboard-deputies-table tbody tr').hide();
          $('#dashboard-deputies-table tbody tr.deputy-public-authority').show();
     } else {
          $('#dashboard-deputies-table tbody tr').show();
     }

     $('#select-all-deputy-types').parent().removeClass('checked');
     $('#select-all-deputy-types').removeAttr('checked');
     $('#re-assign-deputy-type').addClass('de-activate').removeAttr('href');

});

$('#select-all-deputy-types').change(function(){

     $('#re-assign-deputy-type').removeClass('de-activate').attr('href', '#re-assign-deputies');
     $('#re-assign-deputy-type').attr('rel', 'modal:open');

     if($(this).is(":checked") && $('.select-deputy-type').val() == "Lay") {
          $('#dashboard-deputies-table .deputy-lay').toggleClass('selected-item');
          $('#dashboard-deputies-table .deputy-lay .deputy-title').toggleClass('checked');
     } else if($(this).is(":checked") && $('.select-deputy-type').val() == "Professional") {
          $('#dashboard-deputies-table .deputy-professional').toggleClass('selected-item');
          $('#dashboard-deputies-table .deputy-professional .deputy-title').toggleClass('checked');
     } else if($(this).is(":checked") && $('.select-deputy-type').val() == "Public authority") {
          $('#dashboard-deputies-table .deputy-public-authority').toggleClass('selected-item');
          $('#dashboard-deputies-table .deputy-public-authority .deputy-title').toggleClass('checked');
     } else {
          $('#dashboard-deputies-table tr').removeClass('selected-item');
          $('#dashboard-deputies-table tr .deputy-title').removeClass('checked');

          $('#re-assign-deputy-type').addClass('de-activate').removeAttr('href');
     }
});
/////////////// STEP 4 - END ///////////////

/////////////// CHANGES TO RE-ASSIGN - START ///////////////
$(document).ready(function () {
     $('input[name="re-assign-deputy"]').click(function(){

          if($(this).is(":checked")) {
               $(this).parent().addClass("checked");
               $(this).attr('checked', 'checked');
               $(this).closest('tr').addClass('selected-item change-details');

               $('.re-assign-my-deputies').removeClass('de-activate');
               $('.re-assign-my-deputies').attr('href', '#re-assign-deputies');
               $('.re-assign-my-deputies').attr('rel', 'modal:open');

               $('.deputy-filter').find('.filter-numbers').css('display', 'flex');

               $('.filter-panel.deputy-controller .cancel-re-assign').show();
               $('.filter-panel.deputy-controller .clear-filter').hide();

               if ($('.filter-category-deputies').val() === '') {
                    $('.re-assign-panel.deputy-controller').show();
                    $('.filter-panel.deputy-controller').hide();

                    $('.deputy-filter').find('.filter-select-all-clear, .filter, .step-2').show();
                    $('.deputy-filter').find('.main-filter').removeClass('re-assign-active');

                    $('.deputy-filter').find('.main-filter, .step-1').removeClass('de-activated');
                    $('.deputy-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');

                    $('.deputy-filter').find('.step-2 .re-assign-title.title-label').removeClass('hide');

                    // $('.deputy-filter .filter-select-all-clear').show();

                    $('.deputy-filter .re-assign-panel.deputy-controller .filter, .deputy-filter .re-assign-panel.deputy-controller .filter .step-2').show();
               } else {
                    $('.deputy-filter').find('.main-filter, .step-1').addClass('de-activated');
                    $('.deputy-filter').find('.step-1').addClass('step-1-filter-active');
                    $('.deputy-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').attr('disabled', 'disabled');

                    $('.deputy-filter').find('.step-2 .re-assign-title.title-label').removeClass('hide');

                    $('.deputy-filter').find('.filter-select-all-clear, .step-2').show();
                    $('.deputy-filter').find('.main-filter').addClass('re-assign-active');

                    $('.re-assign-panel.deputy-controller').hide();
                    $('.filter-panel.deputy-controller').show();
                    // $('.deputy-filter .filter-select-all-clear').hide();
               }

          } else {
               $(this).parent().removeClass("checked");
               $(this).removeAttr('checked', 'checked');
               $(this).closest('tr').removeClass('selected-item change-details');

               $('#select-all-deputies').parent().removeClass('checked');
               $('#select-all-deputies').removeAttr('checked');

               $('.deputy-filter').find('.filter-numbers').hide();

               if ($('input[name="re-assign-deputy"][checked]').length === 0) {
                    $('.deputy-filter').find('.filter-numbers').hide();

                    $('.deputy-filter').find('.main-filter, .step-1').removeClass('de-activated');
                    $('.deputy-filter').find('.step-1').removeClass('step-1-filter-active');
                    $('.deputy-filter').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');

                    $('.deputy-filter').find('.step-2 .re-assign-title.title-label').addClass('hide');

                    $('.deputy-filter').find('.filter-select-all-clear, .step-2').hide();
                    $('.deputy-filter').find('.main-filter').removeClass('re-assign-active');

                    $('.re-assign-my-deputies').removeAttr('href').addClass('de-activate');
                    $('.re-assign-my-deputies').removeAttr('rel');

                    // $('.deputy-filter .filter-select-all-clear').hide();

                    $('.re-assign-panel.deputy-controller').hide();
                    $('.filter-panel.deputy-controller').show();
               }

          }

     });
});

$(document).ready(function(){
     var $checkboxes = $('#dashboard-deputies-table tr input[type="checkbox"]');

     $checkboxes.change(function(){
          var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
          $('.deputy-filter').find('.filter-numbers .number').text(countCheckedCheckboxes);

          if (countCheckedCheckboxes <= 1) {
               $('.deputy-filter').find('.filter-numbers .desc').text('deputy');
          } else {
               $('.deputy-filter').find('.filter-numbers .desc').text('deputies');
          }
     });
});
/////////////// CHANGES TO RE-ASSIGN - START ///////////////

/////////////// ------------------------------ USER NAME POPULATION - START ------------------------------ ///////////////
$('#confirm-re-assign-deputies').click(function(){
     $('#re-assign-deputies-confirmation-message').slideDown();

     setTimeout(function() {
          $('#re-assign-deputies-confirmation-message').slideUp();
     }, 5000);

     // $('#dashboard-deputies-table tr.selected-item').hide();

     $('.deputy-filter .filter-numbers').hide();

     // ========================= Changes to Name to David Harper ========================= //
     // Individual
     if ($('#filter-category-deputies').val() === '') {
          $('#dashboard-deputies-table tr.selected-item').find('.user-name-change').text('Harper, David');
          $('#dashboard-deputies-table tr').removeClass('selected-item');
          $('#dashboard-deputies-table tr.change-details').addClass('david-harper');
          $('#dashboard-deputies-table tr.change-details').removeClass('joe-bloggs');
          $('#dashboard-deputies-table tr .deputy-title').removeClass('checked');
          $('#dashboard-deputies-table tr .deputy-title').find('input').removeAttr('checked');

          $('.filter-panel').show().find('.step-2, .step-3, .step-4').hide();
          $('.re-assign-panel').hide().find('.step-2, .step-3, .step-4').hide();
          $('.filter-select-all-clear').hide();

     } else {
          $('#dashboard-deputies-table tr.selected-item').hide();
          $('#dashboard-deputies-table tr.selected-item').find('.user-name-change').text('Harper, David');
          $('#dashboard-deputies-table tr').removeClass('selected-item');
          $('#dashboard-deputies-table tr.change-details').addClass('david-harper');
          $('#dashboard-deputies-table tr.change-details').removeClass('joe-bloggs');
          $('#dashboard-deputies-table tr .deputy-title').removeClass('checked');
          $('#dashboard-deputies-table tr .deputy-title').find('input').removeAttr('checked');

          $('.filter-panel').find('.step-2, .step-3, .step-4').hide();
          $('.filter-select-all-clear').find('.clear-filter').show();
          $('.filter-select-all-clear').find('.cancel-re-assign').hide();
          $('.main-filter, .step-1').removeClass('de-activated');
          $('.main-filter, .step-1').find('input').removeAttr('disabled');
     }

     // Select all
     if($('#select-all-deputies').is(":checked")) {
          $('.filter-panel').show().find('.step-1, .step-2, .step-3, .step-4, .filter-select-all-clear').hide();
          $('.filter-panel').find('.main-filter').removeClass('filter-active');
          $('.filter-panel').find('input, select').prop('selectedIndex',0);

          $('.re-assign-panel').hide().find('.step-2, .step-3, .step-4').hide();

          $('#dashboard-deputies-table tr').show();
          $('#dashboard-deputies-table tr.change-details').find('.user-name-change').text('Harper, David');
     }

});
/////////////// ------------------------------ USER NAME POPULATION - END ------------------------------ ///////////////
