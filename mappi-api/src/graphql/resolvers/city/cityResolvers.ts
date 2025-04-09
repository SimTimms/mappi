import { getCityService } from "./services";

const cityResolversQuery = {
  getCities: async (): Promise<[] | null> => {
    return await getCityService();
  },
};

export { cityResolversQuery };
