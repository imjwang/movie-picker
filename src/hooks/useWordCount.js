import { useState, useEffect } from "react";

const useWordCount = () => {
  const [textCount, setTextCount] = useState(0);

  const handleChange = (e) => {
    setTextCount(e.target.value.length);
  };

  return { handleChange, textCount };
};

export default useWordCount;
