const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(require('./routes/teams'));
app.use(require('./routes/players'));

app.listen(3000, ()=>{
    console.log("running on port 3000")
})