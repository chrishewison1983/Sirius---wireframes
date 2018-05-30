// =================================== Deputy page - COOKIES =================================== //
// Populates header
$(".summary-deputy-name").on("click", function (e) {
     $.cookie("summary-deputy-name", $("#deputy-name").val(), {path:'/'});
});

if ($.cookie("summary-deputy-name")) {
     $(".summary-deputy-name").text($.cookie("summary-deputy-name"));
}
