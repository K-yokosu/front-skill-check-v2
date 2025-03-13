import { WeatherForecastType } from "@/features/weather/types/weather";

export async function getForecastWeather(q: string): Promise<WeatherForecastType | undefined> {
  if (!q) return;
  const res = await fetch(`${process.env.WEATHER_API_URL}/forecast.json?key=${process.env.WEATHER_API_KEY}&api=no&alerts=no&q=${q}&days=7`, { cache: "no-store" });
  return res.json();
}
