// =================================== Allocate client - JAVASCRIPT =================================== //
$('#confirm-allocate-team').on('click', function(e) {
     $.cookie("allcoted-team", $('#allocate-team').val(), {path:'/'});
     $('#section-header h1 .assignee .sirius-user-id').text($.cookie("allcoted-team"));
     $('#client-allocated .allocated-team').text($.cookie("allcoted-team"));

     $('#client-allocated').show();
     setTimeout(function() {
          $('#client-allocated').slideUp();
     }, 5000);

})
