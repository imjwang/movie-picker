import { useContext } from "react";
import { FormContext } from "@/context/formStore";

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
  const { state, dispatch } = useContext(FormContext);

  return (
    <div className="form-control max-w-sm">
      <label className="label">
        <span className="label-text">Genre</span>
      </label>
      <select
        className="select select-bordered"
        name="genre"
        value={state.genre}
        onChange={(e) =>
          dispatch({
            type: "EDIT_DATA",
            payload: { name: "genre", data: e.target.value },
          })
        }
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGenre;
