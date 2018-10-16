// =================================== Client header - JAVASCRIPT =================================== //
// ================= Input select - START ================= //
$(document).ready(function () {

     $('.handw-content-item, .client-content-item').hide();
     $('.pfa-content-item').show();

     $('input[name="order-view"]').click(function(){
          var checked = $('#hub-filter-panel').find(':checked').length;

          $('#client-overview li[data-tab="summary-tab-5"], #client-overview li[data-tab="summary-tab-7"]').removeClass('hide');

          if($(this).is(":checked")) {
               $(this).parent().addClass("checked");
               $(this).parent().parent().addClass("checked");

               // Changes the state
               $('#hub-filter-panel form nav .wrapper').removeClass('checked');
               $('#hub-filter-panel form nav .wrapper label').removeClass('checked');
               $('#hub-filter-panel form nav .wrapper label h2 span.icon').removeClass('black').addClass('white');
               $(this).parent().addClass('checked');
               $(this).parent().parent().addClass('checked');
               $(this).parent().find('h2 span').addClass('black').removeClass('white');

               $('.deputy-info-only').hide();
          }
     });

     $('input[value="client"]').change(function(){
          if ($(this).is(":checked")) {
               $('.handw-content-item').show();
               $('.pfa-content-item').show();
               $('.client-content-item').show();

               $('#client-overview li[data-tab="summary-tab-5"], #client-overview li[data-tab="summary-tab-7"]').removeClass('hide');

               $('#client-overview li[data-tab="summary-tab-5"] span').text('5');
               $('#client-overview li[data-tab="summary-tab-6"] span').text('4');
               $('#client-overview li[data-tab="summary-tab-7"] span').text('4');

               $('.deputy-info-only').hide();

               // Remove the filter styles
               $('#hub-filter-panel .filter, #hub-filter-panel .wrapper').removeClass('checked');
               $('#hub-filter-panel .filter h2 .icon').addClass('white');

               $('nav.actions-nav ul li').removeClass('active');
               $('li[data-action="action-1"], li[data-action="action-3"], li[data-action="action-5"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');

          }
     });

     $('input[value="handw"]').change(function(){
          if ($(this).is(":checked")) {
               $('.handw-content-item').show();
               $('.pfa-content-item').hide();

               // $('.pfa-wrapper').removeClass('checked');

               $('#client-overview li[data-tab="summary-tab-5"], #client-overview li[data-tab="summary-tab-7"]').removeClass('hide');

               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('3');
               $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('2');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');
               // $(this).parent().find('h2 .icon').removeClass('white');
               // $('#pfa-actions').find('h2 .icon').addClass('white');

               $('.deputy-info-only').show();

               // Changes the actions list
               $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-7"], li[data-action="action-16"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
               $('li[data-action="action-6"], li[data-action="action-12"]').removeClass('active');

               $('li[data-action="action-9"] a').addClass('create-task-hw').removeClass('create-task-pfa');

               $('li[data-action="action-2"] a').addClass('edit-case-health').removeClass('edit-case-pfa');

               $('.client-content-item').hide();

               $('.pfa-wrapper .filter .icon, .third-order-wrapper .filter .icon, .fourth-order-wrapper .filter .icon').removeClass('black').addClass('white');

               // Orders content
               // $('.order-section .accordion-1').find('.number').text('1');
               // $('.order-section .accordion-3').find('.number').text('0');
               // $('.order-section .accordion-3').addClass('inactive');
               // $('.order-section #accordion-3').hide();

          }
          // else {
          //      $('.handw-actions').hide();
          //      $('.handw-content-item, .pfa-content-item').show();
          //      $(this).parent().find('h2 .icon').addClass('white');
          // }
     });

     $('input[value="pfa"]').change(function(){
          if ($(this).is(":checked")) {
               $('.pfa-content-item').show();
               $('.handw-content-item').hide();

               $('#client-overview li[data-tab="summary-tab-5"], #client-overview li[data-tab="summary-tab-7"]').removeClass('hide');

               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('1');
               $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('2');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('1');

               // $('.hw-wrapper').removeClass('checked');

               // $(this).parent().find('h2 .icon').removeClass('white');
               // $('#handw-actions').find('h2 .icon').addClass('white');

               $('.deputy-info-only').show();

               // Changes the actions list
               $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-6"], li[data-action="action-7"], li[data-action="action-16"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-12"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
               $('li[data-action="action-2"] a').addClass('edit-case-pfa').removeClass('edit-case-health');

               $('li[data-action="action-9"] a').addClass('create-task-pfa').removeClass('create-task-hw');

               $('.client-content-item').hide();

               // Orders content
               // $('.order-section .accordion-1').find('.number').text('1');
               // $('.order-section .accordion-3').find('.number').text('1');
               // $('.order-section .accordion-3').removeClass('inactive');
               // $('.order-section #accordion-3').hide();

               $('.hw-wrapper .filter .icon, .third-order-wrapper .filter .icon, .fourth-order-wrapper .filter .icon').removeClass('black').addClass('white');

          }
          // else {
          //      $('.pfa-actions').hide();
          //      $('.pfa-content-item, .handw-content-item').show();
          //      $(this).parent().find('h2 .icon').addClass('white');
          // }
     });

     $('input[value="third-order"], input[value="fourth-order"]').change(function(){
          if ($(this).is(":checked")) {
               $('.handw-content-item').show();
               $('.pfa-content-item').show();

               $('.hw-wrapper, .pfa-wrapper').removeClass('checked');
               $('.hw-wrapper .filter .icon, .pfa-wrapper .filter .icon').removeClass('black').addClass('white');

               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('5');
               $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('4');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('4');

               $('.deputy-info-only').show();

               // Changes the actions list
               $('nav.actions-nav ul li').removeClass('active');
               $('li[data-action="action-1"], li[data-action="action-3"], li[data-action="action-5"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');

               $('.client-content-item').show();

          }
     });

     $('input[value="third-order"]').change(function(){
          if ($(this).is(":checked")) {
               $('.hw-wrapper, .pfa-wrapper, .fourth-order-wrapper').removeClass('checked');
               $('.hw-wrapper .filter .icon, .pfa-wrapper .filter .icon, .fourth-order-wrapper .filter .icon').removeClass('black').addClass('white');
          }
     });

     $('input[value="fourth-order"]').change(function(){
          if ($(this).is(":checked")) {
               $('.hw-wrapper, .pfa-wrapper, .third-order-wrapper').removeClass('checked');
               $('.hw-wrapper .filter .icon, .pfa-wrapper .filter .icon, .third-order-wrapper .filter .icon').removeClass('black').addClass('white');
          }
     });

});
// ================= Input select - END ================= //

// ================= Link select - START ================= //
$('.pfa-wrapper').click(function() {
     $('.pfa-content-item').show();
     $('.handw-content-item').hide();

     $('.deputy-info-only').show();

     $('.pfa-wrapper, .pfa-wrapper .filter').addClass('checked');
     $('#pfa-actions input').attr('checked', 'checked');
     $('.pfa-wrapper').find('h2 .icon').removeClass('white');
     $('.hw-wrapper').find('h2 .icon').addClass('white');
     $('.hw-wrapper, .hw-wrapper .filter').removeClass('checked');

     // Changes the actions list
     $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-6"], li[data-action="action-7"], li[data-action="action-16"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-12"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
     $('li[data-action="action-2"] a').addClass('edit-case-pfa').removeClass('edit-case-health');

     $('li[data-action="action-9"] a').addClass('create-task-pfa').removeClass('create-task-hw');

});

$('.pfa-wrapper .fact.one').click(function() {
     // Changes the tabs highlighted
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"]').addClass('current').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('1');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('1');

     // Changes the tabs shown
     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-5').addClass('current');

     $('.client-content-item').hide();
});


$('.pfa-wrapper .fact.two').click(function() {
     // Changes the tabs highlighted
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"]').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('1');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('1');

     // Changes the tabs shown
     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-7').addClass('current');

     $('.client-content-item').hide();
});

$('.hw-wrapper').click(function() {
     $('.handw-content-item').show();
     $('.pfa-content-item').hide();

     $('.deputy-info-only').show();

     $('.hw-wrapper, .hw-wrapper .filter').addClass('checked');
     $('#handw-actions input').attr('checked', 'checked');
     $('.hw-wrapper').find('h2 .icon').removeClass('white');
     $('.pfa-wrapper').find('h2 .icon').addClass('white');
     $('.pfa-wrapper, .pfa-wrapper .filter').removeClass('checked');

     $('.third-order-wrapper, .third-order-wrapper .filter, .fourth-order-wrapper, .fourth-order-wrapper .filter').removeClass('checked');

     // Changes the actions list
     $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-7"], li[data-action="action-16"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
     $('li[data-action="action-6"], li[data-action="action-12"]').removeClass('active');

     $('li[data-action="action-9"] a').addClass('create-task-hw').removeClass('create-task-pfa');

     $('li[data-action="action-2"] a').addClass('edit-case-health').removeClass('edit-case-pfa');

     $('.client-content-item').hide();

});

$('.hw-wrapper .fact.one').click(function() {
     // Changes the tabs highlighted
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"]').addClass('current').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('3');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');

     // Changes the tabs shown
     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-5').addClass('current');

     $('.client-content-item').hide();
});

$('.hw-wrapper .fact.two').click(function() {
     // Changes the tabs highlighted
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"]').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('3');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');

     // Changes the tabs shown
     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-7').addClass('current');

     $('.client-content-item').hide();
});

$('.third-order-wrapper .fact.one, .fourth-order-wrapper .fact.one').click(function() {
     $('.handw-content-item').show();
     $('.pfa-content-item').show();

     // Changes the tabs highlighted
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"]').addClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('5');
     $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('4');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('4');

     // Changes the tabs shown
     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-5').addClass('current');

     $('.client-content-item').show();
});


$('.third-order-wrapper .fact.two, .fourth-order-wrapper .fact.two').click(function() {
     $('.handw-content-item').show();
     $('.pfa-content-item').show();

     // Changes the tabs highlighted
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('5');
     $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('4');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('4');

     // Changes the tabs shown
     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-7').addClass('current');

     $('.client-content-item').show();
});


// ================= Link select - END ================= //

// Primary switch
// $('#primary-order').change(function(){
//      if ($(this).is(":checked")) {
//           $(this).closest('.pfa-wrapper').removeClass('non-primary-case');
//      } else {
//           $(this).closest('.pfa-wrapper').addClass('non-primary-case');
//      }
// });

// Different versions of the header
// if (window.location.href.indexOf("V1") != -1) {
//      $('#hub-filter-panel').addClass('version-1');
//      $('#hub-filter-panel').removeClass('version-2, version-3, version-4, version-5');
//      $('#hub-filter-panel .due-date').addClass('hide');
//
//      $('#hub-filter-panel .facts.icons').hide();
//      $('#hub-filter-panel .facts.text').show();
// }
//
// if (window.location.href.indexOf("V2") != -1) {
//      $('#hub-filter-panel').addClass('version-2');
//      $('#hub-filter-panel').removeClass('version-1, version-3, version-4, version-5');
//      $('#hub-filter-panel .due-date').addClass('hide');
//
//      $('#hub-filter-panel .facts.icons').show();
//      $('#hub-filter-panel .facts.text').hide();
//
// }
//
// if (window.location.href.indexOf("V3") != -1) {
//      $('#hub-filter-panel').addClass('version-3');
//      $('#hub-filter-panel').removeClass('version-1, version-2, version-4, version-5');
//      $('#hub-filter-panel .due-date').addClass('hide');
//
//      $('#hub-filter-panel .facts.icons').hide();
//      $('#hub-filter-panel .facts.text').show();
// }
//
// if (window.location.href.indexOf("V4") != -1) {
//      $('#hub-filter-panel').addClass('version-4');
//      $('#hub-filter-panel').removeClass('version-1, version-3, version-3, version-5');
//      $('#hub-filter-panel .due-date').addClass('hide');
//
//      $('#hub-filter-panel .facts.icons').show();
//      $('#hub-filter-panel .facts.text').hide();
// }
//
// if (window.location.href.indexOf("V5") != -1) {
//      $('#hub-filter-panel').addClass('version-5');
//      $('#hub-filter-panel').removeClass('version-1, version-3, version-4, version-4');
//      $('#hub-filter-panel .due-date').removeClass('hide');
//
//      $('#hub-filter-panel .facts.icons').hide();
//      $('#hub-filter-panel .facts.text').show();
// }
