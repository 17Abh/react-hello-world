import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props){
        super(props)

        this.state ={
            name: 'dragon'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'dragon'
            })
        },2000 )
    }


    render() {
        return (
            <div>
                Parent Component
                {/* <PureComp name={this.state.name}  />
                <RegComp name={this.state.name}  /> */}
                <MemoComp name={this.state.name } />
            </div>
        )
    }
}

export default ParentComp