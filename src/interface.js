function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
return location.hash.split("#")[1];
};

function showNote(note) {
  document.getElementById("notes").innerHTML = Note.all()[note].text
  // create button
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Go Back";
  btn.setAttribute("id","button")
  var capture = document.getElementById("capture");
  capture.appendChild(btn);

  //trigger hash change
  btn.addEventListener("click", function(){
    window.location.hash = ""
  })
};

function printEachNote(note){
  document.getElementById("notes").innerHTML += "<li>" + `<a href="#${note.id}">` + note.text.substring(0,20) + "</a>" + "</li>" + "<br>";
};

function createNewNote(){
  new Note(document.getElementById("newNote").value);
};

function removeButton(){
  console.log("do we get to removing the button?")
  var btn = document.getElementById("button");
    btn.parentNode.removeChild(btn);
}

function displayChange(){
  console.log("do I make it in here?" + window.location.hash)
  if(window.location.hash == ""){
    removeButton();
    document.getElementById("notes").innerHTML = "";
    Note.all().forEach(printEachNote);
  }else{
    showNoteForCurrentPage();
  }
}