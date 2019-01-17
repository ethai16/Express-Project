const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/',(req,res)=>{


    res.render('index',{
        pageTitle: 'Home',
        pageID: 'home',
        teams: data.texasbasketballteams,
        players: data.players
    })

})

router.get('/team/:teamID', (req,res)=>{
    var team = data.texasbasketballteams[req.params.teamID];
    res.render('team',{
        pageTitle: team.teamname,
        pageID: 'home',
        teams: data.texasbasketballteams,
        team:team,
        players: data.players,
        fullTeamName: team.city + " " +team.teamname,
        teamShortNameOnly: team.shortname,
        teamNameOnly: team.teamname,
        teamMascot: team.mascot,
        championships: team.championships,
        startingFive: team.starting5,
        info: team.info
    })

})

module.exports = router