// =================================== Create Task - COOKIES =================================== //
$("#supervision-level-button").on("click", function (e) {

     $.cookie("supervision-level-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("supervision-level", $("input[name=supervision-level]:checked").val(), {path:'/'});
     // $.cookie("supervision-level", $("#supervision-level").val(), {path:'/'});
     $.cookie("supervision-level-date", $("#datepicker").val(), {path:'/'});
     $.cookie("supervision-level-asset", $("input[name=supervision-level-asset]:checked").val(), {path:'/'});
     /* textarea */ $.cookie("supervision-level-notes", $(".supervision-level-notes .jqte_editor").html(), {path:'/'});

});

// Populate side bar
if ($.cookie("supervision-level") == 'Minimal' || $.cookie("supervision-level") == 'null' || $.cookie("supervision-level") == 'undefinded' || $.cookie("supervision-level") == '') {
     $(".supervision-level-answer").text($.cookie("supervision-level"));
     $(".client-nav .tablinks.property .order-level").text('Minimal');
     $("#supervision-level").val("Minimal");
     $('span.pfa-report-level').text('103');
} else if ($.cookie("supervision-level") == 'General') {
     $(".supervision-level-answer").text($.cookie("supervision-level"));
     $(".client-nav .tablinks.property .order-level").text($.cookie("supervision-level"));
     $("#supervision-level").val($.cookie("supervision-level"));
     $('span.pfa-report-level').text('102');
}
if ($.cookie("supervision-level-date")) { $(".supervision-level-date-answer").text($.cookie("supervision-level-date")); }
if ($.cookie("supervision-level-asset")) { $(".supervision-level-asset-answer").text($.cookie("supervision-level-asset")); }
if ($.cookie("supervision-level-asset") == 'Less than £21K') {
     $(".asset-level .twenty-one-k").addClass('checked');
     $(".asset-level .twenty-one-k input").attr('checked', 'checked');
}
if ($.cookie("supervision-level-asset") == '£21k or more') {
     $(".asset-level .twenty-one-k-more").addClass('checked');
     $(".asset-level .twenty-one-k-more input").attr('checked', 'checked');
}
if ($.cookie("supervision-level-asset") == 'Unkown') {
     $(".asset-level .unkown").addClass('checked');
     $(".asset-level .unkown input").attr('checked', 'checked');
}
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
