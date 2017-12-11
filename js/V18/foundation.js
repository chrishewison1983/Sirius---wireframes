define("prototype/foundation", ["jquery", "core"], function ($) {
    "use strict";
    // Foundation JavaScript
    // Documentation can be found at: http://foundation.zurb.com/docs
    $(document).foundation();

    $(document).foundation('interchange', {
        named_queries: {
            medium: 'only screen and (max-width: 960px)',
            large: 'only screen and (min-width: 961px)'
        }
    }, 'reflow');

    $(document).on('replace', '#menu', function (e, new_path, original_path) {
        $(document).foundation();
    });
});
