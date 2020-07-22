class Note{
  constructor(text){
    this.text = text
    Note.allInstances.push(this);
  }

    static all(){
      return Note.allInstances
    }

}
Note.allInstances = [];

var note = new Note("I'm the first note in this fable when four colleagues got together and learnt how to create a single page javascript application");
var note2 = new Note("I'm the second note")