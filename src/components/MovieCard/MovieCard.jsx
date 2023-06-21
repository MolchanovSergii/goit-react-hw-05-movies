import { MoviePoster, Card, Wrapper, GenresList } from './MovieCardStyled';

const MovieCard = ({ data }) => {
  const { overview, genres, poster_path, title, release_date, vote_average } =
    data;
  const baseImagePath = 'https://image.tmdb.org/t/p/w500';
  const year = parseInt(release_date.split('-')[0]);

  return (
    <Card>
      <Wrapper>
        <MoviePoster
          src={`${baseImagePath}${poster_path}`}
          alt="Movie Poster"
        />
      </Wrapper>
      <Wrapper>
        <h2>
          {title} ({year})
        </h2>
        <p>User Rating: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <GenresList>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </GenresList>
      </Wrapper>
    </Card>
  );
};

export default MovieCard;
