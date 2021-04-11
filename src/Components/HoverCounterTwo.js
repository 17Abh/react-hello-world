import React, { Component } from 'react'




class HoverCounterTwo extends Component {

    

    render(){
        const {count , incCount} = this.props
        return(
            
            <div>
                <h1 onMouseOver={incCount}> hovered {count} times</h1>
            </div>
        )
    } 
}

export default HoverCounterTwo