import RequiredCheck from "./RequiredCheck";
import { FormContext } from "@/context/formStore";
import { useContext } from "react";

const Form = ({ children, handleSubmit, title, text }) => {
  const { state, dispatch } = useContext(FormContext);

  const formSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(state);
    dispatch({ type: "RESET_DATA" });
    e.target.reset();
  };

  return (
    <div className="place-self-center w-screen md:w-3/4">
      <form onSubmit={formSubmit}>
        <div className="p-12 flex flex-col space-y-6 bg-base-300">
          <article className="prose">
            <h1>{title}</h1>
          </article>
          {children}
          {text && <RequiredCheck text={text} />}
          <button
            className="btn btn-md btn-primary w-24 self-end"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
