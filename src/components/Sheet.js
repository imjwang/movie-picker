const Sheet = ({ style, children }) => {
  return (
    <div className={`my-6 mx-6 flex gap-x-2 gap-y-2 ${style}`}>{children}</div>
  );
};

export default Sheet;
