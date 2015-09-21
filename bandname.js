var path = require('path');
var fs = require('fs');

const DEFAULT_NOUN = 'animals';
const DEFAULT_ADJECTIVE = 'adjectives';

var just_the_name = function(filename) {
  return path.parse(filename).name;
};

var adjective_types = fs.readdirSync('./adjectives').map(just_the_name);
var noun_types = fs.readdirSync('./nouns').map(just_the_name);

var array_member = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = function(noun_type, adjective_type) {
  if (!noun_type) noun_type = DEFAULT_NOUN;
  if (!adjective_type) adjective_type = DEFAULT_ADJECTIVE;
  var nouns = require('./nouns/' + noun_type + '.json');
  var adjectives = require('./adjectives/' + adjective_type + '.json');

  return (array_member(adjectives)) + " " + (array_member(nouns));
};
