import { render, screen } from "@testing-library/react";
import { CurrentType } from "../../types/weather";
import CurrentWeather from "./CurrentWeather";

const CURRENT_WEATHER_DATA: CurrentType = {
  cloud: 0,
  condition: {
    code: 1000,
    icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
    text: "Clear"
  },
  dewpoint_c: 9.5,
  dewpoint_f: 49,
  feelslike_c: 11.6,
  feelslike_f: 52.8,
  gust_kph: 7.5,
  gust_mph: 4.7,
  heatindex_c: 11.2,
  heatindex_f: 52.1,
  humidity: 87,
  is_day: 0,
  last_updated: "2025-03-13 04:00",
  last_updated_epoch: 1741806000,
  precip_in: 0,
  precip_mm: 0,
  pressure_in: 29.97,
  pressure_mb: 1015,
  temp_c: 11.4,
  temp_f: 52.5,
  uv: 0,
  wind_degree: 263,
  wind_dir: "W",
  wind_kph: 4.3,
  wind_mph: 2.7,
  windchill_c: 11.3,
  windchill_f: 52.3
};

describe("Current Weather Component Test", () => {
  // テスト共通のセットアップ
  beforeEach(() => {
    render(<CurrentWeather currentWeather={CURRENT_WEATHER_DATA} locationName="Osaka-Shi" localDay="2025-03-13" />);
  });

  test("link要素 存在 確認", () => {
    const currentWeatherElement = screen.getByRole("link");
    expect(currentWeatherElement).toBeInTheDocument();
  });
});
