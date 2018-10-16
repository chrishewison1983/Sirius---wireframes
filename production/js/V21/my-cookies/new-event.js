// =================================== New event - COOKIES =================================== //
$("#new-event-button, #replace-event-button").on("click", function (e) {

     $.cookie("new-event-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("event-type", $("#event-type").val(), {path:'/'});
     $.cookie("event-direction", $("input[name=event-direction]:checked").val(), {path:'/'});
     $.cookie("event-date", $("#datepicker").val(), {path:'/'});
     $.cookie("event-subject", $("#event-subject").val(), {path:'/'});
     /* textarea */ $.cookie("event-notes", $(".event-notes .jqte_editor").html(), {path:'/'});

});

// Populate side bar
if ($.cookie("event-type")) { $(".event-type-answer").text($.cookie("event-type")); }
if ($.cookie("event-direction")) { $(".event-direction-answer").text($.cookie("event-direction")); }
if ($.cookie("event-date")) { $(".event-date-answer").text($.cookie("event-date")); }
if ($.cookie("event-subject")) { $(".event-subject-answer").text($.cookie("event-subject")); }
if ($.cookie("event-notes")) { $(".event-notes-answer").text($.cookie("event-notes")); }

// =================================== Replace document - COOKIES =================================== //
$("table.livelink-documents .replace").click( function(){
     $.cookie("replace-event", true, {path:'/'});
     $.cookie("document-name", $(this).closest('tr').find('.hide-page-1').text(), {path:'/'});
     $.cookie("movie-name", $(this).closest('tr').find('.mov-file').text(), {path:'/'});
});

$(".control-panel .buttons .replace").click( function(){
     $.cookie("replace-event", true, {path:'/'});
     $.cookie("document-name", $(this).closest('.control-panel').find('h2').text(), {path:'/'});
});


$("#replace-event-button").on("click", function (e) {
     $.cookie("replace-event", true, {path:'/'});
     // $.cookie("new-document-name", $('#dropzone .dz-preview .dz-details .dz-filename span').text(), {path:'/'});
     $.cookie("new-document-name", $('#replacement-document').val(), {path:'/'});
     $.cookie("new-document-reference", $('#replacement-document-reference').val(), {path:'/'});
});

if ($.cookie("document-name") || $.cookie("movie-name")) {
     $('main.edit-event-journey #section-header h1 .document-name').text($.cookie("document-name"));
     $('#document-replaced-confirmation .old-document-name').text($.cookie("document-name"));
}

if ($.cookie("new-document-name")) {
     $('#document-replaced-confirmation .new-document-name').text($.cookie("new-document-name"));
}

// Changes based on the document selected
// DOC 2 & DOC 3
if ($.cookie("document-name") == 'Visit_document_title_1.pdf' || $.cookie("document-name") == 'Visit_document_title_2.pdf') {
     $('#event-type').val('Report - general');
     $('#event-direction-outbound').attr('checked', 'checked').parent().addClass('checked');

     $('#accordion-11').addClass('open').css('display', 'inline-block');
     $('#accordion-11').siblings('.accordion-section-title').addClass('active');
}

if ($.cookie("document-name") == 'Visit_document_title_1.pdf' && $.cookie("replace-event") == 'true') {

     if ($.cookie("new-document-reference")) {
          $('table.livelink-documents tr.replace-document-2 .hide-page-1').text($.cookie("new-document-reference"));
          $('table.livelink-documents tr.replace-document-2 .doc-info').prepend(`
               <div class="new-document-reference">${$.cookie("new-document-name")}</div>
          `);
     } else if ($.cookie("new-document-reference") == null || $.cookie("new-document-reference") == '') {
          $('table.livelink-documents tr.replace-document-2 .hide-page-1').text($.cookie("new-document-name"));
     }

     $('#client-overview table.livelink-documents tr.replace-document-2').addClass('added');

     $('#client-overview table.livelink-documents tr.replace-document-2 .date-indicator').html(`
		<span class="icon"></span>Today, 08:17:13
		<span class="type">Replaced date</span>
     `);
     $('#client-overview table.livelink-documents tr.replace-document-2 .created-by').html(`
          Replaced by: <a href="#" class="sirius-user-id">flow.lay</a>
     `);

}
if ($.cookie("document-name") == 'Visit_document_title_2.pdf' && $.cookie("replace-event") == 'true') {

     if ($.cookie("new-document-reference")) {
          $('table.livelink-documents tr.replace-document-3 .hide-page-1').text($.cookie("new-document-reference"));
          $('table.livelink-documents tr.replace-document-3 .doc-info').prepend(`
               <div class="new-document-reference">${$.cookie("new-document-name")}</div>
          `);
     } else if ($.cookie("new-document-reference") == null || $.cookie("new-document-reference") == '') {
          $('table.livelink-documents tr.replace-document-3 .hide-page-1').text($.cookie("new-document-name"));
     }

     $('#client-overview table.livelink-documents tr.replace-document-3').addClass('added');

     $('#client-overview table.livelink-documents tr.replace-document-3 .date-indicator').html(`
		<span class="icon"></span>Today, 08:17:13
		<span class="type">Replaced date</span>
     `);
     $('#client-overview table.livelink-documents tr.replace-document-3 .created-by').html(`
          Replaced by: <a href="#" class="sirius-user-id">flow.lay</a>
     `);

}
// DOC 4
if ($.cookie("document-name") == 'Reports_document_title_1.pdf') {
     $('#event-type').val('Report - Financial Evidence');
     $('#event-direction-outbound').attr('checked', 'checked').parent().addClass('checked');

     $('#accordion-12').addClass('open').css('display', 'inline-block');
     $('#accordion-12').siblings('.accordion-section-title').addClass('active');
}
if ($.cookie("document-name") == 'Reports_document_title_1.pdf' && $.cookie("replace-event") == 'true') {

     if ($.cookie("new-document-reference")) {
          $('table.livelink-documents tr.replace-document-4 .hide-page-1').text($.cookie("new-document-reference"));
          $('table.livelink-documents tr.replace-document-4 .doc-info').prepend(`
               <div class="new-document-reference">${$.cookie("new-document-name")}</div>
          `);
     } else if ($.cookie("new-document-reference") == null || $.cookie("new-document-reference") == '') {
          $('table.livelink-documents tr.replace-document-4 .hide-page-1').text($.cookie("new-document-name"));
     }

     $('#client-overview table.livelink-documents tr.replace-document-4').addClass('added');

     $('#client-overview table.livelink-documents tr.replace-document-4 .date-indicator').html(`
		<span class="icon"></span>Today, 08:17:13
		<span class="type">Replaced date</span>
     `);
     $('#client-overview table.livelink-documents tr.replace-document-4 .created-by').html(`
          Replaced by: <a href="#" class="sirius-user-id">flow.lay</a>
     `);

}
// DOC 5 & DOC 6
if ($.cookie("document-name") == 'Correspondence_document_1.pdf' || $.cookie("document-name") == 'Correspondence_document_2.pdf') {
     $('#event-type').val('Correspondence');
     $('#event-direction-outbound').attr('checked', 'checked').parent().addClass('checked');

     $('#accordion-13').addClass('open').css('display', 'inline-block');
     $('#accordion-13').siblings('.accordion-section-title').addClass('active');
}
if ($.cookie("document-name") == 'Correspondence_document_1.pdf' && $.cookie("replace-event") == 'true') {

     if ($.cookie("new-document-reference")) {
          $('table.livelink-documents tr.replace-document-5 .hide-page-1').text($.cookie("new-document-reference"));
          $('table.livelink-documents tr.replace-document-5 .doc-info').prepend(`
               <div class="new-document-reference">${$.cookie("new-document-name")}</div>
          `);
     } else if ($.cookie("new-document-reference") == null || $.cookie("new-document-reference") == '') {
          $('table.livelink-documents tr.replace-document-5 .hide-page-1').text($.cookie("new-document-name"));
     }

     $('#client-overview table.livelink-documents tr.replace-document-5').addClass('added');

     $('#client-overview table.livelink-documents tr.replace-document-5 .date-indicator').html(`
		<span class="icon"></span>Today, 08:17:13
		<span class="type">Replaced date</span>
     `);
     $('#client-overview table.livelink-documents tr.replace-document-5 .created-by').html(`
          Replaced by: <a href="#" class="sirius-user-id">flow.lay</a>
     `);

}
if ($.cookie("document-name") == 'Correspondence_document_2.pdf' && $.cookie("replace-event") == 'true') {

     if ($.cookie("new-document-reference")) {
          $('table.livelink-documents tr.replace-document-6 .hide-page-1').text($.cookie("new-document-reference"));
          $('table.livelink-documents tr.replace-document-6 .doc-info').prepend(`
               <div class="new-document-reference">${$.cookie("new-document-name")}</div>
          `);
     } else if ($.cookie("new-document-reference") == null || $.cookie("new-document-reference") == '') {
          $('table.livelink-documents tr.replace-document-6 .hide-page-1').text($.cookie("new-document-name"));
     }

     $('#client-overview table.livelink-documents tr.replace-document-6').addClass('added');

     $('#client-overview table.livelink-documents tr.replace-document-6 .date-indicator').html(`
		<span class="icon"></span>Today, 08:17:13
		<span class="type">Replaced date</span>
     `);
     $('#client-overview table.livelink-documents tr.replace-document-6 .created-by').html(`
          Replaced by: <a href="#" class="sirius-user-id">flow.lay</a>
     `);

}
// DOC 8
if ($.cookie("document-name") == 'Other_document.pdf') {
     $('#event-type').val('Complaint');
     $('#event-direction-outbound').attr('checked', 'checked').parent().addClass('checked');

     $('#accordion-14').addClass('open').css('display', 'inline-block');
     $('#accordion-14').siblings('.accordion-section-title').addClass('active');
}
if ($.cookie("document-name") == 'Other_document.pdf' && $.cookie("replace-event") == 'true') {

     if ($.cookie("new-document-reference")) {
          $('table.livelink-documents tr.replace-document-8 .hide-page-1').text($.cookie("new-document-reference"));
          $('table.livelink-documents tr.replace-document-8 .doc-info').prepend(`
               <div class="new-document-reference">${$.cookie("new-document-name")}</div>
          `);
     } else if ($.cookie("new-document-reference") == null || $.cookie("new-document-reference") == '') {
          $('table.livelink-documents tr.replace-document-8 .hide-page-1').text($.cookie("new-document-name"));
     }

     $('#client-overview table.livelink-documents tr.replace-document-8').addClass('added');

     $('#client-overview table.livelink-documents tr.replace-document-8 .date-indicator').html(`
		<span class="icon"></span>Today, 08:17:13
		<span class="type">Replaced date</span>
     `);
     $('#client-overview table.livelink-documents tr.replace-document-8 .created-by').html(`
          Replaced by: <a href="#" class="sirius-user-id">flow.lay</a>
     `);

}
// DOC 9
if ($.cookie("movie-name")) { $('main.edit-event-journey #section-header h1 .document-name').text($.cookie("movie-name")); }
if ($.cookie("movie-name") == 'Video-of-client.mov') {
     $('#event-type').val('Complaint');
     $('#event-direction-inbound').attr('checked', 'checked').parent().addClass('checked');

     $('#accordion-14').addClass('open').css('display', 'inline-block');
     $('#accordion-14').siblings('.accordion-section-title').addClass('active');
}
if ($.cookie("document-name") == 'Video-of-client.mov' && $.cookie("replace-event") == 'true') {
     if ($.cookie("new-document-reference")) {
          $('table.livelink-documents tr.replace-document-9 .hide-page-1').text($.cookie("new-document-reference"));
          $('table.livelink-documents tr.replace-document-9 .doc-info').prepend(`
               <div class="new-document-reference">${$.cookie("new-document-name")}</div>
          `);
     } else if ($.cookie("new-document-reference") == null || $.cookie("new-document-reference") == '') {
          $('table.livelink-documents tr.replace-document-9 .hide-page-1').text($.cookie("new-document-name"));
     }

     $('#client-overview table.livelink-documents tr.replace-document-9').addClass('added');

     $('#client-overview table.livelink-documents tr.replace-document-9 .date-indicator').html(`
		<span class="icon"></span>Today, 08:17:13
		<span class="type">Replaced date</span>
     `);
     $('#client-overview table.livelink-documents tr.replace-document-9 .created-by').html(`
          Replaced by: <a href="#" class="sirius-user-id">flow.lay</a>
     `);

}

setTimeout(function() {
     $.cookie("replace-event", false, {path:'/'});
     $.cookie("new-event-completed", false, {path:'/'});
     $('#client-overview table.livelink-documents tr').removeClass('added');
     $('#document-replaced-confirmation').slideUp();
}, 5000);

if ($.cookie("replace-event") == 'true') {
     $('#document-replaced-confirmation').show();
     $('#client-overview .client-details.tabs li').removeClass('current');
     $('#client-overview .client-details.tabs li[data-tab="summary-tab-9"]').addClass('current');
     $('#client-overview .client-details.tab-content').removeClass('current');
     $('#client-overview .client-details.tab-content#summary-tab-9').addClass('current');
}
