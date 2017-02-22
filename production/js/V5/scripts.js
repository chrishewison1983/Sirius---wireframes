// ===================================== General Scripts - START ===================================== //
$(document).ready(function() {

     $(".place-holder").click(function(){
          $(this).toggleClass("active");
          // $("footer .counter").hide();
          $("footer .counter").show(500).delay(500);
          $("footer").addClass("visible").fadeIn(750);
	});

     $(".job-family .cta-link.more-info-link").click(function(){
          // $(this).parent().parent().parent().toggleClass("full-width");
          $(this).siblings(".top-5, .intro").slideToggle(500);
          // $(".top-5, .intro").slideToggle(500);
          $(this).parent().siblings(".more-info").slideToggle(500);
          $(this).html($(this).text() == 'Hide full job profile list' ? 'Show full job profile list' : 'Hide full job profile list' + "<span></span>");
          // $(this).html("Hide full job profile list"));
     });

     $(".select").click(function(){
          $(this).parent().parent().parent().toggleClass("active");
          $(this).html($(this).text() == 'Unselect' ? 'Select' : 'Unselect' + "<span></span>");
          // $("footer .counter").hide();
          $("footer .counter").show(500).delay(500);
          $("footer").addClass("visible").fadeIn(750);
          // $("footer").show(500);
     });

     $(".job-family .select").click(function(){
          $(this).toggleClass("remove");
     });

     $(".job-profile .select").click(function(){
          $(this).parent().parent().parent().removeClass("active");
          $(this).html($(this).text() == 'View job profile' ? 'View job profile' : 'View job profile');
          $("footer .counter").hide();
     });

     $(".remove").click(function(){
          $(this).parent().parent().parent().hide(500);
          $(this).parent().parent().parent().addClass("display", "inline-block");
          // $(this).parent().parent().parent().toggleClass("remove").removeClass("active");
          // $(this).html($(this).text() == 'Bring back' ? 'Not interested' : 'Bring back');
          // $(this).parent().siblings(".text").toggleClass("hide");
          // $(this).siblings(".select").toggleClass("hide");
     });

});
// ===================================== General Scripts - END ===================================== //
