import actions from './actions';
const initialState = {
    players: [{
        id: 1,
        name: "test",
        score: 0
    }],
    currentPlayer: 0
}

const reducer = (state = initialState, action) => {
    console.log(action)
    if (action.type === actions.ADD_PLAYER) {
        const newPlayerArr = [...state.players]

        newPlayerArr.push({
            id: action.id,
            name: action.name,
            score: action.playerScore
        })
        return {
            ...state,
            players: newPlayerArr
        }
    }

    if (action.type === actions.ADD_SCORE) {
        let player = state.players.filter(player => player.id === action.id)
        const players = [...state.players];
        player = player[0];
        if (player) {
            player.score += 1;
            const playerIndex = players.findIndex(currentPlayer => currentPlayer.id === action.id)
            players[playerIndex] = player;
            return {
                ...state,
                players: players
            }
        }
    }

    if (action.type === actions.REMOVE_SCORE) {
        let player = state.players.filter(player => player.id === action.id)
        const players = [...state.players];
        player = player[0];
        if (player && player.score !== 0) {
            player.score -= 1;
            const playerIndex = players.findIndex(currentPlayer => currentPlayer.id === action.id)
            console.log(playerIndex)
            players[playerIndex] = player;
            return {
                ...state,
                players: players
            }
        }
    }

    if (action.type === actions.CHOOSE_PLAYER) {
        let player = state.players.find(currentPlayer => currentPlayer.id === action.id);
        return {
            ...state,
            currentPlayer: player
        }
    }


    return state;
}

export default reducer;