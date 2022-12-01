var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MusicSchema = new Schema({
   author: {
    type: String,
    required: 'Kindly enter the name of the author'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  song: {
    type: String,
    required: 'Kindly enter the name of the song'
  },
  url_youtube: {
    type: String,
    required: 'Kindly enter url'
  }
});

module.exports = mongoose.model('Music', MusicSchema);