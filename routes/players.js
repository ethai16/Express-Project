const express = require('express');
const router = express.Router();
var data = require('../data/data.json');


router.get(`/player/:playerID`, (req,res)=>{
    var player = data.players[req.params.playerID];
    var html =``;
    var i = 0;
    html += `
    <h2> ${player.name}</h2>
    <img src= "/images/${player.teamshort}/${player.shortname}.png">
    <div>Jersey: ${player.jersey}</div>
    <div>Position: ${player.position}</div>
    <div>Current Team: ${player.currentteam}</div>
    <div>Teams Played For: ${player.teamsPlayedFor}</div>
    <div><a href = "/team">Home</a></div>
`
if (`${player.currentteam}` == 'Houston Rockets'){
    html += `
    <div><a href = "/team/0">Back</a></div>
    `
}else if (`${player.currentteam}` == 'San Antonio Spurs'){
    html += `
    <div><a href = "/team/1">Back</a></div>
    `
}else{
    html += `
    <div><a href = "/team/2">Back</a></div>
    `
}

res.send(html)
})

module.exports = router