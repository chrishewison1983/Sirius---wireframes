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
          $('.tablinks.overview').removeClass('active');
          $('.tablinks.health').addClass('active');
          $('#client-overview').hide();
          $('#client-health').show();
          $('.edit-case-link').show();
          $('.add-deputy-link').show();
          $('.normal-status').css('display', 'inline-block');
          $('#section-header.client-page .normal-status').text('H & W | 19273638');
          $('#section-header.client-page .breadcrumb').html('<a href="../dashboard.html">My tasks</a> <div class="separator"> > </div> <a href="4a-new-client.html">Client summary</a> <div class="separator"> > </div> <span>H & W | 19273638</span>');
     }

     // Changes the tabs to be focused on the Properties tab
     if (window.location.href.indexOf("property") != -1) {
          $('.tablinks.overview').removeClass('active');
          $('.tablinks.property').addClass('active');
          $('#client-overview').hide();
          $('#client-property').show();
          $('.edit-case-link').show();
          $('.add-deputy-link').show();
          $('.normal-status').css('display', 'inline-block');
          $('#section-header.client-page .normal-status').text('PFA | 14820940');
          $('#section-header.client-page .breadcrumb').html('<a href="../dashboard.html">My tasks</a> <div class="separator"> > </div> <a href="4a-new-client.html">Client summary</a> <div class="separator"> > </div> <span>PFA | 14820940</span>');
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

     $(".tablinks.overview").click(function(){
          $('nav.breadcrumb').html(`
               <a href="../dashboard.html">My tasks</a>
               <div class="separator"> &gt; </div>
               <span>Client summary</span>
          `);
          $('.edit-case-link').hide();
          $('.add-deputy-link').hide();
          $('#section-header.client-page .normal-status').text("CLIENT'S SUMMARY PAGE");

          // Make the summary tab selected
          $('#client-overview').find('*[data-tab="summary-tab-1"]').addClass('current');
          $('#client-overview').find('*[data-tab="summary-tab-2"], *[data-tab="summary-tab-3"], *[data-tab="summary-tab-4"], *[data-tab="summary-tab-5"], *[data-tab="summary-tab-6"]').removeClass('current');

          // Make the summary content selected
          $('#client-overview').find('#summary-tab-1').addClass('current');
          $('#client-overview').find('#summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');
     });

     $(".tablinks.health").click(function(){
          $('nav.breadcrumb').html(`
               <a href="../dashboard.html">My tasks</a>
               <div class="separator"> &gt; </div>
               <a href="4a-new-client.html">Client summary</a>
               <div class="separator"> &gt; </div>
               <span>H &amp; W | 19273638</span>
          `);
          $('.edit-case-link').show();
          $('.add-deputy-link').show();
          $('#section-header.client-page .normal-status').text('H & W | 19273638');

          // Make the summary tab selected
          $('#client-health').find('*[data-tab="health-tab-1"]').addClass('current');
          $('#client-health').find('*[data-tab="health-tab-2"], *[data-tab="health-tab-3"], *[data-tab="health-tab-4"], *[data-tab="health-tab-5"], *[data-tab="health-tab-6"]').removeClass('current');

          // Make the summary content selected
          $('#client-health').find('#health-tab-1').addClass('current');
          $('#client-health').find('#health-tab-2, #health-tab-3, #health-tab-4, #health-tab-5, #health-tab-6').removeClass('current');
     });

     $(".tablinks.property").click(function(){
          $('nav.breadcrumb').html(`
               <a href="../dashboard.html">My tasks</a>
               <div class="separator"> &gt; </div>
               <a href="4a-new-client.html">Client summary</a>
               <div class="separator"> &gt; </div>
               <span>PFA | 14820940</span>
          `);
          $('.edit-case-link').show();
          $('.add-deputy-link').show();
          $('#section-header.client-page .normal-status').text('PFA | 14820940');

          // Make the summary tab selected
          $('#client-property').find('*[data-tab="property-tab-1"]').addClass('current');
          $('#client-property').find('*[data-tab="property-tab-2"], *[data-tab="property-tab-3"], *[data-tab="property-tab-4"], *[data-tab="property-tab-5"], *[data-tab="property-tab-6"]').removeClass('current');

          // Make the summary content selected
          $('#client-property').find('#property-tab-1').addClass('current');
          $('#client-property').find('#property-tab-2, #property-tab-3, #property-tab-4, #property-tab-5, #property-tab-6').removeClass('current');
     });

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
     $(`#deputies-table tr.summary-row[data-value="${dataValue}"]`).toggleClass('open');
     $(`#deputies-table tr.details-row[data-value="${dataValue}"]`).toggle();
     // $(this).closest('tr').toggleClass('open');
     $(this).text($(this).text() == 'View full details' ? 'Hide full details' : 'View full details');
     $(this).siblings('.contact-info').toggle();
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
