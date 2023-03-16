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
            } else{
                console.log(post.Error)
            }

        } catch (error){
            console.log(error)
        }
    }

    useEffect (() =>{
        fetchMovies();
        console.log('runs at the beginning (componentDidMount) ')
    },[])

    function handleChange(e){
        setSearch(e.target.value)
        placeHolder=search
        fetchMovies();

    }
    
    function onSubmit(e){
        e.preventDefault()
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