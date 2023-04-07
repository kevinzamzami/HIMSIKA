odoo.define('himsika_theme.himsika_loading', function (require) {
    "use strict";

    var Loading = require('web.Loading');

    // Override method '_render_spinner' untuk mengganti spinner
    Loading.prototype._render_spinner = function () {
        return $('<div class="fa fa-spinner" aria-hidden="true"></div>');
    };
});
