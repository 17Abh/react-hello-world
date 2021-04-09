import React, {Component} from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'dragon'
        };
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleB static derivestatefromprops')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentdidmount')
    }

    shouldComponentUpdate(){
        console.log('lifecycleB should component update')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleB get snapshot befour update')
        return null

    }

    componentDidUpdate(){
        console.log('lifecycleB component did update')
    }

    render() {
        console.log('LifecycleB render')
        return(
            <div>
                lifecycleB
            </div>
        )
    }
}

export default LifecycleB