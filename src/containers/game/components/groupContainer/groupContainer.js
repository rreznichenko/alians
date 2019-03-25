import React, {Component} from 'react';

import words from './../../../../wordsData/words.json'

import './groupContainer.css';

class GroupContainer extends Component {
    state = {
        groups: [],
        selectedGroup:''
    }

    componentDidMount() {
        const groups = []
        words.map(item => {
            const groupObj = {
                id: item.id,
                group: item.group,
                image: item.image
            }
            groups.push(groupObj)    
        })
        this.setState({
            groups: groups,
            selectedGroup: this.props.groupId
        })
    }

    getImagePath = (id) => {
        const selectedGroup = this.state.groups.find((el) => {
            return el.id == this.state.selectedGroup
        })
        if (selectedGroup) {
            return selectedGroup.image
        };

        return false
    }

    setGroup = (event) => {
        this.props.onChangeGroup(event.target.value);
        this.setState({
            selectedGroup: event.target.value
        });
    }
    
    render() {
        let options = this.state.groups.map(group => {
            return  <option key={Math.random()} value={group.id}>{group.group}</option>
        }) 

        let img = this.getImagePath() ? <img className="group-container__img" src={this.getImagePath()} alt={this.getImagePath()} /> : ''
    return (
        <div className="group-container">
            <select className="group-container__select" value={this.state.selectedGroup} onChange={(event) => {this.setGroup(event)}}>
                {options}
            </select>
            {img}
        </div>
        )
    }
}

export default GroupContainer