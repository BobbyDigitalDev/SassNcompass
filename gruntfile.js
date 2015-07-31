module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-uglify');//looks for the uglify plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          '_/js/script.js': ['_/components/js/*.js']//takes the file in the component dir and process it to the _js folder
        }//files
      }//my_target
    },//uglify
    compass: {
      dev: {
        options: {
          config:'config.rb'
        }//options
      }//dev
    },//compass   
    watch: {
      options: {livereload: true},//reloads the browser whenever a change has been made. nice time saver.
      scripts: {
        files: ['_/components/js/*.js'], 
        tasks: ['uglify']
      },//scripts
      sass : {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev']
      },//sass
      html: {
        files: ['*.html'],//adds another watch process which looks for changes to any and all html file
      }
    }//watch
  });//initConfig
  grunt.registerTask('default', 'watch');//registers a default task to run whenever we run the grunt command. removes the need for typing grunt watch
};//exports