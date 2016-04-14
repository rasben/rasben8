module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['clean:pre', 'compass', 'uglify', 'shell:patternlab']);

  grunt.initConfig({
    uglify: {
      js: {
        files: {
          'js/build/base.min.js': ['js/source/*']
        }
      }
    },

    clean: {
      pre: {
        src: ['js/build/*', '!js/build', 'styles/css/*', '!styles/css/'],
      },
     post: {
        src: [''],
      }
    },

    shell: {
       patternlab: {
         command: "php patternlab/core/builder.php -gp"
       }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'styles/sass',
          cssDir: 'styles/css',
          environment: 'production',
          outputStyle: 'compressed',
          config: 'config.rb'
        }
      },
    },

    watch: {
      patternlab: {
        files: ['patternlab/source/_patterns/**/*.mustache', 'patternlab/source/_patterns/**/*.json', 'patternlab/source/_data/*.json'],
        tasks: ['shell:patternlab'],
        options: {
          spawn: false
        }
      },
      sass: {
        files: ['styles/**/*.scss'],
        tasks: ['compass']
      }
    }
  });
}

