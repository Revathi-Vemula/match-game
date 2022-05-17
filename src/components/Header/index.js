import './index.css'

const Header = props => {
  const {score, time} = props
  return (
    <ul className="nav-bar">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          className="website-logo"
          alt="website logo"
        />
      </li>
      <li className="score-time-container">
        <p className="score-style">
          Score: <span className="score-value">{score}</span>
        </p>
        <div className="stopwatch-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer"
            alt="timer"
          />
          <p className="score-value">{`${time} Sec`}</p>
        </div>
      </li>
    </ul>
  )
}

export default Header
