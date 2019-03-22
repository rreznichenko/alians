import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../store/actions'

import './config.css';

class Config extends Component {
    state = {
        name: ''
    }

    addPlayer() {
        if(this.state.name) {
            this.props.addPlayer(this.state.name);
        }
    }

    render() {
        const players = this.props.players.map(item => {
            return <p key={item.id}>Player name: {item.name}</p>;
        })

        return (
            <div className="config-screen">
                <h1>Config</h1>
                <div>
                    <input className="inpt inpt__focused" type="text" value={this.state.name} onChange={(event) => {
                        const stateName = {
                            ...this.state,
                            name: event.target.value
                        }
                        this.setState(stateName);
                    }} />
                    <button className="btn btn__hover btn__focused" onClick={() => {
                        this.addPlayer();
                        this.setState({
                            ...this.state,
                            name: ''
                        });
                    }}>Add Player</button>
                </div>
                
                {players}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: (name) => {
            return dispatch({
                type: actions.ADD_PLAYER, 
                id: new Date(), 
                name:name, 
                playerScore: 0
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Config);