import { useState } from "react";

const MovieTitle = () => {
  const [textCount, setTextCount] = useState(0);

  const handleChange = (e) => {
    setTextCount(e.target.value.length);
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Movie Title</span>
      </label>
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
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
