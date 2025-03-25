import { useState, useEffect, useRef } from "react"; 
import { useParams, NavLink, Outlet, useLocation, Link } from "react-router";
import { fetchMoviesById } from "../../MovieService";
import Movie from "../../components/Movie/Movie";
import css from './MovieDetailsPage.module.css';


export default function MovieDetailPage (){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const backLinkHref = useRef(location.state ?? "/movies");
    const prevHref = useRef(null);
    const backLink = backLinkHref.current;


    useEffect(() => {
        prevHref.current = backLink;
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
}, [movieId, backLink]);

    return (
        <>
        {!isLoader && (
        <Link to={backLinkHref.current} className={css.link}>
          Go Back
        </Link>
      )}
         {isLoader && <div>Loading trending movies...</div>}
         {error && <div>Whoops, there are no such movies </div>}
        {movie && <Movie movie={movie}/>}
        <div className={css.wrap}>
            <span>Idditional Information</span>
            <ul>
                <li>
                    <NavLink to="cast" className={css.link}> Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews" className={css.link}> Reviews</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
        </>
    
    )
    
}