// =================================== Create letter page - COOKIES =================================== //
// Create letter
$('#letter-not-started').show();
$('#letter-started').hide();

$(".letter-title").on("click", function (e) {
     $.cookie("create-letter-started", true, {path:'/'});
});

if ($.cookie("create-letter-started") == 'true') {
     $('#letter-not-started').hide();
     $('#letter-started').show();
}

$("#add-letter, #save-and-exit").on("click", function (e) {
     $.cookie("user-journey", 6, {path:'/'});
});

if ($.cookie("user-journey") == 6) {
     $("#tab-6.client-details").addClass('current');
     $("#tab-1.client-details, #tab-2.client-details, #tab-3.client-details, #tab-4.client-details, #tab-5.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-6"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-2"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-4"], .client-details .tab-link[data-tab="tab-5"]').removeClass('current');
     $('#list-of-documents .no-items').hide();
     $('#document-confirmation').slideDown('slow');
}

$(".document-item").on("click", function (e) {
     $.cookie("document-title", $(this).find('.doc-title').text(), {path:'/'});
});

if ($.cookie("document-title")) {
     $(".document h3").text($.cookie("document-title"));
     $(".document-title").text($.cookie("document-title"));
     $('.current-document-title').text($.cookie("document-title"));
}

$("#create-letter").on("click", function (e) {
     $.cookie("recipients", $(this).val(), {path:'/'});
     $.cookie("create-letter-journey", false, {path:'/'});
     $.cookie("completed-letter", true, {path:'/'});
});

if ($.cookie("recipients")) {
     $("#recipients").val($.cookie("recipients"));
}

if ($.cookie("completed-letter") == 'true') {
     $("#drafts .place-holder-text").hide();
}

// Inserts
$('#inserts-section').hide();
$('#inserts-selected').hide();

$(".inserts-journey").on("click", function (e) {
     $.cookie("inserts-needed", true, {path:'/'});
});

if ($.cookie("inserts-needed") == 'true') {
     $("#inserts-section").show();
}

$(".insert").on("click", function (e) {
     $.cookie("inserts-added", true, {path:'/'});
});

if ($.cookie("inserts-added") == 'true') {
     $("#inserts-section .place-holder-text").hide();
     $('#inserts-selected').show();
}

// Send to print
$("#confirm-print-send").on("click", function (e) {
     $.cookie("sent-to-print", true, {path:'/'});
     $.cookie("create-letter-started", false, {path:'/'});
     $.cookie("create-letter-journey", false, {path:'/'});
     $.cookie("drafts-left", false, {path:'/'});
});

if ($.cookie("sent-to-print") == 'true') {
     $("#correspondence-sent").show();

     // Changes tabs to documents
     $('#client-health .tabs .tab-link').removeClass('current');
     $('#client-health .tabs .tab-link[data-tab="health-tab-7"]').addClass('current');
     $('#client-health #health-tab-7').addClass('current');
     $('#client-health #health-tab-1').removeClass('current');

     // Add letters sent to the documents list
     $('#documents-viewer table.livelink-documents tbody').append(`
          <tr>
          	<td><a href="#" class="hide-page-1">${ 'Recipients_Name-' + JSON.parse(sessionStorage.getItem('selected-letter')) }</a></td>
          	<!-- <td>7000-0000-2563</td> -->
          	<td>IT-SS-ORDER</td>
          	<!-- <td>DEP - PFA</td> -->
          	<td>Outgoing</td>
          	<td>27/08/2017 11:07:13</td>
          </tr>
     `);

}

// =================================== Create letter journey - COOKIES =================================== //
$(".create-letter-journey-button").on("click", function (e) {
     $.cookie("create-letter-journey", true, {path:'/'});
});

if ($.cookie("create-letter-journey") == 'true') {
     // 4a - Changes client page HTML
     $('#client-health .tab-link').removeClass('current');
     $('#client-health .tab-link[data-tab="health-tab-7"]').addClass('current');
     $('#client-health .tab-content').removeClass('current');
     $('#client-health #health-tab-7').addClass('current');

     // 4a - shows the document
     $('#documents-viewer .document-1 .page-1').hide();
     $('#documents-viewer .document-1 .page-2').show();
     $('#documents-viewer .document-1 .page-2 .control-panel h2').text('Application_correspondence.pdf');

     // 2a - shows the documents tab
     $('#side-panel .tab-link').removeClass('current');
     $('#side-panel .tab-link[data-tab="tab-6"]').addClass('current');
     $('#side-panel .tab-content').removeClass('current');
     $('#side-panel #tab-6').addClass('current');
}
