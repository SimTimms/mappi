const typeDefs = `#graphql

############################
### GEO SCHEMA
############################

    type GeoJSON{
        type: String!
        coordinates: [Float!]!
    }

############################
### WEATHER SCHEMA
############################

    type Tide{
        tide_type: String,
        tide_height_mt: String,
        tide_time: String,
    }

    type Weather{
        weatherType: String!
        icon:String
        coordinates: GeoJSON!
        tide:[Tide]
    }

############################
### QUERIES
############################

    type Query{
        getWeather(locationName:String!):Weather
    }
        
`;
export default typeDefs;
