import React, { Component } from 'react';

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
        // const {state1, stete2} = this.state
        return <h1>
            Welcome {name} a.k.a. {heroName} {this.props.children}
             </h1>
        
    }
};

export default Welcome;