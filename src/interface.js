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
  // document.getElementById("notes").innerHTML = '<a href="#">' + Note.all()[note].text + '</a>'
  document.getElementById("notes").innerHTML = Note.all()[note].text
  // notebook.get.text
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Go Back";
  btn.setAttribute("id","button")
  var capture = document.getElementById("capture");
  capture.appendChild(btn);
  // document.getElementById("capture").appendChild(btn);
  btn.addEventListener("click", function(){
    window.location.hash = ""
  })
  
  // document.getElementById("notes").addEventListener("click", function(clickEvent){
  //   clickEvent.preventDefault();
  //   document.getElementById("notes").innerHTML = ""
  //   Note.all().forEach(printEachNote)})
};

function printEachNote(note){
  document.getElementById("notes").innerHTML += "<li>" + `<a href="#${note.id}">` + note.text.substring(0,20) + "</a>" + "</li>" + "<br>";
};

function createNewNote(){
  new Note(document.getElementById("newNote").value);
};