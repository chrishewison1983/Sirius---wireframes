// =================================== Create Task - COOKIES =================================== //
$("#new-event-button").on("click", function (e) {

     $.cookie("new-event-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("event-type", $("#event-type").val(), {path:'/'});
     $.cookie("event-direction", $("input[name=event-direction]:checked").val(), {path:'/'});
     $.cookie("event-date", $("#datepicker").val(), {path:'/'});
     $.cookie("event-subject", $("#event-subject").val(), {path:'/'});
     /* textarea */ $.cookie("event-notes", $(".event-notes .jqte_editor").html(), {path:'/'});

});

// Populate side bar
if ($.cookie("event-type")) { $(".event-type").text($.cookie("event-type")); }
if ($.cookie("event-direction")) { $(".event-direction").text($.cookie("event-direction")); }
if ($.cookie("event-date")) { $(".event-date").text($.cookie("event-date")); }
if ($.cookie("event-subject")) { $(".event-subject").text($.cookie("event-subject")); }
if ($.cookie("event-notes")) { $(".event-notes").text($.cookie("event-notes")); }
