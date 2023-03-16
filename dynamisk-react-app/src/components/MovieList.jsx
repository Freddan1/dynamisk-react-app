import React from 'react'

const MovieList = ({post}) => {
  return (
    <div>
        {
            post.length
                ? post.map((post) => <ul key ={post.imdbID}> 
                <h2>{post.Title}</h2>
                <img src={post.Poster} alt="img"/>
                </ul>)
            : "List is empty"
        }
    </div>
  )
}

export default MovieList