module.exports = function(grunt) {

  //описываем конфигурацию
  	grunt.initConfig({
  	    pkg: grunt.file.readJSON('package.json'),

      sass: {
        options: {                       // Target options
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
		    	// files: ['src/css/*.css'], //следить за всеми css файлами в папке src
		    	// tasks: ['cssmin'] //при их изменении запускать следующую задачу
          files: 'sass/*.scss', // следить за изменениями любых файлов с разширениями .scss
	        tasks: ['sass'] // и запускать такую задачу при их изменении
	    	}
	    }
        });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);

};
