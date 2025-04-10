import { weatherResolversQuery } from "./weather/weatherResolvers";

const resolvers = {
  Query: {
    ...weatherResolversQuery,
  },
};

export default resolvers;
