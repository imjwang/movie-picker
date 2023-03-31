import Rating from "./Rating";
import TextBox from "./TextBox";
import Form from "./Form";

const Review = ({ movie = "Parasite" }) => {
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
    <Form handleSubmit={handleSubmit} title={movie}>
      <Rating />
      <TextBox />
    </Form>
  );
};

export default Review;
