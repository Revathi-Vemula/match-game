import './index.css'

const TabItem = props => {
  const {tabDetails, onClickDisplayTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const displayTab = () => {
    onClickDisplayTab(tabId)
  }

  const selectedTabClassName = isActive ? 'btn-tab-selected' : ''
  return (
    <li className="tab-item">
      <button
        className={`btn-tab ${selectedTabClassName}`}
        type="button"
        onClick={displayTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
