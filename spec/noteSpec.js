it('>>Should be able to return the text that it is created with',function()
  {
    note = new Note ("This is my note")
    expect(note.text).toEqual("This is my note")
});

it('>>This test should pass as it is checking the given out does NOT match the actual output',function()
  {
    note1 = new Note ("This is another note")
    expect(note1.text).toNotEqual("This is not my note")
});

it('>>Should return an array of notes', function(){

  console.log(Note.all())
  expect(Note.all().length).toEqual(2)
  expect(Note.all()[0].text).toEqual("This is my note")
});
