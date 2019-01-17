const express = require('express');
const app = express();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(express.static('public'));
app.use(require('./routes/teams'));
app.use(require('./routes/players'));
app.use(require('./routes/forum'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'))



io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(3000, ()=>{
    console.log("running on port 3000")
})

