const router = require('express').Router();

// controllers
const ArcadeGamesController = require('../controllers/arcadeGamesController');

// routes

//['FIGHTING', 'SPORTS', 'PUZZLE', 'ARCADE', 'PLATFORMER', 'OTHER'],
router.get(`/new`, ArcadeGamesController.new);
router.get(`/fightings`, ArcadeGamesController.fightings);
router.get(`/sports`, ArcadeGamesController.sports);
router.get(`/arcade`, ArcadeGamesController.arcade);
router.get(`/puzzle`, ArcadeGamesController.puzzle);
router.get(`/platformer`, ArcadeGamesController.platformer);
router.get(`/other`, ArcadeGamesController.other);
router.get(`/`, ArcadeGamesController.index);
router.get(`/:id`, ArcadeGamesController.show);
router.post(`/`, ArcadeGamesController.create);
router.get(`/:id/edit`, ArcadeGamesController.edit);
router.post(`/update`, ArcadeGamesController.update);
router.post(`/destroy`, ArcadeGamesController.destroy);

module.exports = router;