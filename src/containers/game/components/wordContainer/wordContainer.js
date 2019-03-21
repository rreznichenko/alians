import React, {Component} from 'react';

import words from './../../../../wordsData/words.json'

class WordContainer extends Component {
    state = {
        words,
        currentWord: ''
    }

    chooseWord = () => {
        const randomIndex = parseInt(Math.random() * this.state.words[0].data.length);
        this.setState({
            currentWord: this.state.words[0].data[randomIndex]
        })
    }

    componentWillMount() {
        this.chooseWord();
    }

    pass = () => {
        if(this.props.currentPlayer.id) {
            this.props.onRemoveHandler(this.props.currentPlayer.id);
        }
        this.chooseWord();
    }

    right = () => {
        if(this.props.currentPlayer.id) {
            this.props.onAddHandler(this.props.currentPlayer.id);
        }
        this.chooseWord();
    }

    render() {
        return (<div>
            {this.state.currentWord}
            <button onClick={this.pass}>pass</button>
            <button onClick={this.right}>right!</button>
        </div>)
    }
}


export default WordContainer;
