import Rating from "./Rating";
import TextBox from "./TextBox";

const Review = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const i of e.target) {
      if (i.checked) {
        console.log(i.value);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mx-6 my-6 px-6 py-6 flex flex-col space-y-2 bg-base-300 h-96">
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
