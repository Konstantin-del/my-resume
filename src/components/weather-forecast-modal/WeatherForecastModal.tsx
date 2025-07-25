import React from "react";
import styles from "./WeatherForecastModal.module.css";
import { getWeatherForecast } from "../../api-services/apiWeatherForecast";
import { WeatherForecastData } from "../../types/types";
import { WeatherForecastCard } from "../weather-forecast-card/WeatherForecastCard";

type Props = {
  hiddenWeatherForecast: () => void;
};

export const WeatherForecastModal = ({ hiddenWeatherForecast }: Props) => {
  const [data, setData] = React.useState<WeatherForecastData | null>(null);
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const geodata = localStorage.getItem("region");
    if (geodata) {
      getWeatherForecast<WeatherForecastData>(geodata)
        .then((res) => setData(res))
        .catch((error) => setError(error.message));
    } else {
      getWeatherForecast<WeatherForecastData>("london")
        .then((res) => setData(res))
        .catch((error) => setError(error.message));
    }
    console.log(geodata);
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className={styles.blackout}></div>
      {isLoading && <div className={styles.loading}>...loading</div>}
      <div className={styles.main_container}>
        <button className={styles.btn_close} onClick={hiddenWeatherForecast}>
          x
        </button>
        {error && <div>{error}</div>}

        {data &&
          data.forecast.forecastday.map((item, index) => (
            <WeatherForecastCard weather={item} key={index} />
          ))}
      </div>
    </>
  );
};
