import React, { Component } from 'react'

class ClickCounterTwo extends Component {

    

    render() {
        const {count , incCount} = this.props
        return(
            <button onClick={incCount}>Clicked {count} times </button>
        )
    }
}

export default ClickCounterTwo