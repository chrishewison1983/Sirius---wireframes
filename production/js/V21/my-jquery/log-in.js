// =================================== Log in - JAVASCRIPT =================================== //
$("#username").keyup( function(){
     // Lay
     if($(this).val() == 'case.manager.lay') {
          $('#login-button').attr('href', '19-dashboard/19a-caseworker.html');
     } else if ($(this).val() == 'work.flow.lay') {
          $('#login-button').attr('href', '19-dashboard/19a-workflow.html');
     }

     // Pro
     if($(this).val() == 'case.manager.pro') {
          $('#login-button').attr('href', '19-dashboard/19b-caseworker.html');
     } else if ($(this).val() == 'work.flow.pro') {
          $('#login-button').attr('href', '19-dashboard/19b-workflow.html');
     }

     // PA
     if($(this).val() == 'case.manager.pa') {
          $('#login-button').attr('href', '19-dashboard/19b-caseworker.html');
     } else if ($(this).val() == 'work.flow.pa') {
          $('#login-button').attr('href', '19-dashboard/19b-workflow.html');
     }

     // Court Apps
     if($(this).val() == 'court.apps') {
          $('#login-button').attr('href', '19-dashboard/19c-court-apps.html');
     }

});
