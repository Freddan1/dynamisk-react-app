import React, {useEffect, useState} from 'react'
import Form from './Form';
import MovieList from './MovieList';


const MovieApi = () => {
    var placeHolder = "batman"
    const [search, setSearch] = useState ("")
    const [post, setPost] = useState([]);
    
    const fetchMovies = async () => {
        try {
            const response = await fetch('http://www.omdbapi.com/?apikey=57a921d4&s='+placeHolder);
            const post = await response.json();
            if(post.Response =="True"){
                setPost(post.Search)
                console.log(setPost)
            } else{
                console.log(post.Error)
            }

        } catch (error){
            console.log(error)
        }
    }

    useEffect (() =>{
        fetchMovies();
    },[])

    function handleChange(e){
        e.preventDefault()
        setSearch(e.target.value)
        placeHolder=search
        fetchMovies();

    }
    
    function onSubmit(e){
        e.preventDefault()
        setSearch(e.target.value)
        placeHolder=search
        fetchMovies();
    }

  return (
    <div>
        <Form value ={search} onClick={onSubmit} onChange={handleChange} />
        <MovieList post={post} />
    </div>
  )
}

export default MovieApi