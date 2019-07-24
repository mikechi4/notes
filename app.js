const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Enter title of note to remove",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "Show your list",
  handler: () => {
    notes.listNotes();
  }
});

yargs.command({
  command: "read",
  describe: "read your notes",
  builder: {
    title: {
      describe: "Enter title of note you want to find",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.readNote(argv.title);
  }
});

yargs.parse();
