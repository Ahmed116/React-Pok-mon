import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'
import Pokemon from './Pokemon'
import './style.css'

const App = () => {
  return (
    <div className="ui container">
        <SearchBar />
      <Pokemon />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
