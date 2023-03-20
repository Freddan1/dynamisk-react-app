import React from 'react'
import styles from './Movies.css'

const Movies = ({post}) => {
  const errorMessage = "LIST IS EMPTY"
  
  return (
    <div className='movieContainer'>
      {
        post.length
            ? post.map((post) => 
              <ul key ={post.imdbID} className="movieItem"> 
                <h2>{post.Title}</h2>
                <h3>{post.Year}</h3>
                <p>Type: {post.Type.charAt(0).toUpperCase() + post.Type.slice(1)}</p>
                <img src={post.Poster} alt="img"/>
              </ul>)
        : errorMessage
      }
    </div>
  )
}
export default Movies