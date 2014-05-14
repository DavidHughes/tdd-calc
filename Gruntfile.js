/* globals module, require */
module.exports = function(grunt) {
  'use strict';

  var jsScripts = ['scripts/src/namespace.js', 'scripts/src/modules/*.js', 'scripts/src/init.js'];

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
        files: [jsScripts, 'test.js'],
        tasks: ['jshint']
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
};