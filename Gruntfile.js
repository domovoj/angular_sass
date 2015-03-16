module.exports = function (grunt) {

// 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                /*for general styles*/
                src: [
                    'bower_components/normalize.css/normalize.css',
                    'css/process/style.css'
                ],
                dest: 'css/build/style.concat.css'
            },
            dist2: {
                /*for general scripts*/
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/underscore/underscore.js',
                    'js/process/scripts/*.js',
                    'js/process/plugins/general/**/*.js'
                ],
                dest: 'js/build/scripts/united_scripts.js'
            }
        },
        sass: {
            dist: {
                /*for general style*/
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/style.css': 'css/build/style.concat.css'
                }
            },
            dist2: {
                /*for styles separate pages*/
                options: {
                    style: 'compressed'
                },
                files: [{
                        expand: true,
                        cwd: 'css/process/other/',
                        src: ['*.css'],
                        dest: 'css/build/other'
                    }]
            }
            /*for styles separate pages*/
        },
        uglify: {
            /*for scripts separate pages*/
            dist: {
                files: [{
                        expand: true,
                        cwd: 'js/process/partials/',
                        src: ['*.js'],
                        dest: 'js/build/partials/'
                    }]
            },
            /*for general scripts*/
            dist2: {
                src: 'js/build/scripts/united_scripts.js',
                dest: 'js/build/scripts/united_scripts.min.js'
            },
            dist3: {
                files: [{
                        expand: true,
                        cwd: 'js/process/plugins/',
                        src: ['*.js'],
                        dest: 'js/build/plugins/'
                    }]
            }
        }
    });
    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'sass', 'uglify']);
};