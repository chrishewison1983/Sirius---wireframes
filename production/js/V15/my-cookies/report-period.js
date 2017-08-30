// =================================== Create Task - COOKIES =================================== //
$("#reporting-period-button").on("click", function (e) {
     $.cookie("reporting-period-completed", true, {path:'/'});
});

// Decides the user journey
$(".edit-property").on("click", function (e) {
     $.cookie("edit-property", true, {path:'/'});
});

$(".edit-health").on("click", function (e) {
     $.cookie("edit-property", false, {path:'/'});
});

if ($.cookie("edit-property") == "true") {
     $(".report-level").show();
} else {
     $(".report-level").hide();
}


// Populate side bar
