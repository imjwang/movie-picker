const Review = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    for (const i of e.target) {
      if (i.checked) {
        console.log(i.value);
      }
    }
  };

  return (
    <>
      <div className="rating rating-lg">
        <form onSubmit={handleSubmit}>
          <input
            type="radio"
            name="review-rating"
            className="mask mask-star-2 bg-yellow-400"
            value={1}
          />
          <input
            type="radio"
            name="review-rating"
            className="mask mask-star-2 bg-yellow-400"
            value={2}
          />
          <input
            type="radio"
            name="review-rating"
            className="mask mask-star-2 bg-yellow-400"
            value={3}
          />
          <input
            type="radio"
            name="review-rating"
            className="mask mask-star-2 bg-yellow-400"
            value={4}
          />
          <button className="btn btn-sm btn-primary" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Review;
