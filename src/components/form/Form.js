import React, {Component} from 'react'

class Form extends Component {

    state = {
        words: []
    }

    handleChange = event => {
        this.setState({
            words: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.words)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <p>Enter the words you would like to play with seperated with a comma.</p>
                <textarea onChange={this.handleChange} />
                <br />
                <input type='submit' />
            </form>
        )
    }
}

export default Form