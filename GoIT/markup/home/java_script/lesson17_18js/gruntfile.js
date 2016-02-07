module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
  options: {
    separator: ';'
  },
  dist: {
    src: ['js/src/*.js'],
    // the location of the resulting JS file
    dest: 'js/dist/script.main.js'
  }
},
      uglify:{
      dist: {
    src: ['js/dist/script.main.js'],
    dest: 'js/script.min.js'
  }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat','uglify']);

};