import { fetchMoviesReviews } from "../../MovieService";
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import css from './MovieReviews.module.css';

export default function MovieReview (){
    const {movieId} = useParams();
    const [reviews, setReview] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getReviews(){
            try{
                setIsLoader(true);  
                setError(false);
                const data = await fetchMoviesReviews(movieId);
                setReview(data);

            } catch{
                setError(true);
            } finally{
                setIsLoader(false);
            }

    }
    getReviews();
}, [movieId]);
    return (
        <>
        {isLoader && <b>Loading users...</b>}
        {error && <b>Whoops there was an error, plz reload the page...</b>}
        <div className={css.container}>
      <h3 className={css.header}>Movie Reviews</h3>
      {reviews.length > 0 &&
        reviews.map((review) => (
          <div key={review.id} className={css.review}>
            <h3 className={css.title}>{review.author}</h3>
            <p className={css.body}>{review.content}</p>
          </div>
        ))}
    </div>
        </>
        
    )
}