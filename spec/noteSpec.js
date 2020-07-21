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

var it = function(){}
  it('creats text when we create an instace of note',function()
  {
    note = new Note ("This is my note")
    expect(note.text).toEqual("This is my note")
});


// Visit homepage, expect to see text
// function testNoteTextIsOnPage(){
//   var note = new Note("This is my note");
//
//     if (!document.body.contains("This is my note")) { 
//       console.log(`no string there`); 
//     }
//     else {
//       console.log("Tests Passing You Rock") 
//     }  
// };
//
// testNoteTextIsOnPage();
