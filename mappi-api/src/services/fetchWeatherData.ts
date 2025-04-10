import axios from "axios";
import { WeatherAPIResponseType } from "../types";
import { validateAPIKey } from "../validators";
import { getCachedData, setCachedData } from "../redis/helpers";

const CACHE_EXPIRATION = 3600; // Cache expiration time in seconds (1 hour)

/**
 * Fetches weather data for a given location using the WeatherAPI service.
 *
 * @param locationName - The name of the location for which to fetch weather data.
 * @param apiKey - The API key required to authenticate with the WeatherAPI service.
 * @returns A promise that resolves to the weather data for the specified location.
 */

async function fetchWeatherData(
  locationName: string,
  apiKey: string
): Promise<WeatherAPIResponseType> {
  // VALIDATORS
  validateAPIKey(apiKey);

  // CACHE DATA
  const cacheKey = `weather-data:${locationName}`;
  const cachedData = await getCachedData(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const weatherResponse: { data: WeatherAPIResponseType } = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}&aqi=no`
    );

    await setCachedData(
      cacheKey,
      JSON.stringify(weatherResponse.data),
      CACHE_EXPIRATION
    );

    return weatherResponse.data;
  } catch (error) {
    throw error;
  }
}
export default fetchWeatherData;
