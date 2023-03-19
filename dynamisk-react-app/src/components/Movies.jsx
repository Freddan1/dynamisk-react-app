import React from 'react'

const Movies = ({post}) => {
  const errorMessage = "LIST IS EMPTY"
  return (
    <div className='movieContainer'>
      {
        post.length
            ? post.map((post) => 
              <ul key ={post.imdbID}> 
                <h2>{post.Title}</h2>
                <h3>{post.Year}</h3>
                <p>Type:{post.Type}</p>
                <img src={post.Poster} alt="img"/>
              </ul>)
        : errorMessage
      }
    </div>
  )
}

export default Movies