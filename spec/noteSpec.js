/*

User visits homepage
Expects to see a note

Expects a new instance of note which is given the argument ("This is my note")
To respond to note.text with "This is my note"

*/

function testNoteInstanceText() {
  var note = new Note("This is my note");
    if (note.text !== "This is my note") {
      console.log(`String wrong, expected "This is my note" got ${note.text}`);
    }
    else {
      console.log("Tests Passing You Rock")
    }
};
testNoteInstanceText();

var it = function(text, callback){
  callback();
};

var expect = function(testedInput){
  return {
      toEqual: console.log("getting deeper?")
    // toEqual : function(expectedOutcome) {
    //   if(testedInput === expectedOutcome) {
    //     return "Tests Passing You Rock"
    //   } else {
    //     return "You're benched, mate."
    //   }
    // };
  };
};

it('create text when we create an instace of note',function()
  {
    note = new Note ("This is my note")
    expect(note.text).toEqual("This is my note")
});