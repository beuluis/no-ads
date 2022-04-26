import { useEffect, useState } from "react";
import text from "../data/text";

const useText = () => {
  const [autoChange, setAutoChange] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    autoChange &&
      setTimeout(() => {
        nextText();
      }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const nextText = () => {
    if (currentIndex === text.length - 1) {
        return setCurrentIndex(0);
      }
      setCurrentIndex(currentIndex + 1);
  }

  return {
    currentText: text[currentIndex],
    nextText,
    setAutoChange,
  };
};

export default useText;
