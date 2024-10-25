const trainers = [
    { id: 1, nome: 'Giovanna', pokemon1: 'Chikorita', pokemon2:'Bulbassauro', pokemon3:'Charizard' },
    { id: 2, nome: 'Missaki', pokemon1: 'Arcanine', pokemon2:'Pikachu', pokemon3:'Raichu' },
    { id: 3, nome: 'Kubo', pokemon1: 'Bellsprout', pokemon2:'Pichu', pokemon3:'Gengar' },
  ];
  
  const getTrainers = () => trainers;
  const getTrainersById = (id) => trainers.find(p => p.id === parseInt(id));
  const createTrainer = (nome, pokemon1, pokemon2, pokemon3) => trainers.push({ id: trainers.length + 1, nome, pokemon1, pokemon2, pokemon3 });
  
  module.exports = { getTrainers, getTrainersById, createTrainer };
  