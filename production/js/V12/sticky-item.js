// Sticky item
// Cache selectors outside callback for performance.
var $window = $(window),
     $stickyEl = $('#side-panel'),
     elTop = $stickyEl.offset().top;

$window.scroll(function() {
     $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
});
