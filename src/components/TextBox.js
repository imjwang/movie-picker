const placeholder = `Parasite: 
A masterful, darkly comedic social commentary;
Bong Joon-ho weaves complex themes into a suspenseful, must-see film.
🎥👏🐜🇰🇷
-A. Qwrytiik
`;

const TextBox = () => {
  return (
    <div className="form-control grow">
      <label className="label-text">
        <span>Review</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-1/3 focus:h-full"
        placeholder={placeholder}
        style={{ resize: "none" }}
      />
    </div>
  );
};

export default TextBox;
