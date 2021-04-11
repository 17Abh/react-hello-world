import React from 'react'

const WithCounter = (WrappedComponent, incrementNum) => {
    class NewComponent extends React.Component {

        constructor(props){
            super(props)
    
            this.state={
                count:0
            }
        }
    
        incCount = () => {
            this.setState(prevState => {
                return {
                    count:prevState.count + incrementNum
                }
            })
        }

        render() {
            return <WrappedComponent  count={this.state.count} incCount={this.incCount} {...this.props} />
        }
    }

    return NewComponent
}

export default WithCounter