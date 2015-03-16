define([
    'require',
    'angular',
    'js/angular/controllers/main'
], function (require, angular, controller) {

});

//var requireMain2 = require.config({
//    context: 'global',
//    shim: {
//        jquery: {
//            exports: 'jquery'
//        },
//        drop: {
//            exports: 'jQuery.fn.drop'
//        },
//        tooltip: {
//            exports: 'jQuery.fn.tooltip'
//        }
//    },
//    paths: {
//        jquery: '../../../bower_components/jquery/dist/jquery.min',
//        modernizr: '../../../bower_components/modernizr/modernizr',
//        underscore: '../../../bower_components/underscore/underscore',
//        drop: '../plugins/general/drop/drop',
//        tooltip: '../plugins/general/tooltip'
//    }
//});
//requireMain2(['jquery', 'modernizr', 'underscore', 'global/php', 'global/vars', 'global/united_side_plugins', 'drop', 'tooltip', 'global/functions', 'global/scripts'],
//    function ($, modernizr, _, php, vars, united_side_plugins, drop, tooltip, functions, scripts) {
//        if (Modernizr.load) {
//            Modernizr.load({
//                test: Modernizr.borderradius || Modernizr.boxshadow,
//                nope: './js/build/PIE/PIE.js',
//                callback: function () {
//                    $('*').each(function () {
//                        PIE.attach(this);
//                    });
//                }
//            });
//        }
//    }
//);
