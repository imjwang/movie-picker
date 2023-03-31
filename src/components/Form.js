const Form = ({ children, handleSubmit, title }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-6 my-6 px-6 py-6 flex flex-col space-y-6 bg-base-300 grow">
        <article className="prose">
          <h1>{title}</h1>
        </article>
        {children}
        <button className="btn btn-md btn-primary w-24 self-end" type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

export default Form;
