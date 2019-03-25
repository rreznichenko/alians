const actions = {
  ADD_PLAYER:"ADD_PLAYER",
  ADD_SCORE: "ADD_SCORE",
  REMOVE_SCORE: "REMOVE_SCORE",
  CHOOSE_PLAYER: "CHOOSE_PLAYER",
  SELECT_GROUP: "SELECT_GROUP"
};

function addPlayer(name) {
  return {
    type: actions.ADD_PLAYER, 
    id: new Date(), 
    name:name, 
    playerScore: 0
  }
}

function addScore(id) {
  return {type: actions.ADD_SCORE, id:id}
}

function removeScore(id) {
  return  {type: actions.REMOVE_SCORE, id:id}
}

function choosePlayer(id) {
  return {type: actions.CHOOSE_PLAYER, id:id}
}

function selectGroup(id) {
  return {type: actions.SELECT_GROUP, id:id}
}

module.exports.addPlayer = addPlayer;
module.exports.addScore = addScore;
module.exports.removeScore = removeScore;
module.exports.choosePlayer = choosePlayer;
module.exports.selectGroup = selectGroup;
module.exports.actions = actions;