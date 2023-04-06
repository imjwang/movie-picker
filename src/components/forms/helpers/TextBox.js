const placeholder = `Parasite: 
A masterful, darkly comedic social commentary;
Bong Joon-ho weaves complex themes into a suspenseful, must-see film.
🎥👏🐜🇰🇷
-A. Qwrytiik
`;

const TextBox = () => {
  return (
    <div className="form-control">
      <label className="label-text">
        <span>Review</span>
      </label>
      <textarea
        name="review"
        className="textarea textarea-bordered h-1/3 focus:h-96 placeholder:opacity-40"
        placeholder={placeholder}
        style={{ resize: "none" }}
      />
    </div>
  );
};

export default TextBox;
