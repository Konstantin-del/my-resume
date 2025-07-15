import React from "react";
import styles from "./InteractionRectangle.module.css";
import { Weather } from "../weather/Weather";

interface Props {
  region?: string;
  showModal: () => void;
}

export const InteractionRectangle = ({ showModal, region }: Props) => {
  const [isShowWeather, setIsShowWeather] = React.useState(false);

  return (
    <div className={styles.main_container}>
      <div className={styles.button_container}>
        <button
          // onClick={}
          className={`${styles.btn} ${styles.position_btn1}`}
        >
          get weather
        </button>
        <button className={`${styles.btn} ${styles.position_btn2}`}>
          hren morga
        </button>
      </div>
      <Weather showModal={showModal} region={region} />
    </div>
  );
};
