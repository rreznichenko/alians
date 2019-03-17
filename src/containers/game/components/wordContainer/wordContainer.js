import React, {Component} from 'react';
import {connect} from 'react-redux'

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
            this.props.removeScore(this.props.currentPlayer.id);
        }
        this.chooseWord();
    }

    right = () => {
        if(this.props.currentPlayer.id) {
            this.props.addScore(this.props.currentPlayer.id);
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

const mapStateToProps = state => {
    return {
        currentPlayer: state.currentPlayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: (id) => {
          return  dispatch({type:"ADD_SCORE", id:id})
        },
        removeScore: (id) => {
          return  dispatch({type: "REMOVE_SCORE", id:id})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordContainer)
