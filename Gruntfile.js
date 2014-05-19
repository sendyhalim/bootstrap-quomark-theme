//Gruntfile
module.exports = function(grunt) {

//Initializing the configuration object
  grunt.initConfig({

    // Task configuration
    concat: {
      //...
    },
    less: {
      style: {
        options: {
          compress: false,  //do not minify the result
        },
        files: {
          //compiling bootstra-quomark-theme.less into bootstra-quomark-theme.css
          "./dist/css/bootstrap-quomark-theme.css": "./less/style.less"
        }
      }
    },
    cssmin: {
       minify: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      }
    },
    watch: {
      style: {
          files: [
            //watched files
            './less/*.less'
            ],
          tasks: ['less:style', 'cssmin:minify'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
    }
  });


  // // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Task definition
  grunt.registerTask('default', ['watch']);

};
