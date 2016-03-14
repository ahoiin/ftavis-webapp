// Generated on 2014-07-22 using generator-webapp 0.4.9
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Project settings
        config: config,


        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {
            options: {
                // includePaths: [
                //     'bower_components'
                // ]
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/css',
                    src: ['*.sass'],
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/css',
                    src: ['*.sass'],
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/css/',
                    src: '{,*/}*.css',
                    dest: '.tmp/css/'
                }]
            }
        },



        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/js/*.js',
                        '<%= config.dist %>/css/{,*/}*.css',
                        '<%= config.dist %>/css/fonts/{,*/}*.*',
                        '<%= config.dist %>/*.{ico,png}'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/index.html' //index.html
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            // options: {
            //     assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
            // },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/css/{,*/}*.css']
        },


        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: false,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            build: {
                files: [{
                      expand: true,
                      cwd: '.tmp/concat/css',
                      src: ['*.css'],
                      dest: '<%= config.dist %>/css',
                      ext: '.css'
                }]
            }
        },


        uglify: {
            build: {
                files: [{
                      expand: true,
                      cwd: '.tmp/concat/js',
                      src: ['*.js'],
                      dest: '<%= config.dist %>/js',
                      ext: '.js'
                }]
            }
        },




        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src:
                    [
                        '*.{ico,png,txt}',
                        // '.htaccess',
                        'data/{,*/}*.*',
                        'assets/img/{,*/}*.*',
                        'assets/img/**/{,*/}*.*',
                        'js/worker/{,*/}*.*',
                        '{,*/}*.html',
                        'css/fonts/{,*/}*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/css',
                dest: '.tmp/css/',
                src: '{,*/}*.css'
            },
            js: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/js',
                dest: '.tmp/js/',
                src: '{,*/}*.js'
            }
        },



        // Run some tasks in parallel to speed up build process
        concurrent: {
            dist: [
                // 'sass',
                'copy:styles',
                'copy:js'
                // 'imagemin'
                // 'svgmin'
            ]
        }
    });



    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        // 'autoprefixer',
        'concat',
        // 'imagemin',
        'cssmin:build',
        'uglify:build',
        'copy:dist',
        // 'bower_concat',
        // 'modernizr',
        'rev',
        'usemin',
        'htmlmin'

    ]);

    grunt.registerTask('default', [
        // 'newer:jshint',
        'test',
        'build'
    ]);
    // grunt.loadNpmTasks('grunt-bower-concat');
};
