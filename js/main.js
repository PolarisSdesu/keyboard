var c = document.querySelector(".note-c");
var d = document.querySelector(".note-d");
var e = document.querySelector(".note-e");
var f = document.querySelector(".note-f");
var g = document.querySelector(".note-g");
var a = document.querySelector(".note-a");
var b = document.querySelector(".note-b");
var cs = document.querySelector(".note-cs");
var ds = document.querySelector(".note-ds");
var fs = document.querySelector(".note-fs");
var gs = document.querySelector(".note-gs");
var as = document.querySelector(".note-as");

// Define the keyboard bindings
const keyBindings = {
  65: c, // A
  83: d, // S
  68: e, // D
  70: f, // F
  71: g, // G
  72: a, // H
  74: b, // J
  87: cs, // W
  69: ds, // E
  84: fs, // T
  89: gs, // Y
  85: as, // U
};

// Define the isPlaying flag
let isPlaying = false;

function pressK(e) {
  const note = keyBindings[e.keyCode];
  if (note) {
    if (note === cs || note === ds || note === fs || note === gs || note === as) {
      note.style.backgroundColor = "#c9b1ff";
      note.style.color = "#6e5b9b";
    } else {
      note.style.backgroundColor = "#a883ff";
      note.style.color = "#c7afff";
    }
    note.style.transition = "all 0.1s ease-in-out";
  }
}

function releaseK(e) {
  const note = keyBindings[e.keyCode];
  if (note) {
    if (note === cs || note === ds || note === fs || note === gs || note === as) {
      note.style.backgroundColor = "#a883ff";
      note.style.color = "#c7afff";
    } else {
      note.style.backgroundColor = "#c9b1ff";
      note.style.color = "#6e5b9b";
    }
    note.style.transition = "all 0.5s ease-in-out";
  }
}

document.addEventListener("keydown", pressK);
document.addEventListener("keyup", releaseK);

// Add event listeners to all the notes
c.addEventListener("mousedown", pressNote);
c.addEventListener("mouseup", releaseNote);
d.addEventListener("mousedown", pressNote);
d.addEventListener("mouseup", releaseNote);
e.addEventListener("mousedown", pressNote);
e.addEventListener("mouseup", releaseNote);
f.addEventListener("mousedown", pressNote);
f.addEventListener("mouseup", releaseNote);
g.addEventListener("mousedown", pressNote);
g.addEventListener("mouseup", releaseNote);
a.addEventListener("mousedown", pressNote);
a.addEventListener("mouseup", releaseNote);
b.addEventListener("mousedown", pressNote);
b.addEventListener("mouseup", releaseNote);
cs.addEventListener("mousedown", pressNote);
cs.addEventListener("mouseup", releaseNote);
ds.addEventListener("mousedown", pressNote);
ds.addEventListener("mouseup", releaseNote);
fs.addEventListener("mousedown", pressNote);
fs.addEventListener("mouseup", releaseNote);
gs.addEventListener("mousedown", pressNote);
gs.addEventListener("mouseup", releaseNote);
as.addEventListener("mousedown", pressNote);
as.addEventListener("mouseup", releaseNote);

// Define the function to press a note
function pressNote(e) {
  const note = e.target;
  if (note) {
    if (note === cs || note === ds || note === fs || note === gs || note === as) {
      note.style.backgroundColor = "#c9b1ff";
      note.style.color = "#6e5b9b";
    } else {
      note.style.backgroundColor = "#a883ff";
      note.style.color = "#c7afff";
    }
    note.style.transition = "all 0.1s ease-in-out";
  }
}

// Define the function to release a note
function releaseNote(e) {
  const note = e.target;
  if (note) {
    if (note === cs || note === ds || note === fs || note === gs || note === as) {
      note.style.backgroundColor = "#a883ff";
      note.style.color = "#c7afff";
    } else {
      note.style.backgroundColor = "#c9b1ff";
      note.style.color = "#6e5b9b";
    }
    note.style.transition = "all 0.5s ease-in-out";
  }
}

// Define the notes
const notes = ["c", "d", "e", "f", "g", "a", "b", "cs", "ds", "fs", "gs", "as"];

// Define the function to play a note
function playNote(note) {
  const audio = new Audio(`/key/${note}.mp3`);
  audio.play();
}

// Add event listeners to all the notes
notes.forEach((note) => {
  const element = document.querySelector(`.note-${note}`);
  element.addEventListener("mousedown", () => playNote(note));
  element.addEventListener("mouseup", () => playNote(note));
});

// Add event listeners to the keyboard
document.addEventListener("keydown", (e) => {
  const note = keyBindings[e.keyCode];
  if (note) {
    playNote(note);
  }
});

