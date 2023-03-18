import React, {useState, useEffect} from 'react'
import Form from './Form';
import MovieList from './MovieList';


const MovieApi = () => {
    var placeHolder = "batman"
    const [search, setSearch] = useState ("")
    const [post, setPost] = useState([]);
    const [errorMessage, setErrorMessage] = useState ("");
    const [selectedType, setSelectedType] = useState("");
    
    const fetchMovies = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=57a921d4&s=${placeHolder}&type=${selectedType}`);
            const post = await response.json();
            if(post.Response =="True"){
                setPost(post.Search);
                setErrorMessage("");
                console.log(post.Search)

            } else{
                setPost[""];
                setErrorMessage(post.Error)
            }

        } catch (error){
            console.log(error)
            setPost([])
            setErrorMessage("An error occurred while fetching movies.")
        }
    }

    useEffect (() =>{
        fetchMovies();
    },[])

    function handleChange(e){
        e.preventDefault()
        placeHolder=search
        console.log(e.target.value);
        setSearch(e.target.value);
        fetchMovies()
    }
    
    function onSubmit(e){
        e.preventDefault()
        setSearch(e.target.value)
        fetchMovies();
    };

    function handleFilter(e){
        setSelectedType(e.target.value);
    }

  return (
    <div>
        <Form value ={search} onClick={onSubmit} onChange={handleChange} onFilter={handleFilter} />
        {errorMessage ?(
            <p>
                {errorMessage}
            </p>
        ) :(
            <MovieList post={post} />
        )}
    </div>
  )
}

export default MovieApi