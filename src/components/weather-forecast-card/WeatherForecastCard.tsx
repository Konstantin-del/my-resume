import React from "react";
import styles from "./WeatherForecastCard.module.css";
import { ForecastDay } from "../../types/types";

type Props = {
  weather: ForecastDay;
};

export const WeatherForecastCard = ({ weather }: Props) => {
  return (
    <div className={styles.main_container}>
      <div>{weather.date}</div>
      <div>max c°: {weather.day.maxtemp_c}</div>
      <div>min c°: {weather.day.mintemp_c}</div>
      <img src={weather.day.condition.icon} alt={weather.day.condition.text} />
    </div>
  );
};
