import { Component } from 'react'

import './App.css'

import CharactersContainer from './CharactersContainer'

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    fetch('https://star-wars-cafe-api.herokuapp.com/characters')
      .then(response => response.json())
      .then(characters => this.setState({ characters }))
  }

  render() {
    return (
      <div className="App">
        <CharactersContainer
          characters={ this.state.characters }
        />
      </div>
    );
  }
}

export default App;
