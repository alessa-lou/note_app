var it = function(text, callback){
  console.log(text);
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

    toNotEqual: function(expectedOutcome) {
      if(testedInput !== expectedOutcome) {
        console.log("Tests Passing You Rock")
      } else {
        console.log("You're benched, mate.")
      }
    },

  };
};

it('Should be able to return the text that it is created with',function()
  {
    note = new Note ("This is my note")
    expect(note.text).toEqual("This is my note")
});

it('This test should pass as it is checking the given out does NOT match the actual output',function()
  {
    note = new Note ("This is my note")
    expect(note.text).toNotEqual("This is not my note")
});
