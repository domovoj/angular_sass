(function () {
    var requireMain1 = require.config({
        baseUrl: './',
        context: 'angular',
        shim: {
            angular: {
                exports: 'angular'
            },
            home: {
                exports: 'home'
            }
        },
        paths: {
            angular: 'bower_components/angular/angular.min'
        }
    });

    requireMain1(
        ['angular'],
        function (angular) {
        }
    );

    var requireMain2 = require.config({
        baseUrl: './js/process/scripts',
        context: 'global',
        shim: {
            jquery: {
                exports: 'jquery'
            }
        },
        paths: {
            jquery: '../../../bower_components/jquery/dist/jquery.min',
            underscore: '../../../bower_components/underscore/underscore'
        }
    });
    requireMain2(['jquery', 'underscore'],
        function ($, _) {
            
        }
    );
})();