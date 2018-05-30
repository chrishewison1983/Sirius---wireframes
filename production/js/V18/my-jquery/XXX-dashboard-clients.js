// =================================== Dashboard - JAVASCRIPT =================================== //

/////////////// ------------------------------ FILTER 1 - START ------------------------------ ///////////////
$('#filter-category').change(function(){

     $('.my-clients-assign-to, #team-user-in-team, #select-deputy-type, .my-clients-assign-to, #my-clients-user-in-team, #my-clients-user-another-team, .my-clients-task-team').prop('selectedIndex',0);

     $('.client-filter').find('.step-2, .step-3, .step-4').hide();
     $('.client-filter').find('.step-1, .step-2, .step-3').removeClass('step-1-filter-active step-2-filter-active step-3-filter-active');

     if($(this).val() == "My clients") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          // $('.client-filter').find('.step-2').css('display', 'inline-block');
          // $('.main-filter').addClass('slide');

          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.my-client').show();

          $('.my-clients-assign-to option[value="Me"]').hide();

     } else if ($(this).val() == "My teams clients") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1.filter-a').css('display', 'inline-block');

          $('#dashboard-clients-table tbody tr').show();

          // $('#team-user-in-team').keyup(function(){
          //      if($(this).is(":checked") && $('.my-clients-assign-to').val() == 'User in my team' || $(this).is(":checked") && $('.my-clients-assign-to').val() == 'Another user' || $(this).is(":checked") && $('.my-clients-assign-to').val() == 'Other team') {
          //           $('#scroller').addClass('gradient-5');
          //           $('#scroller').removeClass('gradient-1 gradient-2 gradient-3  gradient-4  gradient-6');
          //      } else if ($(this).is(":checked") && $('.my-clients-assign-to').val() == 'My team') {
          //           $('#scroller').addClass('gradient-6');
          //           $('#scroller').removeClass('gradient-1 gradient-2 gradient-3  gradient-4  gradient-5');
          //      } else {
          //           $('#scroller').removeClass('gradient-1 gradient-2 gradient-3  gradient-4  gradient-5  gradient-6');
          //      }
          // });

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Deputy type") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1.filter-b').css('display', 'inline-block');

          $('#dashboard-clients-table tbody tr').show();

          // $('#select-all-clients').change(function(){
          //      if($(this).is(":checked") && $('.my-clients-assign-to').val() == 'User in my team' || $(this).is(":checked") && $('.my-clients-assign-to').val() == 'Another user' || $(this).is(":checked") && $('.my-clients-assign-to').val() == 'Other team') {
          //           $('#scroller').addClass('gradient-5');
          //           $('#scroller').removeClass('gradient-1 gradient-2 gradient-3  gradient-4  gradient-6');
          //      } else if ($(this).is(":checked") && $('.my-clients-assign-to').val() == 'My team') {
          //           $('#scroller').addClass('gradient-6');
          //           $('#scroller').removeClass('gradient-1 gradient-2 gradient-3  gradient-4  gradient-5');
          //      } else {
          //           $('#scroller').removeClass('gradient-1 gradient-2 gradient-3  gradient-4  gradient-5  gradient-6');
          //      }
          // });

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Another team") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1.filter-c').css('display', 'inline-block');

          $('#dashboard-clients-table tbody tr').show();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "Another user") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          $('.client-filter').find('.step-2').hide();
          $('.client-filter').find('.step-1.filter-d').css('display', 'inline-block');

          $('#dashboard-clients-table tbody tr').show();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "PFA orders") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          // $('.client-filter').find('.step-2').css('display', 'inline-block');
          $('.client-filter').find('.step-1.filter-four').css('display', 'inline-block');

          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.order-property').show();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else if ($(this).val() == "HandW orders") {
          $('.client-filter').find('.filter').css('display', 'inline-block');
          $('.client-filter').find('.step-1').hide();
          // $('.client-filter').find('.step-2').css('display', 'inline-block');

          $('#dashboard-clients-table tbody tr').hide();
          $('#dashboard-clients-table tbody tr.order-health').show();

          $('.my-clients-assign-to option[value="Me"]').show();

     } else {
          $('.client-filter').find('.filter').hide();
          $('.client-filter').find('.step-1. .step-2').hide();
          $('#dashboard-clients-table tr').show();

          $('.my-clients-assign-to option[value="Me"]').show();
     }

     $('#dashboard-clients-table tr').removeClass('selected-item');
     $('#dashboard-clients-table tr .client-title').removeClass('checked');

     $('.client-filter').find('.filter-numbers').hide();

     $(this).parent().parent().addClass('filter-active');

     $('.client-filter .filter-select-all-clear').show();

     // $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-3  gradient-4 gradient-5 gradient-6');

     // Changes table elements
     // $('#dashboard-clients-table trtbody tr').addClass('select-item');
     // $('#dashboard-clients-table trtbody tr .client-title').addClass('select-item');
});
/////////////// ------------------------------ FILTER 1 - START ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 1 - START ------------------------------ ///////////////
/////////////// STEP 1 - START ///////////////
$('.my-clients-assign-to').change(function(){

     $('.client-filter').find('.step-2').addClass('step-2-filter-active');

     $('.client-filter .filter-select-all-clear').show();

     // $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-3 gradient-4 gradient-5 gradient-6');

     if ($(this).val() == 'Me') {
          $('.client-filter').find('.step-4').css('display', 'inline-block');
          // $('.client-filter').find('.step-4').removeClass('step-4-filter-active');

          $('.client-filter').find('.step-3').hide();

          // $('#select-all-clients').removeAttr('checked');
          // $('#select-all-clients').parent().removeClass('checked');
          // $('#re-assign-my-clients').addClass('de-activate');

          // $('#dashboard-clients-table tr').removeClass('selected-item');
          // $('#dashboard-clients-table tr .client-title').removeClass('checked');

          // $('#scroller').removeClass('gradient-1 gradient-2 gradient-3');

     } else if ($(this).val() == 'User in my team') {
          $('.client-filter').find('.step-3').css('display', 'inline-block');
          $('.client-filter').find('.step-3').removeClass('step-3-filter-active');
          // $('.client-filter').find('.step-4').removeClass('step-4-filter-active');
          $('.client-filter').find('.step-3 .answer-my-team').css('display', 'inline-block');

          $('.client-filter').find('.step-3 .answer-client-team, .step-3 .answer-another-user').hide();
          $('.client-filter').find('.step-4').hide();

          // $('#select-all-clients').removeAttr('checked');
          // $('#select-all-clients').parent().removeClass('checked');
          // $('#re-assign-my-clients').addClass('de-activate');

          // $('#dashboard-clients-table tr').removeClass('selected-item');
          // $('#dashboard-clients-table tr .client-title').removeClass('checked');

          // $('#scroller').removeClass('gradient-1 gradient-2 gradient-3');

     } else if ($(this).val() == 'Another user') {
          $('.client-filter').find('.step-3').css('display', 'inline-block');
          $('.client-filter').find('.step-3').removeClass('step-3-filter-active');
          // $('.client-filter').find('.step-4').removeClass('step-4-filter-active');
          $('.client-filter').find('.step-3 .answer-another-user').css('display', 'inline-block');

          $('.client-filter').find('.step-3 .answer-client-team, .step-3 .answer-my-team').hide();
          $('.client-filter').find('.step-4').hide();

          // $('#select-all-clients').removeAttr('checked');
          // $('#select-all-clients').parent().removeClass('checked');
          // $('#re-assign-my-clients').addClass('de-activate');

          // $('#dashboard-clients-table tr').removeClass('selected-item');
          // $('#dashboard-clients-table tr .client-title').removeClass('checked');

          // $('#scroller').removeClass('gradient-1 gradient-2 gradient-3');

     } else if ($(this).val() == 'My team') {
          $('.client-filter').find('.step-3').css('display', 'inline-block');
          $('.client-filter').find('.step-3').removeClass('step-3-filter-active');
          // $('.client-filter').find('.step-4').removeClass('step-4-filter-active');
          $('.client-filter').find('.step-4').css('display', 'inline-block');

          $('.client-filter').find('.step-3').hide();

          // $('#select-all-clients').removeAttr('checked');
          // $('#select-all-clients').parent().removeClass('checked');
          // $('#re-assign-my-clients').addClass('de-activate');

          // $('#dashboard-clients-table tr').removeClass('selected-item');
          // $('#dashboard-clients-table tr .client-title').removeClass('checked');

          // $('#scroller').removeClass('gradient-1 gradient-2 gradient-3');
     } else if ($(this).val() == 'Other team') {
          $('.client-filter').find('.step-3').css('display', 'inline-block');
          $('.client-filter').find('.step-3').removeClass('step-3-filter-active');
          // $('.client-filter').find('.step-4').removeClass('step-4-filter-active');
          $('.client-filter').find('.step-3 .answer-client-team').css('display', 'inline-block');

          $('.client-filter').find('.step-3 .answer-another-user, .step-3 .answer-my-team').hide();
          $('.client-filter').find('.step-4').hide();

          // $('#select-all-clients').removeAttr('checked');
          // $('#select-all-clients').parent().removeClass('checked');
          // $('#re-assign-my-clients').addClass('de-activate');

          // $('#dashboard-clients-table tr').removeClass('selected-item');
          // $('#dashboard-clients-table tr .client-title').removeClass('checked');

          // $('#scroller').removeClass('gradient-1 gradient-2 gradient-3');
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

     // 1 - My clients
     // if($('#filter-category').val() == 'My clients' && $('.my-clients-assign-to').val() == 'User in my team') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'My clients' && $('.my-clients-assign-to').val() == 'Another user') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'My clients' && $('.my-clients-assign-to').val() == 'My team') {
     //      $('#scroller.scroller-clients').addClass('gradient-3');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'My clients' && $('.my-clients-assign-to').val() == 'Other team') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // }

     if($(this).is(":checked") && $('#filter-category').val() == 'My clients') {
         $('.client-filter').find('.filter-numbers').css('display', 'flex');
         $('.client-filter').find('.filter-numbers .number').text('2');
         $('.clients-name').append(`
              <li>Mr Gerald Brackens</li>
              <li>Mr Oscar Chaplin</li>
         `);
     }

     // 2 - My teams clients
     // if($('#filter-category').val() == 'My teams clients' && $('.my-clients-assign-to').val() == 'Me') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'My teams clients' && $('.my-clients-assign-to').val() == 'User in my team') {
     //      $('#scroller.scroller-clients').addClass('gradient-5');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-3 gradient-4 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'My teams clients' && $('.my-clients-assign-to').val() == 'Another user') {
     //      $('#scroller.scroller-clients').addClass('gradient-5');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-3 gradient-4 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'My teams clients' && $('.my-clients-assign-to').val() == 'My team') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'My teams clients' && $('.my-clients-assign-to').val() == 'Other team') {
     //      $('#scroller.scroller-clients').addClass('gradient-5');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-3 gradient-4 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // }

     if($(this).is(":checked") && $('#filter-category').val() == 'My teams clients') {
         $('.client-filter').find('.filter-numbers').css('display', 'flex');
         $('.client-filter').find('.filter-numbers .number').text('1');
         $('.client-filter').find('.filter-numbers .desc').text('client');
         $('.clients-name').append(`
              <li>Miss Marguerite Owens</li>
         `);
     }

     // 3 - Deputy type
     // if($('#filter-category').val() == 'Deputy type' && $('.my-clients-assign-to').val() == 'Me') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'Deputy type' && $('.my-clients-assign-to').val() == 'User in my team') {
     //      $('#scroller.scroller-clients').addClass('gradient-5');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-3 gradient-4 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'Deputy type' && $('.my-clients-assign-to').val() == 'Another user') {
     //      $('#scroller.scroller-clients').addClass('gradient-5');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-3 gradient-4 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'Deputy type' && $('.my-clients-assign-to').val() == 'My team') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'Deputy type' && $('.my-clients-assign-to').val() == 'Other team') {
     //      $('#scroller.scroller-clients').addClass('gradient-5');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-3 gradient-4 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // }

     if($(this).is(":checked") && $('#filter-category').val() == 'Deputy type' && $('#select-deputy-type').val() == 'Lay') {
         $('.client-filter').find('.filter-numbers').css('display', 'flex');
         $('.client-filter').find('.filter-numbers .number').text('4');
         $('.clients-name').append(`
              <li>Mr Gerald Brackens</li>
              <li>Miss Marguerite Owens</li>
              <li>Mrs Celia Carr</li>
              <li>Ms Erika Neal</li>
         `);
     } else if($(this).is(":checked") && $('#filter-category').val() == 'Deputy type' && $('#select-deputy-type').val() == 'Professional') {
          $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('2');
          $('.clients-name').append(`
               <li>Dr Marcus Roy</li>
               <li>Mr Oscar Chaplin</li>
          `);
     } else if($(this).is(":checked") && $('#filter-category').val() == 'Deputy type' && $('#select-deputy-type').val() == 'Public authority') {
          $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('1');
          $('.client-filter').find('.filter-numbers .desc').text('client');
          $('.clients-name').append(`
               <li>Mr Harvey Stevenson</li>
          `);
     }

     // 4 - PFA orders
     // if($('#filter-category').val() == 'PFA orders' && $('.my-clients-assign-to').val() == 'Me') {
     //      $('#scroller.scroller-clients').addClass('gradient-3');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'PFA orders' && $('.my-clients-assign-to').val() == 'User in my team') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'PFA orders' && $('.my-clients-assign-to').val() == 'Another user') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'PFA orders' && $('.my-clients-assign-to').val() == 'My team') {
     //      $('#scroller.scroller-clients').addClass('gradient-3');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'PFA orders' && $('.my-clients-assign-to').val() == 'Other team') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // }

     if($(this).is(":checked") && $('#filter-category').val() == 'PFA orders') {
          $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('6');
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
     // if($('#filter-category').val() == 'HandW orders' && $('.my-clients-assign-to').val() == 'Me') {
     //      $('#scroller.scroller-clients').addClass('gradient-3');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'HandW orders' && $('.my-clients-assign-to').val() == 'User in my team') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'HandW orders' && $('.my-clients-assign-to').val() == 'Another user') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'HandW orders' && $('.my-clients-assign-to').val() == 'My team') {
     //      $('#scroller.scroller-clients').addClass('gradient-3');
     //      $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // } else if($('#filter-category').val() == 'HandW orders' && $('.my-clients-assign-to').val() == 'Other team') {
     //      $('#scroller.scroller-clients').addClass('gradient-1');
     //      $('#scroller.scroller-clients').removeClass('gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');
     // }

     if ($(this).is(":checked") && $('#filter-category').val() == 'HandW orders') {
          $('.client-filter').find('.filter-numbers').css('display', 'flex');
          $('.client-filter').find('.filter-numbers .number').text('1');
          $('.client-filter').find('.filter-numbers .desc').text('client');
          $('.clients-name').append(`
               <li>Mr Oscar Chaplin</li>
          `);
          $('#re-assign-clients h2').text('');
     }

     if($(this).is(":checked")) {
          // $('.client-filter').find('.step-4').addClass('step-4-filter-active');
          $('.re-assign-my-clients').removeClass('de-activate').attr('href', '#re-assign-clients');
          $('.re-assign-my-clients').attr('rel', 'modal:open');

          $('#dashboard-clients-table tbody tr').addClass('selected-item');
          $('#dashboard-clients-table tbody tr input[name="re-assign-client"]').parent().addClass('checked');
          $('#dashboard-clients-table tbody tr input[name="re-assign-client"]').attr('checked', 'checked');

     } else {
          // $('.client-filter').find('.step-4').removeClass('step-4-filter-active');
          $('.re-assign-my-clients').addClass('de-activate').removeAttr('href');
          $('.re-assign-my-clients').removeAttr('rel');

          // $('#scroller.scroller-clients').removeClass('gradient-1 gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');

          $('#dashboard-clients-table tbody tr').removeClass('selected-item');
          $('#dashboard-clients-table tbody tr input[name="re-assign-client"]').parent().removeClass('checked');
          $('#dashboard-clients-table tbody tr input[name="re-assign-client"]').removeAttr('checked');
     }

});

// $('#dashboard-clients-table tr.my-client .client-title').click(function(){
//      $('#select-all-clients').removeAttr('checked');
//      $('#select-all-clients').parent().removeClass('checked');
//      $('#re-assign-my-clients').removeClass('de-activate');
// });
/////////////// STEP 1 - END ///////////////
/////////////// ------------------------------ OPTION 1 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 2 - START ------------------------------ ///////////////
$('.team-user-in-team').keyup(function(){
     $('.client-filter').find('.step-1.filter-a').addClass('step-1-filter-active');
     $('.client-filter').find('.step-2').css('display', 'inline-block');

     // if ($('.autocomplete-selected').text() == 'Joe Bloggs') {
     //      $('#dashboard-clients-table tbody tr').hide();
     //      $('#dashboard-clients-table tbody tr.joe-bloggs').show();
     // }

     // if ($(this).val() == 'Joe Bloggs') {
     //      $('#dashboard-clients-table tbody tr').hide();
     //      $('#dashboard-clients-table tbody tr.joe-bloggs').show();
     // }
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
     $('.client-filter').find('.step-2').css('display', 'inline-block');
});
/////////////// ------------------------------ OPTION 3 - END ------------------------------ ///////////////

/////////////// ------------------------------ OPTION 3 - START ------------------------------ ///////////////
$('.filter-another-user-client').keyup(function(){
     $('.client-filter').find('.step-1.filter-d').addClass('step-1-filter-active');
     $('.client-filter').find('.step-2').css('display', 'inline-block');
});
/////////////// ------------------------------ OPTION 3 - END ------------------------------ ///////////////

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
$('#select-deputy-type').change(function(){

     $('.client-filter').find('.deputy-type-selected').css('display', 'inline-block');

     $('.client-filter').find('.step-1.filter-b').addClass('step-1-filter-active');
     $('.client-filter').find('.step-2').css('display', 'inline-block');

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
     }

     $('#select-all-deputy-types').parent().removeClass('checked');
     $('#select-all-deputy-types').removeAttr('checked');
     $('#re-assign-deputy-type').addClass('de-activate').removeAttr('href');

});

$('#select-all-deputy-types').change(function(){

     $('#re-assign-deputy-type').removeClass('de-activate').attr('href', '#re-assign-clients');
     $('#re-assign-deputy-type').attr('rel', 'modal:open');

     if($(this).is(":checked") && $('#select-deputy-type').val() == "Lay") {
          $('#dashboard-clients-table .deputy-lay').toggleClass('selected-item');
          $('#dashboard-clients-table .deputy-lay .client-title').toggleClass('checked');
     } else if($(this).is(":checked") && $('#select-deputy-type').val() == "Professional") {
          $('#dashboard-clients-table .deputy-professional').toggleClass('selected-item');
          $('#dashboard-clients-table .deputy-professional .client-title').toggleClass('checked');
     } else if($(this).is(":checked") && $('#select-deputy-type').val() == "Public authority") {
          $('#dashboard-clients-table .deputy-public-authority').toggleClass('selected-item');
          $('#dashboard-clients-table .deputy-public-authority .client-title').toggleClass('checked');
     } else {
          $('#dashboard-clients-table tr').removeClass('selected-item');
          $('#dashboard-clients-table tr .client-title').removeClass('checked');

          $('#re-assign-deputy-type').addClass('de-activate').removeAttr('href');
     }
});
/////////////// STEP 4 - END ///////////////

/////////////// CHANGES TO RE-ASSIGN - START ///////////////
$(document).ready(function () {
     $('input[name="re-assign-client"]').click(function(){

          if($(this).is(":checked")) {
               $(this).parent().addClass("checked");
               $(this).attr('checked', 'checked');
               $(this).closest('tr').addClass('selected-item');

               $('.re-assign-my-clients').removeClass('de-activate');
               $('.re-assign-my-clients').attr('href', '#re-assign-clients');
               $('.re-assign-my-clients').attr('rel', 'modal:open');

               $('.client-filter').find('.filter-numbers').css('display', 'flex');

               // $('.search-filters .filter, .search-filters .step-2, .search-filters .step-2 .re-assign-title').show();
               // $('.search-filters .main-filter').hide();

               // $('.search-filters.client-filter').addClass('single-item-selected');

               // $('.client-filter').find('.select-all-clients').hide();
               // $('.client-filter').find('.step-4').removeClass('step-4-filter-active');

               if ($('#filter-category').val() === '') {
                    $('.re-assign-panel').show();
                    $('.filter-panel').hide();

                    $('.client-filter .filter-select-all-clear').show();

                    $('.client-filter .re-assign-panel .filter, .client-filter .re-assign-panel .filter .step-2').show();
               } else {
                    $('.re-assign-panel').hide();
                    $('.filter-panel').show();

                    $('.client-filter .filter-select-all-clear').hide();
               }

          } else {
               $(this).parent().removeClass("checked");
               $(this).removeAttr('checked', 'checked');
               $(this).closest('tr').removeClass('selected-item');

               // $('#re-assign-my-clients').addClass('de-activate');
               // $('#re-assign-my-clients').attr('href', '#re-assign-clients');
               // $('#re-assign-my-clients').attr('rel', 'modal:open');

               $('#select-all-clients').parent().removeClass('checked');
               $('#select-all-clients').removeAttr('checked');

               $('.client-filter').find('.filter-numbers').hide();

               // $('#filter-panel .filter, #filter-panel .step-2, #filter-panel .step-2 .re-assign-title').hide();
               // $('#filter-panel .main-filter').show();
               //
               // $('.search-filters').removeClass('single-item-selected');
               //
               // $('.step-4').removeClass('step-4-filter-active');

               if ($('input[name="re-assign-client"][checked]').length === 0) {
                    $('.client-filter').find('.filter-numbers').hide();
                    $('.re-assign-my-clients').removeAttr('href').addClass('de-activate');
                    $('.re-assign-my-clients').removeAttr('rel');

                    $('.client-filter .filter-select-all-clear').hide();

                    $('.re-assign-panel').hide();
                    $('.filter-panel').show();
               }

          }

     });
});

$(document).ready(function(){
     var $checkboxes = $('#dashboard-clients-table tr input[type="checkbox"]');

     $checkboxes.change(function(){
          var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
          $('.client-filter').find('.filter-numbers .number').text(countCheckedCheckboxes);

          if (countCheckedCheckboxes <= 1) {
               $('.client-filter').find('.filter-numbers .desc').text('client');
          } else {
               $('.client-filter').find('.filter-numbers .desc').text('clients');
          }
     });
});

// $(".client-title").click( function(){
//      $(this).toggleClass('checked');
//      $(this).parent().parent().toggleClass('selected-item');
// });
/////////////// CHANGES TO RE-ASSIGN - START ///////////////

/////////////// ------------------------------ NUMBERS CODE - START ------------------------------ ///////////////
// $('#filter-category').change(function(){
//
//      if($(this).val() == "My clients") {
//           $('.filter-numbers').css('display', 'flex');
//           $('.filter-numbers .number').text('2');
//           $('.filter-numbers .desc').text('clients');
//      } else if ($(this).val() == "My teams clients") {
//           $('.filter-numbers').hide();
//      } else if ($(this).val() == "Deputy type") {
//
//           $('#select-deputy-type').change(function(){
//                if($(this).val() == 'Lay') {
//                     $('.filter-numbers').css('display', 'flex');
//                     $('.filter-numbers .number').text('4');
//                     $('.filter-numbers .desc').text('clients');
//                } else if ($(this).val() == 'Professional') {
//                     $('.filter-numbers').css('display', 'flex');
//                     $('.filter-numbers .number').text('2');
//                     $('.filter-numbers .desc').text('clients');
//                } else if ($(this).val() == 'Public authority') {
//                     $('.filter-numbers').css('display', 'flex');
//                     $('.filter-numbers .number').text('1');
//                     $('.filter-numbers .desc').text('client');
//                }  else {
//                     $('.filter-numbers').hide();
//                }
//           });
//
//      } else if ($(this).val() == "PFA orders") {
//           $('.filter-numbers').css('display', 'flex');
//           $('.filter-numbers .number').text('6');
//           $('.filter-numbers .desc').text('clients');
//      } else if ($(this).val() == "HandW orders") {
//           $('.filter-numbers').css('display', 'flex');
//           $('.filter-numbers .number').text('1');
//           $('.filter-numbers .desc').text('client');
//      } else {
//           $('.filter-numbers').hide();
//      }
//
// });
/////////////// ------------------------------ NUMBERS CODE - END ------------------------------ ///////////////

// $('.description').hide();

// $('#dashboard-clients-table .deputies').click(function(){
//      $(this).siblings('.description').toggle();
// });

/////////////// ------------------------------ USER NAME POPULATION - START ------------------------------ ///////////////
$('#confirm-re-assign-client').click(function(){
     $('#re-assign-confirmation-message').slideDown();

     setTimeout(function() {
          $('#re-assign-confirmation-message').slideUp();
     }, 5000);

     $('#dashboard-clients-table tr.selected-item').hide();

     $('.client-filter .filter-numbers').hide();

     // $('#dashboard-clients-table tr').show().removeClass('selected-item');
     // $('#dashboard-clients-table tr input[name="re-assign-client"]').removeClass('checked').removeAttr('checked');
     // $('#dashboard-clients-table tr input[name="re-assign-client"]').parent().removeClass('checked');

     // $('#filter-panel .filter, #filter-panel .filter .step-1, #filter-panel .filter .step-2, #filter-panel .filter .step-3, #filter-panel .filter .step-4').hide();
     // $('#filter-panel .filter .step-1, #filter-panel .filter .step-2, #filter-panel .filter .step-3, #filter-panel .filter .step-4').removeClass('step-1-filter-active step-2-filter-active step-3-filter-active step-4-filter-active');

     // $('#filter-category').prop('selectedIndex',0);

     // $('#scroller').removeClass('gradient-1 gradient-2 gradient-3 gradient-4 gradient-5 gradient-6 gradient-7 gradient-8 gradient-9 gradient-10');

     // $('.main-filter').removeClass('filter-active');

     // $('.filter-numbers').hide();
});
/////////////// ------------------------------ USER NAME POPULATION - END ------------------------------ ///////////////
