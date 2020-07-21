var it = function(text, callback){
  callback();
};

var expect = function(testedInput){
  return {
    toEqual: function(expectedOutcome) {
      if(testedInput === expectedOutcome) {
        console.log("Tests Passing You Rock")
      } else {
        console.log("You're benched, mate.")
      }
    },
  };
};

it('create text when we create an instace of note',function()
  {
    note = new Note ("This is my note")
    expect(note.text).toEqual("This is my note")
});

it('create text when we create an instace of note',function()
  {
    note = new Note ("This is my note")
    expect(note.text).toEqual("This is my note")
});