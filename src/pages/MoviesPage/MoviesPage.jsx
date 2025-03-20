import { useState, useEffect } from "react"
import { fetchMovies } from "../../MovieService";
import  MovieList  from "../../components/MovieList/MovieList"


export default function MoviesPage(){
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        async function getMovies(){
            try {     
                const data = await fetchMovies();
                setMovie(data);
                
            }
            catch{
                console.log('hello');

            }
        }
        getMovies();
    }, [])
    return (
        <>
        <div>Movies</div>
        {movies.length > 0 && <MovieList movies= {movies}/>}
        </>
        
    )
} 