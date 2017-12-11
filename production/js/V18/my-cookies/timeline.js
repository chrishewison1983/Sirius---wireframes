// =================================== Timeline - COOKIES =================================== //
$(".show-chart").on("click", function (e) {
     $.cookie("hide-chart", true, {path:'/'});
});

if ($.cookie("hide-chart") == 'true') {
     $("#chartdiv").hide();
} else {
     $("#chartdiv").show();
}

$(".show-supervision").on("click", function (e) {
     $.cookie("hide-supervision", true, {path:'/'});
});

if ($.cookie("hide-supervision") == 'true') {
     $("#supervision-timeline").hide();
} else {
     $("#supervision-timeline").show();
}
