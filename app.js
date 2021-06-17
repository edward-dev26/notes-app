const yargs = require("yargs");
const {addNote, removeNote} = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    buuilder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading a note');
    }
});

yargs.command({
    command: 'list',
    describe: 'Get lis of notes',
    handler: () => {
        console.log('List of notes');
    }
})

yargs.parse();