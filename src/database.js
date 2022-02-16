const mongoose = require('mongoose');

const {MONGODB_HOST, MONGODB_DB} = process.env;
const MONGODB_URL = `mongodb://${MONGODB_HOST}/${MONGODB_DB}`;
mongoose.connect(MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

