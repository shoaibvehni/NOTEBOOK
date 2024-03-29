const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

var fetchuser = require('../middlevare/fetchuser');
const Note = require('../models/Note');
router.get('/fetchallnotes',fetchuser , async (req, res)=>{

    try {
        
    const notes = await Note.find({user: req.user.id})
    res.json(notes)
    
} catch (error) {
    
    console.error(error.message);
    res.status(500).send('Server Error find');
  
}
} )

router.post('/addnotes',fetchuser ,[
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 3 }),  
 
], async (req, res)=>{

    try {
        
    const {title, description,tag}= req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    const note   = new Note({
        title, description,tag,   user: req.user.id
    })
    const savedNote= await note.save()
  
    res.json(savedNote)
    
} catch (error) {   
    
    console.error(error.message);
    res.status(500).send('Server Error note');
        
}
} )
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        let newNote = {};
        if (title) { newNote.title = title; }
        if (description) { newNote.description = description; }
        if (tag) { newNote.tag = tag; }

        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not found");
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(403).send("Unauthorized");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error note update');
        // Make sure to return the response after sending an error
        return;
    }
});

router.delete('/deletenotes/:id', fetchuser, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not found");
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(403).send("Unauthorized");
        }

        await Note.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Note deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error note delete');
        // Make sure to return the response after sending an error
        return;
    }
});

module.exports = router