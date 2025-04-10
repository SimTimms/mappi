import { WeatherType } from "../types";
import fetchWeatherData from "./fetchWeatherData";
import fetchTideData from "./fetchTideData";
import { validateLocationName } from "../validators";

// Combines weather and tide data into a single response
/**
 * Fetches weather and tide data for a given location and constructs a WeatherType object.
 *
 * @param locationName - The name of the location for which to fetch weather and tide data.
 *                       This should be a valid location name that can be resolved by the API.
 */

async function weatherService(locationName: string): Promise<WeatherType> {
  // Validate the provided location name
  validateLocationName(locationName);

  try {
    // Fetch weather and tide data concurrently
    const [weatherResult, tideResponse] = await Promise.all([
      fetchWeatherData(locationName, process.env.WEATHER_API_KEY || ""),
      fetchTideData(locationName, process.env.WEATHER_API_KEY || ""),
    ]);

    // Extract tide data from the response
    const tidesData = tideResponse.forecast.forecastday[0].day.tides[0].tide;

    // Construct the WeatherType object with weather and tide data
    const newWeather: WeatherType = {
      weatherType: weatherResult.current.condition.text, // Weather condition (e.g., sunny, rainy)
      icon: weatherResult.current.condition.icon, // Weather icon URL
      coordinates: {
        type: "Point", // GeoJSON type
        coordinates: [weatherResult.location.lat, weatherResult.location.lon], // Latitude and longitude
      },
      tide: tidesData.map((tide) => ({
        tide_type: tide.tide_type, // Type of tide (e.g., high, low)
        tide_height_mt: tide.tide_height_mt, // Tide height in meters
        tide_time: tide.tide_time, // Time of the tide
      })),
    };

    // Return the combined weather and tide data
    return newWeather;
  } catch (error) {
    // Handle errors and throw a descriptive error message
    throw new Error(
      `Failed to fetch weather data for ${locationName}: ${(error as Error).message}`
    );
  }
}

export default weatherService;
