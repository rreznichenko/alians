import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Navigation from './components/navigation/'
import './header.css'

export default class Header extends Component {
    state = {
        navigationPaths: [
            {
                linkName: "Home",
                route: "/"
            },
            {
                linkName: "Game",
                route: "/game"
            },
            {
                linkName: "Config",
                route: "/config"
            }
        ]
    }

    render() {
        return ( 
            <div className="header">
                <h1><Link to="/">Alians</Link></h1>
                <Navigation config={this.state.navigationPaths} />
            </div>
        ) 
    }
}

