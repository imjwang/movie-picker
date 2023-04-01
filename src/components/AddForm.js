import MovieTitle from "./MovieTitle";
import Form from "./Form";
import SelectGenre from "./SelectGenre";

const AddForm = () => {
  return (
    <Form title="Add Movie">
      <MovieTitle />
      <SelectGenre />
    </Form>
  );
};

export default AddForm;
