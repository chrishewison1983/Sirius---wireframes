// =================================== Log in - JAVASCRIPT =================================== //
$('#login-button').on('click', function(e) {
     $.cookie("username", $('#username').val(), {path:'/'});
})

if ($.cookie("username") === 'lay') {
     $('.user-type-link').attr('href', '../19-dashboard/19a-caseworker.html');
}

if ($.cookie("username") === 'pro' || $.cookie("user-type") === 'pa') {
     $('.user-type-link').attr('href', '../19-dashboard/19b-caseworker.html');
}

if ($.cookie("username") === 'pro') {
     $('ul.dashboard-tabs.tabs li[data-tab="tab-4"]').removeClass('hide');
     $('.content-wrapper.dashboard #tab-4').removeClass('hide');
}

if ($.cookie("username") === 'flow.lay' || $.cookie("username") === 'flow.pro' || $.cookie("username") === 'flow.pa') {

     $('.dashboard ul.dashboard-tabs.tabs li[data-tab="tab-0"]').addClass('current').removeClass('hide');
     $('.dashboard ul.dashboard-tabs.tabs li[data-tab="tab-1"]').removeClass('current');

     $('.dashboard #tab-0').addClass('current').removeClass('hide');
     $('.dashboard #tab-1').removeClass('current');

}


if ($.cookie("username") === 'flow.lay') {
     $('.user-type-link').attr('href', '../19-dashboard/19a-workflow.html');

     $('.dashboard .dashboard-item-container .stats .work-type h3').text('Clients');
}

if ($.cookie("username") === 'flow.pro' || $.cookie("user-type") === 'flow.pa') {
     $('.user-type-link').attr('href', '../19-dashboard/19b-workflow.html');

     $('.dashboard .dashboard-item-container .stats .work-type h3').text('Deputies');
}

if ($.cookie("username") === 'flow.pro') {
     $('ul.dashboard-tabs.tabs li[data-tab="tab-4"]').removeClass('hide');
     $('.content-wrapper.dashboard #tab-4').removeClass('hide');
}

// Allocations users
if ($.cookie("username") === 'allocations') {
     $('#login-button').attr('href', '19-dashboard/19a-workflow.html');
     $('.allocate-client').removeClass('hide');
}

// Finance users
if ($.cookie("username") === 'finance') {
     $('#login-button').attr('href', '19-dashboard/19a-workflow.html');
     // Tabs and tab content
     $('main.new-client ul.client-details.tabs li').removeClass('current');
     $('main.new-client ul.client-details.tabs li[data-tab="summary-tab-10"]').addClass('current').removeClass('hide');

     $('main.new-client .client-details.tab-content').removeClass('current');
     $('main.new-client .client-details.tab-content#summary-tab-10').addClass('current');
}

$('nav.actions-nav.back-up-buttons .create-pdf').hide();

if ($.cookie("username") === 'court.apps') {
     // Shows the right link
     $('nav.actions-nav.back-up-buttons .create-pdf').show();
     $('nav.actions-nav.back-up-buttons .create-letter').hide();
}
