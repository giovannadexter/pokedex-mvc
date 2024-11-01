const trainers = [
  { id: 1, nome: 'Giovanna', pokemons: [{nome:'Chikorita',tipo:'planta'}, {nome: 'Bulbassauro', tipo:'planta'}, {nome:'Charizard',tipo:'fogo'}], },
  { id: 2, nome: 'Missaki', pokemons: [{nome:'Arcanine',tipo:'planta'}, {nome: 'Pikachu', tipo:'planta'}, {nome:'Raichu',tipo:'fogo'}], },
  { id: 3, nome: 'Kubo', pokemons: [{nome:'Bellsprout',tipo:'planta'}, {nome: 'Pichu', tipo:'planta'}, {nome:'Gengar',tipo:'fogo'}], },
];

const getTrainers = () => trainers;
const getTrainerById = (id) => trainers.find(p => p.id === parseInt(id));
const createTrainer = (nome, pokemons) => trainers.push({ id: trainers.length + 1, nome, pokemons });

module.exports = { getTrainers, getTrainerById, createTrainer };
