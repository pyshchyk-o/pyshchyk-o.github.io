module.exports = function(grunt) {


  	grunt.initConfig({
  	    pkg: grunt.file.readJSON('package.json'),

      cssmin: {
	    	with_banner: {
	    		options: {
            stripBanners: true,
	    			banner: '/* My minified CSS */'
	    		},
           files: {
	    			'dist/css/style.min.css' : 'dist/css/main.css'
	    		}
	    	}
	    },
     postcss : {
        options : {
          processors: [
            require('autoprefixer')()
          ]
        },
        dist : {
          src: 'dist/css/main.css',
         dest: 'dist/css/main.css'
        }
     },
      sass: {
        options: {
         sourceMap: false
      },
	    dist: {
	      files: {
	      'dist/css/main.css' : 'src/sass/style.scss'
	      }
	    }
	},
  imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/img/'
        }]
    }
},
      watch: {
	    	css: {
          files: 'src/sass/*.scss',
	        tasks: ['sass']
	    	},
        postcss : {
          files: 'dist/css/main.css',
	        tasks: ['postcss']
        },
        mincss :{
          files: 'dist/css/main.css',
          tasks: ['cssmin']
        }
	    }
        });

  // Load the plugin that provides the "" task.
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['watch', 'sass', 'cssmin']);

};
