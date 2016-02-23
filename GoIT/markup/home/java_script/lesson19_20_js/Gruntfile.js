module.exports = function(grunt) {

  //описываем конфигурацию
  	grunt.initConfig({
  	    pkg: grunt.file.readJSON('package.json'), //подгружаем package.json, чтобы использовать его данные
 // описываем как будет проверять наш код - jsHint

      //   concat : {
      //     options : {
      //        stripBanners : true,
      //        banner : '/*<%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      //     },
      //     dist : {
      //       src: ['src/js/file1.js', 'src/js/file2.js'],  // какие файлы конкатенировать
	    // 		  dest: 'dest/build.js'  // куда класть файл, который получиться после процесса конкатенации
      //     }
      //   },
      //
      //   uglify: {  //описываем работу плагина минификации js - uglify.
	    // 	options: {
	    // 		stripBanners: true,
	    // 		banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n' //комментарий который будет в минифицированном файле.
	    // 	},
      //
	    // 	build: {
	    // 		src: 'dest/build.js',  // какой файл минифицировать
	    // 		dest: 'dest/build.min.js' // куда класть файл, который получиться после процесса минификации
	    // 	}
	    // },

      // cssmin: { //описываем работу плагина минификации и конкатенации css.
	    // 	with_banner: {
	    // 		options: {
      //       stripBanners: true,
	    // 			banner: '/* My minified CSS */'  //комментарий который будет в output файле.
	    // 		},
      //      files: {
	    // 			'dest/style.min.css' : ['src/css/style1.css', 'src/css/style2.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
	    // 		}
	    // 	}
	    // },

      sass: {
        options: {                       // Target options
         sourceMap: false
      },
	    dist: {
	      files: {
	      'dest/css/main.css': 'src/sass/style.scss'
	      }
	    }
	},

      watch: { //описываем работу плагина слежки за файлами.
	    	// scripts: {
		    // 	files: ['src/js/*.js'],  //следить за всеми js файлами в папке src
		    // 	tasks: ['jshint', 'concat', 'uglify', 'removelogging']  //при их изменении запускать следующие задачи
	    	// },
	    	css: {
		    	// files: ['src/css/*.css'], //следить за всеми css файлами в папке src
		    	// tasks: ['cssmin'] //при их изменении запускать следующую задачу
          files: 'src/sass/*.scss', // следить за изменениями любых файлов с разширениями .scss
	        tasks: ['sass'] // и запускать такую задачу при их изменении
	    	}
	    }
        });

  // Load the plugin that provides the "" task.
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);

};
