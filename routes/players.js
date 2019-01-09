const express = require('express');
const router = express.Router();
var data = require('../data/data.json');


router.get(`/player/:playerID`, (req,res)=>{
    var player = data.players[req.params.playerID];

    function grabPlayerID(element) {
        return element.name == player.name;
    }

    res.render('player',{
        pageTitle: player.name,
        pageID: 'home',
        teams: data.texasbasketballteams,
        playersData: data.players,
        playerID: data.players.findIndex(grabPlayerID)
    })

})

module.exports = router