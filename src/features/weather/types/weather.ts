export type WeatherForecastType = {
  location: LocationType;
  current: CurrentType;
  forecast: {
    forecastday: ForecastdayType[];
  };
};

export type SpecificDayWeatherType = {
  location: LocationType;
  current: CurrentType;
  forecastday: ForecastdayType;
};

export type ForecastdayType = {
  date: string;
  date_epoch: number;
  astro: AstroType;
  hour: HourType[];
  day: DayType;
};

type LocationType = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string;
  localtime_epoch: number;
};

export type CurrentType = {
  last_updated: string;
  last_updated_epoch: number;
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  condition: ConditionType;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  is_day: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};

type ConditionType = {
  text: string;
  icon: string;
  code: number;
};

type HourType = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  condition: ConditionType;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  will_it_snow: number;
  is_day: number;
  vis_km: number;
  vis_miles: number;
  chance_of_rain: string;
  chance_of_snow: string;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  short_rad: number;
  diff_rad: number;
};

type AstroType = {
  is_moon_up: number;
  is_sun_up: number;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
};

type DayType = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: string;
  daily_will_it_snow: number;
  daily_chance_of_snow: string;
  condition: ConditionType;
  uv: number;
};
