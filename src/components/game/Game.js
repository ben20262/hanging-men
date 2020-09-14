import React, {Component} from 'react'
import Letters from './Letters'
import Hang from '../../images/Hang.png'
import Hang_1 from '../../images/Hang_1.png'
import Hang_2 from '../../images/Hang_2.png'
import Hang_3 from '../../images/Hang_3.png'
import Hang_4 from '../../images/Hang_4.png'
import Hang_5 from '../../images/Hang_5.png'
import Hang_6 from '../../images/Hang_6.png'
import Hang_7 from '../../images/Hang_7.png'

const hangArray = [Hang, Hang_1, Hang_2, Hang_3, Hang_4, Hang_5, Hang_6, Hang_7]

class Game extends Component {

    state = {
        hiddenWord: this.props.word.split('').map(() => '_ '),
        word: this.props.word.split(''),
        count: 0,
        win: false
    }

    handleClick = (event, letter) => {
        event.target.className = 'hidden'
        let countBool = true
        let array = this.state.word.map((wordLetter, index) => {
            if (this.state.hiddenWord[index] === '_ ' && wordLetter.toLowerCase() === letter.toLowerCase()) {
                countBool = false
                return letter
            } else {
                return this.state.hiddenWord[index]
            }
        })
        let count = this.state.count
        count = (countBool) ? count + 1 : count
        let win = false

        if (count === 7) {
            event.target.parentElement.className = 'hidden'
            array = this.state.word
        } else if (this.state.word === array) {
            win = true
        }

        this.setState({
            count,
            win,
            hiddenWord: array
        })
    }

    render() {
        let hangImage
        if (this.state.count === 7) {
            hangImage = <>
                <img src={hangArray[this.state.count]} alt='Man' ></img>
                <h3>You Lose</h3>
            </>
        } else if (this.state.win) {
            hangImage = <>
                <img src={hangArray[this.state.count]} alt='Man' ></img>
                <h3>You Win</h3>
            </>
        } else {
            hangImage = <img src={hangArray[this.state.count]} alt='Man' ></img>
        }
        return (
            <div>
                {hangImage}
                <h2>{this.state.hiddenWord}</h2>
                <Letters handleClick={this.handleClick} />
            </div>
        )
    }

}

export default Game