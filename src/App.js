import {Component} from 'react'
import './App.css'
import TopHeader from './components/TopHeader'
import ContentText from './components/ContentText'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeButton: languageGreetingsList[0].buttonText,
  }

  changeLanguage = buttonValue => {
    this.setState({activeButton: buttonValue})
  }

  getFilteredData = () => {
    const {activeButton} = this.state
    const filteredData = languageGreetingsList.filter(
      eachData => eachData.buttonText === activeButton,
    )
    return filteredData
  }

  render() {
    const {activeButton} = this.state
    const filteredData = this.getFilteredData()
    return (
      <div>
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(item => (
            <li key={item.id}>
              <TopHeader
                languageGreetingsLists={item}
                activeButton={activeButton}
                changeLanguage={this.changeLanguage}
              />
            </li>
          ))}
        </ul>
        <ul>
          {filteredData.map(item => (
            <li key={item.id}>
              <ContentText languageDetails={item} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
