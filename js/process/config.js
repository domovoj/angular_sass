require.config({
    baseUrl: './',
    paths: {
        angular: 'bower_components/angular/angular.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    },
    deps: [
        'js/process/scripts/apps/main'
    ]
});