// =================================== Create Task - COOKIES =================================== //
$("#supervision-level-button").on("click", function (e) {

     $.cookie("supervision-level-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("supervision-level", $("#supervision-level").val(), {path:'/'});
     $.cookie("supervision-level-date", $("#datepicker").val(), {path:'/'});
     /* textarea */ $.cookie("supervision-level-notes", $(".supervision-level-notes .jqte_editor").html(), {path:'/'});

});

// Populate side bar
if ($.cookie("supervision-level")) { $(".supervision-level").text($.cookie("supervision-level")); }
if ($.cookie("supervision-level-date")) { $(".supervision-level-date").text($.cookie("supervision-level-date")); }
if ($.cookie("supervision-level-notes")) { $(".supervision-level-notes").text($.cookie("supervision-level-notes")); }
