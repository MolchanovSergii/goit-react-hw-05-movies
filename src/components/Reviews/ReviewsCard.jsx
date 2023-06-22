const ReviewsCard = ({ reviews }) => {
  if (!reviews.results.length) {
    return <p>We don't have any reviews for this film</p>;
  }
  console.log(reviews);

  return (
    <>
      {reviews.results.map(({ author, content, id }) => (
        <div key={id}>
          <li>Author: {author}.</li>
          <p>{content}</p>
        </div>
      ))}
    </>
  );
};

export default ReviewsCard;
