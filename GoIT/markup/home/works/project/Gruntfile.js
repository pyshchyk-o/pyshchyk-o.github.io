module.exports = function(grunt) {

  	grunt.initConfig({
  	    pkg: grunt.file.readJSON('package.json'),

      sass: {
        options: {
         sourceMap: false
      },
	    dist: {
	      files: {
	      'css/main.css': 'sass/style.scss'
	      }
	    }
	},

      watch: {
	    	css: {
          files: 'sass/*.scss',
	        tasks: ['sass']
	    	}
	    }
        });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);

};
