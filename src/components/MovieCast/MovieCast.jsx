import css from './MovieCast.module.css'
import { fetchMoviesCredits } from "../../MovieService";
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';


export default function MovieCast (){
    const {movieId} = useParams();
    const [casts, setCast] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getCast(){
            try{
                setIsLoader(true);  
                setError(false);
                const data = await fetchMoviesCredits(movieId);
                setCast(data);
                console.log(casts)

            } catch{
                setError(true);
                
            } finally{
                setIsLoader(false);
            }

    }
    getCast();
}, [movieId]);
    return (
        <>
        {isLoader && <b>Loading users...</b>}
        {error && <b>Whoops there was an error, plz reload the page...</b>}
      <h3 className={css.header}>Movie Casts</h3>
      {casts.length > 0 &&
        casts.map((cast) => (
          <div key={cast.id} className={css.wrap}>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
            />
          <h3 className={css.title}>{cast.name}</h3>
        </div>
        ))}
        </>
    )
}