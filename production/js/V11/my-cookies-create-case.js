// =================================== Create case - COOKIES =================================== //
////////////////////////////////////// Step - 1 (1A-THE-ORDER) //////////////////////////////////////
$("#create-case-step-1").on("click", function (e) {

     $.cookie("create-case-step-1", true, {path:'/'});

     // Cookies for side bar
     $.cookie("case-order-type", $("input[name=case-type]:checked").val(), {path:'/'});
     $.cookie("case-court-ref", $("#case-court-ref").val(), {path:'/'});
     $.cookie("case-order-date", $("#case-order-date").val(), {path:'/'});
     $.cookie("case-order-issue-date", $("#case-order-issue-date").val(), {path:'/'});
     $.cookie("case-order-status", $("#case-order-status").val(), {path:'/'});
     $.cookie("case-status-date", $("#case-status-date").val(), {path:'/'});
     $.cookie("case-received-date", $("#case-received-date").val(), {path:'/'});
     $.cookie("case-order-title", $("#case-order-title").val(), {path:'/'});

});

// Populate side bar
if ($.cookie("case-order-type")) { $(".case-order-type").text($.cookie("case-order-type")); }
if ($.cookie("case-court-ref")) { $(".case-court-ref").text($.cookie("case-court-ref")); }
if ($.cookie("case-order-date")) { $(".case-order-date").text($.cookie("case-order-date")); }
if ($.cookie("case-order-issue-date")) { $(".case-order-issue-date").text($.cookie("case-order-issue-date")); }
if ($.cookie("case-order-status")) { $(".case-order-status").text($.cookie("case-order-status")); }
if ($.cookie("case-status-date")) { $(".case-status-date").text($.cookie("case-status-date")); }
if ($.cookie("case-received-date")) { $(".case-received-date").text($.cookie("case-received-date")); }
if ($.cookie("case-order-title")) { $(".case-order-title").text($.cookie("case-order-title")); }

////////////////////////////////////// Step - 2 (1B-THE-BOND) //////////////////////////////////////
$("#create-case-step-2").on("click", function (e) {

     $.cookie("create-case-step-2", true, {path:'/'});

     // Cookies for side bar
     $.cookie("security-bond", $("input[name=security-bond]:checked").val(), {path:'/'});
     $.cookie("bond-ref-number", $("#bond-ref-number").val(), {path:'/'});
     $.cookie("bond-value", $("#bond-value").val(), {path:'/'});

});

// Populate side bar
if ($.cookie("security-bond")) { $(".security-bond").text($.cookie("security-bond")); }
if ($.cookie('security-bond') === 'Yes' ) {
     $('.bond-info').show();
}
if ($.cookie('security-bond') === 'No' ) {
     $('.bond-info').hide();
}
if ($.cookie("bond-ref-number")) { $(".bond-ref-number").text($.cookie("bond-ref-number")); }
if ($.cookie("bond-value")) { $(".bond-value").text($.cookie("bond-value")); }

////////////////////////////////////// Step - 3 (1C-THE-FILES) //////////////////////////////////////
$("#create-case-step-3").on("click", function (e) {

     $.cookie("create-case-step-3", true, {path:'/'});

     // Cookies for side bar
     $.cookie("file-location", $("input[name=file-location]:checked").val(), {path:'/'});
     $.cookie("file-address-line-1", $("#file-address-line-1").val(), {path:'/'});
     $.cookie("file-address-line-2", $("#file-address-line-2").val(), {path:'/'});
     $.cookie("file-address-line-3", $("#file-address-line-3").val(), {path:'/'});
     $.cookie("file-address-town", $("#file-address-town").val(), {path:'/'});
     $.cookie("file-address-county", $("#file-address-county").val(), {path:'/'});
     $.cookie("file-address-postcode", $("#file-address-postcode").val(), {path:'/'});

});

// Populate side bar
if ($.cookie("file-location")) { $(".file-location").text($.cookie("file-location")); }
if ($.cookie('file-location') === 'Physical' ) {
     $('.file-location-info').show();
} else if ($.cookie('file-location') === 'Scanned' ) {
     $('.file-location-info').hide();
}
if ($.cookie("file-address-line-1")) {
     $(".file-address-line-1").text($.cookie("file-address-line-1") + ", ");
}
if ($.cookie("file-address-line-1") === "") {
     $(".file-address-line-1").hide();
}
if ($.cookie("file-address-line-2")) {
     $(".file-address-line-2").text($.cookie("file-address-line-2") + ", ");
}
if ($.cookie("file-address-line-2") === "") {
     $(".file-address-line-2").hide();
}
if ($.cookie("file-address-line-3")) {
     $(".file-address-line-3").text($.cookie("file-address-line-3") + ", ");
}
if ($.cookie("file-address-line-3") === "") {
     $(".file-address-line-3").hide();
}
if ($.cookie("file-address-town")) {
     $(".file-address-town").text($.cookie("file-address-town") + ", ");
}
if ($.cookie("file-address-town") === "") {
     $(".file-address-town").hide();
}
if ($.cookie("file-address-county")) {
     $(".file-address-county").text($.cookie("file-address-county") + ", ");
}
if ($.cookie("file-address-county") === "") {
     $(".file-address-county").hide();
}
if ($.cookie("file-address-postcode")) {
     $(".file-address-postcode").text($.cookie("file-address-postcode") + ".");
}
if ($.cookie("file-address-postcode") === "") {
     $(".file-address-postcode").hide();
}

////////////////////////////////////// Step - 4 (1D-THE-DEPUTIES) //////////////////////////////////////
$("#create-case-step-4").on("click", function (e) {

     $.cookie("create-case-step-4", true, {path:'/'});

     // Cookies for side bar
     $.cookie("deputies-jointly-severally", $("input[name=deputies-jointly-severally]:checked").val(), {path:'/'});
     $.cookie("deputies-jointly", $("input[name=deputies-jointly]:checked").val(), {path:'/'});

});

// Populate side bar
if ($.cookie("security-jointly-severally")) { $(".security-jointly-severally").text($.cookie("security-jointly-severally")); }
if ($.cookie("security-jointly")) { $(".security-jointly").text($.cookie("security-jointly")); }
