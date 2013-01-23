var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */
//TODO: Less brittle tests
exports['html-annotation'] = {
    setUp:function (done) {
        done();
    },
    'file generation':function (test) {
        test.expect(1);

        var result = grunt.file.read('test/fixtures/gen/example.html');
        test.notEqual('', result, 'should generate the output file');

        test.done();
    },
    'element annotation':function (test) {

        var expected = '<!doctype html>\n' +
                        '<html>\n' +
                        '<head>\n' +
                            '    <title>Example</title>\n' +
                            '    <meta charset="utf-8" />\n' +
                        '</head>\n' +
                        '<body>\n' +
                        '    <h1>[h1] Header</h1>\n' +
                        '    <ul>[ul] \n' +
                        '        <li>[li] list item 1</li>\n' +
                        '        <li>[li] list item 2</li>\n' +
                        '    </ul>\n' +
                        '</body>\n' +
                        '</html>';

        test.expect(1);

        var result = grunt.file.read('test/fixtures/gen/example.html');
        test.equal(expected, result, 'should generate the output file');

        test.done();
    }
};
