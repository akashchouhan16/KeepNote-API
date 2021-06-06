const express = require('express');
const router = express.Router();

//Importing Model.
const Note = require('../model/notes.model');

// Home 
router.get('/', async(req,res)=>{
    try{
        const notes = await Note.find();
        res.json(notes); //Send back all the Notes saved in the DB.
    }catch(error){
        res.status(500).json({LOG : 'Request Failed', message : error});
    }
})

//Add new Note / reminder / Task
router.post('/newnote', async (req,res)=>{
    const noteTitle = req.body.title;
    const noteBody = req.body.description;
    console.log(`Saving to DataBase.... TITLE : ${noteTitle} + "      "+ BODY : ${noteBody}`);

    const note = new Note({
        title : noteTitle,
        description : noteBody
    })
    await note.save()
    .then(noteData =>{
        res.json(data);
    })
    .catch(err=>{
        res.status(404).json({message : err , LOG : 'Unable to save the Note to DB'});
    })
});

// Get on Specific Note : 
router.get('/notes/:noteId', async(req,res)=>{
    try{
        const note = await Note.findById(req.params.noteId);
        res.json({LOG : 'Note Found in DB', Note : note});
    }catch(error){
        res.status(404).json({message : error, LOG : 'Unable to find the Specific Note in DB'});
    }
})


// Update Previous Note
router.patch('/notes/:noteId', async(req,res)=>{
    try{
        const updatedNote = await Note.updatedOne({
            _id : req.params.noteId},
            {$set : {title : req.body.title, body : req.body.desc}});

            res.json({LOG : 'Note has been Updated!', Note : updatedNote});
    }catch(error){
        res.status(404).json({LOG : 'Failed to Update the Note', Message : error});
    }
})


// Delete a Note

router.delete('/notes/:noteId', async(req,res)=>{
    try{
        const deletedNote = await Note.deleteOne({_id : req.params.noteId})
        const Deletelog = {
            LOG : 'Note Deleted!',
            NOTE : deletedNote
        }
        console.table(Deletelog);
    }catch(error){
        res.status(404).json({LOG : 'Unable to Delete Note', message : error});
    }
})

module.exports = router;