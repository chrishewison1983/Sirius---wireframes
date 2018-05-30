// =================================== Log in - JAVASCRIPT =================================== //
$('#login-button').on('click', function(e) {
     $.cookie("username", $('#username').val(), {path:'/'});
})

if ($.cookie("username") === 'case.manager.lay') {
     $('.user-type-link').attr('href', '../19-dashboard/19a-caseworker.html');
}

if ($.cookie("username") === 'case.manager.pro' || $.cookie("user-type") === 'case.manager.pa') {
     $('.user-type-link').attr('href', '../19-dashboard/19b-caseworker.html');
}

if ($.cookie("username") === 'work.flow.lay') {
     $('.user-type-link').attr('href', '../19-dashboard/19a-workflow.html');

     $('.dashboard .dashboard-item-container .stats .work-type h3').text('Clients');
}

if ($.cookie("username") === 'work.flow.pro' || $.cookie("user-type") === 'work.flow.pa') {
     $('.user-type-link').attr('href', '../19-dashboard/19b-workflow.html');

     $('.dashboard .dashboard-item-container .stats .work-type h3').text('Deputies');
}


$('nav.actions-nav.back-up-buttons .create-pdf').hide();

if ($.cookie("username") === 'court.apps') {
     // Shows the right link
     $('nav.actions-nav.back-up-buttons .create-pdf').show();
     $('nav.actions-nav.back-up-buttons .create-letter').hide();
}
