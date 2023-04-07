odoo.define('himsika_theme.himsika_theme', function (require) {
    "use strict";

    var config = require('web.config');
    var core = require('web.core');

    if (!config.device.isMobile) {
        core.bus.on('web_client_ready', null, function () {
            var $navbarBrand = $('.o_main_navbar .navbar-brand');
            $navbarBrand.text('HIMSIKA');
        });
    }
});