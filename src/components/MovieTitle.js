import { useState } from "react";
import useWordCount from "@/hooks/useWordCount";

const maxLength = 50;

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
        maxLength={maxLength}
        onChange={handleChange}
        required
      />
      <label className="label">
        <span className="label-text-alt"></span>
        <span className="label-text-alt">
          {textCount}/{maxLength}
        </span>
      </label>
    </div>
  );
};

export default MovieTitle;
