import React, {Component} from 'react';

class Player extends Component {
    render() {
        return (
            <div>
                <input type="radio" name="player" value={this.props.player.id} onChange={() => {this.props.onChooseHandler(this.props.player.id)}} /> 
                <p>name:{this.props.player.name}</p>
                <button onClick={() => {this.props.onRemoveHandler(this.props.player.id)}}> - </button>
                <span>{this.props.player.score}</span>
                <button onClick={() => {this.props.onAddHandler(this.props.player.id)}}> + </button>                
            </div>
        )
    }
}

export default Player