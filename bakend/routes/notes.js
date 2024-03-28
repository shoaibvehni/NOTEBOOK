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
    
    console.error(err.message);
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
    
    console.error(err.message);
    res.status(500).send('Server Error note');
        
}
} )

router.put('/updatenotes/:id',fetchuser ,
  async (req, res)=>{
    try {
        
    const {title, description,tag}= req.body;
let newNote ={};
if(title){newNote.title=title};
if(description){newNote.description=description};
if(tag){newNote.tag=tag};

let note =  await Note.findById(req.params.id);
if(!note){
    res.status(404).send("not found")
}

if(note.user.toString() !== req.user.id){
    return res.status(404).send("go to hell")
}

note = await Note.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true})
res.json({note});
} catch (error) {
    
    console.error(err.message);
    res.status(500).send('Server Error note update');
        
}
})


router.delete('/deletenotes/:id',fetchuser ,
  async (req, res)=>{
    try {
        
    const {title, description,tag}= req.body;

let note =  await Note.findById(req.params.id);
if(!note){
    res.status(404).send("not found")
}

if(note.user.toString() !== req.user.id){
    return res.status(404).send("go to hell")
}

note = await Note.findByIdAndDelete(req.params.id)

res.json({"Success":"note delted hogya  " ,note:note    });

} catch (error) {
    
    console.error(err.message);
    res.status(500).send('Server Error note update');
        
}
})


module.exports = router