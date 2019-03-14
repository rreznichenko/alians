import React, {Component} from 'react'
import Navigation from './navigation'

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
                <h1>header</h1>
                <Navigation config={this.state.navigationPaths} />
            </div>
        ) 
    }
}

