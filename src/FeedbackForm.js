import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [like, setLike] = useState(null);
  const [comment, setComment] = useState(""); // new state variable for comment

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("feedback")
      .insert([{ feedback, like, comment }]); // include comment in data
    if (error) console.error(error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={() => setLike(true)}>Like</button>
      <button type="button" onClick={() => setLike(false)}>Dislike</button>
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add your comment here" /> // new textarea for comment
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;