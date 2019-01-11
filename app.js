const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views')

app.use(express.static('public'));
app.use(require('./routes/teams'));
app.use(require('./routes/players'));
app.use(require('./routes/forum'));
app.use(require('./routes/api'))

app.listen(3000, ()=>{
    console.log("running on port 3000")
})