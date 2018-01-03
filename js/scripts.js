var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaur = dinosaur.toUpperCase();
console.log(dinosaur);

var text = text.replace('Velociraptor', dinosaur);
console.log(text);

var halfOfSentence = text.slice(0, text.length / 2);
console.log(halfOfSentence);