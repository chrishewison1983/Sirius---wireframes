// =================================== Create Task - COOKIES =================================== //
$("#new-event-button").on("click", function (e) {

     $.cookie("new-event-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("event-type", $("#event-type").val(), {path:'/'});
     $.cookie("event-subject", $("#event-subject").val(), {path:'/'});
     /* textarea */ $.cookie("event-notes", $(".event-notes .jqte_editor").html(), {path:'/'});

});

// Populate side bar
if ($.cookie("event-type")) { $(".event-type").text($.cookie("event-type")); }
if ($.cookie("event-subject")) { $(".event-subject").text($.cookie("event-subject")); }
if ($.cookie("event-notes")) { $(".event-notes").text($.cookie("event-notes")); }
