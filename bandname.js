var path = require('path');
var fs = require('fs');

var adjectives = require('./adjectives/adjectives.json');

const DEFAULT_NOUN = 'animals';

var noun_types = fs.readdirSync('./nouns').map(function(filename) {
  return path.parse(filename).name;
});

var array_member = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = function(noun_type) {
  if (!noun_type) noun_type = DEFAULT_NOUN;
  var nouns = require('./nouns/' + noun_type + '.json');

  return (array_member(adjectives)) + " " + (array_member(nouns));
};
