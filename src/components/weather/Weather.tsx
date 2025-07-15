import React from "react";
import styles from "./Weather.module.css";
import { getWeather } from "../../api-services/apiWeather";
import { WeatherData } from "../../types/types";

type Props = {
  showModal: () => void;
  region?: string;
};

export const Weather = ({ showModal, region }: Props) => {
  const [data, setData] = React.useState<WeatherData | null>(null);
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  function getLocation(): Promise<string> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(`${position.coords.latitude},${position.coords.longitude}`);
        },
        (error) => {
          reject(error.message);
        }
      );
    });
  }

  React.useEffect(() => {
    getLocation()
      .then((place) => {
        if (place) {
          getWeather<WeatherData>(place)
            .then((res) => setData(res))
            .catch((error) => setError(error.message));
        } else setError("failed to get place");
      })
      .catch(() => {
        if (region) {
          getWeather<WeatherData>(region)
            .then((res) => setData(res))
            .catch((error) => setError(error.message));
        } else {
          let place = localStorage.getItem("region");
          if (place) {
            getWeather<WeatherData>(place)
              .then((res) => setData(res))
              .catch((error) => setError(error.message));
          } else setError("failed to get place");
        }
      })
      .finally(() => setIsLoading(false));
  }, [region]);

  return (
    <div className={styles.main_container}>
      {isLoading ? (
        <div>...loading</div>
      ) : data ? (
        <div className={styles.grid_container}>
          <div className={styles.color_text}>{data.location.name}</div>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 66 65"
            version="1.1"
            onClick={showModal}
          >
            <title>Pencil</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              type="MSPage"
            >
              <g
                id="Pencil"
                type="MSLayerGroup"
                transform="translate(2.000000, 1.000000)"
                stroke="#6B6C6E"
                strokeWidth="2"
              >
                <path
                  d="M7.5,43.7 L0,62 L18.3,54.5"
                  id="Shape"
                  type="MSShapeGroup"
                ></path>
                <path
                  d="M19.4,53.9 C18.5,54.8 17.1,54.8 16.2,53.9 L17,49.9 L12.2,49.9 L12.2,45.1 L8.2,45.9 C7.3,45 7.3,43.6 8.2,42.7 L50.2,0.7 C51.1,-0.2 52.5,-0.2 53.4,0.7 L61.5,8.8 C62.4,9.7 62.4,11.1 61.5,12 L19.4,53.9 L19.4,53.9 Z"
                  id="Shape"
                  type="MSShapeGroup"
                ></path>
                <path
                  d="M12.1,45 L48.4,8.7"
                  id="Shape"
                  type="MSShapeGroup"
                ></path>
                <path
                  d="M17,49.9 L53.3,13.6"
                  id="Shape"
                  type="MSShapeGroup"
                ></path>
                <path
                  d="M45.2,5.5 L56.5,16.8"
                  id="Shape"
                  type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>

          <div className={styles.text_size}>{data.current.temp_c}°</div>
          <div>
            <img
              src={data.current.condition.icon}
              alt={data.current.condition.text}
            />
          </div>
        </div>
      ) : (
        error && <div className={styles.error_text}>{error}</div>
      )}
    </div>
  );
};
