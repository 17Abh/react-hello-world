import React, { Component } from 'react'
import WithCounter from './WithCounter'



class HoverCounter extends Component {

    

    render(){
        return(
            <div>
                <h1 onMouseOver={this.props.incCount}>{this.props.name} hovered {this.props.count} times</h1>
            </div>
        )
    } 
}

export default WithCounter(HoverCounter) 