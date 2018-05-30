// =================================== Timeline - JAVASCRIPT =================================== //
$('#vertical-timeline .more-info').click(function(e){
     e.preventDefault();
     $(this).siblings('.details').toggle();
     $(this).toggleClass('open');
});

// Fixes filter bar
function moveScroller() {
     var $anchor = $("#scroller-anchor");
     var $scroller = $('#scroller');

     var move = function() {
          var st = $(window).scrollTop();
          var ot = $anchor.offset().top;
          if(st > ot) {
               $scroller.css({
                    position: "fixed",
                    top: ""
               });
               $scroller.addClass("fixed");
          } else {
               if(st <= ot) {
                    $scroller.css({
                         position: "relative",
                         top: ""
                    });
                    $scroller.removeClass("fixed");
               }
          }
     };

     $(window).scroll(move);
     move();
}

// Show/hide timelines
$('.hide-item').click(function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).text(function(i, text){
          return text === "Hide timeline" ? "Show timeline" : "Hide timeline";
     });
});

$('#chartdiv').hide();

$('.show-chart').click(function(e){
     $('#chartdiv').toggle();
});

$('#supervision-timeline').hide();

$('.show-supervision').click(function(e){
     $('#supervision-timeline').toggle();
});

// Reverses the timeline
$('.reverse-timeline').click(function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).text(function(i, text){
          return text === "Re-order timeline" ? "Reverse timeline" : "Re-order timeline";
     });
     $(this).closest('.columns').toggleClass('reverse-order');
});

// Filter
// $('input[value="all"]').change(function(){
//      if($(this).is(":checked")) {
//           $(this).parent().addClass("checked");
//           $('input[name="filter-value"]').parent().removeClass("checked");
//           $('#filter-results').hide();
//      }
// });

$('input[name="filter-value"]').click(function(){
     var checked = $('#filter-panel').find(':checked').length;
     if($(this).is(":checked")) {
          $(this).parent().addClass("checked");
          $('input[value="all"]').parent().removeClass("checked");
     }
     if (!checked)
         $('.filter-all').addClass('checked');
         $('#filter-results').hide();
});

var sections = $('.sectionContent');
function updateContentVisibility(){
     var checked = $("#filter-panel :checkbox:checked");
     if(checked.length){
          sections.hide();
          checked.each(function(){
               $("." + $(this).val()).show();
          });
          $('.dot.end').show();
          $('#filter-results').show();
          $('.filter-all').removeClass('checked');
     } else {
          sections.show();
     }
}

$("#filter-panel :checkbox").click(updateContentVisibility);
updateContentVisibility();

$('.filter-all').click(function(e){
     e.preventDefault();
     $('.sectionContent').show();
     $(this).addClass('checked');
     $('#filter-panel input').removeAttr('checked');
     $('#filter-panel input').parent().removeClass('checked');
     $('#filter-results').hide();
});
