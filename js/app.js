/* global sharing */
var nouns = [],
    verbs = [];

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

function generate() {
  var richPerson = richPeople.pick();
  var generatedText = richPerson.name + ' buys ' + newspapers.pick() + ' for $' + Math.floor(Math.random()*20+2)*10 +' Million';
  var generatedMarkup = '<a href="' + richPerson.url + '"><img src="' + richPerson.img + '"><br>' + richPerson.name + '</a> buys ' + newspapers.pick() + ' for $' + Math.floor(Math.random()*20+2)*10 +' Million';
  $('#content').html(generatedMarkup);
}

generate();
$('#generate').click(function() { generate(); });
