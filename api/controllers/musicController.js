var mongoose = require('mongoose'),
  Music = mongoose.model('Music');

exports.list_all_music = function(req, res) {
   Music.find({}, function(err, music) {
    if (err)
      res.send(err);
    res.json(music);
  })
  .sort("_id")
};

exports.create_a_music = function(req, res) {
  var new_music = new Music(req.body);
  new_music.save(function(err, music) {
    if (err)
      res.send(err);
    res.json(music);
  });
};


exports.read_a_music = function(req, res) {
  Music.findById(req.params.musicId, function(err, music) {
    if (err)
      res.status(400).send("HERE TEST " + err);
    res.json(music);
  });
};

exports.update_a_music = function(req, res) {
  Music.findOneAndUpdate({_id: req.params.musicId}, req.body, {new: true}, function(err, music) {
    if (err)
      res.status(400).send("HERE TEST " + err);
    res.json(music);
  });
};

exports.delete_a_music = function(req, res) {
  Music.remove({_id: req.params.musicId}, function(err, music) {
    if (err)
      res.status(400).send("HERE TEST " + err);
    res.json({ message: 'This music successfully deleted' });
  });
};

exports.find_author_music = function(req, res) {
  Music.find({author: req.params.musicAuthor}, function(err, music) {
    if (err)
      res.status(400).send("HERE TEST " + err);
    res.json(music);
  });
};

exports.find_song_music = function(req, res) {
  Music.find({song: req.params.musicSong}, function(err, music) {
    if (err)
      res.status(400).send("HERE TEST " + err);
    res.json(music);
  });
};


exports.list_all_music_AtoZ = function(req, res) {
  Music.find({}, function(err, music) {
   if (err)
     res.send(err);
   res.json(music);
 })
 .sort("author")
};

exports.list_all_music_ZtoA = function(req, res) {
  Music.find({}, function(err, music) {
   if (err)
     res.send(err);
   res.json(music);
 })
 .sort({"author":-1})
};

exports.list_music_count = function(req, res) {
  Music.countDocuments({}, function(err, music) {
    if (err)
      res.send(err);
    res.json({ message: 'Number of all songs in the database - ' + music });
  });
}; 

exports.list_music_count_by_author = function(req, res) {
  Music.countDocuments({author: req.params.musicAuthor}, function(err, music) {
    if (err)
      res.status(400).send("HERE TEST " + err);
    res.json({ message: 'Number of songs with this author in the database - ' + music });
  });
};

exports.search_music_by_text = function(req, res) {
  Music.find({$text: {$search: req.params.nameOfText}}, function(err, music) {
    if (err)
      res.status(400).send("HERE TEST " + err);
    res.json(music);
  })
  .sort("author")
};

exports.find_random_music = function(req, res) {
  Music.aggregate([{ $sample: { size: 1 } }], function(err, music) {
    if (err)
      res.send(err);
    res.json(music);
  })
  .sort("author")
};