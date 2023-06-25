import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [like, setLike] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("feedback")
      .insert([{ feedback, like }]);
    if (error) console.error(error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={() => setLike(true)}>Like</button>
      <button type="button" onClick={() => setLike(false)}>Dislike</button>
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;const handleSubmit = async (e) => {
  e.preventDefault();
  const { user } = useUser();
  const { data, error } = await supabase
    .from("feedback")
    .insert([{ user_id: user.id, feedback, like }]);
  if (error) console.error(error);
};