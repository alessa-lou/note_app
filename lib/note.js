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
