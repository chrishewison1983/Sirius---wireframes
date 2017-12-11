// =================================== Warnings - JAVASCRIPT =================================== //
$(document).ready(function () {

     $(".warning-notes").click( function(){
          $('#new-warning-button').removeClass('de-activate');
          $('#new-warning-button').attr('href', '../4-client-page/4a-new-client.html');
     });

     // Populates the modal
     $('.delete-important-remark').click( function(){
          var dataValue = $(this).parent().parent().data('value');
          $('#client-overview').find(`#important-remarks tr[data-value="${dataValue}"]`).addClass('delete-remark');

          // var remarkTitle = $(this).siblings('.title-info').text();
          // var remarkContent = $(this).parent().siblings('.answer').text();

          var $warningTitle = $(this).parent().parent().find('.warning-content p.remark-title').text();
          $('#delete-important-remark-modal h2').html($warningTitle);
          $('#delete-important-remark-modal p strong.warning-title').html($warningTitle);

          // var $warningContent = $(this).parent().parent().find('.warning-content').clone();
          // $('#delete-important-remark-modal .important-remark-holder').html($warningContent);


          // $('#delete-important-remark-modal .important-remark-holder').append(`
          //      <p class="title">${ remarkTitle }</p>
          //      <p class="content">${ remarkContent }</p>
          // `);
     });

     // Deletes the li
     $('#confirm-delete-remark').click( function(){
          $('.delete-remark').remove();
     });

     // View the remark
     // $('.remark-title .view').click( function(e){
     //      e.preventDefault();
     //      $(this).toggleClass('close');
     //      $(this).parent().siblings('.answer').toggle('slow');
     //      $(this).text($(this).text() == 'View' ? 'Hide' : 'View');
     // });

});
