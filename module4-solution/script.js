
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var c = 0; c < names.length; c++) {
  var firstLetter = names[c][0].toLowerCase();
  if (firstLetter == 'j') {
    byeSpeaker.speak(names[c]);
  } else {
      helloSpeaker.speak(names[c]);
  }
}
