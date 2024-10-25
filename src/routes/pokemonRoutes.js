const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');


router.get('/', pokemonController.getAllPokemons);


router.get('/add', pokemonController.showAddForm);


router.post('/add', pokemonController.addPokemon);


router.get('/pokemon/:id', pokemonController.getPokemon);

router.get('/addTrainer', pokemonController.showAddFormTrainer);
router.post('/addTrainer', pokemonController.addTrainer);

router.get('/trainers', pokemonController.getAllTrainers);
router.get('/trainer/:id', pokemonController.getTrainer);

module.exports = router;
