// =================================== Client header - JAVASCRIPT =================================== //
// $(window).click(function() {
//
//      // Shows the relevant content
//      $('.handw-content-item, .pfa-content-item').show();
//
//      // Changes the tab numbers
//      $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('5');
//      $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');
//
//      // Changes the
//      $('#handw-actions, #pfa-actions').removeClass('checked');
//
//      // Changes the actions list
//      $('li[data-action="action-1"], li[data-action="action-3"], li[data-action="action-5"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
//      $('li[data-action="action-2"], li[data-action="action-4"], li[data-action="action-6"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-12"]').removeClass('active');
//
// });
//
// $('#hub-filter-panel').click(function(e){
//     e.stopPropagation();
// });


// $(function() {
//      $(document).on("click", function(e) {
//           e.stopPropagation();
//           if ($(e.target).is("#hub-filter-panel") === false) {
//                $(this).hide();
//           }
//      });
// });

$(document).ready(function () {

     // $('.handw-actions, .pfa-actions').hide();

     $('li[data-tab="summary-tab-6"], li[data-tab="summary-tab-7"], li[data-tab="summary-tab-8"], li[data-tab="summary-tab-9"], li[data-tab="summary-tab-10"], li[data-tab="summary-tab-11"]').hide();

     $('input[name="order-view"]').click(function(){
          var checked = $('#hub-filter-panel').find(':checked').length;

          // Changes TABS selected
          $('ul.client-details li').removeClass('current');
          $('ul.client-details li[data-tab="summary-tab-1"]').addClass('current');
          $('.tab-content').removeClass('current');
          $('#summary-tab-1').addClass('current');

          if($(this).is(":checked")) {
               $(this).parent().addClass("checked");
               // $('input[value="all"]').parent().removeClass("checked");
          } else {
               $(this).parent().removeClass("checked");
               // $(this).parent().find('h2 .icon').addClass('white');
               // $(this).prop("checked", false);
          }
          // if (!checked)
               // $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('5');
               // $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');
     });

     $('#client-summary .dashboard-row.row-2 .not-summary-content-item').hide();

     $('input[value="client"]').change(function(){
          if ($(this).is(":checked")) {
               $('li[data-tab="summary-tab-1"], li[data-tab="summary-tab-2"], li[data-tab="summary-tab-3"], li[data-tab="summary-tab-4"], li[data-tab="summary-tab-5"]').show();
               $('li[data-tab="summary-tab-6"], li[data-tab="summary-tab-7"], li[data-tab="summary-tab-8"], li[data-tab="summary-tab-9"], li[data-tab="summary-tab-10"], li[data-tab="summary-tab-11"]').hide();
               $('.handw-content-item').show();
               $('.pfa-content-item').show();
               // $(this).parent().find('h2 .icon').toggleClass('white');

               // Changes the actions list
               $('nav.actions-nav ul li').removeClass('active');
               $('nav.actions-nav').find('li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-6"], li[data-action="action-7"], li[data-action="action-14"]').addClass('active');

               // Changes the summary page
               $('#client-summary .dashboard-row.row-1').removeClass('content-items-4').addClass('content-items-5');
               $('#client-summary .dashboard-row.row-2 .report-dates .date').removeClass('full-width');
               $('#client-summary .dashboard-row.row-2 .not-summary-content-item').hide();
               $('#client-summary .dashboard-row.row-3').removeClass('two-items').addClass('three-items');
               $('#client-summary .dashboard-row.row-3 .item-2').removeClass('no-margin-right');

          } else {
               // $('.handw-actions').hide();
               // $('.handw-content-item, .pfa-content-item').show();
               // $(this).parent().find('h2 .icon').toggleClass('white');
          }
     });

     $('input[value="handw"]').change(function(){
          if ($(this).is(":checked")) {
               // $('.handw-actions').show();
               $('.handw-content-item').show();
               $('.pfa-content-item').hide();
               // $(this).parent().find('h2 .icon').removeClass('white');

               // Changes tabs
               $('li[data-tab="summary-tab-1"], li[data-tab="summary-tab-6"], li[data-tab="summary-tab-7"], li[data-tab="summary-tab-8"], li[data-tab="summary-tab-9"], li[data-tab="summary-tab-10"], li[data-tab="summary-tab-11"]').show();
               $('li[data-tab="summary-tab-2"], li[data-tab="summary-tab-3"], li[data-tab="summary-tab-4"], li[data-tab="summary-tab-5"]').hide();
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('4');
               $('ul.client-details.tabs li[data-tab="summary-tab-9"] span').text('2');

               // Changes the actions list
               $('nav.actions-nav ul li').removeClass('active');
               $('nav.actions-nav').find('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-12"], li[data-action="action-15"]').addClass('active');

               // Changes the summary page
               $('#client-summary .dashboard-row.row-1').removeClass('content-items-5').addClass('content-items-4');
               $('#client-summary .dashboard-row.row-2 .report-dates .date').addClass('full-width');
               $('#client-summary .dashboard-row.row-3').removeClass('three-items').addClass('two-items');
               $('#client-summary .dashboard-row.row-3 .item-2').addClass('no-margin-right');

          } else {
               $('.handw-actions').hide();
               $('.handw-content-item, .pfa-content-item').show();
          }
          // if ($(this).is(":checked") && $('input[value="pfa"]').is(":checked")) {
          //      $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('5');
          //      $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');
          //      $('.handw-content-item, .pfa-content-item').show();
          // } else if ($(this).length > 0 && $('input[value="pfa"]').is(":checked")) {
          //      $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('1');
          //      $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('1');
          //      $('.handw-content-item').hide();
          //      $('.pfa-content-item').show();
          // }

          // if ($(this).length > 0 && $('input[value="pfa"]').length > 0) {
          //      $('ul.client-details.tabs li[data-tab="summary-tab-4"] span').text('5');
          //      $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('3');
          // }
     });

     $('input[value="pfa"]').change(function(){
          if ($(this).is(":checked")) {
               // $('.pfa-actions').show();
               $('.pfa-content-item').show();
               $('.handw-content-item').hide();
               // $(this).parent().find('h2 .icon').removeClass('white');

               // Changes tabs
               $('li[data-tab="summary-tab-1"], li[data-tab="summary-tab-6"], li[data-tab="summary-tab-7"], li[data-tab="summary-tab-8"], li[data-tab="summary-tab-9"], li[data-tab="summary-tab-10"], li[data-tab="summary-tab-11"]').show();
               $('li[data-tab="summary-tab-2"], li[data-tab="summary-tab-3"], li[data-tab="summary-tab-4"], li[data-tab="summary-tab-5"]').hide();
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('1');
               $('ul.client-details.tabs li[data-tab="summary-tab-9"] span').text('1');

               // Changes the actions list
               $('nav.actions-nav ul li').removeClass('active');
               $('nav.actions-nav').find('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-12"], li[data-action="action-13"], li[data-action="action-15"]').addClass('active');

               // Changes the summary page
               $('#client-summary .dashboard-row.row-1').removeClass('content-items-5').addClass('content-items-4');
               $('#client-summary .dashboard-row.row-2 .report-dates .date').addClass('full-width');
               $('#client-summary .dashboard-row.row-3').removeClass('three-items').addClass('two-items');
               $('#client-summary .dashboard-row.row-3 .item-2').addClass('no-margin-right');

          } else {
               $('.pfa-actions').hide();
               $('.pfa-content-item, .handw-content-item').show();
               // $(this).parent().find('h2 .icon').addClass('white');
          }
          // if ($(this).is(":checked") && $('input[value="handw"]').is(":checked")) {
          //      $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('5');
          //      $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');
          //      $('.pfa-content-item, .handw-content-item').show();
          // } else if ($(this).length > 0 && $('input[value="handw"]').is(":checked")) {
          //      $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('4');
          //      $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('2');
          //      $('.handw-content-item').show();
          //      $('.pfa-content-item').hide();
          // }

          // if ($(this).length > 0 && $('input[value="handw"]').length > 0) {
          //      $('ul.client-details.tabs li[data-tab="summary-tab-4"] span').text('5');
          //      $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('3');
          // }
     });


     // $("#hub-filter-panel .filter").click( function(){
     //      $(this).toggleClass('selected');
     //      $(this).find('h2 .icon').toggleClass('white');
     //      // $(this).find('h2 .icon').toggleClass('blue');
     // });
     //
     // $("#hub-filter-panel #handw-actions").click( function(){
     //      $('.handw-actions').toggle();
     //      $('ul.client-details.tabs li[data-tab="summary-tab-4"] span').text('4');
     //      $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('2');
     // });
     //
     // $("#hub-filter-panel #pfa-actions").click( function(){
     //      $('.pfa-actions').toggle();
     //      $('ul.client-details.tabs li[data-tab="summary-tab-4"] span').text('1');
     //      $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('1');
     // });

     // if ($('#hub-filter-panel #handw-actions.filter').hasClass('selected')) {
     //      $('ul.client-details.tabs li[data-tab="summary-tab-4"] span').text('4');
     // } else if ($('#hub-filter-panel #pfa-actions.filter').hasClass('selected')) {
     //      $('ul.client-details.tabs li[data-tab="summary-tab-4"] span').text('1');
     // } else {
     //      $('ul.client-details.tabs li[data-tab="summary-tab-4"] span').text('5');
     // }

});
