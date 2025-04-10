import axios from "axios";
import { WeatherAPIResponseType } from "../types";
import { validateAPIKey } from "../validators";
import { getCachedData, setCachedData } from "../redis/helpers";

const CACHE_EXPIRATION = 3600; // Cache expiration time in seconds (1 hour)

async function fetchWeatherData(
  locationName: string,
  apiKey: string
): Promise<WeatherAPIResponseType> {
  // VALIDATORS
  /////////////////////
  validateAPIKey(apiKey);

  // CACHE DATA
  /////////////////////
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
