import LocationInput from "@/features/weather/comoponents/LocationInput/LocationInput";
import { getForecastWeather } from "@/features/weather/api/forecastWeather";
import { WeatherForecastType } from "@/features/weather/types/weather";
import CurrentWeather from "@/features/weather/comoponents/CurrentWeather/CurrentWeather";
import ForecastWeather from "@/features/weather/comoponents/ForecastWeather/ForecastWeather";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const q = searchParams.q ?? "";
  let weatherLists: WeatherForecastType | undefined = undefined;

  try {
    weatherLists = await getForecastWeather(q);
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : String(e));
  }

  return (
    <>
      <LocationInput q={q} />
      {weatherLists && (
        <>
          <CurrentWeather currentWeather={weatherLists.current} locationName={weatherLists.location.name} localDay={weatherLists.location.localtime.split(" ")[0]} />
          <ForecastWeather forecastdays={weatherLists.forecast.forecastday} locationName={weatherLists.location.name} />
        </>
      )}
    </>
  );
}
