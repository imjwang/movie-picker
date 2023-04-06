import { useContext } from "react";
import { FormContext } from "@/context/formStore";

const maxLength = 50;

const MovieTitle = () => {
  const { state, dispatch } = useContext(FormContext);
  const textCount = state.name?.length ?? 0;

  return (
    <div className="form-control w-full max-w-md">
      <label className="label">
        <span className="label-text">Movie Title</span>
      </label>
      <input
        type="text"
        name="title"
        className="input input-bordered w-full max-w-md"
        maxLength={maxLength}
        onChange={(e) =>
          dispatch({
            type: "EDIT_DATA",
            payload: { name: "name", data: e.target.value },
          })
        }
        value={state.title}
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
