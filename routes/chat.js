const express = require('express');
const router = express.Router();
var data = require('../data/data.json');

router.get('/chat',(req,res) => {
    
    res.render('chat',{
        pageTitle: 'Chat',
        pageID: 'chat',
        teams: data.texasbasketballteams,
        players: data.players
    })
})

router.get('/chat', (req, res)=>{
    res.sendFile('/Users/erickthai/DigitalCraftsBoot/Express Assignment/views/chat.ejs');
});


module.exports = router;