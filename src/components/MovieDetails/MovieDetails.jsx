import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchApiMovie } from 'services/fetchApi';

import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataApi = await fetchApiMovie(movieId);

        setData(dataApi);
        setIsLoading(false);
      } catch (error) {
        Notify.failure(`Sorry, something went wrong. ${error.message}`);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading ? <Loader /> : data && <MovieCard data={data} />}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;
