import Image from "next/image";
import styles from "./specificDayWeather.module.css";
import { SpecificDayWeatherType } from "../../types/weather";
import { getDayText } from "../../lib/weathr";

export default function SpecificDayWeather({ specificDayWeather }: { specificDayWeather: SpecificDayWeatherType }) {
  const dayText = getDayText(specificDayWeather.forecastday.day.condition.code);

  return (
    <div className={styles.specificDayWeatherContainer}>
      <div className={styles.specificDayWeatherHeader}>
        <h2>{specificDayWeather.forecastday.date}</h2>
      </div>
      <div className={styles.specificDayWeatherInfo}>
        <div className={styles.weather}>
          <span>{dayText}</span>
          <Image src={`https:${specificDayWeather.forecastday.day.condition.icon}`} alt={specificDayWeather.forecastday.day.condition.text} width={40} height={40} />
        </div>
        <div className={styles.weatherItemContainer}>
          <div className={styles.weatherItem}>
            <p>平均気温: {specificDayWeather.forecastday.day.avgtemp_c}℃</p>
            <p>最高気温: {specificDayWeather.forecastday.day.maxtemp_c}℃</p>
            <p>降水確率: {specificDayWeather.forecastday.day.daily_chance_of_rain}%</p>
          </div>
          <div className={styles.weatherItem}>
            <p>平均湿度: {specificDayWeather.forecastday.day.avghumidity}%</p>
            <p>最低気温: {specificDayWeather.forecastday.day.mintemp_c}℃</p>
            <p>最大風速: {specificDayWeather.forecastday.day.maxwind_kph}km</p>
          </div>
        </div>
      </div>
    </div>
  );
}
