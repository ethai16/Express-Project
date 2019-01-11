const express = require("express");
const router = express.Router();
const fs = require('fs')
var forumData = require('../data/forum.json')
const body_parser = require('body-parser');
var data = require('../data/data.json')



router.get('/api',(req,res)=>{
    res.json(forumData)
})

router.use(body_parser.urlencoded({extended: false}));
router.use(body_parser.json())

router.post('/api', (req,res)=>{
    forumData.unshift(req.body);
    fs.writeFile('./data/forum.json', JSON.stringify(forumData), 'utf8', (err)=>{
        if (err){
            console.log(err);
        }
    })
    res.json(forumData)
});

router.delete('/api/:id',(req,res)=>{
    forumData.splice(req.params.id,1);
    fs.writeFile('./data/forum.json', JSON.stringify(forumData), 'utf8', (err)=>{
        if (err){
            console.log(err);
        }
    })
    res.json(forumData)
});



module.exports = router;