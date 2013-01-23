/*
 * grunt-html-annotation
 * https://github.com/pads/grunt-html-annotation
 *
 * Copyright (c) 2013 Ben Paddock
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  grunt.registerTask('html-annotation', 'Annotate HTML pages with the element names', function () {

      var config = grunt.config.get('html-annotation');
      var src = config.src;
      var dest = config.dest;

      grunt.file.recurse(src, function(absolutePath, rootDir, subDir, fileName) {

          var $ = require('jquery');
          var $contents = $(grunt.file.read(absolutePath));
          var $body = $contents.find('body');
          var $elements = $body.find('*');

          $elements.each(function () {

              $(this).prepend('[' + this.tagName.toLowerCase() + '] ');
          });

          var headString = "<head>" + $contents.find('head').html() + "</head>\n";
          var document = "<!doctype html>\n<html>\n" + headString + "<body>" + $body.html() + "</body>\n</html>";
          grunt.file.write(dest + '/' + fileName, document);
      });
  });

};
