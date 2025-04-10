const typeDefs = `#graphql

############################
### GEO SCHEMA
############################

    input GeoJSONInput {
        type: String!
        coordinates: [Float!]!
    }
   
    type GeoJSON{
        type: String!
        coordinates: [Float!]!
    }

############################
### WEATHER SCHEMA
############################

    type Weather{
        _id: ID!
        weatherType: String!
        coordinates: GeoJSON!
    }

############################
### QUERIES
############################

    type Query{
        getWeather:[Weather]
    }
        
`;
export default typeDefs;
