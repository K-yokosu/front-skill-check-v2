import Link from "next/link";
import Image from "next/image";
import styles from "./currentWeather.module.css";
import { CurrentType } from "../../types/weather";
import { WiDirectionUpRight } from "react-icons/wi";

export default function CurrentWeather({ currentWeather, locationName, localDay }: { currentWeather: CurrentType; locationName: string; localDay: string }) {
  return (
    <div className={styles.currentWeatherContainer}>
      <div className={styles.detailLink}>
        <Link href={`/${locationName}?day=${localDay}`}>
          <WiDirectionUpRight />
        </Link>
      </div>
      <div className={styles.currentWeatherHeader}>
        <h2>{locationName}</h2>
      </div>
      <div className={styles.currentWeatherInfo}>
        <div className={styles.weather}>
          <span>{currentWeather.condition.text}</span>
          <Image src={`https:${currentWeather.condition.icon}`} alt={currentWeather.condition.text} width={40} height={40} />
        </div>
        <div className={styles.currentTempC}>{currentWeather.temp_c}℃</div>
        <div className={styles.weatherItemContainer}>
          <div className={styles.weatherItem}>
            <p>体感温度: {currentWeather.temp_c}℃</p>
            <p>風速: {currentWeather.wind_kph}km</p>
          </div>
          <div className={styles.weatherItem}>
            <p>降水量: {currentWeather.precip_mm}</p>
            <p>湿度: {currentWeather.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
