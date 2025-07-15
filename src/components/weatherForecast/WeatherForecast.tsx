import React from "react";
import styles from "./WeatherForecast.module.css";

type Props = {
  hiddenWeather: () => void;
  geodata: {
    lat: number;
    lon: number;
  } | null;
};

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

export const WeatherForecast = ({ hiddenWeather, geodata }: Props) => {
  const [weather, setWeather] = React.useState<WeatherData | null>(null);
  const [isShowWeather, setIsShowWeather] = React.useState(false);

  React.useEffect(() => {
    if (geodata) {
      const uri = `http://api.weatherapi.com/v1/current.json?key=3a40c32b17734325b1192519252206&q=${geodata.lat},${geodata.lon}`;
      console.log(uri);
      fetch(uri)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setWeather(res);
        });
      console.log("her");
    }
  }, []);

  return (
    <>
      <div className={styles.blackout}></div>
      <div className={styles.main_container}>
        <button className={styles.btn_close} onClick={hiddenWeather}>
          x
        </button>
        {weather !== null ? (
          <>
            {/* <h3>{weather.location.name}</h3> */}
            <h4 className={styles.color_text}>
              <span>location:</span> {weather.location.region}
            </h4>
            <h4 className={styles.color_text}>
              <span>weather loading time:</span> {weather.location.localtime}
            </h4>
            <div className={styles.temp_container}>
              <h3>{weather.current.temp_c}°</h3>
              <div>
                <img
                  src={weather.current.condition.icon}
                  alt={weather.current.condition.text}
                />
              </div>
            </div>
          </>
        ) : (
          <div>ups</div>
        )}
      </div>
    </>
  );
};
