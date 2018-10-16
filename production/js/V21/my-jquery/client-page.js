// =================================== Client Page - JAVASCRIPT =================================== //
// Client summary
// $('.normal-status').css('display', 'inline-block');
// $('#new-client-summary').hide();
$('#add-case-tile').show();

$(document).ready(function () {

     // Show the state when the client is at normal status, they're compliant & no outstanding payment
     if (window.location.href.indexOf("normal") != -1) {
          // Change the compliant status
          $(".compliant").removeClass('alert-colour').addClass('normal-colour');
          $(".compliant").find('.sub-text').text('Compliant');
          $(".compliant").find('.right').html('<span class="tick"></span>');

          // Change the payment status
          $(".payment").removeClass('main-colour').addClass('blue-colour');
          $(".payment").find('.sub-text').text('No outstanding payment');
          $(".payment").find('.left').html('<span class="tick"></span>');
     }

     // Show the state when the client is violent
     if (window.location.href.indexOf("violent") != -1) {
          // Change the client status
          $("#section-header.client-page").removeClass('welsh-message, deceased-message').addClass('violent-risk-message');
          $("#section-header.client-page .normal-status, #section-header.client-page .type").hide();

          $('.new-client .client-nav').addClass('violent');
     }

     // Show the state when the client is Welsh
     if (window.location.href.indexOf("welsh") != -1) {
          // Change the client status
          $("#section-header.client-page").removeClass('violent-risk-message, deceased-message').addClass('welsh-message');
          $("#section-header.client-page .normal-status, #section-header.client-page .type").hide();
     }

     // Show the state when the client is deceased
     if (window.location.href.indexOf("deceased") != -1) {
          // Change the client status
          $("#section-header.client-page").removeClass('violent-risk-message, welsh-message').addClass('deceased-message');
          $("#section-header.client-page .normal-status, #section-header.client-page .type").hide();

          $('#section-header.client-page .deceased').show();
     }

     // Changes the tabs to be focused on the Health & Welfare tab
     if (window.location.href.indexOf("HandW") != -1) {
          // $('.tablinks.overview').removeClass('active');
          // $('.tablinks.health').addClass('active');
          // $('#client-overview').hide();
          // $('#client-health').show();
          // $('.edit-case-link').show();
          // $('.add-deputy-link').show();
          $('.normal-status').css('display', 'inline-block');
          $('#hub-filter-panel #handw-actions, #hub-filter-panel .hw-wrapper, #hub-filter-panel .hw-wrapper .filter').addClass('checked');
          $('#hub-filter-panel #pfa-actions, #hub-filter-panel .pfa-wrapper, #hub-filter-panel .pfa-wrapper .filter').removeClass('checked');
          $('#hub-filter-panel .hw-wrapper .filter h2 .icon').removeClass('white');
          $('#hub-filter-panel .pfa-wrapper .filter h2 .icon').addClass('white').removeClass('black');
          $('#hub-filter-panel #handw-actions input[value="handw"]').attr('checked', 'checked');
          $('.handw-actions').show();
          $('.handw-content-item').show();
          $('.pfa-actions').hide();
          $('.pfa-content-item').hide();
          // $('ul.client-details.tabs li').removeClass('current');
          // $('ul.client-details.tabs li[data-tab="summary-tab-1"]').addClass('current');
          $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('3');
          $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('2');
          $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('3');
          $('ul.client-details.tabs li[data-tab="summary-tab-5"], ul.client-details.tabs li[data-tab="summary-tab-7"]').removeClass('hide');

          // Actions list
          $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
          $('li[data-action="action-6"], li[data-action="action-12"]').removeClass('active');

          $('li[data-action="action-2"] a').addClass('edit-case-health').removeClass('edit-case-pfa');

          // Orders content
          $('.order-section .accordion-1').find('.number').text('1');
          $('.order-section .accordion-3').find('.number').text('0');
          $('.order-section .accordion-3').addClass('inactive');
          $('.order-section #accordion-3').hide();

          $('.deputy-info-only').show();

          $('.client-content-item').hide();

          // $('#section-header.client-page .normal-status').text('H & W | 14820940');
          // $('#section-header.client-page .breadcrumb').html('<a href="../19-dashboard/19a-caseworker.html">My tasks</a> <div class="separator"> > </div> <a href="4a-new-client.html">Client summary</a> <div class="separator"> > </div> <span>H & W | 14820940</span>');
     }

     // Changes the tabs to be focused on the Properties tab
     if (window.location.href.indexOf("PFA") != -1) {
          // $('.tablinks.overview').removeClass('active');
          // $('.tablinks.property').addClass('active');
          // $('#client-overview').hide();
          // $('#client-property').show();
          // $('.edit-case-link').show();
          // $('.add-deputy-link').show();
          $('.normal-status').css('display', 'inline-block');
          $('#hub-filter-panel #pfa-actions, #hub-filter-panel .pfa-wrapper, #hub-filter-panel .pfa-wrapper .filter').addClass('checked');
          $('#hub-filter-panel .pfa-wrapper h2 .icon').removeClass('white');
          $('#hub-filter-panel #pfa-actions input[value="pfa"]').attr('checked', 'checked');
          $('.pfa-actions').show();
          $('.pfa-content-item').show();
          $('.handw-actions').hide();
          $('.handw-content-item').hide();
          // $('ul.client-details.tabs li').removeClass('current');
          // $('ul.client-details.tabs li[data-tab="summary-tab-1"]').addClass('current');
          $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('1');
          $('ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('1');
          $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('1');
          $('ul.client-details.tabs li[data-tab="summary-tab-5"], ul.client-details.tabs li[data-tab="summary-tab-7"]').removeClass('hide');

          // Actions list
          $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-6"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-12"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
          $('li[data-action="action-2"] a').addClass('edit-case-pfa').removeClass('edit-case-health');

          // Orders content
          $('.order-section .accordion-1').find('.number').text('1');
          $('.order-section .accordion-3').find('.number').text('1');
          $('.order-section .accordion-3').removeClass('inactive');
          $('.order-section #accordion-3').hide();

          $('.deputy-info-only').show();

          $('.client-content-item').hide();

          // $('#section-header.client-page .normal-status').text('PFA | 14820940');
          // $('#section-header.client-page .breadcrumb').html('<a href="../19-dashboard/19a-caseworker.html">My tasks</a> <div class="separator"> > </div> <a href="4a-new-client.html">Client summary</a> <div class="separator"> > </div> <span>PFA | 14820940</span>');
     }

     // Shows the state of a brand new client
     if (window.location.href.indexOf("NewClient") != -1) {
          // Hides case tabs
          $('.tablinks.health, .tablinks.property').hide();
          $('.tablinks.unassigned').css({"display": "flex"});
          $('.tablinks.unassigned').addClass('create-case').html(`
               <a href="../1-create-case/1a-the-order.html" class="wrapper">
                    <span></span>
                    <h1>Create case</h1>
               </a>
          `);

          $('.normal-status').css('display', 'inline-block');

          // Change the compliant status
          $(".compliant").removeClass('alert-colour').addClass('normal-colour');
          $(".compliant").find('.sub-text').text('Compliant');
          $(".compliant").find('.right').html('<span class="tick"></span>');

          // Change the payment status
          $(".payment").removeClass('main-colour').addClass('blue-colour');
          $(".payment").find('.sub-text').text('No outstanding payment');
          $(".payment").find('.left').html('<span class="tick"></span>');

          // Hides the main content
          // $('#client-summary').hide();
          // $('#new-client-summary').show();

          // Change the tab numbers
          $('#client-overview ul.client-details li span').text('0');

          // Change the header numbers
          // $('#hub-filter-panel').hide();
          // $('#add-case-tile').show();
          $('#hub-filter-panel .facts .fact span').text('0');

     }

});

// tasks
// $('#task-list label').click( function(){
//      var checked = $('input', this).is(':checked');
//      $('.status').text(checked ? 'done' : 'outstanding');
//      // $(this).parent().parent().parent().addClass(checked ? 'complete' : 'outstanding');
//      // $('.status').text($(this).text() == 'done' ? 'outstanding' : 'done');
// });

$('#task-list input:checkbox').change(function(){
     if($(this).is(":checked")) {
          $(this).closest('li').addClass("complete");
          $('.status').text('outstanding' ? 'done' : 'outstanding');
     } else {
          $(this).closest('li').removeClass("complete");
     }
});

$("#task-list .pdf-review").hide();

// This hides the confirmation box after 10 seconds
setTimeout(function() {
     $("#task-list .pdf-review").show(500)
}, 0);

$('#task-list li .more-info').click( function(e){
     e.preventDefault();
     $(this).siblings('.details').toggle();
     $(this).toggleClass('open');
});

// Shows the deputy details
$('.contact-info').hide();

$('.full-details').click( function(e){
     e.preventDefault();
     var dataValue = $(this).data('value');
     // $('.details-row').toggle();
     // $('.summary-row').removeClass('open');
     $(this).toggleClass('close');
     $(`tr.summary-row[data-value="${dataValue}"]`).toggleClass('open');
     $(`tr.details-row[data-value="${dataValue}"]`).toggle();
     // $(this).closest('tr').toggleClass('open');
     $(this).text($(this).text() == 'View full details' ? 'Hide full details' : 'View full details');
     $(this).siblings('.contact-info').toggle();
});

$('.full-task-notes').click( function(e){
     e.preventDefault();
     var dataTask = $(this).data('task');
     // $('.details-row').toggle();
     // $('.summary-row').removeClass('open');
     $(this).toggleClass('close');
     $(`tr.summary-row[data-task="${dataTask}"]`).toggleClass('open');
     $(`tr.details-row[data-task="${dataTask}"]`).toggle();
     // $(this).closest('tr').toggleClass('open');
     $(this).text($(this).text() == 'View task notes' ? 'Hide task notes' : 'View task notes');
     $(this).siblings('.contact-info').toggle();
});


// Shows the client details
$('#client-details-summary .open').click( function(e){
     e.preventDefault();
     // $(this).closest('tr').toggleClass('open');
     $(this).text($(this).text() == 'View full details' ? 'Hide full details' : 'View full details');
     $(this).siblings('#flexbox-container').toggleClass('full-height');
});

// Create letter
// $(document).ready(function(){
//
//      JSON.parse(sessionStorage.getItem('selected-recipients')).forEach(function(recipient) {
//           $('#document-recipients').append('<li>' + recipient + '</li>');
//      });
//
//      JSON.parse(sessionStorage.getItem('selected-inserts')).forEach(function(inserts) {
//           $('#document-inserts').append('<li>' + inserts + '</li>');
//      });
//
//      // Get the element with id="defaultOpen" and click on it
//      document.getElementById("defaultOpen").click();
//
// });

// Sub order documents
$('#sub-order-docs').hide();
$('.close-order-docs').hide();

$(document).ready(function () {

     $('#order-table .documents').click( function(e){
          e.preventDefault();
          $(this).closest('table').hide();
          $('#sub-order-docs').css('display', 'inline-block');
          $('.close-order-docs').show();

          // Changes the title
          var orderTitle = $(this).closest('tr').find('.order').text();
          $('.sub-order-title').text(orderTitle);

          // Adds details
          var orderType = $(this).closest('tr').find('.order-type-details .wrapper').text();
          $('#sub-order-docs .type-details').text(orderType);

          var orderDate = $(this).closest('tr').find('.order-date-details .wrapper').text();
          $('#sub-order-docs .date-details').text(orderDate);
     });

     $('#order-table .documents').click( function(e){
          e.preventDefault();
          $(this).closest('table').hide();
          $('#sub-order-docs').show();
          $('.close-order-docs').show();

          // Changes the title
          var orderTitle = $(this).closest('tr').find('.order').text();

          $('.sub-order-title').text(orderTitle);
     });

     $('.close-order-docs').click( function(e){
          e.preventDefault();
          $(this).hide();
          $('#order-table').show();
          $('#sub-order-docs').hide();
     });

});

// Toggle switch
$(document).ready(function() {
     $('#list').click(function(e){
          e.preventDefault();
          $(this).closest('h2').siblings('.report-list').removeClass('report-thumb-view');
          $(this).closest('h2').siblings('.report-list').addClass('report-list-view');
          $(this).addClass('selected');
          $(this).siblings().removeClass('selected');
     });
     $('#grid').click(function(e){
          e.preventDefault();
          $(this).closest('h2').siblings('.report-list').addClass('report-thumb-view');
          $(this).closest('h2').siblings('.report-list').removeClass('report-list-view');
          $(this).addClass('selected');
          $(this).siblings().removeClass('selected');
     });
});

// Hide/show the pending report
$('.show-pending').click(function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).text(function(i, text){
          return text === "Hide pending report" ? "Show pending report" : "Hide pending report";
     });
});

$('ul.pending-list').hide();

$('.show-pending').click(function(e){
     $('ul.pending-list').toggle();
});
