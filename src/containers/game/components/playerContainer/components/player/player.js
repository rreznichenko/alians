import React, {Component} from 'react';
import './player.css'

class Player extends Component {
    render() {
        return (
            <div className="player">
                <div>
                    <input className="player__radio" type="radio" id={this.props.player.id} name="player" value={this.props.player.id} onChange={() => {this.props.onChooseHandler(this.props.player.id)}} /> 
                    <label htmlFor={this.props.player.id} className="player__name">name:{this.props.player.name}</label>
                </div>
                <div>
                    <button className="btn player_btn" onClick={() => {this.props.onRemoveHandler(this.props.player.id)}}> - </button>
                    <span className="player__score">{this.props.player.score}</span>
                    <button className="btn player_btn" onClick={() => {this.props.onAddHandler(this.props.player.id)}}> + </button>                
                </div>
            </div>
        )
    }
}

export default Player