import Rating from "@/components/forms/helpers/Rating";
import TextBox from "@/components/forms/helpers/TextBox";
import Form from "@/components/forms/helpers/Form";

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
    <Form
      handleSubmit={handleSubmit}
      title={movie}
      text="By checking this box, I confirm to having watched this movie"
    >
      <Rating />
      <TextBox />
    </Form>
  );
};

export default Review;
