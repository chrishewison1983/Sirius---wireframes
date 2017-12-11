// =================================== Deputy death - COOKIES =================================== //
////////////////////////////////////// COLLECT COOKIES - DEPUTY DEATH - START //////////////////////////////////////
$("#confirm-client-death").on("click", function (e) {

     $.cookie("client-death", true, {path:'/'});

     // Cookies for side bar - DEPUTY DEATH
     $.cookie("client-death-date-day", $("#client-death-date-day").val(), {path:'/'});
     $.cookie("client-death-date-month", $("#client-death-date-month").val(), {path:'/'});
     $.cookie("client-death-date-year", $("#client-death-date-year").val(), {path:'/'});
     $.cookie("client-death-notified-date-day", $("#client-death-notified-date-day").val(), {path:'/'});
     $.cookie("client-death-notified-date-month", $("#client-death-notified-date-month").val(), {path:'/'});
     $.cookie("client-death-notified-date-year", $("#client-death-notified-date-year").val(), {path:'/'});
     $.cookie("client-death-notified", $("#client-death-notified").val(), {path:'/'});
     $.cookie("client-death-notified-other", $("#client-death-notified-other").val(), {path:'/'});
     $.cookie("client-death-how-notified", $("input[name=client-death-how-notified]:checked").val(), {path:'/'});
     $.cookie("client-death-proof", $("input[name=client-death-proof]:checked").val(), {path:'/'});
     $.cookie("client-death-letter-sent-day", $("#client-death-letter-sent-day").val(), {path:'/'});
     $.cookie("client-death-letter-sent-month", $("#client-death-letter-sent-month").val(), {path:'/'});
     $.cookie("client-death-letter-sent-year", $("#client-death-letter-sent-year").val(), {path:'/'});
     $.cookie("client-death-records-office", $("input[name=client-death-records-office]:checked").val(), {path:'/'});
     $.cookie("client-death-certificate-received-day", $("#client-death-certificate-received-day").val(), {path:'/'});
     $.cookie("client-death-certificate-received-month", $("#client-death-certificate-received-month").val(), {path:'/'});
     $.cookie("client-death-certificate-received-year", $("#client-death-certificate-received-year").val(), {path:'/'});
     $.cookie("client-death-certificate-received-day", $("#client-death-certificate-received-day").val(), {path:'/'});
     $.cookie("client-death-certificate-received-month", $("#client-death-certificate-received-month").val(), {path:'/'});
     $.cookie("client-death-certificate-received-year", $("#client-death-certificate-received-year").val(), {path:'/'});
     /* textarea */ $.cookie("client-death-notes", $(".client-death-notes .jqte_editor").html(), {path:'/'});

});
////////////////////////////////////// COLLECT COOKIES - DEPUTY DEATH - END //////////////////////////////////////
