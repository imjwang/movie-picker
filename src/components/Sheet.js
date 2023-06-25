const Sheet = ({ children, prose }) => {
  return (
    <div
      className={`p-6 md:p-20 flex flex-col gap-x-2 gap-y-2 bg-cream ${
        prose && "prose"
      }`}
    >
      {children}
    </div>
  );
};

export default Sheet;