// =================================== Client Page - JAVASCRIPT =================================== //
// Client summary
// $('.normal-status').css('display', 'inline-block');
$('#new-client-summary').hide();

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
          $('#hub-filter-panel #handw-actions, #hub-filter-panel .hw-wrapper').addClass('checked');
          $('#hub-filter-panel #handw-actions h2 .icon').removeClass('white');
          $('#hub-filter-panel #handw-actions input[value="handw"]').attr('checked', 'checked');
          $('.handw-actions').show();
          $('.handw-content-item').show();
          $('.pfa-actions').hide();
          $('.pfa-content-item').hide();
          $('ul.client-details.tabs li').removeClass('current');
          $('ul.client-details.tabs li[data-tab="summary-tab-1"]').addClass('current');
          $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('4');
          $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('2');
          $('ul.client-details.tabs li[data-tab="summary-tab-5"], ul.client-details.tabs li[data-tab="summary-tab-7"]').removeClass('hide');

          // Actions list
          $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
          $('li[data-action="action-6"], li[data-action="action-12"]').removeClass('active');

          $('li[data-action="action-2"] a').addClass('edit-case-health').removeClass('edit-case-pfa');

          // $('#section-header.client-page .normal-status').text('H & W | 14820940');
          // $('#section-header.client-page .breadcrumb').html('<a href="../index.html">My tasks</a> <div class="separator"> > </div> <a href="4a-new-client.html">Client summary</a> <div class="separator"> > </div> <span>H & W | 14820940</span>');
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
          $('#hub-filter-panel #pfa-actions, #hub-filter-panel .pfa-wrapper').addClass('checked');
          $('#hub-filter-panel #pfa-actions h2 .icon').removeClass('white');
          $('#hub-filter-panel #pfa-actions input[value="pfa"]').attr('checked', 'checked');
          $('.pfa-actions').show();
          $('.pfa-content-item').show();
          $('.handw-actions').hide();
          $('.handw-content-item').hide();
          $('ul.client-details.tabs li').removeClass('current');
          $('ul.client-details.tabs li[data-tab="summary-tab-1"]').addClass('current');
          $('ul.client-details.tabs li[data-tab="summary-tab-5"] span').text('1');
          $('ul.client-details.tabs li[data-tab="summary-tab-7"] span').text('1');
          $('ul.client-details.tabs li[data-tab="summary-tab-5"], ul.client-details.tabs li[data-tab="summary-tab-7"]').removeClass('hide');

          // Actions list
          $('li[data-action="action-1"], li[data-action="action-2"], li[data-action="action-3"], li[data-action="action-4"], li[data-action="action-5"], li[data-action="action-6"], li[data-action="action-7"], li[data-action="action-8"], li[data-action="action-9"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-12"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');
          $('li[data-action="action-2"] a').addClass('edit-case-pfa').removeClass('edit-case-health');

          // $('#section-header.client-page .normal-status').text('PFA | 14820940');
          // $('#section-header.client-page .breadcrumb').html('<a href="../index.html">My tasks</a> <div class="separator"> > </div> <a href="4a-new-client.html">Client summary</a> <div class="separator"> > </div> <span>PFA | 14820940</span>');
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
          $('#client-summary').hide();
          $('#new-client-summary').show();
     }

     // $(".tablinks.overview").click(function(){
     //      $('nav.breadcrumb').html(`
     //           <a href="../index.html">My tasks</a>
     //           <div class="separator"> &gt; </div>
     //           <span>Client summary</span>
     //      `);
     //      $('.edit-case-link').hide();
     //      $('.add-deputy-link').hide();
     //      $('#section-header.client-page .normal-status').text("CLIENT'S SUMMARY PAGE");
     //
     //      // Make the summary tab selected
     //      $('#client-overview').find('*[data-tab="summary-tab-1"]').addClass('current');
     //      $('#client-overview').find('*[data-tab="summary-tab-2"], *[data-tab="summary-tab-3"], *[data-tab="summary-tab-4"], *[data-tab="summary-tab-5"], *[data-tab="summary-tab-6"]').removeClass('current');
     //
     //      // Make the summary content selected
     //      $('#client-overview').find('#summary-tab-1').addClass('current');
     //      $('#client-overview').find('#summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');
     // });

     // $(".tablinks.health").click(function(){
     //      $('nav.breadcrumb').html(`
     //           <a href="../index.html">My tasks</a>
     //           <div class="separator"> &gt; </div>
     //           <a href="4a-new-client.html">Client summary</a>
     //           <div class="separator"> &gt; </div>
     //           <span>H &amp; W | 14820940</span>
     //      `);
     //      $('.edit-case-link').show();
     //      $('.add-deputy-link').show();
     //      $('#section-header.client-page .normal-status').text('H & W | 14820940');
     //
     //      // Make the summary tab selected
     //      $('#client-health').find('*[data-tab="health-tab-1"]').addClass('current');
     //      $('#client-health').find('*[data-tab="health-tab-2"], *[data-tab="health-tab-3"], *[data-tab="health-tab-4"], *[data-tab="health-tab-5"], *[data-tab="health-tab-6"]').removeClass('current');
     //
     //      // Make the summary content selected
     //      $('#client-health').find('#health-tab-1').addClass('current');
     //      $('#client-health').find('#health-tab-2, #health-tab-3, #health-tab-4, #health-tab-5, #health-tab-6').removeClass('current');
     // });

     // $(".tablinks.property").click(function(){
     //      $('nav.breadcrumb').html(`
     //           <a href="../index.html">My tasks</a>
     //           <div class="separator"> &gt; </div>
     //           <a href="4a-new-client.html">Client summary</a>
     //           <div class="separator"> &gt; </div>
     //           <span>PFA | 14820940</span>
     //      `);
     //      $('.edit-case-link').show();
     //      $('.add-deputy-link').show();
     //      $('#section-header.client-page .normal-status').text('PFA | 14820940');
     //
     //      // Make the summary tab selected
     //      $('#client-property').find('*[data-tab="property-tab-1"]').addClass('current');
     //      $('#client-property').find('*[data-tab="property-tab-2"], *[data-tab="property-tab-3"], *[data-tab="property-tab-4"], *[data-tab="property-tab-5"], *[data-tab="property-tab-6"]').removeClass('current');
     //
     //      // Make the summary content selected
     //      $('#client-property').find('#property-tab-1').addClass('current');
     //      $('#client-property').find('#property-tab-2, #property-tab-3, #property-tab-4, #property-tab-5, #property-tab-6').removeClass('current');
     // });

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

// Shows the client details
$('#client-details-summary .open').click( function(e){
     e.preventDefault();
     // $(this).closest('tr').toggleClass('open');
     $(this).text($(this).text() == 'View full details' ? 'Hide full details' : 'View full details');
     $(this).siblings('#flexbox-container').toggleClass('full-height');
});


// Shows the report details
// $('.report-info').hide();

$('.full-report-details').click( function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).text($(this).text() == 'View date details' ? 'Hide date details' : 'View date details');
     $(this).siblings('.report-info').toggleClass('show');
});

$('.full-report-details-no-ctas').click( function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).text($(this).text() == 'View date details' ? 'Hide date details' : 'View date details');
     $(this).siblings('.report-info').toggleClass('show');

     // Hides and changes the other cta
     $('.document-list, .notes-section').removeClass('show');
     $('.view-notes').text('View notes').removeClass('close');
});

$('.pending-report').click( function(e){
     $(this).closest('li').find('.report-info').toggleClass('show');
});

$('.report-document-list').click( function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).text($(this).text() == 'View supporting documents' ? 'Hide supporting documents' : 'View supporting documents');
     $(this).siblings('.document-list').toggleClass('show');

     // Hides and changes the other cta
     $('.report-info, .notes-section').removeClass('show');
     $('.full-report-details-no-ctas').text('View date details').removeClass('close');
     $('.view-notes').text('View notes').removeClass('close');
});

$('.view-notes').click( function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).text($(this).text() == 'View notes' ? 'Hide notes' : 'View notes');
     $(this).siblings('.notes-section').toggleClass('show');

     // Hides and changes the other cta
     $('.report-info, .document-list').removeClass('show');
     $('.full-report-details-no-ctas').text('View date details').removeClass('close');
     $('.report-document-list').text('View supporting documents').removeClass('close');
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
