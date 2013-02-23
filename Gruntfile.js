module.exports = function (grunt) {

    grunt.initConfig({
        nodeunit:{
            files:['test/**/*.js']
        },
        watch:{
            files:'<config:lint.files>',
            tasks:'default'
        },
        jshint:{
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                undef:true,
                boss:true,
                eqnull:true,
                node:true,
                es5:true,
                strict:false,
                globals:{}
            },
            files:['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js']
        },
        clean: {
            test: ['test/fixtures/gen']
        },
        "html-annotation":{
            src:'test/fixtures',
            dest:'test/fixtures/gen'
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'jshint', 'html-annotation', 'nodeunit']);

};
