import { useRef, useState } from "react";

const Review = () => {
  const inputRef = useRef(null);

  const [textCount, setTextCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const i of e.target) {
      if (i.checked) {
        console.log(i.value);
      }
    }
  };

  const handleChange = (e) => {
    setTextCount(inputRef.current.value.length);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mx-6 my-6 flex flex-col space-y-6">
          <div className="form-control">
            <div className="rating rating-lg">
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
                defaultChecked={true}
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
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Movie Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              maxLength={50}
              ref={inputRef}
              onChange={handleChange}
            />
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt">{textCount}/50</span>
            </label>
          </div>
          <button className="btn btn-sm btn-primary w-24" type="submit">
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Review;
