const Sheet = ({ children }) => {
  return (
    <div className="prose p-6 md:p-20 flex flex-col gap-x-2 gap-y-2 bg-inherit">
      {children}
    </div>
  );
};

export default Sheet;
