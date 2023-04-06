const RequiredCheck = ({ text }) => {
  return (
    <div className="flex self-end form-control max-w-md">
      <label className="label cursor-pointer">
        <span className="label-text">{text}</span>
        <input
          required
          type="checkbox"
          className="checkbox checkbox-accent ml-3"
        />
      </label>
    </div>
  );
};

export default RequiredCheck;
