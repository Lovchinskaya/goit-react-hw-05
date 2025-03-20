import { useState, useEffect } from "react"
import { fetchMovies } from "../../MovieService";
import  MovieList  from "../../components/MovieList/MovieList"


export default function MoviesPage(){
    const [movies, setMovie] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        async function getMovies(){
            try {   
                setIsLoader(true);  
                setError(false);
                const data = await fetchMovies();
                setMovie(data);
             
            }
            catch{
                console.log('hello');
                setError(true);

            } finally {
                setIsLoader(false);
            }
        }
        getMovies();
    }, [])
    return (
        <>
        <h1>Trending today</h1>
        {isLoader && <div>Loading trending movies...</div>}
        {error && <div>Whoops, there are no such movies </div>}
        {movies.length > 0 && <MovieList movies= {movies}/>}
        </>
        
    )
} 