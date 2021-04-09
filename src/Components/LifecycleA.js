import React, {Component} from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'dragon'
        };
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA static derivestatefromprops')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentdidmount')
    }

    shouldComponentUpdate(){
        console.log('lifecycleA should component update')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleA get snapshot befour update')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleA component did update')
    }

    changeState = () => {
        this.setState({
            name:'zeref'
        })
    }

    render() {
        console.log('LifecycleA render')
        return(
            <div>
                lifecycleA
                <button onClick={this.changeState} >change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA