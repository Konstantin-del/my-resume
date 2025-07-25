import React from "react";
import styles from "./MainPage.module.css";
import { Header } from "../components/header/Header";
import { MainRectangle } from "../components/main-rectangle/MainRectangle";
import { InteractionRectangle } from "../components/interaction-rectangle/InteractionRectangle";
import { GeodataModal } from "../components/geodata-modal/GeodataModal";
import { WeatherForecastModal } from "../components/weather-forecast-modal/WeatherForecastModal";

type Props = {};

export const MainPage = (props: Props) => {
  const [isShowGeodata, setIsShowGeodata] = React.useState(false);
  const [isShowWeatherForecast, setIsShowWeatherForecast] =
    React.useState(false);
  const [region, setRegion] = React.useState<string>("");

  function toggleIsShowGeodata() {
    setIsShowGeodata((prev) => !prev);
  }

  function toggleIsShowWeatherForecast() {
    setIsShowWeatherForecast((prev) => !prev);
  }

  function submitLocation(value: string) {
    localStorage.setItem("region", value);
    setRegion(value);
  }

  return (
    <div className={styles.main_container}>
      <Header />
      {isShowGeodata && (
        <GeodataModal
          hiddenGeodata={toggleIsShowGeodata}
          submitLocation={submitLocation}
        />
      )}
      {isShowWeatherForecast && (
        <WeatherForecastModal
          hiddenWeatherForecast={toggleIsShowWeatherForecast}
        />
      )}
      <MainRectangle />
      <InteractionRectangle
        showModal={toggleIsShowGeodata}
        showWeatherForecast={toggleIsShowWeatherForecast}
        region={region}
      />
    </div>
  );
};
