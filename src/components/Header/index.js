import './index.css'

const Header = props => {
  const {imagesList} = props
  return (
    <div className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="website-logo"
        alt="website logo"
      />
      <div className="score-time-container">
        <p className="score-style">
          Score: <span className="score-value">0</span>
        </p>
        <div className="stopwatch-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer"
            alt="timer"
          />
          <p className="score-value">{`${60} Sec`}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
