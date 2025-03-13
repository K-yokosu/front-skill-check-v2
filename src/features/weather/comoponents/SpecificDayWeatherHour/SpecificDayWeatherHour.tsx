import Image from "next/image";
import styles from "./specificDayWeatherHour.module.css";
import { SpecificDayWeatherType } from "../../types/weather";

export default function SpecificDayWeatherHour({ specificDayWeather }: { specificDayWeather: SpecificDayWeatherType }) {
  return (
    <div className={styles.specificDayWeatherContainer}>
      <table>
        <tbody>
          {specificDayWeather.forecastday.hour.map(item => (
            <tr key={item.time} className={styles.specificDayWeatherItemContainer}>
              <td>{item.time.split(" ")[1]}</td>
              <td>
                <Image src={`https:${item.condition.icon}`} alt={item.condition.text} width={20} height={20} />
              </td>
              <td>{item.temp_c}℃</td>
              <td>{item.temp_c}℃</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
