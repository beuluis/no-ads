import { MouseEvent } from "react";
import useText from "../../hooks/useText";
import styles from "./Wrapper.module.css";

const Wrapper = () => {
  const { currentText, setAutoChange, nextText } = useText();

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    setAutoChange(false);
    nextText();
  };

  return (
    <div onClick={clickHandler} className={styles.wrapper}>
      <div className={styles.text}>
        {currentText}
      </div>
    </div>
  );
};

export default Wrapper;
