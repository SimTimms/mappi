import axios from "axios";
import { WeatherType, APIResponseType } from "../types";

enum ErrorMessages {
  LOCATION_REQUIRED = "Location is required.",
  API_KEY_NOT_DEFINED = "WEATHER_API_KEY is not defined in environment variables.",
  FAILED_TO_FETCH = "Failed to fetch weather data.",
}

async function getWeather(
  locationName: string,
  apiKey: string
): Promise<WeatherType> {
  if (!locationName) {
    throw new Error(ErrorMessages.LOCATION_REQUIRED);
  }

  if (!apiKey) {
    throw new Error(ErrorMessages.API_KEY_NOT_DEFINED);
  }

  try {
    const weatherResponse: { data: APIResponseType } = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}&aqi=no`
    );
    return {
      weatherType: weatherResponse.data.current.condition.text,
      coordinates: {
        type: "Point",
        coordinates: [
          weatherResponse.data.location.lat,
          weatherResponse.data.location.lon,
        ],
      },
    };
  } catch (error) {
    throw error;
  }
}

export default getWeather;
