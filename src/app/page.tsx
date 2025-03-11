import LocationInput from "@/features/weather/comoponents/LocationInput/LocationInput";
import { getForecastWeather } from "@/features/weather/api/forecastWeather";
import { WeatherForecastType } from "@/features/weather/types/weather";
type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const q = searchParams.q ?? "";
  const weatherLists: WeatherForecastType | undefined = await getForecastWeather(q);
  console.log(weatherLists);

  return (
    <>
      <LocationInput q={q} />
    </>
  );
}
