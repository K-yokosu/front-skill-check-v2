import Link from "next/link";
import Image from "next/image";
import styles from "./forecastWeather.module.css";
import { ForecastdayType } from "../../types/weather";
import { WiDirectionUpRight } from "react-icons/wi";

export default function ForecastWeather({ forecastdays, locationName }: { forecastdays: ForecastdayType[]; locationName: string }) {
  return (
    <div className={styles.forecastWeatherContainer}>
      <table>
        <tbody>
          {forecastdays.map(forecastday => (
            <tr key={forecastday.date} className={styles.forecastWeatherItemContainer}>
              <td>{forecastday.date}</td>
              <td>
                <Image src={`https:${forecastday.day.condition.icon}`} alt={forecastday.day.condition.text} width={40} height={40} />
              </td>
              <td>{forecastday.day.mintemp_c}℃</td>
              <td>{forecastday.day.maxtemp_c}℃</td>
              <td className={styles.detailLink}>
                <Link href={`/${locationName}?day=${forecastday.date}`}>
                  <WiDirectionUpRight />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
