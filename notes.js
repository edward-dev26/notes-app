const fs = require('fs');
const messages = require('./messages.js');
const chalk = require('chalk');

const NOTES_FILE_NAME = 'notes.json';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.finc(note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
        messages.success('Note has been added!');
    } else {
        messages.error('Note title already taken!');
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync(NOTES_FILE_NAME, JSON.stringify(notes));
};

const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync(NOTES_FILE_NAME).toString();

        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    const isDeleted = notes.length !== filteredNotes.length;

    if (isDeleted) {
        saveNotes(filteredNotes);
        messages.success(`Note ${title} has been deleted!`);
    } else {
        messages.error('Note not found!');
    }
};

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.keyword('orange').bold('Your notes: '));

    notes.forEach((note, index) => {
        console.log(chalk.keyword('orange')(`${index + 1}) ${note.title}`));
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (note) {
        console.log(chalk.bold.inverse(note.title));
        console.log(note.body);
    } else {
        messages.error('Note not found');
    }
};

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote,
};