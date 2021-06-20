const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')


//customise yargs version
yargs.version('1.1.0')

//add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        notes.addNote(yargs.argv.title, yargs.argv.body)
    } 
})

//remove command
yargs.command({
    command: 'remove',
    describe:'removing the node',
    builder :{
        title:{
            describe: 'note title you want to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        notes.removeNote(yargs.argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler() {
        notes.listNotes()
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe: 'title of the note',
            demandOption : true,
            type: 'string'
        }
    },
    handler(){
        notes.readNote(yargs.argv.title)
    }
})

yargs.parse()


