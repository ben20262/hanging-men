import React, {Component} from 'react'

class Form extends Component {

    state = {
        words: '',
        number: 26,
        hints: ''
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        event.target.className = 'intangible'
        this.props.addWords(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <p>Enter the words you would like to play with seperated with a comma.</p>
                <textarea name='words' onChange={this.handleChange} />
                <p>Enter number of extra letters.</p>
                <input name='number' onChange={this.handleChange}></input>
                <p>Enter hints.</p>
                <textarea name='hints' onChange={this.handleChange} />
                <br />
                <input type='submit' />
            </form>
        )
    }
}

export default Form