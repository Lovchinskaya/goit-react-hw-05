import { useState, useEffect } from "react"
import { searchMovie } from "../../MovieService";
import  MovieList  from "../../components/MovieList/MovieList"
import { Formik, Form, Field} from 'formik';
import toast from 'react-hot-toast';
import css from './MoviesPage.module.css'
import { useSearchParams } from "react-router";

export default function MoviesPage(){
    const [movies, setMovie] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState(false);

    const [searchParams, setSerachParams] = useSearchParams();

    useEffect(() => {
        async function getMovies(){
            try { 
                setIsLoader(true);  
                setError(false);    
                const data = await searchMovie();
                setMovie(data);
                
            }
            catch{
                setError(true);
            } finally {
                setIsLoader(false);
            }
        }
        getMovies();
    }, [])
    return (
        <>
         {isLoader && <div>Loading trending movies...</div>}
         {error && <div>Whoops, there are no such movies </div>}
         <div className={css.formcontainer}>
        <Formik 
        initialValues={{
            topic: ''
        }}
        onSubmit={(values, actions) =>{
            if (values.topic.trim() === '') {
                toast.error('Please enter something for seach.', {
                  duration: 1750,
                  position: 'top-center',
                  className: `${css['custom-toast-error']} ${css['info']}`,
                });
                return;
              }
            onSubmit(values.topic)
            actions.resetForm();
        }}
        >
        <Form className={css.formsearch}>
          <Field
          className ={css.forminput}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search movies you like"
        />
        <button type="submit"        
        className={css.formbtn}>Search</button>
      </Form>
        </Formik>
        </div>
       
        </>    
        
    )
} 