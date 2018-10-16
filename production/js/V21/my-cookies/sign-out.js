// =================================== Sign out - JAVASCRIPT =================================== //
$('.sign-out').on('click', function(e) {
     $.cookie("user-type", '', {path:'/'});
     $.cookie("username", '', {path:'/'});
})
