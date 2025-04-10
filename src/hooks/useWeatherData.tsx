import { useQuery } from "@apollo/client";
import { GET_WEATHER } from "../queries/getWeather";
import { WeatherType } from "../types";
import lonLatToPosition from "../utils/lonLatToPosition";
import { MarkerType } from "../types";
import { validateLocationName } from "../validators";

const useWeatherData = (locationName: string): MarkerType | null => {
  const isValidlocatinon = validateLocationName(locationName);
  if (!isValidlocatinon) return null;

  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: { locationName: locationName },
  });

  if (loading || error || !data || data.getWeather.length === 0) {
    return null;
  }

  const weatherData: WeatherType = data.getWeather;

  const newMarket: MarkerType = {
    position: lonLatToPosition(weatherData.coordinates.coordinates),
    title: weatherData.weatherType,
    icon: weatherData.icon,
    label: {
      text: weatherData.weatherType,
    },
    tide: weatherData.tide,
  };
  return newMarket;
};

export default useWeatherData;
