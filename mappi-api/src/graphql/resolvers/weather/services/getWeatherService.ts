import { WeatherType } from "../../../../types";
import getWeather from "../../../../services/getWeather";

async function getWeatherService(): Promise<WeatherType[]> {
  const newWeather = await getWeather(
    "London",
    process.env.WEATHER_API_KEY || ""
  );
  console.log("newWeather", newWeather);
  try {
    const weather: WeatherType[] = [
      {
        ...newWeather,
      },
    ];
    return weather;
  } catch (error) {
    throw error;
  }
}

export default getWeatherService;
