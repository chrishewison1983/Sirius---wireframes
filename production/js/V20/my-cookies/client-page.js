// =================================== Client page - COOKIES =================================== //
// $("#create-task-button").on("click", function (e) {
//
//      $.cookie("create-task-completed", true, {path:'/'});
//
//      // Cookies for side bar
//      $.cookie("task-type", $("#task-type").val(), {path:'/'});
//      $.cookie("task-name", $("#task-name").val(), {path:'/'});
//      /* textarea */ $.cookie("task-notes", $(".task-notes .jqte_editor").html(), {path:'/'});
//      $.cookie("assign-to", $("input[name=assign-to]:checked").val(), {path:'/'});
//      $.cookie("task-user", $("#task-user").val(), {path:'/'});
//      $.cookie("task-team", $("#task-team").val(), {path:'/'});
//      $.cookie("task-date", $("#datepicker").val(), {path:'/'});
//
// });
//
// // Populate side bar
if ($.cookie('security-bond') === 'undefined') {
     $('#edit-bond, #bond-dispensed').hide();
     $('#create-bond').show();
     $('.add-bond .text-bond').text('Add bond');
} else if ($.cookie('security-bond') === 'No') {
     $('#edit-bond, #bond-dispensed').hide();
     $('#create-bond').show();
     $('.add-bond .text-bond').text('Add bond');
} else if ($.cookie('security-bond') === 'Yes') {
     $('#edit-bond').show();
     $('#create-bond, #bond-dispensed').hide();
     $('.add-bond .text-bond').text('Edit bond');
} else if ($.cookie('security-bond') === 'dispense') {
     $('#bond-dispensed').show();
     $('#create-bond, #edit-bond').hide();
     $('.add-bond .text-bond').text('Edit bond');
} else {
     $('#edit-bond, #bond-dispensed').hide();
     $('#create-bond').show();
     $('.add-bond .text-bond').text('Add bond');
}

// if ($.cookie('order-journey') === 'HandW') {
//      // Changes the state of the Tabs
//      $('.new-client ul.client-details .tablinks').removeClass('active');
//      $('.new-client ul.client-details .tablinks.health').addClass('active');
//      $('.new-client .tabcontent').removeClass('current');
//      $('.new-client #client-health').addClass('current');
//
//      // Changes the content in the header
//      $('.client-page .normal-status').text('H & W | 14820940');
//      $('.client-page .breadcrumb').html('<a href="../dashboard.html">My tasks</a> <div class="separator"> > </div> <a href="4a-new-client.html">Client summary</a> <div class="separator"> > </div> <span>H & W | 14820940</span>');
// } else if ($.cookie('order-journey') === 'PFA') {
//      // Changes the state of the Tabs
//      $('.new-client ul.client-details .tablinks').removeClass('active');
//      $('.new-client ul.client-details .tablinks.property').addClass('active');
//      $('.new-client .tabcontent').removeClass('current');
//      $('.new-client #client-property').addClass('current');
//
//      // Changes the content in the header
//      $('.client-page .normal-status').text('PFA | 14820940');
//      $('.client-page .breadcrumb').html('<a href="../dashboard.html">My tasks</a> <div class="separator"> > </div> <a href="4a-new-client.html">Client summary</a> <div class="separator"> > </div> <span>PFA | 14820940</span>');
// } else {
//      // Changes the state of the Tabs
//      $('.new-client ul.client-details .tablinks').removeClass('active');
//      $('.new-client ul.client-details .tablinks.overview').addClass('active');
//      $('.new-client .tabcontent').removeClass('current');
//      $('.new-client #client-overview').addClass('current');
//
//      // Changes the content in the header
//      $('.client-page .normal-status').text("CLIENT'S SUMMARY PAGE");
//      $('.client-page .breadcrumb').html('<a href="../dashboard.html">My tasks</a> <div class="separator"> > </div> <div>Client summary</div>');
// }

// Makes the appropriate tab appear
// if ($.cookie('deputy-created') === 'true') {
//      $('.client-details.tabs .tab-link').removeClass('current');
//      $('.client-details.tabs .tab-link[data-tab="health-tab-4"]').addClass('current');
//      $('.client-details.tab-content').removeClass('current');
//      $('#health-tab-4').addClass('current');
// } else {
//
// }
