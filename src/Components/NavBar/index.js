import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {liveScore, runTimer} = this.props
    return (
      <>
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <div className="score-timer-items-container">
          <div className="score-item">
            <p className="score-text">Score: </p>
            <p className="score-number-text">{liveScore}</p>
          </div>
          <div className="timer-item">
            <img
              className="timer-icon"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="timer-running-text">{runTimer}</p>
            <p className="timer-sec-text">sec</p>
          </div>
        </div>
      </>
    )
  }
}

export default NavBar
