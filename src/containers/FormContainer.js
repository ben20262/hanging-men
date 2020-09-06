import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addWords } from '../actions/index'
import Form from '../components/form/Form'

class FormContainer extends Component {

    render() {
        return (
        <div id='FormContainer'>
            <Form addWords={this.props.addWords}/>
        </div>
        )
    }

}

const mapStateToProps = () => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addWords: words => dispatch(addWords(words))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)