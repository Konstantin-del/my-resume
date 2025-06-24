import React from "react";
import styles from "./MainPage.module.css";
import { Header } from "../components/header/Header";
import { MainRectangle } from "../components/main-rectangle/MainRectangle";
import { InteractionRectangle } from "../components/interaction-rectangle/InteractionRectangle";
import { Weather } from "../components/weather/Weather";
import { GeodataModal } from "../components/geodata-modal/GeodataModal";

type Props = {};

export const MainPage = (props: Props) => {
  const [isShowWeather, setIsShowWeather] = React.useState(false);
  const [isShowGeodata, setIsShowGeodata] = React.useState(false);

  function getWeather() {
    if (navigator.geolocation) {
      console.log("her");
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log(lat, lon, "====");
        },
        function () {
          setIsShowGeodata(true);
        }
      );
    } else {
      console.log("Геолокация не поддерживается данным браузером.");
    }
  }

  function chengeIsShowGeodata() {
    setIsShowGeodata(false);
  }

  return (
    <div className={styles.main_container}>
      <Header />
      {isShowGeodata && <GeodataModal hiddenGeodata={chengeIsShowGeodata} />}
      <MainRectangle />
      <InteractionRectangle getWeather={getWeather} />
    </div>
  );
};
