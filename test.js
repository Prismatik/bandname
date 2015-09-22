var path = require('path');
var bandname = require(path.resolve('.', 'bandname'));
var assert = require('assert');

var name = bandname();
var name2 = bandname();

assert.equal('string', typeof name);
assert.notEqual(name, name2);

var lotrname = bandname('lotr');
var asoiafname = bandname('asoiaf');

assert.equal('string', typeof lotrname);
assert.equal('string', typeof asoiafname);
