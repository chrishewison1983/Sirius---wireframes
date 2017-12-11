module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	uglify: {
	  options: {
		banner: '/*! Explore prototype <%= grunt.template.today("yyyy-mm-dd") %> */\n'		// Change to application specific name
	  },
	  frameworksdebug: {
		options: {
			beautify:true
		},
		src: [
			'../../js/library/modernizr.js',
			'../../js/library/jquery-1.10.1.min.js'
		],
		dest: '../../debug/js/V18/frameworks.js'
	  },
	  frameworks: {
		src: [
			'../../js/library/modernizr.js',
			'../../js/library/jquery-1.10.1.min.js'
		],
		dest: '../../production/js/V18/frameworks.js'
	  },
	  applicationdebug: {
		options: {
			beautify:true
		},
		src: [
			'bower_components/foundation/js/foundation/foundation.js',
			'bower_components/foundation/js/foundation/foundation.topbar.js',
			'bower_components/foundation/js/foundation/foundation.interchange.js',
			'bower_components/foundation/js/foundation/foundation.orbit.js',
			// '../../js/library/responsive-tables.js',
			// '../../js/library/breadcrumbs.core.js',
			// '../../js/global/megamenu-native.js',
               '../../production/js/V18/dropzone.js',
               '../../js/global/foundation-footer-init.js'
		],
		dest: '../../debug/js/V18/application.js'		// Change to application specific directory
	  },
	  application: {
		src: [
			'bower_components/foundation/js/foundation/foundation.js',
			'bower_components/foundation/js/foundation/foundation.topbar.js',
			'bower_components/foundation/js/foundation/foundation.interchange.js',
			'bower_components/foundation/js/foundation/foundation.orbit.js',
			// '../../js/library/responsive-tables.js',
			// '../../js/library/breadcrumbs.core.js',
			// '../../js/global/megamenu-native.js',
               '../../production/js/V18/dropzone.js',
			'../../js/global/foundation-footer-init.js'
		],
		dest: '../../production/js/V18/application.js'		// Change to application specific directory
	  }
	},
	compass: {
		development: {
			options: {
				config: 'config.rb',
				force: true,
				environment: 'development',
			}
		},
		production: {
			options: {
				config: 'config.rb',
				outputStyle: 'compressed',
				force: true,
				environment: 'production',
			}
		},
	},


	stencil: {
		main: { // task target name
		  options: {
			  partials: 'partials/',
			  templates: 'templates/'
		  },
		  files: [{
			expand: true,
			cwd: 'pages/',
			src: '**/*.dot.html',
			dest: '../../html/V18',				// Change to application specific directory
			ext: '.html'
		  }]
		}
	},

	svgmin: {									// Task
		multiple: {								// Target
			files: [{							// Dictionary of files
				expand: true,					// Enable dynamic expansion.
				cwd: '../../src-img/',	 		// Src matches are relative to this path.
				src: ['**/*.svg'],				// Actual pattern(s) to match.
				dest: '../../production/img',	// Destination path prefix.
				// ext: '.svg'	 				// Dest filepaths will have this extension.
			}]
		}
	},

	watch: {
		gruntfile: {
			files: 'Gruntfile.js',
			tasks: ['jshint:gruntfile'],
			debug: true
		},
		javascript: {
			files: ['../../js/**/*.js'],
			tasks: ['jshint'],
			debug: true
		},
		options: {
			livereload: true,
		},
		css: {
			files: ['../../scss/**/*.scss','bower_components/foundation/scss/*.scss'],
			tasks: ['compass']
		},
		templates: {
			files: ['templates/**/*.*'],
			tasks: ['stencil']
		},
		partials: {
			files: ['partials/**/*.*'],
			tasks: ['stencil']
		},
		pages: {
			files: ['pages/**/*.*'],
			tasks: ['stencil']
		},
		svg: {
			files: ['../../src-img/**/*.*'],
			tasks: ['svgmin']
		},
	}
});



// Amend loaded grunt plugins from node_modules and grunt tasks as necessary.  New node_modules may only be added to the global library after assessment

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('../../../node_modules/grunt-contrib-uglify');
  // Load the plugin that provides the Compass SCSS task.
  grunt.loadNpmTasks('../../../node_modules/grunt-contrib-compass');
  // Load the plugin that watches and runs the other tasks.
  grunt.loadNpmTasks('../../../node_modules/grunt-contrib-watch');
  // Load the plugin that produces static HTML pages
  grunt.loadNpmTasks('../../../node_modules/grunt-stencil');
  // Load the plugin to run RequireJS
  grunt.loadNpmTasks('../../../node_modules/grunt-requirejs-bundle');
  // Load the plugin to run SVG min
  grunt.loadNpmTasks('../../../node_modules/grunt-svgmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','svgmin','compass:development','stencil','watch']);

  // Build tasks
  grunt.registerTask('build', ['uglify','svgmin','compass:production','stencil']);
  grunt.registerTask('build-release', ['svgmin','compass:production','stencil']);

};
