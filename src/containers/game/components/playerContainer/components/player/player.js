import React, {Component} from 'react';
import './player.css'

class Player extends Component {
    render() {
        return (
            <div className="player">
                <input className="player__radio" type="radio" name="player" value={this.props.player.id} onChange={() => {this.props.onChooseHandler(this.props.player.id)}} /> 
                <p className="player__name">name:{this.props.player.name}</p>
                <button className="btn player_btn" onClick={() => {this.props.onRemoveHandler(this.props.player.id)}}> - </button>
                <span>{this.props.player.score}</span>
                <button onClick={() => {this.props.onAddHandler(this.props.player.id)}}> + </button>                
            </div>
        )
    }
}

export default Player