import { gql } from "@apollo/client";

const GET_CITIES = gql`
  query GetCities {
    getCities {
      _id
      cityName
      coordinates {
        type
        coordinates
      }
    }
  }
`;

export { GET_CITIES };
