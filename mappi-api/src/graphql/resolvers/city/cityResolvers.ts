import { getCityService } from "./services";
import { CityType } from "../../../types";

const cityResolversQuery = {
  getCities: async (): Promise<CityType[] | null> => {
    return await getCityService();
  },
};

export { cityResolversQuery };
