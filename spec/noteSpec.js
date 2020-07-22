it('>>Should be able to return the text that it is created with',function()
  {
    note = new Note ("This is my note")
    expect(note.text).toEqual("This is my note")
});

it('>>This test should pass as it is checking the given out does NOT match the actual output',function()
  {
    note = new Note ("This is my note")
    expect(note.text).toNotEqual("This is not my note")
});

it('>>Should return an array of notes', function(){
  note = new Note ("This is my note")
  note1 = new Note ("This is another note")
  note2 = new Note ("Hello I am a note")
  note3 = new Note ("Je suis note")
  console.log(Note.all())
  expect(Note.all()).toEqual(["This is my note", "This is another note", "Hello I am a note", "Je suis note"])
});
