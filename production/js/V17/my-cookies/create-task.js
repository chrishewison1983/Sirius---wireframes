// =================================== Create Task - COOKIES =================================== //
$("#create-task-button").on("click", function (e) {

     $.cookie("create-task-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("task-type", $("#task-type").val(), {path:'/'});
     $.cookie("task-name", $("#task-name").val(), {path:'/'});
     /* textarea */ $.cookie("task-notes", $(".task-notes .jqte_editor").html(), {path:'/'});
     $.cookie("assign-to", $("input[name=task-assign-to]:checked").val(), {path:'/'});
     $.cookie("task-user", $("#task-user").val(), {path:'/'});
     $.cookie("task-team", $("#task-team").val(), {path:'/'});
     $.cookie("task-date", $("#datepicker").val(), {path:'/'});

});

// Populate side bar
if ($.cookie("task-type")) { $(".task-type").text($.cookie("task-type")); }
if ($.cookie("task-name")) { $(".task-name").text($.cookie("task-name")); }
if ($.cookie("task-notes")) { $(".task-notes").text($.cookie("task-notes")); }
if ($.cookie("assign-to")) { $(".assign-to").text($.cookie("assign-to")); }
if ($.cookie("task-user")) { $(".task-user").text($.cookie("task-user")); }
if ($.cookie("task-team")) { $(".task-team").text($.cookie("task-team")); }
if ($.cookie("task-date")) { $(".task-date").text($.cookie("task-date")); }
