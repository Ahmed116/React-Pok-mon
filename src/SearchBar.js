import React from 'react'
import './style.css'

const SearchBar = () => {
  return (
    <div className="main" style={{marginTop:'5px'}}>
      <div className='ui icon input search-input'>
        <input type='text' placeholder='Search By Name' />
        <i className='inverted circular search link icon'></i>
      </div>
    </div>
  )
}

export default SearchBar
