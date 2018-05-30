// =================================== Create Task - COOKIES =================================== //
$("#supervision-level-button").on("click", function (e) {

     $.cookie("supervision-level-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("supervision-level", $("#supervision-level").val(), {path:'/'});
     $.cookie("supervision-level-date", $("#datepicker").val(), {path:'/'});
     /* textarea */ $.cookie("supervision-level-notes", $(".supervision-level-notes .jqte_editor").html(), {path:'/'});

});

// Populate side bar
if ($.cookie("supervision-level") == 'Minimal' || $.cookie("supervision-level") == 'null' || $.cookie("supervision-level") == 'undefinded' || $.cookie("supervision-level") == '') {
     $(".supervision-level-answer").text($.cookie("supervision-level"));
     $(".client-nav .tablinks.property .order-level").text('Minimal');
     $("#supervision-level").val("Minimal");
     $('span.pfa-report-level').text('103');
     $('#pfa-actions h2').html(`<span class="icon property white"></span>PFA <strong>|</strong> 14820940 <strong>- Minimal</strong>`);
} else if ($.cookie("supervision-level") == 'General') {
     $(".supervision-level-answer").text($.cookie("supervision-level"));
     $(".client-nav .tablinks.property .order-level").text($.cookie("supervision-level"));
     $("#supervision-level").val($.cookie("supervision-level"));
     $('span.pfa-report-level').text('102');
     $('#pfa-actions h2').html(`<span class="icon property white"></span>PFA <strong>|</strong> 14820940 <strong>- General</strong>`);
}
if ($.cookie("supervision-level-date")) { $(".supervision-level-date-answer").text($.cookie("supervision-level-date")); }
if ($.cookie("supervision-level-notes")) { $(".supervision-level-notes-answer").text($.cookie("supervision-level-notes")); }

if ($.cookie("supervision-level-completed") == 'true') {
     $('#supervision-level-confirmation').show();
     setTimeout(function() {
          $("#supervision-level-confirmation").hide(500);
          $.cookie("supervision-level-completed", false, {path:'/'});
     }, 5000);
} else {
     $('#supervision-level-confirmation').hide();
}
