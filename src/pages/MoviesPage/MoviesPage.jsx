import { useState, useEffect } from "react"
import { searchMovie } from "../../MovieService";
import  MovieList  from "../../components/MovieList/MovieList"
import toast from 'react-hot-toast';
import css from './MoviesPage.module.css'
import { useSearchParams } from "react-router";
import MovieForm from '../../components/MovieForm/MovieForm'

export default function MoviesPage(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (!searchQuery) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await searchMovie(searchQuery, page);
        setMovies((prevsMovies) => [...prevsMovies, ...data.results]);
        setIsVisible(page < data.total_pages);
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, page]);


  const onSearch = (value) => {
    setMovies([]);
    setIsEmpty(true);
    setPage(1);
    setSearchParams({ query: value });
  };

    return (
        <div className={css.container}>
      <p className={css.text}>Enter movie title</p>
      <MovieForm onSearch={onSearch} />
      {loading && <div>Loading trending movies...</div>}
      {error && <div>Whoops, there are no such movies </div>}
      {movies.length > 0 && <MovieList movies={movies}/>}
      {isEmpty && !loading && movies.length < 1 && (
        <p className={css.text}>Sorry, but there are no results</p>
      )}
    </div>  
        
    )
} 