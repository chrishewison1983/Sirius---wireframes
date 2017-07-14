// =================================== Client Page - JAVASCRIPT =================================== //
// Client summary
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
          $("#section-header").removeClass('welsh-message, deceased-message').addClass('violent-risk-message');
          $("#section-header .normal").hide();

          $('.client-nav').addClass('violent');
     }

     // Show the state when the client is Welsh
     if (window.location.href.indexOf("welsh") != -1) {
          // Change the client status
          $("#section-header").removeClass('violent-risk-message, deceased-message').addClass('welsh-message');
          $("#section-header .normal").hide();
     }

     // Show the state when the client is deceased
     if (window.location.href.indexOf("deceased") != -1) {
          // Change the client status
          $("#section-header").removeClass('violent-risk-message, welsh-message').addClass('deceased-message');
          $("#section-header .normal").hide();
     }

     // Changes the tabs to be focused on the Health & Welfare tab
     if (window.location.href.indexOf("HandW") != -1) {
          $('.tablinks.overview').removeClass('active');
          $('.tablinks.health').addClass('active');
          $('#client-overview').hide();
          $('#client-health').show();
          $('.edit-case-link').show();
     }

     // Changes the tabs to be focused on the Properties tab
     if (window.location.href.indexOf("property") != -1) {
          $('.tablinks.overview').removeClass('active');
          $('.tablinks.property').addClass('active');
          $('#client-overview').hide();
          $('#client-property').show();
          $('.edit-case-link').show();
     }

     // Shows the state of a brand new client
     if (window.location.href.indexOf("NewClient") != -1) {
          // Hides case tabs
          $('.tablinks.health, .tablinks.property').hide();
          $('.tablinks.unassigned').addClass('create-case').html(`
               <a href="../1-create-case/1a-the-order.html" class="wrapper">
                    <span></span>
                    <h1>Create case</h1>
               </a>
          `);

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
          $('.normal').text("CLIENT'S SUMMARY PAGE");

          // Make the summary tab selected
          $('#client-overview').find('*[data-tab="summary-tab-1"]').addClass('current');
          $('#client-overview').find('*[data-tab="summary-tab-2"]').removeClass('current');

          // Make the summary content selected
          $('#client-overview').find('#summary-tab-1').addClass('current');
          $('#client-overview').find('#summary-tab-2').removeClass('current');
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
          $('.normal').text('H & W | 19273638');

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
          $('.normal').text('PFA | 14820940');

          // Make the summary tab selected
          $('#client-property').find('*[data-tab="property-tab-1"]').addClass('current');
          $('#client-property').find('*[data-tab="property-tab-2"], *[data-tab="property-tab-3"], *[data-tab="property-tab-4"], *[data-tab="property-tab-5"], *[data-tab="property-tab-6"]').removeClass('current');

          // Make the summary content selected
          $('#client-property').find('#property-tab-1').addClass('current');
          $('#client-property').find('#property-tab-2, #property-tab-3, #property-tab-4, #property-tab-5, #property-tab-6').removeClass('current');
     });

     $(".tablinks.unassigned").click(function(){
          $('nav.breadcrumb').html(`
               <a href="../dashboard.html">My tasks</a>
               <div class="separator"> &gt; </div>
               <a href="4a-new-client.html">Client summary</a>
               <div class="separator"> &gt; </div>
               <span>Unsupervised cases</span>
          `);
          $('.edit-case-link').hide();
          $('.normal').text("CLIENT'S UNSUPERVISED CASES");

          // Make the summary tab selected
          $('#client-unassigned').find('*[data-tab="unassigned-tab-1"]').addClass('current');
          $('#client-unassigned').find('*[data-tab="unassigned-tab-2"], *[data-tab="unassigned-tab-3"], *[data-tab="unassigned-tab-4"], *[data-tab="unassigned-tab-5"], *[data-tab="unassigned-tab-6"]').removeClass('current');

          // Make the summary content selected
          $('#client-unassigned').find('#unassigned-tab-1').addClass('current');
          $('#client-unassigned').find('#unassigned-tab-2, #unassigned-tab-3, #unassigned-tab-4, #unassigned-tab-5, #unassigned-tab-6').removeClass('current');
     });

});

// tasks
// $('#task-list .more-info').click(function(e){
//      e.preventDefault();
//      $(this).siblings('.details').toggle('slow');
//      $(this).toggleClass('open');
// });

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

// Property and finance
