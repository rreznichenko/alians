import React, {Component} from 'react';
import PlayerContainer from './../../components/playerContainer'
import WordConainer from './../../components/wordContainer';


export default class Game extends Component {
    render() {
        return (<div>
            <PlayerContainer />
            <WordConainer />
            </div>
            )
    }
}