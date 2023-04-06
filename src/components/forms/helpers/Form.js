import RequiredCheck from "./RequiredCheck";
import { FormContext } from "@/context/formStore";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalStore";
import Spinner from "@/components/Spinner";

const Form = ({ children, handleSubmit, title, text }) => {
  const { state, dispatch } = useContext(FormContext);
  const { state: loading, dispatch: loadingDispatch } =
    useContext(GlobalContext);

  const formSubmit = async (e) => {
    loadingDispatch({ type: "SET_LOADING", payload: true });
    e.preventDefault();
    await handleSubmit(state);
    dispatch({ type: "RESET_DATA" });
    e.target.reset();
    loadingDispatch({ type: "SET_LOADING", payload: false });
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
            {loading.loading ? <Spinner /> : "submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
