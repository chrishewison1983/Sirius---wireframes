// =================================== Create Task - COOKIES =================================== //
// Task journey
if ($.cookie("order-type") === 'Property and finance') {
     $('#create-task-button').attr('href', '../4-client-hub/4a-new-client.html#PFA');
} else if ($.cookie("order-type") === 'Health and Welfare') {
     $('#create-task-button').attr('href', '../4-client-hub/4a-new-client.html#HandW');
}

// Task info
$("#create-task-button").on("click", function (e) {

     $.cookie("create-task-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("task-type", $("#task-type").val(), {path:'/'});
     $.cookie("task-name", $("#task-name").val(), {path:'/'});
     /* textarea */ $.cookie("task-notes", $(".task-notes .jqte_editor").html(), {path:'/'});
     // $.cookie("assign-to", $("input[name=task-assign-to]:checked").val(), {path:'/'});
     $.cookie("assign-to", $("#task-assign-to").val(), {path:'/'});
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

// Populates table
if ($.cookie("create-task-completed") === 'true') {
     // Tabs
     $('#client-overview ul.client-details li').removeClass('current');
     $('#client-overview ul.client-details li[data-tab="summary-tab-5"]').addClass('current');

     // Tab contents
     $('#client-overview .client-details.tab-content').removeClass('current');
     $('#client-overview .client-details.tab-content#summary-tab-5').addClass('current');
}

if ($.cookie("order-type") === 'Property and finance' && $.cookie("create-task-completed") === 'true') {
     $('ul.client-details li[data-tab="summary-tab-5"] span').text('2');
}

if ($.cookie("order-type") === 'Health and Welfare' && $.cookie("create-task-completed") === 'true') {
     $('ul.client-details li[data-tab="summary-tab-5"] span').text('4');
}
