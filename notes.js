const fs = require('fs')
const chalk = require('chalk')

 
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes) //making the str file
    fs.writeFileSync('notes.json', dataJSON) //writing into notes
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json') //reading file
        const dataJSON = dataBuffer.toString() // converting to str 
        return JSON.parse(dataJSON) // converting to obj
    } catch (e)
    {
        return []
    }
}

const listNotes = ()=>{
    const notes = loadNotes()

    console.log(chalk.yellow.inverse('Notes List!'))
    
    notes.forEach(note => {
        console.log(note.title) 
    })
}

const addNote = (title,body) => {
    const notes = loadNotes() 
    const duplicateNote = notes.find((notes) => notes.title === title)

    debugger

    if (!duplicateNote){
        notes.push({
            title: title,
            body : body
        })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added !'))
    }
    else{
        console.log(chalk.red.inverse('Note title taken!'))
    }    
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notestokeep = notes.filter((notes)=> notes.title !== title)

    if (notestokeep.length === notes.length){
        console.log(chalk.red.inverse('No Such Title Found')) 
    }
    else{
        console.log(chalk.green.inverse(title +  '-removed'))
        saveNotes(notestokeep)
    }  
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundnote = notes.find((note) => note.title === title)

    if (foundnote){
        console.log(chalk.inverse(foundnote.title))
        console.log(foundnote.body)
    }
    else{
        console.log(chalk.red.inverse('No such note found!'))
    }
}


module.exports = {
    addNote : addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote: readNote 
}