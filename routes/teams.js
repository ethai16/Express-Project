const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/team',(req,res)=>{
    var teamname = data.texasbasketballteams;
    var html = "";
    var count = 0

    teamname.forEach((item)=>{
        html += `
            <h2><a href = "/team/${count}">${item.city} ${item.teamname}</h2>
        ` 
        count++
    })
    res.send(html)
})

router.get('/team/:teamID', (req,res)=>{
    var html = ``;
    var team = data.texasbasketballteams[req.params.teamID];
    var i = 0;
    var j = 5;
    var k = 10;
    html += `
        <h2>${team.city} ${team.teamname}</h2>
        <img src ="/images/${team.shortname}/${team.teamname}_logo.png">
        <div>Mascot: ${team.mascot}</div>
        <div>Championships Won: ${team.championships}</div>
        <div>Starting Five:</div>
    `
    while (i<team.starting5.length && `${team.city}`== 'Houston'){
        html += `
        <a href = "/player/${i}">${team.starting5[i]}</a>
        `
        i++
    }
    while (i<team.starting5.length && `${team.city}`== 'Dallas'){
        html += `
        <a href = "/player/${k}">${team.starting5[i]}</a>
        `
        k++
        i++
    }
    while (i<team.starting5.length && `${team.city}`== 'San Antonio'){
        html += `
        <a href = "/player/${j}">${team.starting5[i]}</a>
        `
        j++
        i++
    }
    html += `
        <div><a href = "/team">Home</a></div>
    `

    res.send(html)
})

module.exports = router