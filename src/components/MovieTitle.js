import { useState } from "react";
import useWordCount from "@/hooks/useWordCount";

const MovieTitle = () => {
  const { textCount, handleChange } = useWordCount();

  return (
    <div className="form-control w-full max-w-md">
      <label className="label">
        <span className="label-text">Movie Title</span>
      </label>
      <input
        type="text"
        className="input input-bordered w-full max-w-md"
        maxLength={50}
        onChange={handleChange}
      />
      <label className="label">
        <span className="label-text-alt"></span>
        <span className="label-text-alt">{textCount}/50</span>
      </label>
    </div>
  );
};

export default MovieTitle;
