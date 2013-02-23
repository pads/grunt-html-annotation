[![Build Status](https://travis-ci.org/pads/grunt-html-annotation.png)](https://travis-ci.org/pads/grunt-html-annotation)

# grunt-html-annotation

Annotate elements in HTML pages

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-html-annotation`

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-html-annotation');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
A very simple plugin that annotates HTML elements with their tag names e.g:

Before:
    `<h1>A header</h1>`

After:
    `<h1>[h1] A header</h1>`

### Configuration

In your grunt config section:

    "html-annotation":{
        src:'src/folder',
        dest:'dest/folder'
    }

You don't need to add trailing forward slashes.

### Running

Run `grunt html-annotation` and the generated files will appear in the folder as denoted by the 'dest' config option.

### Possible Upcoming Features

* Make annotation configurable.
* Multi-task options.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
* 0.1.0 - Initial plugin release.
* 0.2.0 - Grunt 0.4 compatible.

## License
Copyright (c) 2013 Ben Paddock  
Licensed under the MIT license.
