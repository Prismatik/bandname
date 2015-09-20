var adjectives = require('./adjectives.json');

var array_member = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = function(genre) {
  var names = ['animals', 'asoiaf', 'lotr'];

  //where be muh es6?
  (genre && names.some(function(elem) {if (elem == genre); return elem})) ? genre = genre : genre = 'animals';
  var noun = require('./' + genre + '.json');

  return (array_member(adjectives)) + " " + (array_member(noun));
};
