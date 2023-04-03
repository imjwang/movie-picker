import RequiredCheck from "./RequiredCheck";

const Form = ({ children, handleSubmit, title, text }) => {
  return (
    <div className="grow">
      <form onSubmit={handleSubmit}>
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
