import axios from "axios";
import { WeatherAPIResponseType } from "../types";
import { validateAPIKey } from "../validators";

async function fetchWeatherData(
  locationName: string,
  apiKey: string
): Promise<WeatherAPIResponseType> {
  // VALIDATORS
  /////////////////////
  validateAPIKey(apiKey);

  try {
    const weatherResponse: { data: WeatherAPIResponseType } = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}&aqi=no`
    );
    return weatherResponse.data;
  } catch (error) {
    throw error;
  }
}
export default fetchWeatherData;
