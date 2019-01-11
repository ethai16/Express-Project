var express = require('express');
var router = express.Router();
var data = require('../data/data.json')
const body_parser = require('body-parser');


router.get('/forum', (req, res) => {



    res.render('forum', {
        pageTitle: 'Forum',
        pageID: 'forum',
        teams: data.texasbasketballteams,
        players: data.players
    })


})

router.use(body_parser.urlencoded({extended: false}));

router.post('/forum',(req,res)=>{
    console.log(req.body)
    res.send('Forum submitted')
})



module.exports = router;