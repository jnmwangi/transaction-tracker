import React, { useState } from 'react'

export const Search = ({onSearch}) => {
  const [term, setTerm] = useState("");
  function handleSearch(evt){
    setTerm(evt.target.value);
    onSearch(evt.target.value)
  }
  return (
    <div className='form-group'>
        <input type="text" name="searchTerm" className="form-control" value={term} onChange={handleSearch} placeholder='Search Transaction' />
    </div>
  )
}
