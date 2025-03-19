import { useState, useEffect } from "react"
import { fetchMovies } from "../../MovieService";


export default function MoviesPage(){
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getMovies(){
            try {
                const data = await fetchMovies();
                setMovie(data);
            }
            catch{}
        }
        getMovies();
    }, [])
    return (
        <div>Movies</div>
    )
} 