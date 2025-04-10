import { getWeatherService } from "./services";
import { WeatherType } from "../../../types";

const weatherResolversQuery = {
  getWeather: async (): Promise<WeatherType[] | null> => {
    return await getWeatherService();
  },
};

export { weatherResolversQuery };
