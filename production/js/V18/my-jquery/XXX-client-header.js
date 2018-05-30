// =================================== Client header - JAVASCRIPT =================================== //
$(document).ready(function () {

     // $('.handw-actions, .pfa-actions').hide();

     $('input[name="order-view"]').click(function(){
          var checked = $('#hub-filter-panel').find(':checked').length;
          if($(this).is(":checked")) {
               $(this).parent().addClass("checked");
               // $(this).parent().find('h2 .icon').toggleClass('white');
               // $('input[value="all"]').parent().removeClass("checked");
          }
          if (!checked)
               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('5');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');
     });

     $('input[value="handw"]').change(function(){
          if ($(this).is(":checked")) {
               // $('.handw-actions').show();
               $('.handw-content-item').show();
               $('.pfa-content-item').hide();
               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('4');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('2');
               $(this).parent().find('h2 .icon').removeClass('white');

               $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
               $('li[data-action="action-6"], li[data-action="action-12"]').removeClass('active');
          } else {
               $('.handw-actions').hide();
               $('.handw-content-item, .pfa-content-item').show();
               $(this).parent().find('h2 .icon').addClass('white');
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
               $('.pfa-actions').show();
               $('.pfa-content-item').show();
               $('.handw-content-item').hide();
               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('1');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('1');
               $(this).parent().find('h2 .icon').removeClass('white');
          } else {
               $('.pfa-actions').hide();
               $('.pfa-content-item, .handw-content-item').show();
               $(this).parent().find('h2 .icon').addClass('white');
          }
          if ($(this).is(":checked") && $('input[value="handw"]').is(":checked")) {
               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('5');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');
               $('.pfa-content-item, .handw-content-item').show();
          } else if ($(this).length > 0 && $('input[value="handw"]').is(":checked")) {
               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('4');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('2');
               $('.handw-content-item').show();
               $('.pfa-content-item').hide();
          }

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
