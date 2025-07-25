import React from "react";
import styles from "./InteractionRectangle.module.css";
import { Weather } from "../weather/Weather";

interface Props {
  region?: string;
  showModal: () => void;
  showWeatherForecast: () => void;
}

export const InteractionRectangle = ({
  showModal,
  showWeatherForecast,
  region,
}: Props) => {
  const [isShowWeather, setIsShowWeather] = React.useState(false);

  return (
    <div className={styles.main_container}>
      <div className={styles.button_container}>
        <button
          onClick={showWeatherForecast}
          className={`${styles.btn} ${styles.position_btn1}`}
        >
          get weather forecast
        </button>
        <button className={`${styles.btn} ${styles.position_btn2}`}>
          not relese
        </button>
      </div>
      <Weather showModal={showModal} region={region} />
    </div>
  );
};
