import React, {Component} from 'react'

class Form extends Component {

    constructor() {
        state = {
            words: ''
        }
    }

    handleChange = event => {
        this.setState(() => {
            words: event.target.value
        })
    }

    handleSubmit = () => {

    }

    render() {
        <form>
            <p>Enter the words you would like to play with seperated with a comma.</p>
            <input type='text' onChange={this.handleChange}></input>
            <input type='submit' onSubmit={this.handleSubmit}></input>
        </form>
    }
}

export default Form