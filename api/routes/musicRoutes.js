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
     *     put:
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
     *     delete:
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
     */

    // todoList Routes
    app.route('/music')
      .get(musicController.list_all_music)
      .post(musicController.create_a_music);
  
  
    app.route('/music/:musicId')
      .get(musicController.read_a_music)
      .put(musicController.update_a_music)
      .delete(musicController.delete_a_music);

    // app.route('/music/:musicAutor')
    //   .get(musicController.find_author_music)

    // app.route('/music/:musicSong')
    //   .get(musicController.find_song_music)
  };