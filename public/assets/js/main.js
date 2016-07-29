/* eslint-env browser */

(function() {
    'use strict';
    window.tryIt = function (n) {
        window.location.search = 'theme=' + n;
    };

    window.toggleCode = function (el, name) {
        $('#' + name).toggleClass('hidden');
        $(el).find('i').toggleClass('fa-caret-down');
        $(el).find('i').toggleClass('fa-caret-up');
    };
})();

(function() {
    'use strict';
    $('input:text').focus(function() {
        $(this).select();
        $(this).mouseup(function(a) {
            a.preventDefault();
        });
    });

    $('.alert-dismissible').each(function() {
        var $alert = $(this);
        var alertNameLSProp = $alert.attr('data-alert-id');

        if (localStorage.getItem(alertNameLSProp) === 'true') {
            $alert.remove();
        } else {
            $alert.on('close.bs.alert', function() {
                localStorage.setItem(alertNameLSProp, true);
            });
        }
    });
})();

/* eslint-disable */
(function(a,b,c,d,e){function f(){var a=b.createElement("script");a.async=!0;a.src="https://radar.cedexis.com/1/10956/radar.js";b.body.appendChild(a)}/\bMSIE 6/i.test(a.navigator.userAgent)||(a[c]?a[c](e,f,!1):a[d]&&a[d]("on"+e,f))})(window,document,"addEventListener","attachEvent","load");
/* eslint-enable */