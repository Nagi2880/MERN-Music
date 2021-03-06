//npm start to start the server || npm run dev to test the server
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

require('dotenv').config();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json());

//Routes
app.use('/api/musics',require('./routes/music.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});