import { gql } from "@apollo/client";

const GET_WEATHER = gql`
  query GetWeather($locationName: String!) {
    getWeather(locationName: $locationName) {
      weatherType
      icon
      coordinates {
        type
        coordinates
      }
      tide {
        tide_type
        tide_height_mt
        tide_time
      }
    }
  }
`;

export { GET_WEATHER };
