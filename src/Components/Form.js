import React , {Component} from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Username:'',
            comment:'',
            topic:'react'
        }
    }

    handleUsernameChange=(event) => {
        this.setState({
            Username:event.target.value
        }) 
    }

    handleCommentChange = (event) => {
        this.setState({
            comment:event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.Username}  ${this.state.comment}  ${this.state.topic}`)
        // event.preventDefault()
    }

    render() {
        const {Username,comment,topic} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <lable>Username</lable>
                    <input type="text" value={Username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <lable>Comments</lable>
                    <textarea value={comment} onChange={this.handleCommentChange} ></textarea>
                </div>
                <div>
                    <lable>Topic</lable>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form