import './index.css'

const TopHeader = props => {
  const {languageGreetingsLists, changeLanguage} = props

  const onClickButton = () => {
    changeLanguage(languageGreetingsLists.buttonText)
  }

  return (
    <>
      <div className="button-container">
        <button className="button" type="button" onClick={onClickButton}>
          {languageGreetingsLists.buttonText}
        </button>
      </div>
    </>
  )
}

export default TopHeader
