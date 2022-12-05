module.exports = function(app) {
    var musicController = require('../controllers/musicController');
  
    /**
     * @swagger
     * /music:
     *     get:
     *       tags: [music]
     *       description: 'get all music'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     *     post:
     *       tags: [music]
     *       description: 'create new music'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * /music/{id}:
     *     get:
     *       tags: [music]
     *       description: 'get music by id'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     *     put:
     *       tags: [music]
     *       description: 'Update a music by id'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     *     delete:
     *       tags: [music]
     *       description: 'delete music by id'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * 
     * /music/sort-AtoZ:
     *     get:
     *       tags: [Sorting]
     *       description: 'Sort alphabetically by author'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * 
     * /music/sort-ZtoA:
     *     get:
     *       tags: [Sorting]
     *       description: 'Sort in reverse alphabetical order by author'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * 
     * /music/count-music:
     *     get:
     *       tags: [Counting]
     *       description: 'count all music'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * 
     * /music/count-music/{Author}:
     *     get:
     *       tags: [Counting]
     *       description: 'count music with certain author'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * 
     * /music/music-by-random:
     *     get:
     *       tags: [Search]
     *       description: 'Find a random music'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * 
     * /music/search-author/{nameOfAuthor}:
     *     get:
     *       tags: [Search]
     *       description: 'Find music by partial author name'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * 
     * /music/search-song/{nameOfSong}:
     *     get:
     *       tags: [Search]
     *       description: 'Find music by partial name of song'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * 
     * /music/music-by-author/{Author}:
     *     get:
     *       tags: [Search]
     *       description: 'Find music by full author name'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     * 
     * /music/music-by-song/{Song}:
     *     get:
     *       tags: [Search]
     *       description: 'Find music by full name of song'
     *       responses:
     *         200:
     *          description: "success"
     *         content:
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: '123'
     *               song:
     *                 type: 'string'
     *                 example: '456'
     *               url_youtube:
     *                 type: 'string'
     *                 example: '678999'
     */

    // todoList Routes
    app.route('/music')
      .get(musicController.list_all_music)
      .post(musicController.create_a_music);

    app.route('/music/sort-AtoZ')
      .get(musicController.list_all_music_AtoZ);

    app.route('/music/sort-ZtoA')
      .get(musicController.list_all_music_ZtoA);

    app.route('/music/count-music')
      .get(musicController.list_music_count);

    app.route('/music/music-by-random')
      .get(musicController.find_random_music);

    app.route('/music/:musicId')
      .get(musicController.read_a_music)
      .put(musicController.update_a_music)
      .delete(musicController.delete_a_music);

    app.route('/music/count-music/:musicAuthor')
      .get(musicController.list_music_count_by_author);

    app.route('/music/search-author/:nameOfAuthor')
    .get(musicController.search_music_by_author);

    app.route('/music/search-song/:nameOfSong')
      .get(musicController.search_music_by_song);

    app.route('/music/music-by-author/:musicAuthor')
      .get(musicController.find_author_music);

    app.route('/music/music-by-song/:musicSong')
      .get(musicController.find_song_music);
  };