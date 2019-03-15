import React, {Component} from 'react';
import PlayerContainer from './components/playerContainer/'
import WordConainer from './components/wordContainer/';
import Timer from './components/timer/';


export default class Game extends Component {
    render() {
        return (<div>
            <PlayerContainer />
            <WordConainer />
            <Timer />>
            </div>
            )
    }
}