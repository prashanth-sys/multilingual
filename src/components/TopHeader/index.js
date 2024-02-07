import './index.css'

const TopHeader = props => {
  const {languageGreetingsList} = props

  const onClickButton = id => {
    console.log(id)
  }

  return (
    <div className="heading-container">
      <h1 className="main-heading">Multilingual Language</h1>
      <div className="button-container">
        {languageGreetingsList.map(eachItem => (
          <button
            className="button"
            key={eachItem.id}
            type="button"
            onClick={onClickButton}
          >
            {eachItem.buttonText}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TopHeader
