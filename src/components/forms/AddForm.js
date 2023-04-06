import MovieTitle from "@/components/forms/helpers/MovieTitle";
import Form from "@/components/forms/helpers/Form";
import SelectGenre from "@/components/forms/helpers/SelectGenre";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@auth0/nextjs-auth0/client";

const AddForm = () => {
  const { user } = useUser();
  const insertMovie = async ({ name, genre }) => {
    try {
      await supabase.from("movies").insert({
        name,
        genre: genre ?? "Action",
        user: user.sub,
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Form handleSubmit={insertMovie} title="Add Movie">
      <MovieTitle />
      <SelectGenre />
    </Form>
  );
};

export default AddForm;
