import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions';

import PlayerContainer from './components/playerContainer/'
import WordConainer from './components/wordContainer/';
import Timer from './components/timer/';


class Game extends Component {
    render() {
        return (<div>
                  <PlayerContainer
                  players={this.props.players} 
                  onChooseHandler={this.props.choosePlayer}
                  onAddHandler={this.props.addScore} 
                  onRemoveHandler={this.props.removeScore}
                  />
                  <WordConainer
                  currentPlayer={this.props.currentPlayer}
                  onAddHandler={this.props.addScore} 
                  onRemoveHandler={this.props.removeScore}
                  />
                  <Timer />
            </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        currentPlayer: state.currentPlayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: (id) => {
          return  dispatch({type: actions.ADD_SCORE, id:id})
        },
        removeScore: (id) => {
          return  dispatch({type: actions.REMOVE_SCORE, id:id})
        },
        choosePlayer: (id) => {
          return  dispatch({type: actions.CHOOSE_PLAYER, id:id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)