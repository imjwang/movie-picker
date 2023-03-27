import Rating from "./Rating";
import TextBox from "./TextBox";

const Review = ({ movie }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.review.value);
    for (const i of e.target) {
      if (i.checked) {
        console.log(i.value);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mx-6 my-6 px-6 py-6 flex flex-col space-y-6 bg-base-300 grow">
          <article className="prose">
            <h1>{movie}</h1>
          </article>

          <Rating />
          <TextBox />
          <button
            className="btn btn-md btn-primary w-24 self-end"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Review;
