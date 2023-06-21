// import styled from "styled-components";

export const TrendingList = ({ data }) => {
  const { results } = data;

  return (
    <ul>
      {results.map(result => (
        <li key={result.id}>{result.title}</li>
      ))}
    </ul>
  );
};
