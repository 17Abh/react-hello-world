import React, { Component } from 'react'
import WithCounter from './WithCounter'
import UptatedComponent from './WithCounter'

class ClickCounter extends Component {

    

    render(){
        return(
            <div>
                <button onClick={this.props.incCount}>{this.props.name} Clicked {this.props.count} times</button>
                
            </div>
        )
    } 
}

export default WithCounter(ClickCounter,4)