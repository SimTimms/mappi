import { CityType } from "../../../../types";

async function getCityService(): Promise<CityType[]> {
  try {
    const cities: CityType[] = [
      {
        _id: "1",
        cityName: "Test Town",
        coordinates: {
          type: "Point",
          coordinates: [12.34, 56.78],
        },
      },
    ];
    return cities;
  } catch (error) {
    throw error;
  }
}

export default getCityService;
