import React from "react";
import styles from "./InteractionRectangle.module.css";

interface Props {
  getWeather: () => void;
}

export const InteractionRectangle = ({ getWeather }: Props) => {
  return (
    <div className={styles.main_container}>
      <button
        onClick={getWeather}
        className={`${styles.btn} ${styles.position_btn1}`}
      >
        get weather
      </button>
      <button className={`${styles.btn} ${styles.position_btn2}`}>
        hren morga
      </button>
    </div>
  );
};
