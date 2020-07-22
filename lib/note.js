class Note{
  constructor(text){
    this.text = text
    Note.allInstances.push(this);
  }

    static all(){
      return Note.allInstances.text
    }

}
Note.allInstances = [];

var note = new Note("hello here is a lot of lovely text")
