const pokemonModel = require('../models/pokemonModel');
const trainerModel = require('../models/trainerModel');

const getAllPokemons = (req, res) => {
  const pokemons = pokemonModel.getPokemons();
  res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
  const pokemon = pokemonModel.getPokemonById(req.params.id);
  if (pokemon) {
    res.render('pokemon', { pokemon });
  } else {
    res.status(404).send('Pokémon não encontrado');
  }
};

const showAddForm = (req, res) => {
  res.render('addPokemon'); 
};

const addPokemon = (req, res) => {
  const { nome, tipo } = req.body;
  if (nome && tipo) {
    pokemonModel.createPokemon(nome, tipo);
    res.redirect('/');
  } else {
    res.status(400).send('Dados inválidos');
  }
};

const addTrainer = (req, res) => {
  const {nome, pokemon1, pokemon2, pokemon3} = req.body;
  if (nome && pokemon1 && pokemon2 && pokemon3){
    trainerModel.createTrainer(nome,pokemon1, pokemon2, pokemon3);
    res.redirect('/trainers');
  }else{
    res.status(400).send('Dados Inválidos');
  }
}

  const getTrainer = (req, res) => {
    const trainer = trainerModel.getTrainersById(req.params.id);
    if (trainer) {
      res.render('trainer', { trainer });
    } else {
      res.status(404).send('Treinador não encontrado');
    }
  };

  const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers();
    res.render('trainers', { trainers });
  };


const showAddFormTrainer = (req, res) => {
  res.render('addTrainer'); 
};



module.exports = { getAllPokemons, getPokemon, showAddForm, addPokemon, addTrainer, getTrainer, getAllTrainers, showAddFormTrainer };