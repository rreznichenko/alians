import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addScore, removeScore, choosePlayer, selectGroup} from '../../store/actions';

import PlayerContainer from './components/playerContainer/'
import WordConainer from './components/wordContainer/';
import Timer from './components/timer/';
import GroupContainer from './components/groupContainer'


class Game extends Component {
    render() {
        return (<div>
                  {/* <PlayerContainer
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
                  <Timer /> */}
                  <GroupContainer 
                    groupId={this.props.selectedGroupId}
                    onChangeGroup={this.props.changeGroup}
                  />
            </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        currentPlayer: state.currentPlayer,
        selectedGroupId: state.selectedGroupId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: (id) => {
          return  dispatch(addScore(id))
        },
        removeScore: (id) => {
          return  dispatch(removeScore(id))
        },
        choosePlayer: (id) => {
          return  dispatch(choosePlayer(id))
        },
        changeGroup: (id) => {
          return  dispatch(selectGroup(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)