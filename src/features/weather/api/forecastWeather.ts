export async function getForecastWeather(q: string) {
  if (!q) return;

  const res = await fetch(`${process.env.WEATHER_API_URL}/forecast.json?key=${process.env.WEATHER_API_KEY}&api=no&alerts=no&q=${q}&days=7`, { cache: "no-store" });
  if (res.ok) {
    return res.json();
  } else {
    const error = await res.json();
    throw new Error(error.error.message);
  }
}
