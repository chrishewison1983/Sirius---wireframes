// =================================== Deputy death - COOKIES =================================== //
////////////////////////////////////// COLLECT COOKIES - DEPUTY DEATH - START //////////////////////////////////////
$("#confirm-deputy-death").on("click", function (e) {

     $.cookie("deputy-death", true, {path:'/'});

     // Cookies for side bar - DEPUTY DEATH
     $.cookie("deputy-death-date-day", $("#deputy-death-date-day").val(), {path:'/'});
     $.cookie("deputy-death-date-month", $("#deputy-death-date-month").val(), {path:'/'});
     $.cookie("deputy-death-date-year", $("#deputy-death-date-year").val(), {path:'/'});
     $.cookie("deputy-death-notified-date-day", $("#deputy-death-notified-date-day").val(), {path:'/'});
     $.cookie("deputy-death-notified-date-month", $("#deputy-death-notified-date-month").val(), {path:'/'});
     $.cookie("deputy-death-notified-date-year", $("#deputy-death-notified-date-year").val(), {path:'/'});
     $.cookie("deputy-death-notified", $("#deputy-death-notified").val(), {path:'/'});
     $.cookie("deputy-death-notified-other", $("#deputy-death-notified-other").val(), {path:'/'});
     $.cookie("deputy-death-how-notified", $("input[name=deputy-death-how-notified]:checked").val(), {path:'/'});
     $.cookie("deputy-death-proof", $("input[name=deputy-death-proof]:checked").val(), {path:'/'});
     $.cookie("deputy-death-letter-sent-day", $("#deputy-death-letter-sent-day").val(), {path:'/'});
     $.cookie("deputy-death-letter-sent-month", $("#deputy-death-letter-sent-month").val(), {path:'/'});
     $.cookie("deputy-death-letter-sent-year", $("#deputy-death-letter-sent-year").val(), {path:'/'});
     $.cookie("deputy-death-records-office", $("input[name=deputy-death-records-office]:checked").val(), {path:'/'});
     $.cookie("deputy-death-certificate-received-day", $("#deputy-death-certificate-received-day").val(), {path:'/'});
     $.cookie("deputy-death-certificate-received-month", $("#deputy-death-certificate-received-month").val(), {path:'/'});
     $.cookie("deputy-death-certificate-received-year", $("#deputy-death-certificate-received-year").val(), {path:'/'});
     $.cookie("deputy-death-certificate-received-day", $("#deputy-death-certificate-received-day").val(), {path:'/'});
     $.cookie("deputy-death-certificate-received-month", $("#deputy-death-certificate-received-month").val(), {path:'/'});
     $.cookie("deputy-death-certificate-received-year", $("#deputy-death-certificate-received-year").val(), {path:'/'});
     /* textarea */ $.cookie("deputy-death-notes", $(".deputy-death-notes .jqte_editor").html(), {path:'/'});

});
////////////////////////////////////// COLLECT COOKIES - DEPUTY DEATH - END //////////////////////////////////////
