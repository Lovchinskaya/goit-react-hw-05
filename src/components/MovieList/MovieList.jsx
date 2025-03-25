import { Link} from "react-router";
import { useLocation } from "react-router";
import css from "./MovieList.module.css"


export default function MovieList ( { movies }){
    const location = useLocation();
    return (
            <ul className={css.container}>
                {movies.map((movie) => {
                    
                    return (
                        <li key={movie.id} className={css.item}>
                            <Link to={`/movies/${movie.id}`} state={location}>{movie.title}</Link>
                        </li>

                    )
                }
                )}
                
            </ul>
    )
}