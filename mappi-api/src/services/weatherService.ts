import { WeatherType } from "../types";
import fetchWeatherData from "./fetchWeatherData";
import fetchTideData from "./fetchTideData";
import { validateLocationName } from "../validators";

async function weatherService(locationName: string): Promise<WeatherType> {
  validateLocationName(locationName);

  try {
    const [weatherResult, tideResponse] = await Promise.all([
      fetchWeatherData(locationName, process.env.WEATHER_API_KEY || ""),
      fetchTideData(locationName, process.env.WEATHER_API_KEY || ""),
    ]);

    const tidesData = tideResponse.forecast.forecastday[0].day.tides[0].tide;

    const newWeather: WeatherType = {
      weatherType: weatherResult.current.condition.text,
      icon: weatherResult.current.condition.icon,
      coordinates: {
        type: "Point",
        coordinates: [weatherResult.location.lat, weatherResult.location.lon],
      },
      tide: tidesData.map((tide) => ({
        tide_type: tide.tide_type,
        tide_height_mt: tide.tide_height_mt,
        tide_time: tide.tide_time,
      })),
    };

    return newWeather;
  } catch (error) {
    throw new Error(
      `Failed to fetch weather data for ${locationName}: ${(error as Error).message}`
    );
  }
}

export default weatherService;
