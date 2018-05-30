// =================================== Client header - COOKIES =================================== //
$("#pfa-actions").on("click", function (e) {
     $.cookie("order-type", 'Property and finance', {path:'/'});
});

$("#handw-actions").on("click", function (e) {
     $.cookie("order-type", 'Health and Welfare', {path:'/'});
});
