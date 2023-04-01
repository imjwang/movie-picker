import RequiredCheck from "./RequiredCheck";

const Form = ({ children, handleSubmit, title, text }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-6 my-6 px-6 py-6 flex flex-col space-y-6 bg-base-300 grow">
        <article className="prose">
          <h1>{title}</h1>
        </article>
        {children}
        {text && <RequiredCheck text={text} />}
        <button className="btn btn-md btn-primary w-24 self-end" type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

export default Form;
