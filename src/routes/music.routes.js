
const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const Music = require('../models/music');

//Show all musics in the route
router.get('/',async (req,res) =>{
    const musics = await Music.find();
    res.json(musics); 
});
//get a only music
router.get('/:id',async (req, res) =>{
    const music = await Music.findById(req.params.id);
    res.json(music);
})

//Add songs to the database
router.post('/', async (req, res) =>{
    const { name, album, author } = req.body;
    const music = new Music({ name, album, author });
    await music.save()
    res.json({status:'Music Saved'})
});
//Update song in the database
router.put('/:id', async (req, res) =>{
    const { name, album, author } = req.body;
    const newMusic = {name, album, author};
    await Music.findByIdAndUpdate(req.params.id, newMusic);
    res.json({status:'Music Updated'})
});
//Delete songs from the database
router.delete('/:id', async (req, res ) =>{
    //Require the id by the parameters or from the "/id"
    await Music.findByIdAndRemove(req.params.id);
    res.json({status: 'Music Deleted'})

})



module.exports = router;