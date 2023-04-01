const testData = [
  "Action",
  "Animated",
  "Comedy",
  "Foreign Film",
  "Horror",
  "Indie",
  "Romance",
];

const SelectGenre = ({ genres = testData }) => {
  return (
    <div className="form-control max-w-sm">
      <label className="label">
        <span className="label-text">Genre</span>
      </label>
      <select className="select select-bordered">
        {genres.map((genre, idx) => (
          <option selected={idx === 0} key={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGenre;
