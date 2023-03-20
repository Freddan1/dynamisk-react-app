import React from 'react'

const Form = ({value, onChange, onClick, onFilter}) => {

  return (
    <div>
        <form>
          <input type="text" placeholder='Search' onChange ={onChange} value ={value} />
          {/* <button onClick={onClick}>Search</button> */}
          <select onChange={onFilter}>
            <option value="">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="game">Games</option>
          </select>
        </form>
    </div>
  )
};

export default Form