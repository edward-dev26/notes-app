const fs = require('fs');

const NOTES_FILE_NAME = 'notes.json';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if (!duplicateNotes.lenght) {
        notes.push({
            title,
            body
        });

        console.log('Note has been added!');
    } else {
        console.log('Note title already taken!');
    }

    saveNotes(notes);
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

module.exports = {
    addNote
};