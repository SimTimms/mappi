import weatherService from "../../../services/weatherService";
import { WeatherType } from "../../../types";

const weatherResolversQuery = {
  getWeather: async (
    _: unknown,
    { locationName }: { locationName: string }
  ): Promise<WeatherType | null> => {
    return await weatherService(locationName);
  },
};

export { weatherResolversQuery };
