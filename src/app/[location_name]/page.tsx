import LocationInput from "@/features/weather/comoponents/LocationInput/LocationInput";
import { getForecastWeather } from "@/features/weather/api/forecastWeather";
import { WeatherForecastType, ForecastdayType } from "@/features/weather/types/weather";
import SpecificDayWeather from "@/features/weather/comoponents/SpecificDayWeather/SpecificDayWeather";
import SpecificDayWeatherHour from "@/features/weather/comoponents/SpecificDayWeatherHour/SpecificDayWeatherHour";

type Params = Promise<{ location_name: string }>;
type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Page(props: { params: Params; searchParams: SearchParams }) {
  const params = await props.params;
  const locationName = params.location_name;
  const searchParams = await props.searchParams;
  const targetDay: string = searchParams.day ?? "";
  const weatherLists: WeatherForecastType | undefined = await getForecastWeather(locationName);
  const targetWeather: ForecastdayType | undefined = weatherLists?.forecast.forecastday.find(day => day.date === targetDay);

  return (
    <>
      <LocationInput q={locationName} disable={true} />
      {weatherLists && targetWeather && (
        <>
          <SpecificDayWeather
            specificDayWeather={{
              location: weatherLists.location,
              current: weatherLists.current,
              forecastday: targetWeather
            }}
          />
          <SpecificDayWeatherHour
            specificDayWeather={{
              location: weatherLists.location,
              current: weatherLists.current,
              forecastday: targetWeather
            }}
          />
        </>
      )}
    </>
  );
}
