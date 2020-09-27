import React, { Component } from 'react'
import { connect } from 'react-redux'
import Games from '../components/game/Games'

class GameContainer extends Component {

    render() {
        return (
            <div id='Game-Container'>
                <Games words={this.props.words} number={this.props.number}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        words: state.words,
        number: state.number
    }
}

export default connect(mapStateToProps)(GameContainer)