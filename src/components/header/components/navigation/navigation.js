import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './navigation.css'

export default class Navigation extends Component {

    render() {
        const Li = this.props.config.map(item => {
            return <li className="navigation__li" key={Math.random()}><Link to={item.route}>{item.linkName}</Link></li>
        })
        return (
            <ul className="navigation">
                {Li}
            </ul>

        );
    }   
}