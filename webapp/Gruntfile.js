module.exports = function(grunt) {
    var paths = {
        build: './build/',
        src: './src/',
        bower: './bower_components/'
    }

    grunt.initConfig({
        connect: {
            main: {
                options: {
                    port: 8000,
                    base: paths.build,
                    livereload: true
                }
            }
        },

        clean: {
            build: paths.build
        },

        copy: {
            indexHtml: {
                expand: true,
                cwd: paths.src,
                src: '*.html',
                dest: paths.build
            },
            img: {
                expand: true,
                cwd: paths.src + 'img',
                src: '*',
                dest: paths.build + 'img'
            },
            css: {
                expand: true,
                cwd: paths.src + 'css',
                src: 'main.css',
                dest: paths.build + 'css'
            }
        },

        webpack: {
            main: {
                entry: [
                    paths.bower + 'angular/angular.js',
                    paths.bower + 'angular-ui-router/release/angular-ui-router.js',
                    paths.src + '/js/modules/kpnProducts/index.js',
                    paths.src + '/js/index.js'
                ],
                output: {
                    path: paths.build + '/js',
                    filename: 'main.js'
                },
                stats: {
                    colors: false,
                    modules: true,
                    reasons: true
                },
                progress: false
            }
        },

        watch: {
            options: {
              livereload: true,
              interrupt: true
            },
            html: {
                files: [paths.src + '*.html'],
                tasks: ['copy:indexHtml']
            },
            img: {
                files: [paths.src + 'img/**/*'],
                tasks: ['copy:img']
            },
            css: {
                files: [paths.src + 'css/**'],
                tasks: ['copy:css']
            },
            js: {
                files: [paths.src + 'js/**/*.js', paths.src + 'js/**/*.html'],
                tasks: ['webpack']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'webpack'
    ]);

    grunt.registerTask('default', ['build', 'server']);

};