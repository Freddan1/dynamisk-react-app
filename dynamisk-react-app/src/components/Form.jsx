import React from 'react'

const Form = ({value, onChange, onClick, onFilter}) => {
  const types = [
    "All",
    "Movie",
    "Series",
    "Game"
  ];

  return (
    <div>
        <form>
          <input type="text" onChange ={onChange} value ={value} />
          <button onClick={onClick}>Search</button>
          <select onChange={onFilter}>
            {types.map((type) =>(
              <option key={type}>{type}</option>
            ))}
          </select>
        </form>
    </div>
  )
}

export default Form