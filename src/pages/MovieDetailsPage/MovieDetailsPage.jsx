import { useState, useEffect } from "react"; 
import { useParams, NavLink, Outlet } from "react-router";
import { fetchMoviesById } from "../../MovieService";
import Movie from "../../components/Movie/Movie";


export default function MovieDetailPage (){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getMovie(){
            try{
                setIsLoader(true);  
                setError(false);
                const data = await fetchMoviesById(movieId);
                setMovie(data);

            } catch{
                setError(true);
            } finally{
                setIsLoader(false);
            }

    }
    getMovie();
}, [movieId]);

    return (
        <>
         {isLoader && <div>Loading trending movies...</div>}
         {error && <div>Whoops, there are no such movies </div>}
        {movie && <Movie movie={movie}/>}
        <div>
            <span>Idditional Information</span>
            <ul>
                <li>
                    <NavLink to="cast"> Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews" > Reviews</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
        </>
    
    )
    
}