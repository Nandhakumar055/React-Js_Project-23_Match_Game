import './index.css'

const TabList = props => {
  const {tabsListDetail, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabsListDetail

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'isActiveTab' : ''

  return (
    <div className="tab-list-item">
      <button className="tab-button" type="button" onClick={onClickTabItem}>
        <p className={`tab-item ${activeTabClassName}`}>{displayText}</p>
      </button>
    </div>
  )
}

export default TabList
