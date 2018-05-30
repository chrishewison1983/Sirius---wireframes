// =================================== Client header - JAVASCRIPT =================================== //
// ================= Input select - START ================= //
$(document).ready(function () {
     $('input[name="order-view"]').click(function(){
          var checked = $('#hub-filter-panel').find(':checked').length;

          $('#client-overview li[data-tab="summary-tab-5"], #client-overview li[data-tab="summary-tab-7"]').removeClass('hide');

          if($(this).is(":checked")) {
               $(this).parent().addClass("checked");
               $(this).parent().parent().addClass("checked");

               $('.deputy-info-only').hide();
          } else {
               $(this).parent().removeClass("checked");
               $(this).parent().parent().removeClass("checked");

               $('.deputy-info-only').show();
          }
     });

     $('input[value="handw"]').change(function(){
          if ($(this).is(":checked")) {
               $('.handw-content-item').show();
               $('.pfa-content-item').hide();

               $('.pfa-wrapper').removeClass('checked');

               $('#client-overview li[data-tab="summary-tab-5"], #client-overview li[data-tab="summary-tab-7"]').show();

               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('4');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('2');
               $(this).parent().find('h2 .icon').removeClass('white');
               $('#pfa-actions').find('h2 .icon').addClass('white');

               $('.deputy-info-only').show();

               // Changes the actions list
               $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
               $('li[data-action="action-6"], li[data-action="action-12"]').removeClass('active');

               $('li[data-action="action-2"] a').addClass('edit-case-health').removeClass('edit-case-pfa');
          } else {
               $('.handw-actions').hide();
               $('.handw-content-item, .pfa-content-item').show();
               $(this).parent().find('h2 .icon').addClass('white');
          }
     });

     $('input[value="pfa"]').change(function(){
          if ($(this).is(":checked")) {
               $('.pfa-content-item').show();
               $('.handw-content-item').hide();
               $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('1');
               $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('1');

               $('.hw-wrapper').removeClass('checked');

               $('#client-overview li[data-tab="summary-tab-5"], #client-overview li[data-tab="summary-tab-7"]').removeClass('hide');

               $(this).parent().find('h2 .icon').removeClass('white');
               $('#handw-actions').find('h2 .icon').addClass('white');

               $('.deputy-info-only').show();

               // Changes the actions list
               $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-6"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-12"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
               $('li[data-action="action-2"] a').addClass('edit-case-pfa').removeClass('edit-case-health');

          } else {
               $('.pfa-actions').hide();
               $('.pfa-content-item, .handw-content-item').show();
               $(this).parent().find('h2 .icon').addClass('white');
          }
     });

});
// ================= Input select - END ================= //

// ================= Link select - START ================= //
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

     $('.pfa-content-item').show();
     $('.handw-content-item').hide();

     $('.deputy-info-only').show();

     $('#pfa-actions, .pfa-wrapper').addClass('checked');
     $('#pfa-actions input').attr('checked', 'checked');
     $('#pfa-actions').find('h2 .icon').removeClass('white');
     $('#handw-actions').find('h2 .icon').addClass('white');
     $('#handw-actions, .hw-wrapper').removeClass('checked');

     // Changes the actions list
     $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-6"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-12"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
     $('li[data-action="action-2"] a').addClass('edit-case-pfa').removeClass('edit-case-health');

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

     $('.pfa-content-item').show();
     $('.handw-content-item').hide();

     $('.deputy-info-only').show();

     $('#pfa-actions, .pfa-wrapper').addClass('checked');
     $('#pfa-actions input').attr('checked', 'checked');
     $('#pfa-actions').find('h2 .icon').removeClass('white');
     $('#handw-actions').find('h2 .icon').addClass('white');
     $('#handw-actions, .hw-wrapper').removeClass('checked');

     // Changes the actions list
     $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-6"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-12"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
     $('li[data-action="action-2"] a').addClass('edit-case-pfa').removeClass('edit-case-health');

});


$('.hw-wrapper .fact.one').click(function() {
     // Changes the tabs highlighted
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"]').addClass('current').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('4');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('2');

     // Changes the tabs shown
     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-5').addClass('current');

     $('.handw-content-item').show();
     $('.pfa-content-item').hide();

     $('.deputy-info-only').show();

     $('#handw-actions, .hw-wrapper').addClass('checked');
     $('#handw-actions input').attr('checked', 'checked');
     $('#handw-actions').find('h2 .icon').removeClass('white');
     $('#pfa-actions').find('h2 .icon').addClass('white');
     $('#pfa-actions, .pfa-wrapper').removeClass('checked');

     // Changes the actions list
     $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
     $('li[data-action="action-6"], li[data-action="action-12"]').removeClass('active');

     $('li[data-action="action-2"] a').addClass('edit-case-health').removeClass('edit-case-pfa');

});

$('.hw-wrapper .fact.two').click(function() {
     // Changes the tabs highlighted
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"]').removeClass('hide');
     $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('4');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('2');

     // Changes the tabs shown
     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-7').addClass('current');

     $('.handw-content-item').show();
     $('.pfa-content-item').hide();

     $('.deputy-info-only').show();

     $('#handw-actions, .hw-wrapper').addClass('checked');
     $('#handw-actions input').attr('checked', 'checked');
     $('#handw-actions').find('h2 .icon').removeClass('white');
     $('#pfa-actions').find('h2 .icon').addClass('white');
     $('#pfa-actions, .pfa-wrapper').removeClass('checked');

     // Changes the actions list
     $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
     $('li[data-action="action-6"], li[data-action="action-12"]').removeClass('active');

     $('li[data-action="action-2"] a').addClass('edit-case-health').removeClass('edit-case-pfa');

});

// ================= Link select - END ================= //

// Different versions of the header
if (window.location.href.indexOf("V1") != -1) {
     $('#hub-filter-panel').addClass('version-1');
     $('#hub-filter-panel').removeClass('version-2, version-3, version-4, version-5');
     $('#hub-filter-panel .due-date').addClass('hide');

     $('#hub-filter-panel .facts.icons').hide();
     $('#hub-filter-panel .facts.text').show();
}

if (window.location.href.indexOf("V2") != -1) {
     $('#hub-filter-panel').addClass('version-2');
     $('#hub-filter-panel').removeClass('version-1, version-3, version-4, version-5');
     $('#hub-filter-panel .due-date').addClass('hide');

     $('#hub-filter-panel .facts.icons').show();
     $('#hub-filter-panel .facts.text').hide();

}

if (window.location.href.indexOf("V3") != -1) {
     $('#hub-filter-panel').addClass('version-3');
     $('#hub-filter-panel').removeClass('version-1, version-2, version-4, version-5');
     $('#hub-filter-panel .due-date').addClass('hide');

     $('#hub-filter-panel .facts.icons').hide();
     $('#hub-filter-panel .facts.text').show();
}

if (window.location.href.indexOf("V4") != -1) {
     $('#hub-filter-panel').addClass('version-4');
     $('#hub-filter-panel').removeClass('version-1, version-3, version-3, version-5');
     $('#hub-filter-panel .due-date').addClass('hide');

     $('#hub-filter-panel .facts.icons').show();
     $('#hub-filter-panel .facts.text').hide();
}

if (window.location.href.indexOf("V5") != -1) {
     $('#hub-filter-panel').addClass('version-5');
     $('#hub-filter-panel').removeClass('version-1, version-3, version-4, version-4');
     $('#hub-filter-panel .due-date').removeClass('hide');

     $('#hub-filter-panel .facts.icons').hide();
     $('#hub-filter-panel .facts.text').show();
}
