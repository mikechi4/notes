const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  console.log(notes);
  const duplicateNote = notes.find(note => {
    return note.title === title;
  });

  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
  } else {
    console.log("Note title taken");
  }
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  if (notes.length > filteredNotes.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(filteredNotes);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const listNotes = () => {
  console.log(chalk.inverse("Your current notes"));
  loadNotes().forEach(note => {
    console.log(note.title);
  });
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(n => {
    return n.title === title;
  });

  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};
