import React, {Component} from 'react';
import {connect} from 'react-redux';

import words from './../../../../wordsData/words.json'


class GroupContainer extends Component {
    state = {
        groups: [],
        selectedGroup: ''
    }

    componentWillMount() {
        const groups = []
        words.map(item => {
            groups.push(item.group)    
        })
        this.setState({
            groups: groups
        })
    }

    render() {

    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer)