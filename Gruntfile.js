/* globals module, require */
module.exports = function(grunt) {
  'use strict';

  var jsScripts = ['scripts/src/namespace.js', 'scripts/src/modules/*.js'];

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      grunt: {
        src: 'Gruntfile.js'
      },
      scripts: {
        src: jsScripts
      }
    },
    watch: {
      scripts: {
        files: [jsScripts],
        tasks: ['jshint', 'simplemocha']
      }
    },
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
      all: {
        src: ['test/*.js']
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('default', ['jshint:scripts', 'simplemocha:all']);
};
