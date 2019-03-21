import React, {Component} from 'react';

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
    return <div></div>
    }
}

export default GroupContainer