// import styled from "styled-components";
import { Link } from 'react-router-dom';

const TrendingList = ({ data }) => {
  const { results } = data;

  return (
    <ul>
      {results.map(result => (
        <li key={result.id}>
          <Link to={`/movies/${result.id}`}> {result.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
