const express = require('express');
const router = express.Router();
var data = require('../data/data.json');


router.get(`/player/:playerID`, (req,res)=>{
    var player = req.params.playerID;

    let index = data.players.findIndex(ele => ele.name.toLowerCase() === req.params.playerID.toLowerCase())

    res.render('player',{
        pageTitle: player.name,
        pageID: 'home',
        teams: data.texasbasketballteams,
        playersData: data.players,
        playerID: index,
        players: data.players,
    })

})

module.exports = router