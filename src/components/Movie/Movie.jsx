import css from '../Movie/Movie.module.css'
import { FaStar } from "react-icons/fa";

export default function Movie ({movie}) {
    return (

        <div className={css.container}>
      <div className={css.wrap}>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        />
      </div>
      
      <div className={css.listFlex}>
      <h3 className={css.title}>{movie.title}</h3>
        <p className={css.description}>{movie.overview}</p>
        <p className={css.text}>Release date: {movie.release_date}</p>
        <p className={css.text}>Runtime: {movie.runtime}</p>
        <p className={css.text}>
          Rating: {movie.vote_average} <FaStar />
        </p>
        <div className={css.listWrap}>
          <p className={css.text.genre}>Genres:</p>
          <ul className={css.list}>
            {movie.genres.map((genre) => (
              <li key={genre.id} className={css.item}>
                <p className={css.genre}>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}