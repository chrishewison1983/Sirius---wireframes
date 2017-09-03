// =================================== Timeline - JAVASCRIPT =================================== //
$('#vertical-timeline .more-info').click(function(e){
     e.preventDefault();
     $(this).siblings('.details').toggle();
     $(this).toggleClass('open');
});


// Filter
$('.filter-link').click(function(e){
     e.preventDefault();
     $('.filter-link').removeClass('active');
     $(this).toggleClass('active');
});

$('#filter-panel .all-filter').click(function(e){
     e.preventDefault();
     $('#vertical-timeline .filter-all').slideDown();
});

$('#filter-panel .supervision-filter').click(function(e){
     e.preventDefault();
     $('.dot.end').show();
     $('#vertical-timeline .filter-all').slideUp();
     $('#vertical-timeline .filter-supervision').slideDown();
});

$('#filter-panel .order-details-filter').click(function(e){
     e.preventDefault();
     $('.dot.end').show();
     $('#vertical-timeline .filter-all').slideUp();
     $('#vertical-timeline .filter-order-details').slideDown();
});

$('#filter-panel .client-details-filter').click(function(e){
     e.preventDefault();
     $('.dot.end').show();
     $('#vertical-timeline .filter-all').slideUp();
     $('#vertical-timeline .filter-client-details').slideDown();
});

$('#filter-panel .tasks-filter').click(function(e){
     e.preventDefault();
     $('.dot.end').show();
     $('#vertical-timeline .filter-all').slideUp();
     $('#vertical-timeline .filter-tasks').slideDown();
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
     })
});

$('.show-chart').click(function(e){
     $('#chartdiv').toggle();
});

$('.show-supervision').click(function(e){
     $('#supervision-timeline').toggle();
});
