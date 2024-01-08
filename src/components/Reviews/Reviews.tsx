import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/fetchMovies';
import ErrorMessage from '../../components/ErrorMessage';
import { ReviewsData  } from '../../services/fetchMovies';
import { AxiosResponse } from 'axios';



const Reviews: FC = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<ReviewsData>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetch(): Promise<void> {
      try {
        if(movieId) {
          const movieReviews: AxiosResponse<ReviewsData> = await fetchReviews(movieId);
          setReviews(movieReviews.data);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);

  useEffect(() => {
    window.scroll({
      top: 570,
      left: 0,
      behavior: 'smooth',
    });
  }, [reviews]);

  if (!reviews) {
    return null;
  }

  if (reviews.results.length === 0) {
    return (
      <div className='text-secondaryText text-2xl'>We don`t have any reviews for this movie.</div>
    );
  } else {
    return (
      <>
        {error && <ErrorMessage />}
        <ul>
          {reviews.results.map(({ author, content }) => (
            <li key={author}>
              <h4 className='mb-4 text-secondaryText text-base'>Author: {author}</h4>
              <h4 className='mb-2 text-buttonColor text-xl'>{content}</h4>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default Reviews;
