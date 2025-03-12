import Link from "next/link";
import Image from "next/image";
import styles from "./currentWeather.module.css";
import { CurrentType } from "../../types/weather";
import { WiDirectionUpRight } from "react-icons/wi";

export default function CurrentWeather({ currentWeather, locationName, localDay }: { currentWeather: CurrentType; locationName: string; localDay: string }) {
  return (
    <div className={styles.currentWeatherContainer}>
      <div className={styles.currentWeatherHeader}>
        <h2>Current Weather</h2>
        <Link href={`/${locationName}?day=${localDay}`}>
          詳細
          <WiDirectionUpRight />
        </Link>
      </div>
      <div>
        <div>
          天気：{currentWeather.condition.text}
          <Image src={`https:${currentWeather.condition.icon}`} alt={currentWeather.condition.text} width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
