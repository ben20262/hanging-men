import React, { Component } from 'react'
import { connect } from 'react-redux'
import Games from '../components/game/Games'

class GameContainer extends Component {

    render() {
        return (
            <div id='Game-Container'>
                <Games words={this.props.words} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        words: state.words
    }
}

export default connect(mapStateToProps)(GameContainer)