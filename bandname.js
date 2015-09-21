var path = require('path');
var fs = require('fs');

const DEFAULT_NOUN = 'animals';
const DEFAULT_ADJECTIVE = 'adjectives';

var just_the_name = function(filename) {
  return path.parse(filename).name;
};

var cache_warmer_factory = function(subfolder) {
  return function(filename) {
    require(path.resolve('.', subfolder, filename));
    return filename;
  }
};

var adjective_types = fs.readdirSync(path.resolve('.', 'adjectives')).map(cache_warmer_factory('adjectives')).map(just_the_name);
var noun_types = fs.readdirSync(path.resolve('.', 'nouns')).map(cache_warmer_factory('nouns')).map(just_the_name);

var array_member = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = function(noun_type, adjective_type) {
  if (!noun_type) noun_type = DEFAULT_NOUN;
  if (!adjective_type) adjective_type = DEFAULT_ADJECTIVE;
  var nouns = require(path.resolve('.', 'nouns', noun_type));
  var adjectives = require(path.resolve('.', 'adjectives', adjective_type));

  return (array_member(adjectives)) + " " + (array_member(nouns));
};
