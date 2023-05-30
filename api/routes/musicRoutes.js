module.exports = function(app) {
    var musicController = require('../controllers/musicController');
  
    /**
     * @swagger
     * /music:
     *     get:
     *       tags: [music]
     *       summary: Get all music
     *       description: 'Отримати усі наявні записи'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *             properties:
     *              author:
     *                type: 'string'
     *                example: 'Jockii Druce'
     *              song:
     *                type: 'string'
     *                example: 'Шо ви браття'
     *              url_youtube:
     *                type: 'string'
     *                example: 'https://youtu.be/jFIeP6xb0oE'
     *                
     *     post:
     *       tags: [music]
     *       summary: Create new music
     *       description: 'Створити новий запис в базі даних'
     *       parameters:
     *         - in: 'path'
     *           name: 'author'
     *           description: 'author of needed musics'
     *           required: 'true'
     *           type: 'string'
     *         - in: 'path'
     *           name: 'song'
     *           description: 'song name of needed musics'
     *           required: 'true'
     *           type: 'string'
     *         - in: 'path'
     *           name: 'url_youtube'
     *           description: 'youtube link of needed musics'
     *           required: 'true'
     *           type: 'string'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *             properties:
     *              author:
     *                type: 'string'
     *                example: '123'
     *              song:
     *                type: 'string'
     *                example: '456'
     *              url_youtube:
     *                type: 'string'
     *                example: '678999'
     * /music/{id}:
     *     get:
     *       tags: [music]
     *       summary: Get music
     *       description: 'Отримати запис по його id'
     *       parameters:
     *         - in: 'path'
     *           name: 'id'
     *           description: 'ID of needed musics'
     *           required: 'true'
     *           type: 'string'
     *       responses:
     *         200:
     *           description: "Success"
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                type: 'string'
     *                example: 'Jockii Druce'
     *               song:
     *                type: 'string'
     *                example: 'Шо ви браття'
     *               url_youtube:
     *                type: 'string'
     *                example: 'https://youtu.be/jFIeP6xb0oE'
     *         400:
     *           description: 'Invalid ID supplied'
     *         404:
     *           description: Music not found
     *          
     *     put:
     *       tags: [music]
     *       summary: Update a music
     *       description: 'Оновити запис по його id'
     *       parameters:
     *         - in: 'path'
     *           name: 'id'
     *           description: 'ID of needed musics'
     *           required: 'true'
     *           type: 'string'
     *       responses:
     *         200:
     *           description: "Success"
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               author:
     *                type: 'string'
     *                example: 'Jockii Druce'
     *               song:
     *                type: 'string'
     *                example: 'Шо ви браття'
     *               url_youtube:
     *                type: 'string'
     *                example: 'https://youtu.be/jFIeP6xb0oE'
     *         400:
     *          description: 'Invalid ID supplied'
     * 
     *     delete:
     *       tags: [music]
     *       summary: Delete music
     *       description: 'Видалити запис по його id'
     *       parameters:
     *         - in: 'path'
     *           name: 'id'
     *           description: 'ID of needed musics'
     *           required: 'true'
     *           type: 'string'
     *       responses:
     *         200:
     *           description: "Success"
     *           application/json:
     *           schema:
     *             type: 'array'
     *             items:
     *              properties:
     *               message:
     *                 type: 'string'
     *                 example: 'This music successfully deleted'
     *         400:
     *          description: 'Invalid ID supplied'
     *           
     * 
     * /music/sort-AtoZ:
     *     get:
     *       tags: [Sorting]
     *       summary: Sort alphabetically
     *       description: 'Відсорувати записи за алфавітним порядком їх авторів'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: 'Alice Change'
     *               song:
     *                 type: 'string'
     *                 example: 'Не вистачає кисню'
     *               url_youtube:
     *                 type: 'string'
     *                 example: 'https://youtu.be/0WPIeNKy38U'
     * 
     * /music/sort-ZtoA:
     *     get:
     *       tags: [Sorting]
     *       summary: Sort in reverse alphabetical order
     *       description: 'Відсорувати записи за оберненим алфавітним порядком їх авторів'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: 'ЮЮ'
     *               song:
     *                 type: 'string'
     *                 example: 'Чорна хмара'
     *               url_youtube:
     *                 type: 'string'
     *                 example: 'https://youtu.be/u47f5d5RymE'
     * 
     * /music/count-music:
     *     get:
     *       tags: [Counting]
     *       summary: Count all music
     *       description: 'Порахувати усі записи в базі'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *              properties:
     *               message:
     *                 type: 'string'
     *                 example: 'Number of all songs in the database - 35'
     *               
     * 
     * /music/count-music/{Author}:
     *     get:
     *       tags: [Counting]
     *       summary: Count music with certain author
     *       description: 'Отримати кількість всіх записів з конкретним автором'
     *       parameters:
     *         - in: 'path'
     *           name: 'Author'
     *           description: 'Author of needed musics'
     *           required: 'true'
     *           type: 'string'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *              properties:
     *               message:
     *                 type: 'string'
     *                 example: 'Number of songs with this author in the database - 1'
     *         400:
     *          description: 'Invalid Author supplied'
     *           
     * 
     * /music/music-by-random:
     *     get:
     *       tags: [Search]
     *       summary: Find a random music
     *       description: 'Знайти випадковий запис в базі'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: 'Tapolsky'
     *               song:
     *                 type: 'string'
     *                 example: 'Відбій тривоги'
     *               url_youtube:
     *                 type: 'string'
     *                 example: 'https://youtu.be/_n2B62diZ20'
     * 
     * /music/search-music/{nameOfText}:
     *     get:
     *       tags: [Search]
     *       summary: Find music by partial author or song name
     *       description: 'Отримати запис за частковим автором або назвою пісні'
     *       parameters:
     *         - in: 'path'
     *           name: 'nameOfText'
     *           description: 'Author or song name of needed musics'
     *           required: 'true'
     *           type: 'string'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: 'Tapolsky'
     *               song:
     *                 type: 'string'
     *                 example: 'Відбій тривоги'
     *               url_youtube:
     *                 type: 'string'
     *                 example: 'https://youtu.be/_n2B62diZ20'
     *         400:
     *          description: 'Invalid text supplied'
     * 
     * /music/music-by-author/{Author}:
     *     get:
     *       tags: [Search]
     *       summary: Find music by full author name
     *       description: "Знайти запис за повним ім'ям автора"
     *       parameters:
     *         - in: 'path'
     *           name: 'Author'
     *           description: 'Author of needed musics'
     *           required: 'true'
     *           type: 'string'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: 'KOLA'
     *               song:
     *                 type: 'string'
     *                 example: 'Чи разом?'
     *               url_youtube:
     *                 type: 'string'
     *                 example: 'https://youtu.be/zziNhc6ECZA'
     *         400:
     *          description: 'Invalid author supplied'
     *           
     * 
     * /music/music-by-song/{Song}:
     *     get:
     *       tags: [Search]
     *       summary: Find music by full name of song
     *       description: 'Знайти запис за повную назвою пісні'
     *       parameters:
     *         - in: 'path'
     *           name: 'Song'
     *           description: 'Song name of needed musics'
     *           required: 'true'
     *           type: 'string'
     *       responses:
     *         200:
     *          description: "Success"
     *          application/json:
     *          schema:
     *            type: 'array'
     *            items:
     *              properties:
     *               author:
     *                 type: 'string'
     *                 example: 'OTOY'
     *               song:
     *                 type: 'string'
     *                 example: 'Енемі'
     *               url_youtube:
     *                 type: 'string'
     *                 example: 'https://youtu.be/E4vki5kUaVI'
     *         400:
     *          description: 'Invalid song supplied'
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

    app.route('/music/search-music/:nameOfText')
    .get(musicController.search_music_by_text);

    app.route('/music/music-by-author/:musicAuthor')
      .get(musicController.find_author_music);

    app.route('/music/music-by-song/:musicSong')
      .get(musicController.find_song_music);
  };