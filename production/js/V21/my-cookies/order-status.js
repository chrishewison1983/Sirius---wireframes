// =================================== Create Task - COOKIES =================================== //
// PFA
$("#order-status-button-pfa").on("click", function (e) {
     $.cookie("order-status-button-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("order-status-pfa", $("#order-status-pfa").val(), {path:'/'});
     $.cookie("order-status-pfa-closed", $("#order-status-pfa-closed").val(), {path:'/'});
     $.cookie("order-status-date-pfa", $(".datepicker-pfa").val(), {path:'/'});
     /* textarea */ $.cookie("order-status-notes-pfa", $(".order-status-notes-pfa .jqte_editor").html(), {path:'/'});

});

if ($.cookie("order-status-pfa")) {
     $(".case-order-status-pfa-answer").text($.cookie("order-status-pfa"));
     $("#order-status-pfa").val($.cookie("order-status-pfa"));
}
if ($.cookie("order-status-pfa") === 'Closed') {
     $('.closed-reason').show().css('display', 'inline-block');
}
if ($.cookie("order-status-pfa-closed")) {
     $(".case-order-status-pfa-closed-answer").text($.cookie("order-status-pfa-closed"));
     $("#order-status-pfa-closed").val($.cookie("order-status-pfa-closed"));
}
if ($.cookie("order-status-date-pfa")) {
     $(".case-status-date-pfa-answer").text($.cookie("order-status-date-pfa"));
     $(".datepicker-pfa").val($.cookie("order-status-date-pfa"));
}
if ($.cookie("order-status-notes-pfa")) {
     $(".order-status-notes-pfa-answer").text($.cookie("order-status-notes-pfa"));
     $(".order-status-notes-pfa .jqte .jqte_editor").html($.cookie("order-status-notes-pfa"));
}

// HW
$("#order-status-button-hw").on("click", function (e) {
     $.cookie("order-status-button-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("order-status-hw", $("#order-status-hw").val(), {path:'/'});
     $.cookie("order-status-hw-closed", $("#order-status-hw-closed").val(), {path:'/'});
     $.cookie("order-status-date-hw", $(".datepicker-hw").val(), {path:'/'});
     /* textarea */ $.cookie("order-status-notes-hw", $(".order-status-notes-hw .jqte_editor").html(), {path:'/'});

});

if ($.cookie("order-status-hw")) {
     $(".case-order-status-hw-answer").text($.cookie("order-status-hw"));
     $("#order-status-hw").val($.cookie("order-status-hw"));
}
if ($.cookie("order-status-hw") === 'Closed') {
     $('.closed-reason').show().css('display', 'inline-block');
}
if ($.cookie("order-status-hw-closed")) {
     $(".case-order-status-hw-closed-answer").text($.cookie("order-status-hw-closed"));
     $("#order-status-hw-closed").val($.cookie("order-status-hw-closed"));
}
if ($.cookie("order-status-date-hw")) {
     $(".case-status-date-hw-answer").text($.cookie("order-status-date-hw"));
     $(".datepicker-hw").val($.cookie("order-status-date-hw"));
}
if ($.cookie("order-status-notes-hw")) {
     $(".order-status-notes-hw-answer").text($.cookie("order-status-notes-hw"));
     $(".order-status-notes-hw .jqte .jqte_editor").html($.cookie("order-status-notes-hw"));
}

// Show correct tab
if ($.cookie("order-status-button-completed") == 'true') {

     // Selected tab
     $('#client-overview ul.client-details.tabs li.tab-link').removeClass('current');
     $('#client-overview ul.client-details.tabs li.tab-link[data-tab="summary-tab-6"]').addClass('current');
     $('#client-overview .client-details.tab-content').removeClass('current');
     $('#client-overview .client-details.tab-content#summary-tab-6').addClass('current');

     // Accordion open
     $('.accordion.order-section .accordion-1').addClass('active');
     $('.accordion.order-section .accordion-1 button').addClass('active');
     $('.accordion.order-section .accordion-1 #accordion-1').show();

     setTimeout(function() {
          $.cookie("order-status-button-completed", false, {path:'/'});
     }, 5000);

}
