import { cityResolversQuery } from "./city/cityResolvers";

const resolvers = {
  Query: {
    ...cityResolversQuery,
  },
};

export default resolvers;
