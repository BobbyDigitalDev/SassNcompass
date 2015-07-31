module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-uglify');//looks for the uglify plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    
    uglify: {
      my_target: {
        files: {
          '_/js/script.js': ['_/components/js/*.js']//takes the file in the component dir and process it to the _js folder
        }//files
      }//my_target
    },//uglify   
    watch: {
      files: ['_/components/js/*.js'], 
      tasks: ['uglify']
    }//watch
  });//initConfig
  grunt.registerTask('default', 'watch');
};//exports