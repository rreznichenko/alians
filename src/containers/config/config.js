import React, {Component} from "react";
import {connect} from 'react-redux';

class Config extends Component {
    state = {
        name: ''
    }

    render() {
        const players = this.props.players.map(item => {
            return <p key={item.id}>Player name: {item.name}</p>;
        })

        return (
            <div>
                <p>Config</p>

                <input type="text" value={this.state.name} onChange={(event) => {
                    const stateName = {
                        ...this.state,
                        name: event.target.value
                    }
                    this.setState(stateName);
                }} />
                <button onClick={() => {
                    this.props.addPlayer(this.state.name);
                    this.setState({
                        ...this.state,
                        name: ''
                    });
                }}>Add Player</button>
                
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
                type: 'ADD_PLAYER', 
                id: new Date(), 
                name:name, 
                playerScore: 0
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Config);