$j(document).ready(function() {
  var switched = false;
  var updateTables = function() {
  // Was 767 px - Customised to 959
    if (($j(window).width() < 959) && !switched ){
      switched = true;
      $j("table.responsive").each(function(i, element) {
        splitTable($j(element));
      });
      return true;
    }
  // Was 767 px - Customised to 959
    else if (switched && ($j(window).width() > 959)) {
      switched = false;
      $j("table.responsive").each(function(i, element) {
        unsplitTable($j(element));
      });
    }
  };
   
  $j(window).load(updateTables);
  $j(window).on("redraw",function(){switched=false;updateTables();}); // An event to listen for
  $j(window).on("resize", updateTables);
   
	
	function splitTable(original)
	{
		original.wrap("<div class='table-wrapper' />");
		
		var copy = original.clone();
		copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
		copy.removeClass("responsive");
		
		original.closest(".table-wrapper").append(copy);
		copy.wrap("<div class='pinned' />");
		original.wrap("<div class='scrollable' />");

    setCellHeights(original, copy);
	}
	
	function unsplitTable(original) {
    original.closest(".table-wrapper").find(".pinned").remove();
    original.unwrap();
    original.unwrap();
	}

  function setCellHeights(original, copy) {
    var tr = original.find('tr'),
        tr_copy = copy.find('tr'),
        heights = [];

    tr.each(function (index) {
      var self = $j(this),
          tx = self.find('th, td');

      tx.each(function () {
        var height = $j(this).outerHeight(true);
        heights[index] = heights[index] || 0;
        if (height > heights[index]) heights[index] = height;
      });

    });

    tr_copy.each(function (index) {
      $j(this).height(heights[index]);
    });
  }

});
