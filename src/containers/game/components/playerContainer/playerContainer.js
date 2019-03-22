import React, { Component } from 'react';


import Player from './components/player/';

class PlayerContainer extends Component {
    render() {
        console.log(this.props.players)
        const players = this.props.players.map(item => {
            return <Player 
                        key={item.id} 
                        onChooseHandler={this.props.onChooseHandler} 
                        onAddHandler={this.props.onAddHandler} 
                        onRemoveHandler={this.props.onRemoveHandler} 
                        player={item} />
        })
        return (
            <div>
                {players}
            </div>
        );
    }
}



export default PlayerContainer