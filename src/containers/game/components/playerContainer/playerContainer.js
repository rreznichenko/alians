import React, {Component} from 'react';
import {connect} from 'react-redux';

import Player from './components/player/';

class PlayerContainer extends Component {
    render() {
        console.log(this.props)
        const players = this.props.players.map(item => {
            return <Player key={item.id} onChooseHandler={this.props.choosePlayer} onAddHandler={this.props.addScore} onRemoveHandler={this.props.removeScore} player={item} />
        })
        return (
            <div>
                <p>Game</p>
                {players}        
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: (id) => {
          return  dispatch({type:"ADD_SCORE", id:id})
        },
        removeScore: (id) => {
          return  dispatch({type: "REMOVE_SCORE", id:id})
        },
        choosePlayer: (id) => {
          return  dispatch({type: "CHOOSE_PLAYER", id:id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)