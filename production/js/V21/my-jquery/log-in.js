// =================================== Log in - JAVASCRIPT =================================== //
$("#username").keyup( function(){
     // Lay
     if($(this).val() == 'lay') {
          $('#login-button').attr('href', '19-dashboard/19a-caseworker.html');
     } else if ($(this).val() == 'flow.lay') {
          $('#login-button').attr('href', '19-dashboard/19a-workflow.html');
     }

     // Pro
     if($(this).val() == 'pro') {
          $('#login-button').attr('href', '19-dashboard/19b-caseworker.html');
     } else if ($(this).val() == 'flow.pro') {
          $('#login-button').attr('href', '19-dashboard/19b-workflow.html');
     }

     // PA
     if($(this).val() == 'pa') {
          $('#login-button').attr('href', '19-dashboard/19b-caseworker.html');
     } else if ($(this).val() == 'flow.pa') {
          $('#login-button').attr('href', '19-dashboard/19b-workflow.html');
     }

     // Allocations
     if($(this).val() == 'allocations') {
          $('#login-button').attr('href', '19-dashboard/19a-workflow.html');
     }

     // Court Apps
     // if($(this).val() == 'court.apps') {
     //      $('#login-button').attr('href', '19-dashboard/19c-court-apps.html');
     // }

});
