const mongoose = require('mongoose');
const { Schema } = mongoose;

const MusicSchema = new Schema ({
    name:{ type: String, required: true},
    album:{ type: String, required: true},
    author:{ type: String, required:true}
});
module.exports = mongoose.model('Music', MusicSchema)

